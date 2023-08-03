import { ChainsValues } from '@businessLogic/chains'
import { BadgeStatus } from '@subgraph/generated/subgraph'
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
import { getNetworkConfig } from '@utils/web3'
import { BadgesService } from './services/badges/badges'
import { BadgeModelsService } from './services/badgeModels/badgeModels'
import { UsersService } from './services/users/users'
import { TheBadgeSDKPermissions } from '@businessLogic/sdk/permissions'
import { TheBadgeSDKConfig } from '@businessLogic/sdk/config'

class TheBadgeSDK extends TheBadgeSDKConfig {
  public readonly badges: BadgesService
  public readonly badgeModels: BadgeModelsService
  public readonly users: UsersService

  /**
   * Constructor for TheBadgeSDK instance
   *
   * @param chainId is a number indicating the id of the chain to be used
   * @param web3Provider is an optional parameter with the web 3 provider to perform write requests to a contract
   */
  constructor(chainId: ChainsValues, web3Provider?: Web3Provider) {
    const defaultReadOnlyProvider = new JsonRpcProvider(getNetworkConfig(chainId)?.rpcUrl, chainId)
    super(chainId, web3Provider || null, defaultReadOnlyProvider)

    // initialize services
    this.badges = new BadgesService(this.chainId, this.web3Provider, this.readOnlyProvider)
    this.badgeModels = new BadgeModelsService(this.chainId, this.web3Provider, this.readOnlyProvider)
    this.users = new UsersService(this.chainId, this.web3Provider, this.readOnlyProvider)
  }

  /**
   * Get id of the chain used on this instance
   * @returns number
   */
  public getChainId(): ChainsValues {
    return this.chainId
  }

  /**
   * Get the given web3Provider
   * @returns Web3Provider | null
   */
  public getWeb3Provider(): Web3Provider | null {
    return this.web3Provider
  }

  /**
   * Get current permissions, options:
   * @returns READ_ONLY if no web3Provider was given
   * @returns READ_AND_WRITE if a web3Provider was given
   */
  public getPermissions(): TheBadgeSDKPermissions {
    return this.web3Provider ? TheBadgeSDKPermissions.READ_AND_WRITE : TheBadgeSDKPermissions.READ_ONLY
  }

  /**
   * Check if a chain is supported by this SDK by giving its id
   * @param chainId
   * @returns boolean
   */
  public static isChainSupported(chainId: ChainsValues): boolean {
    return super.isChainSupported(chainId)
  }
}

export default { TheBadgeSDK }

export type { TheBadgeSDKPermissions, ChainsValues, BadgeStatus }
