 // SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import"./Owner.sol";
import"./Elektron.sol";
import"./Admin.sol";

contract Consumption is Owner
{




  
    // state variable of tokens instance
    Elektron public token;

    Admin public admin;

    constructor(Elektron _token , Admin _admin) public {

      token = _token;

      admin = _admin;

    }

    

       function PaymentDetails(uint _consumerNumber) public view returns(address _address, string  memory _uname, uint _rewardamount, uint _billamount){
         
         _address=admin.consumer[_consumerNumber].user_address;

         _uname=admin.consumer[_consumerNumber].username;

         _rewardamount=admin.consumer[_consumerNumber].rewardamount;

         _billamount=admin.consumer[_consumerNumber].billamount;
         
         
         
        //  this is the method to be tried
          // return admin.getConsumer(_consumerNumber);

       }
     
     function Payment(uint amount) public {

       // if address error comes try changing admin
       token.transferFrom(msg.sender,address(admin),amount)


     }
     


      //to store consumers consumption details
    // mapping(address=>consumerDetails) public unitBalanceCheck;


  //function to calculate amount of units used and calculates the amount of token to be rewarded after checking both shared unit and consumed unit
  //this function uses users current reading to check with previous reading of the same user 

    // function totalUnitConsumed (address _user,uint _currentReading,uint _unitshared, uint _pReading) public onlyOwner
    // {
    //     //storing current reading
    //   unitBalanceCheck[_user].currentReading = _currentReading;

    //   //storing shared unit
    //   unitBalanceCheck[_user].unitShared = _unitshared;

    //   unitBalanceCheck[_user].previousReading = registration[_pReading].prevReading;
    //   //calculating total unit consumed
    //   unitBalanceCheck[_user].currentconsumption=_currentReading-unitBalanceCheck[_user].previousReading;

    //   //condition to check how much tokens to be rwarded and total of consumption. 
    //   if(unitBalanceCheck[_user].currentconsumption>=_unitshared)
    //   {
    //     unitBalanceCheck[_user].due=unitBalanceCheck[_user].currentconsumption-_unitshared;

    //   }
    //   else
    //   {
    //     unitBalanceCheck[_user].rewardamount=_unitshared-unitBalanceCheck[_user].currentconsumption;
    //     token.transfer(_user, unitBalanceCheck[_user].rewardamount);
    //   }
    

    // }

    

  

}
