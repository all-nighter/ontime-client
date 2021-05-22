import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import MapContext from '../MapContext';
import Styles from './final.module.css';

const EstimatedTime = () => {
  const [estimatedTime, setEstimatedTime] = useState({
    ...MapContext.getMapContext(),
  });

  MapContext.renderEstimatedTime = () => {
    setEstimatedTime({ ...estimatedTime, ...MapContext.getMapContext() });
  };

  const convertSecToMin = (seconds) => {
    return parseInt(seconds / 60);
  };

  const getArrivalTime = (startTime) => {
    const min = convertSecToMin(estimatedTime.estimatedTimeSeconds);
    const hourAdd = parseInt(min / 60);
    const minAdd = min % 60;

    const index = startTime.indexOf(':');
    const startHour = startTime.slice(0, index);
    const startMinute = startTime.slice(index + 1, -1);

    let arriveHour = parseInt(startHour) + hourAdd;
    let arriveMin = parseInt(startMinute) + minAdd;
    if (arriveHour < 10) {
      arriveHour = '0' + arriveHour;
    }

    if (arriveMin < 10) {
      arriveMin = '0' + arriveMin;
    }
    return arriveHour + ':' + arriveMin;
  };

  return (
    <Grid container>
      <Grid item xs={3} className={Styles.min}>
        <Grid className={Styles.dummy}></Grid>
        <div className={Styles.minContainer}>
          <h2 className={Styles.minText}>
            {' '}
            {convertSecToMin(estimatedTime.estimatedTimeSeconds)}{' '}
          </h2>
          <h5 className={Styles.tinyText}> min </h5>
        </div>
      </Grid>
      <Grid item xs={4}>
        <h4 className={Styles.leave}> Leave </h4>
        <h2 className={Styles.timeText}> {estimatedTime.time} </h2>
      </Grid>
      <Grid item xs={2} className={Styles.arrow}>
        <Grid className={Styles.dummy}></Grid>
        <img src="./keyboard_arrow_down.png" />
      </Grid>
      <Grid item xs={3}>
        <h4 className={Styles.leave}> Arrive </h4>
        <h2 className={Styles.timeText}>
          {getArrivalTime(estimatedTime.time)}{' '}
        </h2>
      </Grid>
    </Grid>
  );
};

export default EstimatedTime;
