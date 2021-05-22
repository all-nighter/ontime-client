
import React, {useState, useEffect} from 'react'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {TextField} from '@material-ui/core'

import MapContext from './MapContext'

import {convertCoordToAddress, convertAddressToCoord} from '../../lib/Map/map.lib';



const MapContainer = (props) => {
  
  const {map, ...rest} = props

    const mapStyles = {        
      height: "100vh",
      width: "100%",
      position: 'absolute',
      top: 0,
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

  console.log('davsfdacsdvsdavsdafvsdas', pinPosition)

  return (
      <LoadScript googleMapsApiKey={process.env.GOOGLEMAP}>
        <GoogleMap
          key={new Date()}
          mapContainerStyle={mapStyles}
          zoom={14}
          center={
            {
              lat: pinPosition.startCoordinates.lat,
              lng: pinPosition.startCoordinates.lng,
            }
          }
        >
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
        </GoogleMap>

      </LoadScript>

  );
};

export default MapContainer;