import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Reading = () =>{
    const classes = useStyles()
    return (
        <div style={{textAlign : "center"}}>
        <form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Consumer ID" /> 
  <TextField id="standard-basic" label="Consumer Number" />  <br />
  <TextField id="standard-basic" label="Current Reading" /> <br />
  <TextField id="standard-basic" label="Grid Shared" /> <br /> <br /><br /> 

  <Button variant="contained" style = {{backgroundColor : "#70adb5"}}> Submit </Button>

  



  {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
  {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
</form>
</div>
    )
}
export default Reading;