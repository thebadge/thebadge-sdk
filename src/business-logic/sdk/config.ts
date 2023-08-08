import {
  getNetworkConfig,
  RPCProvider,
  RPCProviderConfig,
  SupportedChains,
  SupportedChainsValues,
} from '@businessLogic/chains'
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
import { getSubgraph } from '@subgraph/subgraph'
import { getSdk } from '@subgraph/generated/subgraph'
import nullthrows from 'nullthrows'

export type TheBadgeSDKConfigOptions = {
  rpcProviderConfig: RPCProviderConfig
  web3Provider?: Web3Provider
  devMode?: boolean
}

export abstract class TheBadgeSDKConfig {
  protected readonly chainId: SupportedChainsValues
  protected readonly rpcProviderName: RPCProvider
  protected readonly readOnlyProvider: JsonRpcProvider
  protected readonly web3Provider: Web3Provider | undefined
  protected readonly subgraph: ReturnType<typeof getSdk>
  protected readonly devMode: boolean

  protected constructor(chainId: SupportedChainsValues, config: TheBadgeSDKConfigOptions) {
    nullthrows(TheBadgeSDKConfig.isChainSupported(chainId) ? chainId : null, `Chain ID ${chainId} is not supported`)
    const defaultReadOnlyProvider = new JsonRpcProvider(
      getNetworkConfig(chainId, config.rpcProviderConfig)?.rpcUrl,
      chainId,
    )
    this.chainId = chainId
    this.rpcProviderName = config.rpcProviderConfig.name
    this.readOnlyProvider = defaultReadOnlyProvider
    this.web3Provider = config.web3Provider
    this.devMode = !!config.devMode

    this.subgraph = getSubgraph(this.chainId, this.devMode)
  }

  protected static isChainSupported(chainId: number): boolean {
    return (Object.values(SupportedChains) as number[]).includes(chainId)
  }
}
