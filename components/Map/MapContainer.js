import React, {useState, useEffect} from 'react'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => { 

    const mapStyles = {        
      height: "80vh",
      width: "100%"
    };
    
    const [currentPosition, setCurrentPosition] = useState({
      lat: 0, lng: 0
    })

  console.log('current position', currentPosition);

    function success(pos) {
      var crd = pos.coords;
  
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
  
      setCurrentPosition({lat: crd.latitude, lng: crd.longitude})
    }
  
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  
    useEffect( () => {
      navigator.geolocation.getCurrentPosition(success, error);
    }, [])


  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLEMAP}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition}
      >
        {currentPosition.lat ? (
          <Marker
            position={currentPosition}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true}
          />
        ) : null}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
