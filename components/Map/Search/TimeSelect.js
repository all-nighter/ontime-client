import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

import Styles from './search.module.css';

import DaySelect from './DaySelect';
import MapContext from '../MapContext';

const TimeSelect = () => {
  const date = new Date();
  const [timeDay, setTimeDay] = useState({
    time: '00:00',
    numDays: 0,
  });

  MapContext.renderNumDays = () => {
    setTimeDay({ ...timeDay, numDays: MapContext.getMapContext().numDays });
  };

  const handleTimeChange = (e) => {
    setTimeDay({ ...timeDay, time: e.target.value });
    MapContext.setContext('time', timeDay.time);
  };

  return (
    <React.Fragment>
      <Grid container className={Styles.timeSelectHeader}>
        <Grid item xs={5} className={Styles.timeContainer}>
          <Grid item xs={3}>
            <img src="./access_time.png" />
          </Grid>
          <Grid item xs={7}>
            <input
              value={timeDay.time}
              onChange={(e) => handleTimeChange(e)}
              type="time"
              className={Styles.timeInput}
            />
          </Grid>
        </Grid>
        <Grid container xs={4} className={Styles.numDayContainer}>
          <Grid item xs={2}>
            <img src="./date_range.png" />
          </Grid>
          <Grid item xs={8}>
            <p className={Styles.numDay}> {timeDay.numDays} days </p>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={Styles.daySelectContainer}>
        <DaySelect />
      </Grid>
    </React.Fragment>
  );
};

export default TimeSelect;
