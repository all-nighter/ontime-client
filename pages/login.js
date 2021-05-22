import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import MainLayout from '../layout/mainlayout';
import { API_PREFIX } from '../../env';

const useStyles = makeStyles((theme) => ({
  middleGrid: {
    height: '80vh',
    spacing: 3,
    direction: 'column',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  signinContainer: {
    display: 'flex',
    flexGrow: 3,
    alignItems: 'center',
  },
}));

function SelectUserDriver(props) {
  const classes = useStyles();

  return (
    <Grid className={classes.middleGrid}>
      <Button
        onClick={() => {
          props.setIsUser(true);
        }}
      >
        User
      </Button>
      <Button
        onClick={() => {
          props.setIsDriver(true);
        }}
      >
        Driver
      </Button>
    </Grid>
  );
}

function UserField() {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <Grid>
      <Grid>
        <Typography>User</Typography>
      </Grid>
      {!!isSignup && <UserSignup setIsSignup={setIsSignup} />}
      {!!!isSignup && <UserLogin setIsSignup={setIsSignup} />}
    </Grid>
  );
}

function UserLogin(props) {
  const classes = useStyles();
  return (
    <Grid className={classes.middleGrid} container spacing={3}>
      <Grid className={classes.signinContainer}>
        <Grid className={classes.inputContainer}>
          <Input placeholder={'id'} />
          <Input placeholder={'password'} />
        </Grid>
        <Link href="/main">
          <Button>Login</Button>
        </Link>
      </Grid>
      <Grid>
        <Typography>Don't have an account yet?</Typography>
        <Button
          onClick={() => {
            props.setIsSignup(true);
          }}
        >
          SignUp
        </Button>
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

  useEffect(() => {
    console.log(name);
    console.log(email);
    console.log(phoneNumber);
    console.log(password);
  }, [name, email, phoneNumber, password]);

  return (
    <Grid className={classes.middleGrid} container spacing={3}>
      <Grid className={classes.signinContainer}>
        <Grid className={classes.inputContainer}>
          <Input
            placeholder={'name'}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            placeholder={'email'}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder={'phoneNumber'}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <Input
            placeholder={'password'}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Grid>
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
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              })
              .catch((e) => {
                alert(e);
              });
          }}
        >
          SignUp
        </Button>
      </Grid>
      <Grid>
        <Typography>Already have an account?</Typography>
        <Button
          onClick={() => {
            props.setIsSignup(false);
          }}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
}

function DriverField() {
  const classes = useStyles();
  return (
    <Grid className={classes.middleGrid}>
      <Grid className={classes.signinContainer}>
        <Input placeholder={'id'} />
        <Input placeholder={'password'} />
        <Link href="/main">
          <Button>Login</Button>
        </Link>
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
      {isUser && <UserField />}
      {isDriver && <DriverField />}
    </MainLayout>
  );
}

export default App;
