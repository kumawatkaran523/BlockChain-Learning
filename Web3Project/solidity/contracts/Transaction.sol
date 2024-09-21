// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transaction {
    uint transactionCount;

    event transfer(address from,address to,uint amount,string message,uint timestamp,string keyword);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint timestamp;
        string keyword;
    }

    TransferStruct[] transaction;

    function addToBlockchain(address payable receiver,uint amount,string memory message,string memory keyword) public {
        transactionCount++;
        transaction.push(TransferStruct(msg.sender,receiver,amount,message,block.timestamp,keyword));

        emit transfer(msg.sender,receiver,amount,message,block.timestamp,keyword);
    }

    function getAllTransactions() public view returns(TransferStruct memory){

    }
    function getTransactionCount() public view returns(uint){
        return transactionCount;
    }
}