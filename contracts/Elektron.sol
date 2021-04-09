// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract Elektron {
    string public name = "Elektron"; //Token Name
    string public symbol = "EKN"; // Symbol of Token
    string public standard = "EKN Token v0.01"; //version of Token
    uint public totalSupply = 10000000000000000000000; //Total Supply of Tokens


    //Event for Transfer Function (Emits when token transfer from contract to customer-ERC 20 STD)
    event Transfer(address indexed _from,address indexed _to,uint256 _value);

    //Event for Approve Function (Emits when token is allocated from owner to Spender-ERC 20 STD)
    event Approval(address indexed _owner, address indexed _to,uint256 _value);

    //For Storing Token balance with address
    mapping(address => uint256) public balanceOf;

    //For Storing Token allowance of owner with Spender address
    mapping(address => mapping(address => uint256)) public allowance;

    //sets total token balance to contract owner
    constructor () public 
    {
        balanceOf[msg.sender] = totalSupply;
    }

    //function to transfer tokens from contract to beneficiary
    function transfer(address _to, uint _value) public returns (bool success)
    {


        //to prevent token self transfer 
        require(_to != msg.sender,"Operation not allowed");

        //to prevent zero token  transfer
        require(_value != 0,"Token value field can't be zero!");

        //to prevent excess token transfer than of balance number of tokens 
        require(balanceOf[msg.sender] >= _value,"Not enough Token balance");

        //sending tokens from contract owner
        balanceOf[msg.sender] -= _value;

        //Benfeciary recieves tokens
        balanceOf[_to] += _value;

        //to emit event
        emit Transfer(msg.sender,_to,_value);

        //true is returned for a successful transaction
        return true;


    }
    function approve(address _spender,uint256 _value) public returns(bool success)
    {
        //to prevent self token balance allocation
        require(_spender != msg.sender,"Operation not supported");

        //to prevent zero token allowance
        require(_value != 0,"Token value field can't be zero");

        //to prevent excess token transfer that that of balance of owner
        require(_value <= balanceOf[msg.sender], "Insufficient balance to approve");

        //allowance updation
        allowance[msg.sender][_spender] = _value;

        //Emits event
        emit Approval(msg.sender, _spender, _value);

        //true is returned for a successful transaction
        return true;
    }


    function transferFrom(address _from, address _to, uint256 _value) public returns(bool success)
    {
           //to prrevent Token Self Transfer
        require(_from!=_to,"You cant tranfer tokens to yourself");
        
        //to prevent zero Token Transfer
        require(_value!=0,"You cant tranfer zero tokens");
        
        //to prevent token transfer if quantity is more the token balance of contract
        require(_value <= balanceOf[_from],"Not Enough balance to transfer");
        
        //to prevent Token Transfer if quantity is more the allowance of spender
        require(_value <= allowance[_from][_to],"Not Enough allowance");
        
        //sending tokens
        balanceOf[_from] -= _value;
        
        //recieving tokens
        balanceOf[_to] += _value;
        
        // Allowance of spender is reduced
        allowance[_from][_to] -= _value;
        
        //Emits event
        emit Transfer(_from, _to, _value);
        
        //true is returned for a successful transaction
        return true;
    }


}

















