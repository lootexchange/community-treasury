# Loot Exchange Community Treasury Contracts

These contracts are a fork of [NounsDAO](https://github.com/nounsDAO/nouns-monorepo/tree/master/packages/nouns-contracts). The main changes have to do with replacing checkpointed voting with per token voting (because the Loot token contract is not checkpointed we have to link each vote to a particular token id). The exact code changes can be found in the [`diffs`](./diffs) directory.

### Deployments

Rinkeby deployment:

`Executor`: https://rinkeby.etherscan.io/address/0x8e71a0d2CC9c48173D9a9b7d90D6036093212aFa

`LootDAOLogic`: https://rinkeby.etherscan.io/address/0x5DfD4fC7347c9eAF09b9120Fb11899a9c830Dea4

`LootDAOProxy`: https://rinkeby.etherscan.io/address/0x886516b01cc57C8252Bc756D3c4110dcf0a55C24

### Setup

Install all required dependencies by running `yarn` and compile the contracts via `yarn compile`.

In order to run the tests, make sure you have a `.env` file in the root of the package containing the following:

```bash
TESTING_ALCHEMY_KEY=
TESTING_BLOCK_NUMBER=
```

To get deterministic test results (and make sure all tests will be passing) set the block number to `13306093`.

Any other scripts are to be run via `npx hardhat --network NETWORK run ./scripts/SCRIPT.ts` (some of them might additional environment variables which are to be placed in the above mentioned `.env` file).
