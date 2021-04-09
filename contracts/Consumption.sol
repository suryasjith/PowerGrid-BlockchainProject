// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import"./AdminPower.sol";
import"./Elektron.sol";
import"./Admin.sol";

contract Consumption is AdminPower,Admin
{




    //no. of elektrons per unit
    uint basevalue=1;
    //first given reading
    uint firstReading;
    // state variable of tokens instance
    Elektron public token;

    constructor(Elektron _token) public {

      token = _token;

    }

    



        //to store consumer consumption details
    struct consumerDetails
    {
        //to store previous unit reading
        uint previousReading;

        //to store current reading
        uint currentReading;

        //to store Power Grid shared unit
        uint unitShared;

        //to store total unit after claculatinf with shared unit
         uint due;
        
        //to store current consumption of unit
        uint currentconsumption;
        
        //to store reward tokens amount
        uint rewardamount; 

        //to store power shared

       


    }
     
     


      //to store consumers consumption details
    mapping(address=>consumerDetails) public unitBalanceCheck;


  //function to calculate amount of units used and calculates the amount of token to be rewarded after checking both shared unit and consumed unit
  //this function uses users current reading to check with previous reading of the same user 

    function totalUnitConsumed (address _user,uint _currentReading,uint _unitshared, uint _pReading) public onlyOwner
    {
        //storing current reading
      unitBalanceCheck[_user].currentReading = _currentReading;

      //storing shared unit
      unitBalanceCheck[_user].unitShared = _unitshared;

      unitBalanceCheck[_user].previousReading = registration[_pReading].prevReading;
      //calculating total unit consumed
      unitBalanceCheck[_user].currentconsumption=_currentReading-unitBalanceCheck[_user].previousReading;

      //condition to check how much tokens to be rwarded and total of consumption. 
      if(unitBalanceCheck[_user].currentconsumption>=_unitshared)
      {
        unitBalanceCheck[_user].due=unitBalanceCheck[_user].currentconsumption-_unitshared;

      }
      else
      {
        unitBalanceCheck[_user].rewardamount=_unitshared-unitBalanceCheck[_user].currentconsumption;
        token.transfer(_user, unitBalanceCheck[_user].rewardamount);
      }
    

    }

    

  

}
