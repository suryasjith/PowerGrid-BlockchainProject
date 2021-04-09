import React, { useEffect, useState } from 'react';
import AddUSer from '../contracts/Admin.json';
import AddDetails from '../contracts/Consumption.json';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core';


import { loadWeb3 } from '../Helper/helper';
import { Divider } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




const AdminSection = () => {

  const [account,setAccount]=useState("");
  const [values, setValues] = useState({
    consumer_address: "",
    username: "",
    prev_reading: "",
    addUserinst: "",
  })

  useEffect( () => {
    loadWeb3();
    loadBlockchainData();
  },[account]);

  const [details,setDetails] = useState({
    accountNo : "",
    currReading : "",
    unitShared : "",
    detailinst : "",
  })
  
  
  const classes = useStyles();




  const { consumer_address, username, prev_reading } = values;

 


  // const { account,
  // addUserinst,
  // prev_reading} = addr;



  //creating registration instance
  async function loadBlockchainData() {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    const account2 = accounts[0]
    setAccount(account2);
    console.log(account2);
    console.log(account);
    //getting network id
    const networkId = await web3.eth.net.getId();


    const AddUserData = AddUSer.networks[networkId];
    if (AddUserData) {
      const addUserinst = new web3.eth.Contract(
        AddUSer.abi,
        AddUserData.address
      );
      setValues({ addUserinst });

    }
    else {
      alert("Contract not found")
    }

const addUserDetails = AddDetails.networks[networkId];
      if(addUserDetails){
        const detailinst = new web3.eth.Contract(
          AddDetails.abi,
          addUserDetails.address
        )
        setDetails({detailinst})
      }
      else {
        alert("contract not found")
      }

    

  }
  

  const handleSubmit = name => e =>{
    e.preventDefault()
    setDetails({...details,[name] : e.target.value})
  }

  const handleChange = name => event => {
    event.preventDefault()
    setValues({ ...values, [name]: event.target.value })
  }
  const submitDetails = async (event) => {
    event.preventDefault();
    console.log(values.prev_reading);
    await values.addUserinst.methods.addConsumer(consumer_address, username, prev_reading).send({ from:account })
  }

  const addDetails  = async (e) => {
    e.preventDefault();
 const consumerAddress =    await values.addUserinst.methods.registration(consumer_address).call();

    await details.detailinst.methods.totalUnitConsumed(details.accountNo,details.currReading ,details.unitShared,consumerAddress.prevReading).send({from:account})
  }

  

  return (
    <div style={{ textAlign: "center" }}>
      <form className={classes.root} noValidate autoComplete="off">
        {/* <TextField id="standard-basic" label="Consumer ID" />  */}
        <TextField
          onChange={handleChange("consumer_address")} value={consumer_address} type="text" id="standard-basic" label="Consumer Address" />  <br />
        <TextField onChange={handleChange("username")} value={username} type="text" id="standard-basic" label="Username" /> <br />
        <TextField onChange={handleChange("prev_reading")} value={prev_reading} type="text" id="standard-basic" label="Previous Reading" /> <br />
        {/* <TextField id="standard-basic" label="Contact Number" /> <br /> */}

        <Button variant="contained" onClick={submitDetails} style={{ backgroundColor: "#70adb5" }}> Register </Button>


      </form>
      <br />
      <br />
      
      <br />
     
<h3>Enter user details here</h3>
      <Divider variant="middle" />
      <form className={classes.root} noValidate autoComplete="off">
        <TextField onChange = {handleSubmit("accountNo")} value = {details.accountNo} id="standard-basic" label="Consumer ID" /> <br />
       
        <TextField onChange = {handleSubmit("currReading")} value = {details.currReading} id="standard-basic" label="Current Reading" /> <br />
        <TextField onChange = {handleSubmit("unitShared")} value = {details.unitShared} id="standard-basic" label="Grid Shared" /> <br />

        <Button variant="contained" onClick = {addDetails} style={{ backgroundColor: "#70adb5" }}> Submit </Button>




        {/* <TextField id="filled-basic" label="Filled" variant="filled" /> */}
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      </form>
    </div>
  )
}
export default AdminSection;