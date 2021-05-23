import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import MainLayout from '../layout/mainlayout';
import { Typography } from '@material-ui/core';

const mint = '#00B5CE';

const useStyles = makeStyles((theme) => ({
  middleGrid: {
    height: '100vh',
    spacing: 0,
    flexDirection: 'column',
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
    // boxShadow: '0 0 10px 10px #00000014',
    // borderRadius: '0 0 15px 15px',
    backgroundColor: mint,
  },
  contentContainer: {
    flexGrow: 3,
    width: '100vw',
    padding: '5vw',
    overflow: 'scroll',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px 10px #00000014',
  },
  floating: {
    backgroundColor: '#fff',
    position: 'fixed',
    width: '90vw',
    height: '60vh',
    boxShadow: '0 0 10px 10px #0000002b',
    top: '13vh',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
  },
  floatingBottom: {
    position: 'fixed',
    bottom: '5vh',
    width: '100vw',
    height: '20vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  done: {
    width: '80vw',
    backgroundColor: mint,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 60,
  },
  textContainer: {
    width: '80vw',
    color: 'grey',
    textAlign: 'center',
  },
  _column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexGrow: 2,
  },
  _column2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 3,
  },
  check: {
    width: '20vw',
    height: '20vw',
  },
  _spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80vw',
    margin: '4vw',
  },
  smallText: {
    fontSize: '4vw',
    fontWeight: 'bold',
    color: 'grey',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: '7vw',
  },
}));

function PaymentInfo(props) {
  const classes = useStyles();
  return (
    <Grid className={classes._spaceBetween}>
      <Typography className={classes.smallText}> {props.text1}</Typography>
      <Typography className={classes.smallText}> {props.text2}</Typography>
    </Grid>
  );
}

function App() {
  const classes = useStyles();
  return (
    <MainLayout hideFooter={true}>
      <Grid className={classes.middleGrid}>
        <Grid className={classes.headerContainer}></Grid>
        <Grid className={classes.contentContainer}></Grid>
        <Grid className={classes.floating}>
          <Grid className={classes._column}>
            <img src={'/check.png'} className={classes.check} />
            <Typography className={classes.bold}>Payment Completed</Typography>
          </Grid>
          <Grid className={classes._column2}>
            <PaymentInfo
              text1={'Subscription Information'}
              text2={'ONTIME PREMIUM'}
            />
            <PaymentInfo text1={'Payment Amount'} text2={'$100.00'} />
            <PaymentInfo text1={'Date'} text2={'May 22, 2021 10:56::06 PM'} />
            <PaymentInfo text1={'Card Name'} text2={'HYUNDAI CARD'} />
            <PaymentInfo text1={'Card Type'} text2={'MasterCard ending 0601'} />
          </Grid>
        </Grid>
        <Grid className={classes.floatingBottom}>
          {/* <Grid className={classes.textContainer}>
            <Typography>
              You can see your purchase history in SERVICE or MYLOUNGE
            </Typography>
          </Grid> */}
          <Grid>
            <Link href="/main">
              <Button className={classes.done}>Done</Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </MainLayout>
  );
}

export default App;
