import React, { useState, useEffect } from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {TextField} from '@material-ui/core'

import MapContext from './MapContext'
import MainSearch from './Search/MainSearch'

const MapContainer = () => {
  const mapStyles = {
    height: '100vh',
    width: '100%',
  };

    const mapStyles = {        
      height: "60vh",
      width: "100%"
    };
    
    const [currentPosition, setCurrentPosition] = useState({
      lat: 0, lng: 0
    })


    const [mapState, setMapState] = useState({
      ...MapContext.getMapContext()
    })

  console.log('current position', currentPosition);

  function success(pos) {
    var crd = pos.coords;
  }

  const onMarkerDragEnd = (e) => {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setCurrentPosition({ lat, lng})
  };


  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLEMAP}>
      <MainSearch/>
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
