import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Nav from './Nav';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

export default function AppBar2() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <Nav/>
          <Typography variant="h1" color="inherit">
            AAA Technologies
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    )
}
