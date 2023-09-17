// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
contract ProposalContract {
    struct Proposal {
        string name;
        string description;
        address creator;
        uint256 endTime;
    }

    Proposal[] public proposals;
//comment here
    function createProposal(string memory _name, string memory _description, uint256 _duration) public {
        uint256 endTime = block.timestamp + _duration;
        Proposal memory newProposal = Proposal({
            name: _name,
            description: _description,
            creator: msg.sender,
            endTime: endTime
        });
        proposals.push(newProposal);
    }

    function getProposalCount() public view returns (uint256) {
        return proposals.length;
    }
}