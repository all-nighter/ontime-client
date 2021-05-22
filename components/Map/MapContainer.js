import React, { useState } from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = () => {
  const mapStyles = {
    height: '80vh',
    width: '100%',
  };

  const [currentPosition, setCurrentPosition] = useState({
    lat: 41.3851,
    lng: 2.1734,
  });

  console.log('current position', currentPosition);

  const onMarkerDragEnd = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setCurrentPosition({ lat, lng });
  };

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
