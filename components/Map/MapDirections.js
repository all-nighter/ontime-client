import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const MapDirections = () => {

    const [directionInfo, setDirectionInfo] = useState({
        destination: {},
        origin: {},
    })

    const mapStyles = {        
        height: "100vh",
        width: "100%",
        position: 'absolute',
        top: '0vh',
        left: 0
      };

    let point = {
        lat: 35,
        lng: -100
      };
    
      let dest = {
        lat: 34.99,
        lng: -100.1
      };

    const calcRoute = (directionsService, directionsRenderer) => {
        let request = {
          origin: point,
          destination: dest,
          travelMode: "DRIVING"
        };
        directionsService.route(request, function(result, status) {
          if (status == "OK") {
            directionsRenderer.setDirections(result);
          }
        });
    }

    return (
        <LoadScript googleMapsApiKey={process.env.GOOGLEMAP}>
            <GoogleMap
            onLoad= {map => {
                let directionsService = new google.maps.DirectionsService();
                let directionsRenderer = new google.maps.DirectionsRenderer();
                directionsRenderer.setMap(map);
                calcRoute(directionsService, directionsRenderer);

            }}
            mapContainerStyle={mapStyles}
            zoom={10}
            center={
                {
                lat: 0,
                lng: 0,
                }
            }
            > 
            
            </GoogleMap>
      </LoadScript>
    )
}


export default MapDirections;