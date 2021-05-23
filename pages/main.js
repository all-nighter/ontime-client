import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MapContainer from '../components/Map/MapContainer';

import MainLayout from '../layout/mainlayout';
import MainSearch from '../components/Map/Search/MapSearch';

import MapContext from '../components/Map/MapContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import FinalCheck from '../components/Map/FinalInfo/FinalCheck'

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

  MapContext.renderMapType = () => {
    setMapContext({...mapContext, ...MapContext.getMapContext()})
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function intialize () {
      let map = await MapContext.initialize({
        lat: 40.78306,
        lng: -73.971249
      });
      setMapContext(map);
      setLoading(false);
    }
    intialize()
  }, []);

  const mapStyle1 = {
      height: "55vh",
      width: "100%",
      position: 'absolute',
      top: '45vh',
      left: 0
  }

  const mapStyle2 = {
    height: "50vh",
    width: "100%",
    position: 'absolute',
    top: 0,
    left: 0
}

  return (
    <MainLayout>
      <div styles={{ position: 'relative' }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <React.Fragment>
            { mapContext.mapType === 0 ?
            <MainSearch map={mapContext} />
            : null
            }
            <MapContainer map={mapContext} mapStyles={mapContext.mapType === 0 ? mapStyle1: mapStyle2}/>

            {mapContext.mapType === 1 ?
            <FinalCheck/> 
            :
            null
            }
          </React.Fragment>
        )}
      </div>
    </MainLayout>
  );
}

export default App;
