import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import MainLayout from '../layout/mainlayout';

const useStyles = makeStyles((theme) => ({
  middleGrid: {
    height: '100vh',
    spacing: 0,
    direction: 'column',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    boxShadow: '0 0 10px 10px #00000014',
    borderRadius: '0 0 15px 15px',
    height: '20vh',
  },
  contentContainer: {
    flexGrow: 5,
    width: '100vw',
    padding: '5vw',
    overflow: 'scroll',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <MainLayout hideFooter={true}>
      <Grid className={classes.middleGrid}>
        <Grid className={classes.headerContainer}></Grid>
      </Grid>
      <Grid className={classes.contentContainer}></Grid>
    </MainLayout>
  );
}

export default App;
