import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import StickyFooter from './Footer'
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Paper } from '@material-ui/core';
import UserDetails from '../contracts/Consumption.json';
import { loadWeb3 } from '../Helper/helper';


const useStyles = makeStyles((theme) => ({
    root: {
        //   display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
    button: {
        backgroundColor: "dark",
    }
}));

const User = () => {


    useEffect( () => {
        loadWeb3();
        loadBlockchainData();
      },[]);


    const [accountNo,setAccountNo] = useState("")
    const [user , setUser ] = useState({

        prevReading : "",
        currReading : "",
        unitConsumed : "",
        unitShared : "",
        reward : "",
        amount : "",
        userInsta : "",

    })


    async function loadBlockchainData() {
        const web3 = window.web3;
       
        //getting network id
        const networkId = await web3.eth.net.getId();
    
    
        const userData = UserDetails.networks[networkId];
        if (userData) {
          const userInsta = new web3.eth.Contract(
            UserDetails.abi,
            userData.address
          );
          setUser({ userInsta });
    
        }
        else {
          alert("Contract not found")
        }
    
    
    
      }


async function handleSubmit (e){
    e.preventDefault();
    console.log(accountNo);
    const userDetails = await user.userInsta.methods.unitBalanceCheck(accountNo).call()
    setUser({

        prevReading : userDetails.previousReading,
        currReading : userDetails.currentReading,
        unitConsumed : userDetails.currentconsumption,
        unitShared : userDetails.unitShared,
        reward : userDetails.rewardamount,
        amount : userDetails.due,
    })


}

    const handleChange = name => event => {
    event.preventDefault()
    setAccountNo({ ...accountNo, [name]: event.target.value })
    
    }





    const classes = useStyles();
    return (
        <>
        <Header />
        <br />
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={1} />
                <Grid item xs={12} sm={3}>
                    <Paper elevation={3} style={{ textAlign: "center" }}>
                        <TextField
                        label="Account No."
                        id="margin-none"
                        onChange = {handleChange("accountNo")}
                        value = {accountNo}
                        type = "text"
                        helperText="Your wallet public key"
                    /><br />
                        <Button onClick = {handleSubmit}  className={classes.button} >
                            Get Details
                        </Button>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={1} />
                <Grid item xs={12} sm={3}>
                    <Paper elevation={3} style={{ textAlign: "center" }}>
                        <h3>Your consumption Statistics</h3>
                        Account no. = {accountNo.accountNo} <br />
                        Previous Reading = {user.prevReading} <br />
                        Current Reading = {user.currReading}<br />
                        Units Consumed = {user.unitConsumed}<br />
                        Grid units Shared = {user.unitShared}<br />
                        Elektron Rewards = {user.reward} <br />
                        Amount to be paid = {user.amount}<br />
                        <Button className={classes.button}>
                            Pay Now
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        <br />
        a<StickyFooter />
    </>
    )
}
export default withRouter(User);