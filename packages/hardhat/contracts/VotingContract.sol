// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


interface IProposalContract {
    function getProposalCount() external view returns (uint256);
    function proposals(uint256 proposalId) external view returns (string memory, string memory, address, uint256);
}

contract VotingContract {
    IProposalContract public proposalContract;
    mapping(uint256 => mapping(address => bool)) public votes;
    mapping(uint256 => uint256) public proposalVotes;

    uint256 public winningProposalId;
    uint256 public highestVoteCount;

    constructor(address _proposalContractAddress) {
        proposalContract = IProposalContract(_proposalContractAddress);
    }

    function vote(uint256 proposalId) public {
        // Validate if the proposal exists
        require(proposalId < proposalContract.getProposalCount(), "Proposal does not exist");

        // Validate if the voter has already voted for this proposal
        require(!votes[proposalId][msg.sender], "Already voted");

        // Validate if the voting period is still valid
        (,,, uint256 endTime) = proposalContract.proposals(proposalId);
        require(block.timestamp >= endTime, "Voting period has endedtry later");

        // Mark as voted and increase the vote count
        votes[proposalId][msg.sender] = true;
        proposalVotes[proposalId]++;

        // Check if this proposal now has the highest vote count
        if (proposalVotes[proposalId] > highestVoteCount) {
            highestVoteCount = proposalVotes[proposalId];
            winningProposalId = proposalId;
        }
    }

    function getWinningProposal() public view returns (uint256) {
        return winningProposalId;
    }
}
