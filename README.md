# 🏗 Hey Neighbor

Imagine a world where communities come together effortlessly to support their own. Our platform offers a seamless experience for users to contribute to local ventures, shaping the future of their neighborhoods.

With features like user-friendly donations, transparent voting, a robust multi-signature wallet for treasury management, and the innovative concept of community-backed loans, we are pioneering a new era of community-driven prosperity.

## Requirements

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Hey Neighbor, follow the steps below:

1. Clone this repo & install dependencies

```bash
git clone https://github.com/Huncho-J/scaffold-eth-chi-2.git
cd scaffold-eth-chi-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

3. On a second terminal, deploy the contracts:

```
yarn deploy --tags ProposalContract  first
yarn deploy --tags VotingContract 
```

4. On a third terminal, start the NextJS frontend app:

```
yarn start
```

Visit the Hey Neigbor! app on: `http://localhost:3000`. You can interact with the smart contracts using the contract component or the example ui in the frontend.
