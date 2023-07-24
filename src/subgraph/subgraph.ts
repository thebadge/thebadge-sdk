import { GraphQLClient } from 'graphql-request'
import nullthrows from 'nullthrows'

import endpoints from '@subgraph/subgraph-endpoints.json'
import { ChainsValues } from '@businessLogic/chains'
import { SdkWithHooks, getSdkWithHooks } from '@subgraph/generated/subgraph'

export type AllSDK = Record<ChainsValues, SdkWithHooks>

export enum SubgraphName {
  TheBadge = 'theBadge',
}

export function getSubgraphSdkByNetwork(
  chainId: ChainsValues,
  subgraphName: SubgraphName,
): ReturnType<typeof getSdkWithHooks> {
  const networkConfig = getSdkWithHooks(new GraphQLClient(endpoints[chainId][subgraphName]))
  return nullthrows(networkConfig, `No sdk for chain id: ${chainId}`)
}
