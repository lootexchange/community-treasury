import { ChainId } from "@usedapp/core";

interface Config {
  tokenAddress: string;
  daoProxyAddress: string;
  daoExecutorAddress: string;
  subgraphApiUri: string;
  jsonRpcUri: string;
  wsRpcUri: string;
}

type SupportedChains = ChainId.Rinkeby | ChainId.Mainnet;

export const CHAIN_ID: SupportedChains = parseInt(
  process.env.REACT_APP_CHAIN_ID ?? "4"
);

export const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

const config: Record<SupportedChains, Config> = {
  [ChainId.Rinkeby]: {
    tokenAddress: "0x79e2d470f950f2cf78eef41720e8ff2cf4b3cd78",
    daoProxyAddress: "0x886516b01cc57C8252Bc756D3c4110dcf0a55C24",
    daoExecutorAddress: "0x8e71a0d2CC9c48173D9a9b7d90D6036093212aFa",
    subgraphApiUri:
      "https://api.studio.thegraph.com/query/8490/loot-exchange--rinkeby/v0.0.3",
    jsonRpcUri: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
    wsRpcUri: `wss://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
  },
  [ChainId.Mainnet]: {
    tokenAddress: "0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7",
    daoProxyAddress: "0x6f3E6272A167e8AcCb32072d08E0957F9c79223d",
    daoExecutorAddress: "0x0BC3807Ec262cB779b38D65b38158acC3bfedE10",
    subgraphApiUri:
      "https://api.studio.thegraph.com/query/8490/loot-market-lunar/0.0.2",
    jsonRpcUri: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
    wsRpcUri: `wss://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
  },
};

export default config[CHAIN_ID];
