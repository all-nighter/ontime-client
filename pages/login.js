import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Input, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import MainLayout from '../layout/mainlayout';
import { API_PREFIX } from '../env';
import { InputLabel } from '@material-ui/core';

const mint = '#00B5CE';

const useStyles = makeStyles((theme) => ({
  middleGrid: {
    height: '80vh',
    width: '100vw',
    spacing: 3,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  middleGrid2: {
    height: '100vh',
    width: '100vw',
    spacing: 3,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100vw',
  },
  signinContainer: {
    display: 'flex',
    flexGrow: 3,
    alignItems: 'center',
  },
  choice: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: mint,
    width: '35vw',
    height: '20vh',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '4vw',
    borderRadius: '5px',
    marginTop: '10vh',
  },
  img: {
    width: '15vw',
  },
  bold: {
    color: '#fff',
    fontWeight: 'bold',
  },
  selectTitle: {
    width: '50vw',
  },
  _width100: {
    width: '100vw',
    display: 'flex',
    position: 'fixed',
    top: '10vh',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    left: 0,
  },
  mint: {
    color: mint,
  },
  login: {
    width: '90vw',
    height: '7vh',
    backgroundColor: mint,
    color: '#fff',
    '&:hover': {
      backgroundColor: mint,
      color: '#fff',
    },
  },
  signup: {
    width: '90vw',
    height: '7vh',
    color: 'grey',
  },
  margin10px: {
    margin: '10px',
  },
  marginTop: {
    marginTop: '10vh',
  },
  backButton: {
    position: 'fixed',
    marginTop: '10vh',
    left: '3vw',
    top: 0,
    zIndex: 99,
    // width: '10vw',
  },
}));

function Title(props) {
  const classes = useStyles();
  return (
    <Grid className={classes._width100}>
      <img src={'/select.png'} className={classes.selectTitle} />
    </Grid>
  );
}

function Logo(props) {
  const classes = useStyles();
  return (
    <Grid className={classes._width100}>
      <img src={'/logo2.png'} className={classes.selectTitle} />
      <Typography className={classes.mint}>{props.type}</Typography>
    </Grid>
  );
}

function SelectUserDriver(props) {
  const classes = useStyles();

  return (
    <Grid className={classes.middleGrid2}>
      <Title />
      <Grid
        className={classes.choice}
        onClick={() => {
          props.setIsUser(true);
          props.setIsDriver(false);
        }}
      >
        <img src={'/drive_eta.png'} className={classes.img} />
        <Button className={classes.bold}>User</Button>
      </Grid>
      <Grid
        className={classes.choice}
        onClick={() => {
          props.setIsDriver(true);
          props.setIsUser(false);
        }}
      >
        <img src={'/accessible.png'} className={classes.img} />
        <Button className={classes.bold}>Driver</Button>
      </Grid>
    </Grid>
  );
}

function BackButton(props) {
  const classes = useStyles();
  console.log('backbutton =>', props);
  return (
    <Grid
      className={classes.backButton}
      onClick={() => {
        console.log('click');
        if (props.setIsUser) {
          props.setIsUser(false);
        }
        if (props.setIsDriver) {
          props.setIsDriver(false);
        }
      }}
    >
      <img src={'/navigate_before.png'} width="40px" />
      <Typography style={{ fontSize: 13, color: mint }}>BACK</Typography>
    </Grid>
  );
}

function UserField(props) {
  const [isSignup, setIsSignup] = useState(false);
  const classes = useStyles();
  return (
    <Grid>
      <BackButton setIsUser={props.setIsUser} setIsDriver={props.setIsDriver} />
      <Logo type={'User'} />
      {!!isSignup && <UserSignup setIsSignup={setIsSignup} />}
      {!!!isSignup && <UserLogin setIsSignup={setIsSignup} />}
    </Grid>
  );
}

function DriverField(props) {
  const [isSignup, setIsSignup] = useState(false);
  const classes = useStyles();
  return (
    <Grid>
      <BackButton setIsUser={props.setIsUser} setIsDriver={props.setIsDriver} />
      <Logo type={'Driver'} />
      {!!isSignup && <DriverSignup setIsSignup={setIsSignup} />}
      {!!!isSignup && <DriverLogin setIsSignup={setIsSignup} />}
    </Grid>
  );
}

