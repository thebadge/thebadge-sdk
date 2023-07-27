import { GraphQLClient } from 'graphql-request'
import nullthrows from 'nullthrows'

import endpoints from '@subgraph/subgraph-endpoints.json'
import { ChainsValues } from '@businessLogic/chains'
import { getSdk } from '@subgraph/generated/subgraph'

enum SubgraphName {
  TheBadge = 'theBadge',
}

function getSubgraphSdkByNetwork(chainId: ChainsValues, subgraphName: SubgraphName): ReturnType<typeof getSdk> {
  const sdkByNetworkConfig = getSdk(new GraphQLClient(endpoints[chainId][subgraphName]))
  return nullthrows(sdkByNetworkConfig, `No sdk for chain id: ${chainId}`)
}

export function getSubgraph(chainId: ChainsValues): ReturnType<typeof getSdk> {
  return getSubgraphSdkByNetwork(chainId, SubgraphName.TheBadge)
}
