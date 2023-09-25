import {
  ChainConfig,
  getNetworkConfig,
  RPCProvider,
  RPCProviderConfig,
  SupportedChains,
  SupportedChainsValues,
} from '@businessLogic/chains'
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
import nullthrows from 'nullthrows'
import { getDevSubgraph } from '@subgraph/dev/subgraph'
import { getStagingSubgraph } from '@subgraph/staging/subgraph'
import { getProdSubgraph } from '@subgraph/prod/subgraph'
import { Sdk } from '@subgraph/common'
import { contracts } from '../../contracts/contracts'
import { TheBadge__factory, TheBadge } from '../../contracts/generated/typechain'

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
  protected readonly subgraph: ReturnType<Sdk>
  protected readonly devMode: boolean

  protected constructor(chainId: SupportedChainsValues, config: TheBadgeSDKConfigOptions) {
    nullthrows(TheBadgeSDKConfig.isChainSupported(chainId) ? chainId : null, `Chain ID ${chainId} is not supported`)

    const networkConfig = getNetworkConfig(chainId, config.rpcProviderConfig)
    const defaultReadOnlyProvider = new JsonRpcProvider(networkConfig?.rpcUrl, chainId)
    this.chainId = chainId
    this.rpcProviderName = config.rpcProviderConfig.name
    this.readOnlyProvider = defaultReadOnlyProvider
    this.web3Provider = config.web3Provider
    this.devMode = !!config.devMode
    this.subgraph = this.getSubgraph(networkConfig)
  }

  protected static getSupportedChainIds(): Array<number> {
    return Object.values(SupportedChains) as Array<number>
  }

  protected static isChainSupported(chainId: number): boolean {
    return this.getSupportedChainIds().includes(chainId)
  }

  protected getTBContractInstance(userAddress: string): TheBadge {
    if (!this.web3Provider) {
      throw new Error('You need to initialize a web3Provider to perform this transaction')
    }
    return TheBadge__factory.connect(
      contracts.TheBadge.address[this.chainId],
      this.web3Provider?.getSigner(userAddress),
    )
  }

  private getSubgraph(networkConfig: ChainConfig): ReturnType<Sdk> {
    if (networkConfig.isTestnet) {
      if (this.devMode) {
        return getDevSubgraph(this.chainId)
      } else {
        return getStagingSubgraph(this.chainId)
      }
    } else {
      return getProdSubgraph(this.chainId)
    }
  }
}
