import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import MainLayout from '../layout/mainlayout';

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
  return (
    <MainLayout headerTitle={'Schedule'}>
      <Grid className={classes.middleGrid}>
        <Link href="/login">
          <Button>Schedule</Button>
        </Link>
      </Grid>
    </MainLayout>
  );
}

export default App;
