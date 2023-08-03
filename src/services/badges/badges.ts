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
  Badge_Filter,
  BadgesQuery,
  BadgeMetadataByIdQuery,
  BadgesMetadataUserHasChallengedQuery,
} from '@subgraph/generated/subgraph'
import { TheBadgeSDKConfig } from '@businessLogic/sdk/config'

interface BadgesServiceMethods {
  get(searchParams?: { first: number; skip: number; filter?: Badge_Filter }): Promise<BadgesQuery>
  getById(badgeId: string): Promise<BadgeByIdQuery>
  getByBadgeModelId(badgeModelId: string): Promise<BadgeByBadgeModelIdQuery>
  getByOwnerUser(userAddress: string): Promise<BadgesByUserQuery>
  getWithInReviewStatus(dateTimestamp: BigInteger): Promise<BadgesInReviewQuery>
  getWithChallengedStatus(dateTimestamp: BigInteger): Promise<BadgesChallengedQuery>
  getWithInReviewOrChallengedStatus(dateTimestamp: BigInteger): Promise<BadgesInReviewOrChallengedQuery>
  getAbleForUserToReview(userAddress: string, dateTimestamp: BigInteger): Promise<BadgesUserCanReviewQuery>
  getIdsOwnedByUserWithStatuses(userAddress: string, statuses: BadgeStatus[]): Promise<BadgeIdsOfUserByStatusesQuery>
  getIdsNotOwnedByUserWithStatuses(
    userAddress: string,
    statuses: BadgeStatus[],
  ): Promise<BadgeIdsNotOfUserByStatusesQuery>
  getMetadataOfBadgeById(badgeMetadataId: string): Promise<BadgeMetadataByIdQuery>
  getMetadataOfBadgesUserHasChallenged(userAddress: string): Promise<BadgesMetadataUserHasChallengedQuery>
  // mint(userAddress: string, badgeModelId: string, evidences: List<Evidence>) TODO coming soon
  // challenge(userAddress: string, badgeId: string, evidences?: List<Evidence>) TODO coming soon
}

export class BadgesService extends TheBadgeSDKConfig implements BadgesServiceMethods {
  public async get(searchParams?: { first: number; skip: number; filter?: Badge_Filter }): Promise<BadgesQuery> {
    return await this.subgraph.badges({
      first: searchParams?.first || 100,
      skip: searchParams?.skip || 0,
      filter: searchParams?.filter,
    })
  }

  public async getById(badgeId: string): Promise<BadgeByIdQuery> {
    return await this.subgraph.badgeById({ id: badgeId })
  }

  public async getByBadgeModelId(badgeModelId: string): Promise<BadgeByBadgeModelIdQuery> {
    return await this.subgraph.badgeByBadgeModelId({ id: badgeModelId })
  }

  public async getByOwnerUser(userAddress: string): Promise<BadgesByUserQuery> {
    return await this.subgraph.badgesByUser({ userAddress })
  }

  public async getWithInReviewStatus(dateTimestamp: BigInteger): Promise<BadgesInReviewQuery> {
    return await this.subgraph.badgesInReview({ dateTimestamp })
  }

  public async getWithChallengedStatus(dateTimestamp: BigInteger): Promise<BadgesChallengedQuery> {
    return await this.subgraph.badgesChallenged({ dateTimestamp })
  }

  public async getWithInReviewOrChallengedStatus(dateTimestamp: BigInteger): Promise<BadgesInReviewOrChallengedQuery> {
    return await this.subgraph.badgesInReviewOrChallenged({ dateTimestamp })
  }

  public async getAbleForUserToReview(
    userAddress: string,
    dateTimestamp: BigInteger,
  ): Promise<BadgesUserCanReviewQuery> {
    return await this.subgraph.badgesUserCanReview({ userAddress, dateTimestamp })
  }

  public async getIdsOwnedByUserWithStatuses(
    userAddress: string,
    statuses: BadgeStatus[],
  ): Promise<BadgeIdsOfUserByStatusesQuery> {
    return await this.subgraph.badgeIdsOfUserByStatuses({ userAddress, statuses })
  }

  public async getIdsNotOwnedByUserWithStatuses(
    userAddress: string,
    statuses: BadgeStatus[],
  ): Promise<BadgeIdsNotOfUserByStatusesQuery> {
    return await this.subgraph.badgeIdsNotOfUserByStatuses({ userAddress, statuses })
  }

  public async getMetadataOfBadgeById(badgeMetadataId: string): Promise<BadgeMetadataByIdQuery> {
    return await this.subgraph.badgeMetadataById({ id: badgeMetadataId })
  }

  public async getMetadataOfBadgesUserHasChallenged(
    userAddress: string,
  ): Promise<BadgesMetadataUserHasChallengedQuery> {
    return await this.subgraph.badgesMetadataUserHasChallenged({ userAddress })
  }
}
