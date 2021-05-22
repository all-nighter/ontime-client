import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  LinearProgress,
  Slider,
  Input,
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import WarningIcon from '@material-ui/icons/Warning';
import HelpIcon from '@material-ui/icons/Help';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useRouter } from 'next/router';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Link from 'next/link';
import MainLayout from '../layout/mainlayout';

const useStyles = makeStyles((theme) => ({
  middleGrid: {
    height: '80vh',
    spacing: 0,
    direction: 'column',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
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

function App() {
  const [isUser, setIsUser] = useState(false);
  const [isDriver, setIsDriver] = useState(false);
  return (
    <MainLayout>
      {!isUser && !isDriver && (
        <SelectUserDriver
          setIsUser={setIsUser}
          setIsDriver={setIsDriver}
        ></SelectUserDriver>
      )}
    </MainLayout>
  );
}

export default App;
