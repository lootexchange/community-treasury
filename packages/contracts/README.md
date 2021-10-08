# Loot Exchange Community Treasury Contracts

These contracts are a fork of [NounsDAO](https://github.com/nounsDAO/nouns-monorepo/tree/master/packages/nouns-contracts). The main changes have to do with replacing checkpointed voting with per token voting (because the Loot token contract is not checkpointed we have to link each vote to a particular token id). The exact code changes can be found in the [`diffs`](./diffs) directory.

### Deployments

Rinkeby deployment:

`Executor`: https://rinkeby.etherscan.io/address/0x74E568a889123bAecf6708242Da34d8A99e7fCD0

`LootDAOLogic`: https://rinkeby.etherscan.io/address/0x3374ca798ef81E6959A5e2A050A47B98a13B4E87

`LootDAOProxy`: https://rinkeby.etherscan.io/address/0x1b5c6140444CE28454DC32345dc090b923dB2487

Mainnet deployment:

`Executor`: https://etherscan.io/address/0x8cFDF9E9f7EA8c0871025318407A6f1Fbc5d5a18

`LootDAOLogic`: https://etherscan.io/address/0x32f0722259280952CaC042141D928BeD92Bf9840

`LootDAOProxy`: https://etherscan.io/address/0xCDb9F8f9bE143B7c72480185459AB9720462a786

### Setup

Install all required dependencies by running `yarn` and compile the contracts via `yarn compile`.

In order to run the tests, make sure you have a `.env` file in the root of the package containing the following:

```bash
TESTING_ALCHEMY_KEY=
TESTING_BLOCK_NUMBER=
```

To get deterministic test results (and make sure all tests will be passing) set the block number to `13306093`.

Any other scripts are to be run via `npx hardhat --network NETWORK run ./scripts/SCRIPT.ts` (some of them might need additional environment variables which are to be placed in the above mentioned `.env` file).
