import { ChainsValues } from '@businessLogic/chains'
import { BadgeStatus } from '@subgraph/generated/subgraph'
import { Web3Provider } from '@ethersproject/providers'
import { BadgesService } from './services/badges/badges'
import { BadgeModelsService } from './services/badgeModels/badgeModels'
import { UsersService } from './services/users/users'
import { TheBadgeSDKPermissions } from '@businessLogic/sdk/permissions'
import { TheBadgeSDKConfig, TheBadgeSDKConfigOptions } from '@businessLogic/sdk/config'

class TheBadgeSDK extends TheBadgeSDKConfig {
  public readonly badges: BadgesService
  public readonly badgeModels: BadgeModelsService
  public readonly users: UsersService

  /**
   * Check if a chain is supported by this SDK by giving its id
   * @param chainId
   * @returns boolean
   */
  public static isChainSupported(chainId: ChainsValues): boolean {
    return super.isChainSupported(chainId)
  }

  /**
   * Constructor for TheBadgeSDK instance
   *
   * @param chainId is a number indicating the id of the chain to be used
   * @param options:
   * - rpcProviderConfig provides the configuration for the read only provider { providerName, token }
   * - web3Provider is an optional parameter with the web 3 provider to perform write requests to a contract
   * - devMode is an optional parameter to use DEV data if the selected chain supports it
   */
  constructor(chainId: ChainsValues, options: TheBadgeSDKConfigOptions) {
    super(chainId, options)

    // initialize services
    this.badges = new BadgesService(this.chainId, options)
    this.badgeModels = new BadgeModelsService(this.chainId, options)
    this.users = new UsersService(this.chainId, options)
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
  public getWeb3Provider(): Web3Provider | undefined {
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
   * Checks if devMode is set.
   * Important: this field only has an effect if the selected chain (from given chainId) is a testnet.
   *
   * For testnets:
   * If devMode is true, DEV environment data will be used.
   * If devMode is false, QA environment data will be used.
   *
   * For mainnets (prod env): always production data is used, no matter what value this flag has.
   *
   * @returns boolean
   */
  public isDevMode(): boolean {
    return this.devMode
  }
}

export default { TheBadgeSDK }

export type { TheBadgeSDKPermissions, ChainsValues, BadgeStatus }
