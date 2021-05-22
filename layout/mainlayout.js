import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  mainGrid: {
    width: '100vw',
    height: '100vh',
    spacing: 0,
    justify: 'space-around',
  },
  middleGrid: {
    height: '100vh',
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    height: '7vh',
  },
}));

function MainLayout(props) {
  const classes = useStyles();
  const { children, hideFooter, headerTitle } = props;
  return (
    <div className={classes.root}>
      {/* <Grid className={classes.appbar}></Grid> */}
      {/* {!!headerTitle && (
        <AppBar className={classes.header}>{headerTitle}</AppBar>
      )} */}
      <Grid className={classes.mainGrid}>
        <Grid className={classes.middleGrid} xs={12}>
          {children}
        </Grid>
      </Grid>
      {/* {!hideFooter && (
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
      )} */}
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
