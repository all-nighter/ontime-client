
import React, {useState, useEffect} from 'react'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {TextField} from '@material-ui/core'

import MapContext from './MapContext'

import {convertCoordToAddress, convertAddressToCoord} from '../../lib/Map/map.lib';



const MapContainer = (props) => {
  
  const {map, mapStyles, ...rest} = props
    
    const [pinPosition, setPinPosition] = useState({
      startCoordinates:  map.startCoordinates,
      destCoordinates: map.destCoordinates,
      startAddress: map.startAddress,
      destAddress: map.destAddress,
      mapType: map.mapType,
    })

    MapContext.renderAgain = () => {
      setPinPosition({...pinPosition, ...MapContext.getMapContext()})
    }

    // useEffect( () => {
    //   setPinPosition({...pinPosition, ...MapContext.getMapContext()})
    // },[])

    MapContext.renderPin = () => {
      setPinPosition({...pinPosition, ...MapContext.getMapContext()})
    }

    const onMarkerDragEnd = async (searchField, pinField, e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setPinPosition({...pinPosition,[pinField]: {lat, lng}})
      MapContext.setContext(pinField, {lat, lng})
      const searchAddress = await convertCoordToAddress({lat, lng})
      MapContext.setContext(searchField, searchAddress)
      MapContext.renderSearch()
      MapContext.renderPin()
  };

  const calcRoute = (directionsService, directionsRenderer) => {
    let request = {
      origin: pinPosition.startCoordinates,
      destination: pinPosition.destCoordinates,
      travelMode: "DRIVING"
    };

    directionsService.route(request, function(result, status) {
      if (status == "OK") {
        const estimatedTimeSeconds = result.routes[0].legs[0].duration.value
        MapContext.setContext('estimatedTimeSeconds', estimatedTimeSeconds)
        MapContext.renderEstimatedTime()
        directionsRenderer.setDirections(result);

      } else {
        alert('Google Map unfortunately does not support these locations (All locations in South Korea are not supported). Please try again.')
        location.href = '/main'
      }
    });
}



  return (
      <LoadScript googleMapsApiKey={process.env.GOOGLEMAP}>
        <GoogleMap
          onLoad= {map => {
            const bounds = new window.google.maps.LatLngBounds();
            bounds.extend(new window.google.maps.LatLng(pinPosition.startCoordinates.lat, pinPosition.startCoordinates.lng))
            bounds.extend(new window.google.maps.LatLng(
              pinPosition.destCoordinates.lat || pinPosition.startCoordinates.lat, 
              pinPosition.destCoordinates.lng || pinPosition.startCoordinates.lng))
            map.fitBounds(bounds)
            var opt = {maxZoom: 16 };
            map.setOptions(opt);

            if (pinPosition.mapType === 1) {
              let directionsService = new google.maps.DirectionsService();
              let directionsRenderer = new google.maps.DirectionsRenderer();
              directionsRenderer.setMap(map);
              calcRoute(directionsService, directionsRenderer);
            }

          }}
          key={new Date()}
          mapContainerStyle={mapStyles}
          center={
            {
              lat: (pinPosition.startCoordinates.lat + (pinPosition.destCoordinates.lat || pinPosition.startCoordinates.lat)) / 2,
              lng: (pinPosition.startCoordinates.lng + (pinPosition.destCoordinates.lng || pinPosition.startCoordinates.lng)) / 2,
            }
          }
        >
          <div> 
            {pinPosition.startCoordinates.lat ? (
              <Marker
                position={{
                  lat: pinPosition.startCoordinates.lat,
                  lng: pinPosition.startCoordinates.lng,
                }}
                onDragEnd={async (e) => await onMarkerDragEnd('startAddress', 'startCoordinates', e)}
                draggable={true}
              />
            ) : null}
            {pinPosition.destCoordinates.lat ? (
              <Marker
                position={{
                  lat: pinPosition.destCoordinates.lat,
                  lng: pinPosition.destCoordinates.lng,
                }}
                onDragEnd={async (e) => await onMarkerDragEnd('destAddress', 'destCoordinates', e)}
                draggable={true}
              />
            ) : null}
          </div>
        </GoogleMap>

      </LoadScript>

  );
};

export default MapContainer;