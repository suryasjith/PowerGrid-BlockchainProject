//SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
contract Owner 
{
address public _owner;
constructor () internal 

{
_owner = msg.sender;
}


// Throws if called by any account other than the owner.
modifier onlyOwner()
{
require(isOwner(), "Ownable: caller is not the owner");
    _;
}

 //Returns true if the caller is the current owner.
function isOwner() public view returns (bool) 
{
return (msg.sender == _owner);
}
}