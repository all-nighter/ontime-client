import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import MainLayout from '../../layout/mainlayout';
import { Typography } from '@material-ui/core';
import { API_PREFIX } from '../../env';

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
    width: '90vw',
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
    width: '90vw',
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
    width: '90vw',
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

function PlanTemplate(props) {
  const classes = useStyles();
  return (
    <Grid className={classes.planTemplate}>
      <Grid className={classes.templateProfileContainer}>
        <Grid className={classes._spaceAround}>
          <img src={'/driver.png'} className={classes.img} />
          <Grid className={classes._column}>
            <Typography>{props.data.user?.name}</Typography>
            <Typography className={classes.desc}>
              {props.data.user?.email}
            </Typography>
          </Grid>
        </Grid>
        <Grid className={`${classes._column} ${classes.arriveTime}`}>
          {props.data?.hour}:{props.data?.minute}
        </Grid>
      </Grid>
      <Grid>
        <Grid className={classes._row}>
          <img src={'/departure.png'} className={classes.icon} />
          <Typography
            className={`${classes._textAlignLeft} ${classes._smallText}`}
          >
            Pick Up: {props.data.departure}
          </Typography>
        </Grid>
        <Grid className={classes._row}>
          <img src={'/Vector.png'} className={classes.icon} />
          <Typography
            className={`${classes._textAlignLeft} ${classes._smallText}`}
          >
            Drop Off: {props.data?.destination}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Schedule(props) {
  const classes = useStyles();
  let schedules = checkSchedule(props.day?.day, props.data);
  return (
    <Grid>
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
      {schedules.map((x) => (
        <Grid
          className={`${classes.templateContainer} ${classes.scheduleContainer}`}
        >
          <PlanTemplate data={x} />
        </Grid>
      ))}
      {schedules.length === 0 && (
        <Grid className={classes.templateContainer}>
          <NoPlanTemplate />
        </Grid>
      )}
      {/* {!!schedules && (
        <Grid className={classes.templateContainer}>
          <PlanTemplate />
        </Grid>
      )}
      {!!!schedules && (
        <Grid className={classes.templateContainer}>
          {/* <Typography>{props.day?.day}</Typography> */}
      {/* <NoPlanTemplate />
        </Grid>
      )} */}
    </Grid>
  );
}

function checkSchedule(day, subscriptions) {
  console.log('checkSchedule', day);
  const results = [];
  for (let i = 0; i < subscriptions.length; i++) {
    let data = subscriptions[i];
    console.log('data:', data);
    if (data.frequencyOfWeek?.includes(day)) {
      results.push(data);
    }
  }
  return results;
}

function ScheduleMode() {
  const classes = useStyles();
  const now = new Date();
  const [data, setData] = useState([]);

  useEffect(() => {
    const email = localStorage?.getItem('email');
    if (!email) {
      alert('user authentication error!');
      location.href = '/login';
    }
    const fetchData = async () => {
      let res = await fetch(`${API_PREFIX}/driver/schedules?email=${email}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });
      res = await res.json();
      console.log(res.subscriptions);
      setData(res.subscriptions);
    };
    fetchData();
  }, []);
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
        <Typography className={classes.textLeft}>Have a safe ride!</Typography>
      </Grid>
      {days.map((x) => (
        <Schedule day={x} data={data} />
      ))}
    </Grid>
  );
}

function ListMode() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (!email) {
      alert('user authentication error!');
      location.href = '/login';
    }
    let fetchData = async () => {
      let res = await fetch(`${API_PREFIX}/driver/job-list`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
      });
      res = await res.json();
      setData(res.unsubscribedList);
    };
    fetchData();
  }, []);
  const now = new Date();

  return (
    <Grid className={classes.contentContainer}>
      <input type="date" className={classes.dateInput} value="2021-05-23" />
      <Grid className={`${classes.templateContainer}`}>
        {data.map((x) => (
          <ListContent data={x} />
        ))}
      </Grid>
    </Grid>
  );
}


function toMinute (time) {
  return parseInt(time / 60)
}

async function handleCheckRoute(props) {

  console.log('propsss', props.data)
    await fetch(`${API_PREFIX}/driver/approve-schedule`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({email: localStorage.getItem('email'), subscriptionId: props.data._id })
    })

      

    const startLat = props.data.departureLocationPoint.lat
    const startLng = props.data.departureLocationPoint.lng

    const destLat =  props.data.destinationLocationPoint.lat
    const destLng =  props.data.destinationLocationPoint.lng

    const eta = toMinute(props.data.estimatedTimeSeconds)

  location.href = 
    `/driver/route?userName=${props.data.user.name}&phone=${props.data.user.phoneNumber}&startLat=${startLat}&startLng=${startLng}&destLat=${destLat}&destLng=${destLng}&eta=${eta}`


}

function ListContent(props) {
  const classes = useStyles();
  console.log('ListContent =>', props.data);
  return (
    <Grid className={`${classes.planTemplate} ${classes.scheduleContainer}`}>
      <Grid className={classes.templateProfileContainer}>
        <Grid className={classes._spaceAround}>
          <img src={'/driver.png'} className={classes.img} />
          <Grid className={classes._column}>
            <Typography>{props.data?.user?.name}</Typography>
            <Typography className={classes.desc}>
              {props.data.user.email}
            </Typography>
          </Grid>
        </Grid>
        <Grid className={`${classes._column} ${classes.arriveTime}`}>
          {props.data?.hour}:{props.data?.minute}
        </Grid>
      </Grid>
      <Grid>
        <Grid className={classes._row}>
          <img src={'/departure.png'} className={classes.icon} />
          <Typography
            className={`${classes._textAlignLeft} ${classes._smallText}`}
          >
            Pick Up: {props.data?.departure}
          </Typography>
        </Grid>
        <Grid className={classes._row}>
          <img src={'/Vector.png'} className={classes.icon} />
          <Typography
            className={`${classes._textAlignLeft} ${classes._smallText}`}
          >
            Drop Off: {props.data?.destination}
          </Typography>
        </Grid>
      </Grid>
      <Grid className={classes.buttonContainer}>
        <Button className={classes.got} onClick={async () => await handleCheckRoute(props)}> Accept </Button>
        <Button className={classes.ignore}>Ignore</Button>
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
