import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import MainLayout from '../../layout/mainlayout';
import { Typography } from '@material-ui/core';

const mint = '#00B5CE';

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
    // flexGrow: 1,
    boxShadow: '0 0 10px 10px #00000014',
    borderRadius: '0 0 15px 15px',
    height: '15vh',
  },
  headerTitle: {
    flexGrow: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upcomingEventContainer: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100vw',
  },
  contentContainer: {
    // flexGrow: 5,
    height: '85vh',
    width: '100vw',
    padding: '5vw',
    overflow: 'scroll',
  },
  toMap: {
    position: 'fixed',
    left: 0,
    color: mint,
  },
  dateContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // spacing: 1,
  },
  _padding: {
    margin: 3,
  },
  noPlanTemplate: {
    // backgroundColor: 'blue',
    width: '100vw',
    height: '10vh',
    borderRadius: '5px',
    boxShadow: '0 0 5px 5px #00000014',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  templateContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  _column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  templateProfileContainer: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  img: {
    width: '15vw',
    height: '15vw',
    borderRadius: '50vw',
    marginRight: '5vw',
  },
  _spaceAround: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  planTemplate: {
    width: '100vw',
    borderRadius: '5px',
    boxShadow: '0 0 5px 5px #00000014',
    padding: '3vw',
  },
  _textAlignLeft: {
    textAlign: 'left',
  },
  icon: {
    width: '9vw',
    marginLeft: '4vw',
    marginRight: '1vw',
  },
  _row: {
    display: 'flex',
    alignItems: 'center',
    margin: '1vw',
  },
  desc: {
    fontSize: '4vw',
    color: 'grey',
  },
  month: {
    fontSize: '6vw',
    fontWeight: 'bold',
  },
  date: {
    fontSize: '4vw',
    fontWeight: 'bold',
    color: 'grey',
  },
  book: { border: 'solid 1px #8080804f' },
  title: {
    fontSize: '4vw',
    fontWeight: 'bold',
  },
  arriveTime: {
    color: mint,
    fontSize: '5vw',
    fontWeight: 'bold',
  },
  _smallText: {
    fontSize: '3.5vw',
  },
  _bold: {
    fontWeight: 'bold',
  },
  scheduleContainer: {
    marginBottom: '3vh',
  },
  navbar: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-around',
    // alignItems: 'stretch',
  },
  navbarContent: {
    width: '50vw',
    '&:hover': {
      backgroundColor: mint,
      color: '#fff',
    },
  },
  active: {
    backgroundColor: mint,
    color: '#fff',
  },
  passenger: {
    color: mint,
    fontWeight: 'bold',
    fontSize: '6vw',
    textAlign: 'left',
  },
  textLeft: {
    textAlign: 'left',
    fontSize: '3vw',
  },
  dateInput: {
    border: 'none',
    backgroundColor: 'transparent',
    color: mint,
    height: '5vh',
    fontSize: '4vw',
  },
  got: {
    backgroundColor: mint,
    color: '#fff',
    marginLeft: '5vw',
    marginRight: '5vw',
    '&:hover': {
      backgroundColor: mint,
      color: '#fff',
    },
  },
  ignore: {
    color: 'grey',
    marginLeft: '5vw',
    marginRight: '5vw',
    '&:hover': {
      backgroundColor: '#fff',
      color: 'grey',
    },
  },
  buttonContainer: {
    display: 'flex',
    width: '100vw',
    justifyContent: 'center',
  },
}));

