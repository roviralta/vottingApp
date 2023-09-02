// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;

contract VotingContract {
    uint storedData = 10;

    function setNumber(uint x) public {
        storedData = x;
    }

    function getNumber() public view returns (uint) {
        return storedData;
    }
}