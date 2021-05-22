
import React, {useState, useEffect} from 'react'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {TextField} from '@material-ui/core'

import MapContext from './MapContext'

import {convertCoordToAddress, convertAddressToCoord} from '../../lib/Map/map.lib';



const MapContainer = (props) => {
  
  const {map, ...rest} = props

    const mapStyles = {        
      height: "75vh",
      width: "100%",
      position: 'absolute',
      top: '25vh',
      left: 0
    };
    
    const [pinPosition, setPinPosition] = useState({
      startCoordinates:  map.startCoordinates,
      destCoordinates: map.destCoordinates,
      startAddress: map.startAddress,
      destAddress: map.destAddress,
    })

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