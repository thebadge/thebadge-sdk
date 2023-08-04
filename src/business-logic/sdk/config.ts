import { ChainsValues } from '@businessLogic/chains'
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
import { getSubgraph } from '@subgraph/subgraph'
import { getSdk } from '@subgraph/generated/subgraph'
import nullthrows from 'nullthrows'
import { Chains, getNetworkConfig, RPCProviderConfig } from '@utils/web3'

export type TheBadgeSDKConfigOptions = {
  rpcProviderConfig: RPCProviderConfig
  web3Provider?: Web3Provider
  devMode?: boolean
}

export abstract class TheBadgeSDKConfig {
  protected readonly chainId: ChainsValues
  protected readonly readOnlyProvider: JsonRpcProvider
  protected readonly web3Provider: Web3Provider | undefined
  protected readonly subgraph: ReturnType<typeof getSdk>
  protected readonly devMode: boolean

  protected constructor(chainId: ChainsValues, options: TheBadgeSDKConfigOptions) {
    nullthrows(TheBadgeSDKConfig.isChainSupported(chainId) ? chainId : null, `Chain ID ${chainId} is not supported`)
    const defaultReadOnlyProvider = new JsonRpcProvider(
      getNetworkConfig(chainId, options.rpcProviderConfig)?.rpcUrl,
      chainId,
    )
    this.chainId = chainId
    this.readOnlyProvider = defaultReadOnlyProvider
    this.web3Provider = options.web3Provider
    this.devMode = !!options.devMode

    this.subgraph = getSubgraph(this.chainId, this.devMode)
  }

  protected static isChainSupported(chainId: ChainsValues): boolean {
    return Object.values(Chains).includes(chainId)
  }
}
