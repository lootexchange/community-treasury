import { ChainId } from "@usedapp/core";

interface Config {
  tokenAddress: string;
  daoProxyAddress: string;
  daoExecutorAddress: string;
  tokenSubgraphApiUri: string;
  daoSubgraphApiUri: string;
  jsonRpcUri: string;
  wsRpcUri: string;
}

type SupportedChains = ChainId.Rinkeby | ChainId.Mainnet;

export const CHAIN_ID: SupportedChains = parseInt(
  process.env.REACT_APP_CHAIN_ID ?? "1"
);

export const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

const config: Record<SupportedChains, Config> = {
  [ChainId.Rinkeby]: {
    tokenAddress: "0x79e2d470f950f2cf78eef41720e8ff2cf4b3cd78",
    daoProxyAddress: "0x1b5c6140444CE28454DC32345dc090b923dB2487",
    daoExecutorAddress: "0x74E568a889123bAecf6708242Da34d8A99e7fCD0",
    tokenSubgraphApiUri:
      "https://api.studio.thegraph.com/query/8490/loot-exchange--rinkeby/v0.0.3",
    daoSubgraphApiUri:
      "https://api.thegraph.com/subgraphs/name/lootexchange/treasury-rinkeby",
    jsonRpcUri: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
    wsRpcUri: `wss://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
  },
  [ChainId.Mainnet]: {
    tokenAddress: "0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7",
    daoProxyAddress: "0xCDb9F8f9bE143B7c72480185459AB9720462a786",
    daoExecutorAddress: "0x8cFDF9E9f7EA8c0871025318407A6f1Fbc5d5a18",
    tokenSubgraphApiUri:
      "https://api.studio.thegraph.com/query/8490/loot-market-lunar/0.0.2",
    daoSubgraphApiUri:
      "https://api.thegraph.com/subgraphs/name/lootexchange/treasury",
    jsonRpcUri: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
    wsRpcUri: `wss://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
  },
};

export default config[CHAIN_ID];
