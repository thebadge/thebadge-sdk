import { ChainsValues } from '@businessLogic/chains'
import { Sdk } from '@subgraph/generated/subgraph'
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
import { Chains, getNetworkConfig } from '@config/web3'
import nullthrows from 'nullthrows'
import { getBadgeById } from './methods/badge/badge'

type TheBadgeSubgraph = Record<ChainsValues, Sdk>

enum TheBadgeSDKPermissions {
  READ_ONLY = 'Read only',
  READ_AND_WRITE = 'Read and write',
}

class TheBadgeSDK {
  chainId: ChainsValues
  readOnlyProvider: JsonRpcProvider
  web3Provider: Web3Provider | null

  /**
   * Constructor for TheBadgeSDK instance
   *
   * @param chainId is a number indicating the id of the chain to be used
   * @param web3Provider is an optional parameter with the web 3 provider to perform write requests to a contract
   */
  constructor(chainId: ChainsValues, web3Provider?: Web3Provider) {
    nullthrows(this.isChainSupported(chainId) ? chainId : null, `Chain ID ${chainId} is not supported`)

    this.chainId = chainId
    this.readOnlyProvider = new JsonRpcProvider(getNetworkConfig(chainId)?.rpcUrl, chainId)
    this.web3Provider = web3Provider || null
  }

  public getChainId(): ChainsValues {
    return this.chainId
  }

  public setWeb3Provider(web3Provider: Web3Provider) {
    this.web3Provider = web3Provider
  }

  public getWeb3Provider(): Web3Provider | null {
    return this.web3Provider
  }

  public isChainSupported(chainId: ChainsValues): boolean {
    return Object.values(Chains).includes(chainId)
  }

  /**
   *
   */
  public getCurrentPermissions(): TheBadgeSDKPermissions {
    return this.web3Provider ? TheBadgeSDKPermissions.READ_AND_WRITE : TheBadgeSDKPermissions.READ_ONLY
  }

  public async getBadgeById(badgeId: string) {
    return await getBadgeById(this.chainId, badgeId)
  }
}

export default { TheBadgeSDK }

export type { TheBadgeSubgraph, TheBadgeSDKPermissions }
