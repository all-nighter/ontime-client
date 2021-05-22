import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MapContainer from '../components/Map/MapContainer';

import MainLayout from '../layout/mainlayout'

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

  const [path, setPath] = useState({
    start: {},
    destination: {}
  })

  return (
    <MainLayout>
      <MapContainer />
    </MainLayout>
  );
}

export default App;
