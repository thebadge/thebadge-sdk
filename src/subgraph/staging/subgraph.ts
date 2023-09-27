import { GraphQLClient } from 'graphql-request'
import nullthrows from 'nullthrows'

import endpoints from './endpoints'
import { SupportedChainsValues } from '@businessLogic/chains'
import { getSdk as getStagingSdk } from '@subgraph/staging/generated/subgraph'
import { getSubgraphUrl } from '@subgraph/common'

export function getStagingSubgraph(chainId: SupportedChainsValues): ReturnType<typeof getStagingSdk> {
  const subgraphUrl = getSubgraphUrl(endpoints, chainId, 'staging')
  const sdkByNetworkConfig = getStagingSdk(new GraphQLClient(subgraphUrl))
  return nullthrows(sdkByNetworkConfig, `No dev SDK for chain id ${chainId}`)
}
