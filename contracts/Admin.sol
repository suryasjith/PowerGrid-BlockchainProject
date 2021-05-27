// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "./Owner.sol";
import"./Elektron.sol";



contract Admin is Owner{

     Elektron public token;

     

     constructor(Elektron _token) public {

      token = _token;

    }
    struct  regConsumer
    {
        // address accountNo; //consumer address
        address user_address;

        string username;

        uint prevReading;

        // uint currentReading;

        uint gridShared;

        
        uint billamount;
        uint rewardamount; 
    }

    // mapping(address =>uint ) public consumer_no;

    //to store address of consumer according to registration  number
    mapping(uint => regConsumer) public consumer;



    function RegisterConsumer(uint _consumerNumber ,address _user_address, string memory _username,  uint _prevReading, uint _gridShared ,uint _rewardamount,uint _billamount  )public{
   
        consumer[_consumerNumber] = regConsumer(_user_address ,_username,_prevReading,_gridShared,_rewardamount,_billamount  );



    } 


function UpdateConsumer(uint _consumerNumber, uint  _currentReading , uint  _gridShared) public {
     

        uint rewards;
        uint currentReading = _currentReading;
        uint gridShared = _gridShared ;
       uint  totalUnitConsumed;
        uint billamount = consumer[_consumerNumber].billamount;
        uint rewardamount = consumer[_consumerNumber].rewardamount;

        // consumer[_consumerNumber].currentReading=_currentReading;
        consumer[_consumerNumber].gridShared=_gridShared;


        uint unitConsumed = currentReading - consumer[_consumerNumber].prevReading;

        if(unitConsumed<gridShared){


            totalUnitConsumed= gridShared - unitConsumed;


           


                rewards = totalUnitConsumed*8;
                token.transfer(consumer[_consumerNumber].user_address,rewards);
               consumer[_consumerNumber].rewardamount=rewardamount + rewards ;
             
       }

       else{


           totalUnitConsumed = unitConsumed - gridShared;
           billamount = totalUnitConsumed*8;
          consumer[_consumerNumber].billamount = billamount;

       }
       
   

        

        
        
    consumer[_consumerNumber].prevReading=currentReading;

    }
    
    function getConsumer(uint _consumerNumber) public view returns (address _user_address, string memory _username,uint _rewardamount,uint _billamount){
        _user_address=consumer[_consumerNumber].user_address;
        _username = consumer[_consumerNumber].username;
        _rewardamount = consumer[_consumerNumber].rewardamount;
        _billamount = consumer[_consumerNumber].billamount;
        
        
    }
}
