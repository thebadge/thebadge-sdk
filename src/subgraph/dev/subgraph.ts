import { GraphQLClient } from 'graphql-request'
import nullthrows from 'nullthrows'
import endpoints from './endpoints'
import { SupportedChainsValues } from '@businessLogic/chains'
import { getSdk as getDevSdk } from '@subgraph/dev/generated/subgraph'
import { getSubgraphUrl } from '@subgraph/common'

export function getDevSubgraph(chainId: SupportedChainsValues): ReturnType<typeof getDevSdk> {
  const subgraphUrl = getSubgraphUrl(endpoints, chainId, 'dev')
  const sdkByNetworkConfig = getDevSdk(new GraphQLClient(subgraphUrl))
  return nullthrows(sdkByNetworkConfig, `TheBadge SDK: No dev SDK for chain id ${chainId}`)
}