function UserLogin(props) {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Grid className={classes.middleGrid}>
      <Grid className={classes.signinContainer}>
        <Grid className={classes.inputContainer}>
          {/* <Typography className={classes.margin10px}>E-mail</Typography> */}
          <TextField
            variant="outlined"
            label="E-mail"
            InputProps={{
              className: classes.margin10px,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
          />
          {/* <Typography>Password</Typography> */}
          <TextField
            variant="outlined"
            label="Password"
            InputProps={{
              className: classes.margin10px,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={'password'}
          />
          <Button
            onClick={() => {
              fetch(`${API_PREFIX}/user/login`, {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
              }).then((res) => {
                if (res.status === 200) {
                  localStorage.setItem('email', email);
                  location.href = '/main';
                } else {
                  alert('login failed');
                }
              });
            }}
            className={`${classes.login} ${classes.margin10px}`}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              props.setIsSignup(true);
            }}
            className={`${classes.signup} ${classes.margin10px}`}
          >
            SignUp
          </Button>
        </Grid>
        {/* <Link href="/main"> */}
        {/* </Link> */}
      </Grid>
    </Grid>
  );
}

function DriverLogin(props) {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Grid className={classes.middleGrid} container spacing={3}>
      <Grid className={classes.signinContainer}>
        <Grid className={classes.inputContainer}>
          <TextField
            variant="outlined"
            label="E-mail"
            InputProps={{
              className: classes.margin10px,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="Password"
            InputProps={{
              className: classes.margin10px,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
            type={'password'}
          />
          <Button
            onClick={() => {
              fetch(`${API_PREFIX}/driver/login`, {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
              }).then((res) => {
                if (res.status === 200) {
                  localStorage.setItem('email', email);
                  location.href = '/driver/schedule';
                } else {
                  alert('login failed');
                }
              });
            }}
            className={`${classes.login} ${classes.margin10px}`}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              props.setIsSignup(true);
            }}
            className={`${classes.signup} ${classes.margin10px}`}
          >
            SignUp
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

function UserSignup(props) {
  const classes = useStyles();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  return (
    <Grid className={`${classes.middleGrid} ${classes.marginTop}`}>
      <Grid className={classes.signinContainer}>
        <Grid className={classes.inputContainer}>
          <TextField
            variant="outlined"
            label="name"
            InputProps={{
              className: classes.margin10px,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setName(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="E-mail"
            InputProps={{
              className: classes.margin10px,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="phone number"
            InputProps={{
              className: classes.margin10px,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setPhoneNumber(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="password"
            InputProps={{
              className: classes.margin10px,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
            type={'password'}
          />
          <Button
            onClick={() => {
              const params = {
                name,
                email,
                phoneNumber,
                password,
              };
              console.log('params:', params);
              fetch(`${API_PREFIX}/user/signup`, {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                },
                body: JSON.stringify(params),
              })
                .then((res) => {
                  if (res.status === 200) {
                    localStorage.setItem('email', email);
                    location.href = '/main';
                  } else if (res.status === 409) {
                    alert('this email already exists!');
                  } else {
                    alert('signup failed! please try again');
                  }
                  return;
                })
                .catch((e) => {
                  alert(e);
                });
            }}
            className={`${classes.login} ${classes.margin10px}`}
          >
            SignUp
          </Button>
          <Button
            onClick={() => {
              props.setIsSignup(false);
            }}
            className={`${classes.signup} ${classes.margin10px}`}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

function DriverSignup(props) {
  const classes = useStyles();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();

  return (
    <Grid className={`${classes.middleGrid} ${classes.marginTop}`}>
      <Grid className={classes.signinContainer}>
        <Grid className={classes.inputContainer}>
          <TextField
            variant="outlined"
            label="name"
            InputProps={{
              className: classes.margin10px,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setName(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="E-mail"
            InputProps={{
              className: classes.margin10px,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="phone number"
            InputProps={{
              className: classes.margin10px,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setPhoneNumber(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            label="password"
            InputProps={{
              className: classes.margin10px,
            }}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
            type={'password'}
          />
          <Button
            onClick={() => {
              const params = {
                name,
                email,
                phoneNumber,
                password,
              };
              console.log('params:', params);
              fetch(`${API_PREFIX}/driver/signup`, {
                method: 'POST',
                headers: {
                  'content-type': 'application/json',
                },
                body: JSON.stringify(params),
              })
                .then((res) => {
                  if (res.status === 200) {
                    localStorage.setItem('email', email);
                    location.href = '/driver/schedule';
                  } else if (res.status === 409) {
                    alert('this email already exists!');
                  } else {
                    alert('signup failed! please try again');
                  }
                  return;
                })
                .catch((e) => {
                  alert(e);
                });
            }}
            className={`${classes.login} ${classes.margin10px}`}
          >
            SignUp
          </Button>
          <Button
            onClick={() => {
              props.setIsSignup(false);
            }}
            className={`${classes.signup} ${classes.margin10px}`}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

function App() {
  const [isUser, setIsUser] = useState(false);
  const [isDriver, setIsDriver] = useState(false);
  return (
    <MainLayout hideFooter={true}>
      {!isUser && !isDriver && (
        <SelectUserDriver setIsUser={setIsUser} setIsDriver={setIsDriver} />
      )}
      {isUser && <UserField setIsUser={setIsUser} setIsDriver={setIsDriver} />}
      {isDriver && (
        <DriverField setIsUser={setIsUser} setIsDriver={setIsDriver} />
      )}
    </MainLayout>
  );
}

export default App;
