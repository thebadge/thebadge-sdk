import { ChainsValues } from '@businessLogic/chains'
import {
  BadgeByBadgeModelIdQuery,
  BadgeByIdQuery,
  BadgesByUserQuery,
  BadgesChallengedQuery,
  BadgesInReviewOrChallengedQuery,
  BadgesInReviewQuery,
  BadgeStatus,
  BadgesUserCanReviewQuery,
  BadgeIdsOfUserByStatusesQuery,
  BadgeIdsNotOfUserByStatusesQuery,
} from '@subgraph/generated/subgraph'
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
import { Chains, getNetworkConfig } from '@utils/web3'
import nullthrows from 'nullthrows'
import {
  getBadgeByBadgeModelId,
  getBadgeById,
  getBadgesByUser,
  getBadgesChallenged,
  getBadgesInReview,
  getBadgesInReviewOrChallenged,
  getBadgesUserCanReview,
  getBadgeIdsOfUserByStatuses,
  getBadgeIdsNotOfUserByStatuses,
} from './methods/badge/badge'

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
   * Get current permissions, options:
   * - READ_ONLY
   * - READ_AND_WRITE
   */
  public getCurrentPermissions(): TheBadgeSDKPermissions {
    return this.web3Provider ? TheBadgeSDKPermissions.READ_AND_WRITE : TheBadgeSDKPermissions.READ_ONLY
  }

  /**
   * Get badge with a badge id
   * @param badgeId
   */
  public async getBadgeById(badgeId: string): Promise<BadgeByIdQuery> {
    return await getBadgeById(this.chainId, badgeId)
  }

  /**
   * Get all badges with a specific badge model id
   * @param badgeModelId
   */
  public async getBadgeByBadgeModelId(badgeModelId: string): Promise<BadgeByBadgeModelIdQuery> {
    return await getBadgeByBadgeModelId(this.chainId, badgeModelId)
  }

  /**
   * Get all badges of a user
   * @param userAddress
   */
  public async getBadgesByUser(userAddress: string): Promise<BadgesByUserQuery> {
    return await getBadgesByUser(this.chainId, userAddress)
  }

  /**
   * Get all badges with status in review
   * @param dateTimestamp
   */
  public async getBadgesInReview(dateTimestamp: BigInteger): Promise<BadgesInReviewQuery> {
    return await getBadgesInReview(this.chainId, dateTimestamp)
  }

  /**
   * Get all badges with status challenged
   * @param dateTimestamp
   */
  public async getBadgesChallenged(dateTimestamp: BigInteger): Promise<BadgesChallengedQuery> {
    return await getBadgesChallenged(this.chainId, dateTimestamp)
  }

  /**
   * Get all badges with status in review or challenged
   * @param dateTimestamp
   */
  public async getBadgesInReviewOrChallenged(dateTimestamp: BigInteger): Promise<BadgesInReviewOrChallengedQuery> {
    return await getBadgesInReviewOrChallenged(this.chainId, dateTimestamp)
  }

  /**
   * Get all badges that a user can review
   * @param userAddress
   * @param dateTimestamp
   */
  public async getBadgesUserCanReview(
    userAddress: string,
    dateTimestamp: BigInteger,
  ): Promise<BadgesUserCanReviewQuery> {
    return await getBadgesUserCanReview(this.chainId, userAddress, dateTimestamp)
  }

  /**
   * Get all ids of badges of a given user filtered by statuses
   * @param userAddress
   * @param statuses
   */
  public async getBadgeIdsOfUserByStatuses(
    userAddress: string,
    statuses: BadgeStatus[],
  ): Promise<BadgeIdsOfUserByStatusesQuery> {
    return await getBadgeIdsOfUserByStatuses(this.chainId, userAddress, statuses)
  }

  /**
   * Get all ids of badges that are not of a given user filtered by statuses
   * @param userAddress
   * @param statuses
   */
  public async getBadgeIdsNotOfUserByStatuses(
    userAddress: string,
    statuses: BadgeStatus[],
  ): Promise<BadgeIdsNotOfUserByStatusesQuery> {
    return await getBadgeIdsNotOfUserByStatuses(this.chainId, userAddress, statuses)
  }
}

export default { TheBadgeSDK }

export type { TheBadgeSDKPermissions, ChainsValues, BadgeStatus }