function Header(props) {
  const classes = useStyles();
  return (
    <Grid className={classes.headerContainer}>
      <Grid className={classes.headerTitle}>
        {/* <Typography className={classes.title}>SCHEDULE</Typography> */}
        <Link href="/main">
          <Button className={classes.toMap}>
            <img src={'/navigate_before.png'} />
            map
          </Button>
        </Link>
      </Grid>
      <Grid className={classes.upcomingEventContainer}>
        <Grid className={classes.navbar}>
          <Button
            className={`${classes.navbarContent} ${
              props.isSchedule && classes.active
            }`}
            onClick={() => props.setIsSchedule(true)}
          >
            Schedule
          </Button>
          <Button
            className={`${classes.navbarContent} ${
              !props.isSchedule && classes.active
            }`}
            onClick={() => props.setIsSchedule(false)}
          >
            List
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

const data = [
  {
    driverId: '1234',
    userId: '123',
    location: {
      startAddress: '1',
      destAddress: '2',
      startCoordinates: [0, 1],
      destAddress: [2, 3],
    },
    time: {
      hour: 1,
      minute: 30,
      day: 1,
    },
  },
];

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const daysMap = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
};
const monthMap = {
  4: 'May',
};

function NoPlanTemplate() {
  const classes = useStyles();
  return (
    <Grid className={classes.noPlanTemplate}>
      <Grid className={classes._column}>
        <Typography>NO RIDE</Typography>
      </Grid>
      <Grid>
        <Link href="/main">
          <Button className={classes.book}>Book A Ride</Button>
        </Link>
      </Grid>
    </Grid>
  );
}

function PlanTemplate() {
  const classes = useStyles();
  return (
    <Grid className={classes.planTemplate}>
      <Grid className={classes.templateProfileContainer}>
        <Grid className={classes._spaceAround}>
          <img src={'/driver.png'} className={classes.img} />
          <Grid className={classes._column}>
            <Typography>Soojin Hwang</Typography>
            <Typography className={classes.desc}>with children</Typography>
          </Grid>
        </Grid>
        <Grid className={`${classes._column} ${classes.arriveTime}`}>
          AM 08:45
        </Grid>
      </Grid>
      <Grid>
        <Grid className={classes._row}>
          <img src={'/departure.png'} className={classes.icon} />
          <Typography
            className={`${classes._textAlignLeft} ${classes._smallText}`}
          >
            Pick Up: Seoul
          </Typography>
        </Grid>
        <Grid className={classes._row}>
          <img src={'/Vector.png'} className={classes.icon} />
          <Typography
            className={`${classes._textAlignLeft} ${classes._smallText}`}
          >
            Drop Off: Amazon
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Schedule(props) {
  const classes = useStyles();
  let schedule = checkSchedule(props.day?.day, props.data);
  return (
    <Grid className={classes.scheduleContainer}>
      <Grid>
        <Grid className={classes.dateContainer}>
          <Typography className={`${classes._padding} ${classes.month}`}>
            {daysMap[props.day?.day]}
          </Typography>
          <Typography className={`${classes._padding}`}> - </Typography>
          <Typography className={`${classes._padding} ${classes.date}`}>
            {props.day?.date}
          </Typography>
          <Typography className={`${classes._padding} ${classes.date}`}>
            {monthMap[props.day?.month]}
          </Typography>
        </Grid>
      </Grid>
      {!!schedule && (
        <Grid className={classes.templateContainer}>
          <PlanTemplate />
        </Grid>
      )}
      {!!!schedule && (
        <Grid className={classes.templateContainer}>
          {/* <Typography>{props.day?.day}</Typography> */}
          <NoPlanTemplate />
        </Grid>
      )}
    </Grid>
  );
}

function checkSchedule(day, subscriptions) {
  console.log('checkSchedule', day);
  for (let i = 0; i < subscriptions.length; i++) {
    let data = subscriptions[i];
    console.log('data:', data);
    if (data.time?.day === day) {
      return data;
    }
  }
  return false;
}

function ScheduleMode() {
  const classes = useStyles();
  const now = new Date();
  console.log('now:', now.getDay(), now.getDate(), now.getMonth());
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = (now.getDay() + i) % 7;
    const date = (now.getDate() + i) % 30;
    const month = now.getMonth() + Math.floor(date / 30);
    days.push({ day, date, month });
  }
  return (
    <Grid className={classes.contentContainer}>
      <Grid>
        <Typography className={classes.passenger}>Today's Passenger</Typography>
        <Typography className={classes.textLeft}>Have a save ride!</Typography>
      </Grid>
      {days.map((x) => (
        <Schedule day={x} data={data} />
      ))}
    </Grid>
  );
}

function ListMode() {
  const classes = useStyles();
  const now = new Date();

  return (
    <Grid className={classes.contentContainer}>
      <input type="date" className={classes.dateInput} value="2021-05-23" />
      <Grid className={`${classes.templateContainer}`}>
        <ListContent />
        <ListContent />
      </Grid>
    </Grid>
  );
}

function ListContent(props) {
  const classes = useStyles();
  return (
    <Grid className={`${classes.planTemplate} ${classes.scheduleContainer}`}>
      <Grid className={classes.templateProfileContainer}>
        <Grid className={classes._spaceAround}>
          <img src={'/driver.png'} className={classes.img} />
          <Grid className={classes._column}>
            <Typography>Soojin Hwang</Typography>
            <Typography className={classes.desc}>with children</Typography>
          </Grid>
        </Grid>
        <Grid className={`${classes._column} ${classes.arriveTime}`}>
          AM 08:45
        </Grid>
      </Grid>
      <Grid>
        <Grid className={classes._row}>
          <img src={'/departure.png'} className={classes.icon} />
          <Typography
            className={`${classes._textAlignLeft} ${classes._smallText}`}
          >
            Pick Up: Seoul
          </Typography>
        </Grid>
        <Grid className={classes._row}>
          <img src={'/Vector.png'} className={classes.icon} />
          <Typography
            className={`${classes._textAlignLeft} ${classes._smallText}`}
          >
            Drop Off: Amazon
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.buttonContainer}>
        <Button className={classes.got}>Got</Button>
        <Button className={classes.ignore}>ignore</Button>
      </Grid>
    </Grid>
  );
}

function App() {
  const classes = useStyles();
  const [isSchedule, setIsSchedule] = useState(true);
  return (
    <MainLayout headerTitle={'Schedule'}>
      <Grid className={classes.middleGrid}>
        <Header setIsSchedule={setIsSchedule} isSchedule={isSchedule} />
        {!!isSchedule && <ScheduleMode />}
        {!!!isSchedule && <ListMode />}
      </Grid>
    </MainLayout>
  );
}

export default App;
