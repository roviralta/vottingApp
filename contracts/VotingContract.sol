//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract VotingContract {

    struct Candidate {
        uint id;
        string name;
        string description;
        uint votesCount;
        string imageURL;
    }

    struct Voter {
        bool registered;
        bool alreadyVoted;
        uint256 vote;
    }

    address public owner;
    mapping(uint => Candidate) public candidates;
    mapping(address => Voter) public voters;
    uint256 public totalCandidates;
    uint256 public totalVoters;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owne can do this action!");
    _;
}

    constructor() {
        owner = msg.sender;
        totalCandidates = 0;
        totalVoters = 0;
    }


    function registerCandidate(string memory _name, string memory _description, string memory _image) external onlyOwner() {
        candidates[totalCandidates] = Candidate({
            id: totalCandidates,
            name: _name,
            description: _description,
            votesCount: 0,
            imageURL: _image
        });
         totalCandidates++;
    }

    function registerVoter(address _voter) external onlyOwner() {
        require(!voters[_voter].registered, "The voter is registered");
        voters[_voter].registered = true;
        totalVoters++;
    }

     function Vote(uint256 _candidateId) external {
        require(voters[msg.sender].registered, "The voter is not registered");
        require(!voters[msg.sender].alreadyVoted, "El votante ya ha votado");
        require(_candidateId > 0 && _candidateId <= totalCandidates, "Contract not valid");

        voters[msg.sender].alreadyVoted = true;
        voters[msg.sender].vote = _candidateId;
        candidates[_candidateId].votesCount++;
    }

    function recountVotes(uint256 _candidateId) external view returns (uint256) {
        require(_candidateId > 0 && _candidateId <= totalCandidates, "Contract not valid");
        return candidates[_candidateId].votesCount;
    }

}
