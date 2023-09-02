// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;


contract VotingContract {

    string saySomething;

    constructor() {
        saySomething = "Testing!";
    }

    function speak() public view returns(string memory) {
        return saySomething;
    }
}