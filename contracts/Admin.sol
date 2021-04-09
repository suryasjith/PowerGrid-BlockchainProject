// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "./AdminPower.sol";



contract Admin is AdminPower{


    uint public consumerNumber;
    struct regConsumer
    {
        // address accountNo; //consumer address

        uint consumerNo;

        string username;

        uint prevReading;
    }

    mapping(address =>uint ) public consumer_no;

    //to store address of consumer according to registration  number
    mapping(uint => regConsumer) public registration;


    //Consumer registration function
    function addConsumer(address _consumerAddress, string memory _username , uint _prevReading) public
    {
        consumerNumber++; //self increment consumer number
        
        consumer_no[_consumerAddress]=consumerNumber;// to store consumer number


        // registration[consumerNumber].accountNo=_consumerAddress; //consumer's public address is stored

        registration[consumerNumber].consumerNo=consumerNumber; //consumer's number is stored

        registration[consumerNumber].username=_username; //consumer's user is stored

        registration[consumerNumber].prevReading=_prevReading; //consumer's previous is stored
        


    }
}