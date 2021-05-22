import React, {useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {

  function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    setCenter({lat: crd.latitude, lng: crd.longitude})
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect( () => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, [])

  const [center, setCenter] = useState({
    lat: 0,
    lng: 0
  })

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLEMAP }}
        center={{lat: center.lat, lng: center.lng}}
        defaultZoom={11}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => console.log(map, maps)}
      />
    </div>
  )
}

export default Map; 