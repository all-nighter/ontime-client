import React, { useState } from 'react';

import Styles from './search.module.css';
import { Paper, Typography, Button, Grid } from '@material-ui/core';

import SearchArea from './SearchArea';
import TimeSelect from './TimeSelect';

import MapContext from '../MapContext';
import Alert from '@material-ui/lab/Alert';
import { TramRounded } from '@material-ui/icons';


const MainSearch = (props) => {
  const { map, ...rest } = props;

  const [isMapError, setIsMapError] = useState(false)
  const [isDayError, setIsDayError] = useState(false)


  const handleSubmit = async () => {
    const context = MapContext.getMapContext()
    if (!context.startAddress || !context.destAddress || !context.startCoordinates || !context.destCoordinates) {
      setIsMapError(true)
      setTimeout(() => setIsMapError(false), 3000)

      return
    }

    if (context.numDays === 0) {
      setIsDayError(true)
      setTimeout(() => setIsDayError(false), 3000)
      return
    }
    MapContext.setContext('mapType', 1);
    MapContext.renderMapType();
    MapContext.renderAgain();
    MapContext.renderSubmit();
    MapContext.renderEstimatedTime();
    MapContext.renderFrequency();
  };

  return (
    <Paper className={Styles.searchContainer}>
      { isMapError && 
      <Alert style={{position: 'absolute', bottom: '-48px', zIndex: 99999999, width: '100%'}} severity="error">Please choose start and destination locations</Alert>
      }
      {isDayError &&
      <Alert  style={{position: 'absolute', bottom: '-48px', zIndex: 99999999, width: '100%'}} severity="error">Please select days</Alert>
      }

      <div className={Styles.searchTitleContainer}>
        <Button
          style={{ color: '#00B5CE', position: 'fixed', left: 0 }}
          onClick={() => {
            location.href = '/user/schedule';
          }}
        >
          <img src={'/navigate_before.png'} />
          SCHEDULE
        </Button>
        <h1 className={Styles.searchTitle}> SEARCH </h1>
      </div>
      <SearchArea map={map} />
      <TimeSelect />
      <Grid container className={Styles.buttonsContainer}>
        <Grid item xs={6}>
          <Button>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <img src="./person.png" />
              </Grid>
              <Grid item xs={10} className={{ fontSize: '5px' }}>
                Passenger 1
              </Grid>
            </Grid>
          </Button>
        </Grid>
        <Grid
          item
          xs={6}
          className={Styles.buttonContainer}
          style={{
            borderRadius: 50,
            height: 35,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Button
            className={`${Styles.button}`}
            onClick={async () => await handleSubmit()}
          >
            Book
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MainSearch;
