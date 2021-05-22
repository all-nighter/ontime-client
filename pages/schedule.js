import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import MainLayout from '../layout/mainlayout';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  middleGrid: {
    height: '100vh',
    spacing: 0,
    direction: 'column',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  headerContainer: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    boxShadow: '0 0 10px 10px #0000002b',
  },
  headerTitle: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButtonContainer: {
    flexGrow: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexGrow: 4,
    width: '100vw',
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Grid className={classes.headerContainer}>
      <Grid className={classes.headerTitle}>
        <Typography>Schedule</Typography>
      </Grid>
      <Grid className={classes.headerButtonContainer}>
        <Button>All</Button>
      </Grid>
    </Grid>
  );
}

function Content() {
  const classes = useStyles();
  return <Grid className={classes.contentContainer}></Grid>;
}

function App() {
  const classes = useStyles();
  return (
    <MainLayout headerTitle={'Schedule'}>
      <Grid className={classes.middleGrid}>
        <Header />
        <Content />
      </Grid>
    </MainLayout>
  );
}

export default App;
