import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const ownedBagsQuery = (wallet: string) => gql`
{
  wallet(id: "${wallet.toLowerCase()}") {
    bags {
      id
    }
  }
}
`;

export const clientFactory = (uri: string) =>
  new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
