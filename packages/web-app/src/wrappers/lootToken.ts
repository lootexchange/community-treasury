import { useContractCall, useEthers } from "@usedapp/core";
import { BigNumber as EthersBN, utils } from "ethers";
import config from "../config";

const abi = new utils.Interface([
  "function balanceOf(address) view returns (uint256)",
]);

export const useUserVotes = (): number | undefined => {
  const { account } = useEthers();
  const [votes] =
    useContractCall<[EthersBN]>({
      abi,
      address: config.tokenAddress,
      method: "balanceOf",
      args: [account],
    }) || [];
  return votes?.toNumber();
};
