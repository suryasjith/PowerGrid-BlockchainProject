import React from 'react';
import AdminSection from './Admin';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Divider } from '@material-ui/core';
import SimpleMenu from './Header';
import { withRouter } from 'react-router-dom';
import StickyFooter from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const AdminPage = () => {
  const classes = useStyles();
  return (
    <div style={{ textAlign: "right" }}>
  
        <SimpleMenu />
  
      <div className={classes.root} >
        <h1>Hi Admin </h1>
        <Grid container spacing={3}
          direction="row"
          justify="center"
          alignItems="baseline">
          <Grid item xs={12}  >
            <Paper className={classes.paper} elevation={3}>
              <h2>Enter the New Grid Sharer"s Details Here</h2>
              <Divider variant="middle" />
              <AdminSection />
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}
          direction="row"
          justify="center"
          alignItems="baseline">
          <Grid item xs={12} >
          </Grid>
        </Grid>
      </div>
      <StickyFooter />
    </div>
  )
}
export default withRouter(AdminPage);

