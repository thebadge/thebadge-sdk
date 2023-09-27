import { GraphQLClient } from 'graphql-request'
import nullthrows from 'nullthrows'
import endpoints from './endpoints'
import { SupportedChainsValues } from '@businessLogic/chains'
import { getSdk as getProdSdk } from '@subgraph/prod/generated/subgraph'
import { getSubgraphUrl } from '@subgraph/common'

export function getProdSubgraph(chainId: SupportedChainsValues): ReturnType<typeof getProdSdk> {
  const subgraphUrl = getSubgraphUrl(endpoints, chainId, 'staging')
  const sdkByNetworkConfig = getProdSdk(new GraphQLClient(subgraphUrl))
  return nullthrows(sdkByNetworkConfig, `No dev SDK for chain id ${chainId}`)
}
