// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.9;


contract VotingContract {

    struct Candidate {
        uint id;
        string name;
        uint256 voteCount;
    }

    address owner;
    Candidate[] public candidates;
    mapping(address => bool) public hasVoted;

    uint public candidatesCount = 0;

    //constructor with an array of candidates
    constructor(string[] memory _candidateNames) {
    for (uint256 i = 0; i < _candidateNames.length; i++) {
        candidates.push(Candidate({
            id: candidatesCount,
            name: _candidateNames[i],
            voteCount: 0
        }));

       candidatesCount++;
    }
     owner = msg.sender;
    }


    // register a vote
    function vote(uint256 _candidateIndex) public {
        require(!hasVoted[msg.sender], "You have already voted.");
        require(_candidateIndex < candidates.length, "Invalid candidate index.");

        candidates[_candidateIndex].voteCount++;
        hasVoted[msg.sender] = true;
    }

    function getAllVotesOfCandiates() public view returns (Candidate[] memory){
        return candidates;
    }
}