import React from 'react';

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
    flexGrow: 1,
    boxShadow: '0 0 10px 10px #00000014',
    borderRadius: '0 0 15px 15px',
    height: '20vh',
  },
  headerTitle: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upcomingEventContainer: {
    flexGrow: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flexGrow: 5,
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
  book: { border: 'solid 1vw #8080804f' },
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
}));

function Header() {
  const classes = useStyles();
  return (
    <Grid className={classes.headerContainer}>
      <Grid className={classes.headerTitle}>
        <Typography className={classes.title}>SCHEDULE</Typography>
        <Link href="/main">
          <Button className={classes.toMap}>
            <img src={'/navigate_before.png'} />
            map
          </Button>
        </Link>
      </Grid>
      <Grid className={classes.upcomingEventContainer}>
        <Typography className={classes._bold}>
          cab is ariving in 30 minutes!
        </Typography>
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
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat',
  7: 'Sun',
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

function Scedule(props) {
  const classes = useStyles();
  let schedule = checkSchedule(props.day?.day, props.data);
  return (
    <React.Fragment>
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
    </React.Fragment>
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

function Content() {
  const classes = useStyles();
  const now = new Date();
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = ((now.getDay() + i) % 8) + Math.floor((now.getDay() + i) / 8);
    const date = now.getDate() + i;
    const month = now.getMonth() + Math.floor(date / 30);
    days.push({ day, date, month });
  }
  return (
    <Grid className={classes.contentContainer}>
      {days.map((x) => (
        <Scedule day={x} data={data} />
      ))}
    </Grid>
  );
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
