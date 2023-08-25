import {
  BadgeByBadgeModelIdQuery,
  BadgeByIdQuery,
  BadgesByUserQuery,
  BadgesChallengedQuery,
  BadgesInReviewOrChallengedQuery,
  BadgesInReviewQuery,
  BadgeStatus,
  BadgesUserCanReviewQuery,
  BadgesOfUserByStatusesQuery,
  BadgesNotOfUserByStatusesQuery,
  Badge_Filter,
  BadgesQuery,
  BadgeMetadataByIdQuery,
  BadgesMetadataUserHasChallengedQuery,
} from '@subgraph/generated/subgraph'
import { TheBadgeSDKConfig } from '@businessLogic/sdk/config'
import { getFromIPFS } from '@utils/ipfs'

interface BadgesServiceMethods {
  get(searchParams?: { first: number; skip: number; filter?: Badge_Filter }): Promise<BadgesQuery>
  getById(badgeId: string): Promise<BadgeByIdQuery>
  getByBadgeModelId(badgeModelId: string): Promise<BadgeByBadgeModelIdQuery>
  getByOwnerUser(userAddress: string): Promise<BadgesByUserQuery>
  getWithInReviewStatus(dateTimestamp: BigInteger): Promise<BadgesInReviewQuery>
  getWithChallengedStatus(dateTimestamp: BigInteger): Promise<BadgesChallengedQuery>
  getWithInReviewOrChallengedStatus(dateTimestamp: BigInteger): Promise<BadgesInReviewOrChallengedQuery>
  getAbleForUserToReview(userAddress: string, dateTimestamp: BigInteger): Promise<BadgesUserCanReviewQuery>
  getOwnedByUserWithStatuses(userAddress: string, statuses: BadgeStatus[]): Promise<BadgesOfUserByStatusesQuery>
  getNotOwnedByUserWithStatuses(userAddress: string, statuses: BadgeStatus[]): Promise<BadgesNotOfUserByStatusesQuery>
  getMetadataOfBadge(badgeId: string): Promise<BadgeMetadataByIdQuery>
  getMetadataOfBadgesUserHasChallenged(userAddress: string): Promise<BadgesMetadataUserHasChallengedQuery>
  getImageIPFSHashOfBadge(badgeId: string): Promise<string>
  // mint(userAddress: string, badgeModelId: string, evidences: List<Evidence>) TODO coming soon
  // challenge(userAddress: string, badgeId: string, evidences?: List<Evidence>) TODO coming soon
}

export class BadgesService extends TheBadgeSDKConfig implements BadgesServiceMethods {
  /**
   * Obtain badges
   *
   * @param searchParams:
   * - first: max. amount of items that will return (default value: 100)
   * - skip: amount of items that will skip in the order (default value: 0)
   * - filter: customized badge filtering criteria
   */
  public async get(searchParams?: { first: number; skip: number; filter?: Badge_Filter }): Promise<BadgesQuery> {
    return await this.subgraph.badges({
      first: searchParams?.first || 100,
      skip: searchParams?.skip || 0,
      filter: searchParams?.filter,
    })
  }

  /**
   * Obtain a badge giving its id
   * @param badgeId
   */
  public async getById(badgeId: string): Promise<BadgeByIdQuery> {
    return await this.subgraph.badgeById({ id: badgeId })
  }

  /**
   * Obtain badges with a specific badge model
   *
   * @param badgeModelId
   */
  public async getByBadgeModelId(badgeModelId: string): Promise<BadgeByBadgeModelIdQuery> {
    return await this.subgraph.badgeByBadgeModelId({ id: badgeModelId })
  }

  /**
   * Obtain badges owned by a user giving the user's address
   *
   * @param userAddress
   */
  public async getByOwnerUser(userAddress: string): Promise<BadgesByUserQuery> {
    return await this.subgraph.badgesByUser({ userAddress })
  }

  /**
   * Obtain badges with status 'Requested'
   *
   * @param dateTimestamp
   */
  public async getWithInReviewStatus(dateTimestamp: BigInteger): Promise<BadgesInReviewQuery> {
    return await this.subgraph.badgesInReview({ dateTimestamp })
  }

  /**
   * Obtain badges with status 'Challenged'
   *
   * @param dateTimestamp
   */
  public async getWithChallengedStatus(dateTimestamp: BigInteger): Promise<BadgesChallengedQuery> {
    return await this.subgraph.badgesChallenged({ dateTimestamp })
  }

  /**
   * Obtain badges with status 'Requested' or 'Challenged'
   *
   * @param dateTimestamp
   */
  public async getWithInReviewOrChallengedStatus(dateTimestamp: BigInteger): Promise<BadgesInReviewOrChallengedQuery> {
    return await this.subgraph.badgesInReviewOrChallenged({ dateTimestamp })
  }

  /**
   * Obtain badges that a specific user can review at a specific moment (date timestamp)
   *
   * @param userAddress
   * @param dateTimestamp
   */
  public async getAbleForUserToReview(
    userAddress: string,
    dateTimestamp: BigInteger,
  ): Promise<BadgesUserCanReviewQuery> {
    return await this.subgraph.badgesUserCanReview({ userAddress, dateTimestamp })
  }

  /**
   * Obtain badges owned by a user and with one status contained in a given list
   *
   * @param userAddress
   * @param statuses
   */
  public async getOwnedByUserWithStatuses(
    userAddress: string,
    statuses: BadgeStatus[],
  ): Promise<BadgesOfUserByStatusesQuery> {
    return await this.subgraph.badgesOfUserByStatuses({ userAddress, statuses })
  }

  /**
   * Obtain badges not owned by a user and with one status contained in a given list
   *
   * @param userAddress
   * @param statuses
   */
  public async getNotOwnedByUserWithStatuses(
    userAddress: string,
    statuses: BadgeStatus[],
  ): Promise<BadgesNotOfUserByStatusesQuery> {
    return await this.subgraph.badgesNotOfUserByStatuses({ userAddress, statuses })
  }

  /**
   * Get metadata of a badge
   *
   * @param badgeId
   */
  public async getMetadataOfBadge(badgeId: string): Promise<BadgeMetadataByIdQuery> {
    return await this.subgraph.badgeMetadataById({ id: badgeId })
  }

  /**
   * Get metadata of badges that a specific user has challenged
   *
   * @param userAddress
   */
  public async getMetadataOfBadgesUserHasChallenged(
    userAddress: string,
  ): Promise<BadgesMetadataUserHasChallengedQuery> {
    return await this.subgraph.badgesMetadataUserHasChallenged({ userAddress })
  }

  /**
   * Get IPFS hash of the visual image of a certain badge
   *
   * @param badgeId
   * @returns a string or null if not found
   */
  public async getImageIPFSHashOfBadge(badgeId: string): Promise<string> {
    // get badge with the given id
    const badgeResponse = await this.getById(badgeId)

    // take ipfs uri from badge object
    const ipfsDataUri = badgeResponse?.badge?.uri
    if (!ipfsDataUri) {
      throw new Error('Missing uri for the given badge id, provide a valid badge id.')
    }

    // obtain badge image data
    const { result, error } = await getFromIPFS<{ image: { ipfsHash: string } }>(ipfsDataUri)
    const badgeImageIPFSHash = result?.content?.image?.ipfsHash

    if (error || !badgeImageIPFSHash) {
      throw new Error('Error obtaining badge image data from IPFS, please retry.')
    }

    // return badge image ipfs hash
    return badgeImageIPFSHash
  }
}
