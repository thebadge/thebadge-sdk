import { ChainsValues } from '@businessLogic/chains'
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
import { getSubgraph } from '@subgraph/subgraph'
import { getSdk } from '@subgraph/generated/subgraph'
import nullthrows from 'nullthrows'
import { Chains } from '@utils/web3'

export abstract class TheBadgeSDKConfig {
  protected readonly chainId: ChainsValues
  protected readonly readOnlyProvider: JsonRpcProvider
  protected readonly web3Provider: Web3Provider | null
  protected readonly subgraph: ReturnType<typeof getSdk>

  protected constructor(chainId: ChainsValues, web3Provider: Web3Provider | null, readOnlyProvider: JsonRpcProvider) {
    nullthrows(TheBadgeSDKConfig.isChainSupported(chainId) ? chainId : null, `Chain ID ${chainId} is not supported`)
    this.chainId = chainId
    this.readOnlyProvider = readOnlyProvider
    this.web3Provider = web3Provider
    this.subgraph = getSubgraph(this.chainId)
  }

  protected static isChainSupported(chainId: ChainsValues): boolean {
    return Object.values(Chains).includes(chainId)
  }
}
