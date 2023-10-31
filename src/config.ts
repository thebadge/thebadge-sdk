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
import { contracts } from './contracts/contracts'
import { TheBadge__factory, TheBadge } from './contracts/generated/typechain'
import fs from 'fs'
import { Sdk } from '@subgraph/common'
import * as path from 'path'

export type TheBadgeSDKConfigOptions = {
  rpcProviderConfig: RPCProviderConfig
  web3Provider?: Web3Provider
  devMode?: boolean
}

export enum TheBadgeSDKEnv {
  DEVELOPMENT = 'DEVELOPMENT',
  STAGING = 'STAGING',
  PRODUCTION = 'PRODUCTION',
}

export abstract class TheBadgeSDKConfig {
  protected readonly chainId: SupportedChainsValues
  protected readonly rpcProviderName: RPCProvider
  protected readonly readOnlyProvider: JsonRpcProvider
  protected readonly web3Provider: Web3Provider | undefined
  protected readonly subgraph: ReturnType<Sdk>
  protected readonly env: TheBadgeSDKEnv

  protected constructor(chainId: SupportedChainsValues, config: TheBadgeSDKConfigOptions) {
    nullthrows(
      TheBadgeSDKConfig.isChainSupported(chainId) ? chainId : null,
      `TheBadge SDK: Chain ID ${chainId} is not supported`,
    )

    const networkConfig = getNetworkConfig(chainId, config.rpcProviderConfig)
    const defaultReadOnlyProvider = new JsonRpcProvider(networkConfig?.rpcUrl, chainId)
    this.chainId = chainId
    this.rpcProviderName = config.rpcProviderConfig.name
    this.readOnlyProvider = defaultReadOnlyProvider
    this.web3Provider = config.web3Provider
    this.env = this.resolveEnv(!!config.devMode, networkConfig)
    this.subgraph = this.getSubgraph()
  }

  protected static getSupportedChainIds(): Array<number> {
    return Object.values(SupportedChains) as Array<number>
  }

  protected static isChainSupported(chainId: number): boolean {
    return this.getSupportedChainIds().includes(chainId)
  }

  protected getTBContractInstance(userAddress: string): TheBadge {
    if (!this.web3Provider) {
      throw new Error('TheBadge SDK: You need to initialize a web3Provider to perform this transaction')
    }
    return TheBadge__factory.connect(
      contracts.TheBadge.address[this.chainId],
      this.web3Provider?.getSigner(userAddress),
    )
  }

  private getSubgraph(): ReturnType<Sdk> {
    let isBuild = false
    if (fs.existsSync(path.resolve(__dirname, './subgraph/fakeGeneratedSubgraph.d.ts'))) {
      isBuild = true
    }

    const filePath = (file: string) => {
      return isBuild ? path.resolve(__dirname, file + '.d.ts') : path.resolve(__dirname, file + '.ts')
    }

    const fakeGeneratedSubgraphContent = fs.readFileSync(filePath('./subgraph/fakeGeneratedSubgraph'))
    let envGeneratedSubgraphContent

    switch (this.env) {
      case TheBadgeSDKEnv.DEVELOPMENT: // dev subgraph
        envGeneratedSubgraphContent = fs.readFileSync(filePath('./subgraph/dev/generated/subgraph'))
        if (envGeneratedSubgraphContent.equals(fakeGeneratedSubgraphContent)) {
          throw new Error('TheBadge SDK: No dev subgraph')
        }
        return getDevSubgraph(this.chainId)

      case TheBadgeSDKEnv.STAGING: // staging subgraph
        envGeneratedSubgraphContent = fs.readFileSync(filePath('./subgraph/staging/generated/subgraph'))
        if (envGeneratedSubgraphContent.equals(fakeGeneratedSubgraphContent)) {
          throw new Error('TheBadge SDK: No staging subgraph')
        }
        return getStagingSubgraph(this.chainId)

      case TheBadgeSDKEnv.PRODUCTION: // prod subgraph
        envGeneratedSubgraphContent = fs.readFileSync(filePath('./subgraph/prod/generated/subgraph'))
        if (envGeneratedSubgraphContent.equals(fakeGeneratedSubgraphContent)) {
          throw new Error('TheBadge SDK: No prod subgraph')
        }
        return getProdSubgraph(this.chainId)
    }
  }

  private resolveEnv(devMode: boolean, networkConfig: ChainConfig): TheBadgeSDKEnv {
    return networkConfig.isTestnet
      ? devMode
        ? TheBadgeSDKEnv.DEVELOPMENT
        : TheBadgeSDKEnv.STAGING
      : TheBadgeSDKEnv.PRODUCTION
  }
}
