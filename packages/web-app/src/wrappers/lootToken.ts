import { useEthers } from "@usedapp/core";
import { request } from "graphql-request";
import { useEffect, useState } from "react";
import config from "../config";
import { ownedBagsQuery, tokenVotesQuery } from "./subgraph";

export const useUserVoteTokens = (proposalId?: string): string[] => {
  const { account } = useEthers();

  const [tokenIds, setTokenIds] = useState<string[]>([]);

  useEffect(() => {
    const execute = async () => {
      if (account) {
        const ownedBagsResult = await request<any>(
          config.tokenSubgraphApiUri,
          ownedBagsQuery(account)
        );

        let tokenIds: any = {};
        if (ownedBagsResult?.wallet?.bags?.length) {
          for (const { id } of ownedBagsResult.wallet.bags) {
            tokenIds[id] = true;
          }
        }

        if (proposalId) {
          const tokenVotesResult = await request<any>(
            config.daoSubgraphApiUri,
            tokenVotesQuery(),
            { proposalId, tokenIds: Object.keys(tokenIds) }
          );
          if (tokenVotesResult?.votes?.length) {
            for (const { tokenId } of tokenVotesResult.votes) {
              delete tokenIds[tokenId];
            }
          }
        }

        setTokenIds(Object.keys(tokenIds));
      }
    };
    execute();
  }, [proposalId, account]);

  return tokenIds;
};
