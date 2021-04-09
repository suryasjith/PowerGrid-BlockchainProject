import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    verticalAlign:'middle',
    

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    justify:"center",
    alignItems:"center",
  },
}));

export default function StartingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={10} direction="row"
  justify="center"
  alignItems="center">
      
        <Grid item xs={12} sm={3}>
         
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation = {3} >
              <Link to = "/user">
              <Button>
                    Online Payment 
              </Button>
              </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation = {3} >
          <Link to = "/admin">
              <Button>
                    Adminstrative Section
              </Button>
              </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          
        </Grid>
      </Grid>
    </div>
  );
}
