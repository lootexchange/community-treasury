import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "graphql-request";

export const ownedBagsQuery = (owner: string) => gql`
{
  wallet(id: "${owner.toLowerCase()}") {
    bags {
      id
    }
  }
}
`;

export const tokenVotesQuery = () => gql`
  query ($proposalId: String!, $tokenIds: [String!]!) {
    votes(where: { proposalId: $proposalId, tokenId_in: $tokenIds }) {
      id
      tokenId
    }
  }
`;

export const clientFactory = (uri: string) =>
  new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
