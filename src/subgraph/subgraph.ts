import { GraphQLClient } from 'graphql-request'
import nullthrows from 'nullthrows'

import endpoints, { SubgraphName } from '@subgraph/endpoints'
import { SupportedChainsValues } from '@businessLogic/chains'
import { getSdk } from '@subgraph/generated/subgraph'

function getSubgraphSdkByNetwork(
  chainId: SupportedChainsValues,
  subgraphName: SubgraphName,
): ReturnType<typeof getSdk> {
  const subgraphUrl = endpoints[chainId].urls[subgraphName] || ''
  const sdkByNetworkConfig = getSdk(new GraphQLClient(subgraphUrl))
  return nullthrows(sdkByNetworkConfig, `No sdk for chain id ${chainId} and subgraphName ${subgraphName}`)
}

export function getSubgraph(chainId: SupportedChainsValues, devMode = false): ReturnType<typeof getSdk> {
  const subgraphName = devMode ? SubgraphName.TheBadgeDEV : SubgraphName.TheBadge
  return getSubgraphSdkByNetwork(chainId, subgraphName)
}
