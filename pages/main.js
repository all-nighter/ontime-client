import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MapContainer from '../components/Map/MapContainer';

import MainLayout from '../layout/mainlayout';
import MainSearch from '../components/Map/Search/MapSearch';

import MapContext from '../components/Map/MapContext';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  middleGrid: {
    height: '80vh',
    spacing: 0,
    direction: 'column',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

function App() {
  const classes = useStyles();

  const [mapContext, setMapContext] = useState({
    ...MapContext.getMapContext(),
  });

  const [loading, setLoading] = useState(true);

  async function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    let map = await MapContext.initialize({
      lat: crd.latitude,
      lng: crd.longitude,
    });
    setMapContext(map);
    setLoading(false);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <MainLayout>
      <div styles={{ position: 'relative' }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <React.Fragment>
            <MainSearch map={mapContext} />
            <MapContainer map={mapContext} />
          </React.Fragment>
        )}
      </div>
    </MainLayout>
  );
}

export default App;
