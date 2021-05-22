import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
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
// import socketIOClient from "socket.io-client";
// import { DropzoneDialog } from 'material-ui-dropzone';
import { Elements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  mainGrid: {
    width: '100vw',
    height: '90vh',
    spacing: 0,
    justify: 'space-around',
  },
  middleGrid: {
    height: '80vh',
    spacing: 0,
    direction: 'column',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  appbar: {
    height: '10vh',
    backgroundColor: 'dodgerblue',
  },
  footer: {
    height: '10vh',
    backgroundColor: 'dodgerblue',
    bottom: 0,
    position: 'fixed',
    width: '100vw',
    display: 'flex',
  },
}));

function MainLayout(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.root}>
      <Grid className={classes.appbar}></Grid>
      <Grid className={classes.mainGrid}>
        <Grid className={classes.middleGrid} xs={12}>
          {children}
        </Grid>
      </Grid>
      <Grid className={classes.footer}>
        <Grid>
          <Button>main</Button>
        </Grid>
        <Grid>
          <Button>match</Button>
        </Grid>
        <Grid>
          <Button>profile</Button>
        </Grid>
      </Grid>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
