// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Token {
    string public name = "HardHat Token";
    uint public amount = 1000;
    string public symbol = "HHT";
    address public owner;

    constructor() {
        owner = msg.sender;
        TokenAmt[msg.sender] = amount;
    }

    mapping(address => uint) private TokenAmt;

    event Transfer(address indexed from, address indexed to, uint amount);

    function transfer(
        address _to,
        uint _amount
    ) public returns (string memory) {
        console.log("Sending %s tokens", _amount);
        require(TokenAmt[msg.sender] >= _amount, "Not enough Token");
        TokenAmt[msg.sender] -= _amount;
        TokenAmt[_to] += _amount;
        emit Transfer(msg.sender, _to, _amount); // Emit the transfer event
        return "Transferred Successfully";
    }

    function getTokenAmt(address _add) public view returns (uint) {
        return TokenAmt[_add];
    }
}
