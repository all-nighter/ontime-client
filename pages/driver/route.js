import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MapDirections from '../../components/Map/MapDirections';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Grid, Paper } from '@material-ui/core';

const Route = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [mapState, setMapState] = useState({});

  useEffect(() => {
    if (!router.isReady) return;
    const start = {
      lat: parseFloat(router.query.startLat),
      lng: parseFloat(router.query.startLng),
    };
    const dest = {
      lat: parseFloat(router.query.destLat),
      lng: parseFloat(router.query.destLng),
    };

    const userName = router.query.userName;
    const phone = router.query.phone;
    const eta = router.query.eta;
    setMapState({ ...mapState, start, dest, userName, phone, eta });
    setLoading(false);
  }, [router.isReady]);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <MapDirections start={mapState.start} dest={mapState.dest} />
          <Paper
            style={{
              position: 'absolute',
              bottom: '60px',
              width: '90vw',
              left: '5vw',
              boxShadow: '0 0 10px 10px #00000014',
            }}
          >
            <Grid
              container
              style={{ display: 'flex', justifyContent: 'space-around' }}
            >
              <Grid
                item
                xs={3}
                styles={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  style={{
                    borderRadius: '1000px',
                    width: '15vw',
                    height: '15vw',
                    margin: '3vw',
                    // height: '80',
                    // margin: 'auto',
                  }}
                  src={`/avatars/img_profile_${
                    Math.floor(Math.random() * 11) + 1
                  }.png`}
                />
              </Grid>
              <Grid item xs={5}>
                <p
                  style={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '16px',
                    lineHeight: '19px',
                    color: '#010101',
                  }}
                >
                  {mapState.userName}{' '}
                </p>
                <p
                  style={{
                    fontFamily: 'Roboto',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '12px',
                    lineHeight: '14px',
                    color: '#999999',
                  }}
                >
                  {' '}
                  {mapState.phone}{' '}
                </p>
              </Grid>
              <Grid
                item
                xs={4}
                style={{
                  fontWeight: 'bold',
                }}
              >
                <p> $30.00</p>
                <p> ETA: {mapState.eta} Min</p>
              </Grid>
            </Grid>
          </Paper>
        </div>
      )}
    </div>
  );
};

export default Route;
