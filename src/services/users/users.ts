import {
  Badge_Filter,
  UserBadgesFilteredQuery,
  UserQuery,
  CreatorUsersIdQuery,
  UsersIdQuery,
  UserBadgesByModelIdQuery,
  UserCreatedBadgeModelsQuery,
  UserBadgesChallengedQuery,
  UserBadgesInReviewQuery,
  UserBadgesInReviewOrChallengedQuery,
  UserBadgesExpiringBetweenQuery,
} from '@subgraph/prod/generated/subgraph'
import { TheBadgeSDKConfig } from '@businessLogic/sdk/config'

interface UsersServiceMethods {
  getIds(searchParams?: { first: number; skip: number }): Promise<UsersIdQuery>
  getCreatorsIds(searchParams?: { first: number; skip: number }): Promise<CreatorUsersIdQuery>
  getByAddress(userAddress: string): Promise<UserQuery>
  getBadgesOfUserFiltered(userAddress: string, badgesFilter: Badge_Filter): Promise<UserBadgesFilteredQuery>
  getBadgesOfUserByModelId(userAddress: string, modelId: string): Promise<UserBadgesByModelIdQuery>
  getBadgeModelsCreatedByUser(userAddress: string): Promise<UserCreatedBadgeModelsQuery>
  getBadgesOfUserWithInReviewStatus(userAddress: string, dateTimestamp: BigInteger): Promise<UserBadgesInReviewQuery>
  getBadgesOfUserWithChallengedStatus(
    userAddress: string,
    dateTimestamp: BigInteger,
  ): Promise<UserBadgesChallengedQuery>
  getBadgesOfUserWithInReviewOrChallengedStatus(
    userAddress: string,
    dateTimestamp: BigInteger,
  ): Promise<UserBadgesInReviewOrChallengedQuery>
  getBadgesOfUserExpiringBetweenDates(
    userAddress: string,
    startDateTimestamp: BigInteger,
    endDateTimestamp: BigInteger,
  ): Promise<UserBadgesExpiringBetweenQuery>
  // registerAsCreator(userAddress: string, params: RegisterCreatorParams) TODO coming soon
}

export class UsersService extends TheBadgeSDKConfig implements UsersServiceMethods {
  /**
   * Get ids of users
   *
   * @param searchParams:
   * - first: max. amount of items that will return (default value: 100)
   * - skip: amount of items that will skip in the order (default value: 0)
   */
  async getIds(searchParams?: { first: number; skip: number }): Promise<UsersIdQuery> {
    return await this.subgraph.usersId({
      first: searchParams?.first || 100,
      skip: searchParams?.skip || 0,
    })
  }

  /**
   * Get ids of users with creator role
   *
   * @param searchParams:
   * - first: max. amount of items that will return (default value: 100)
   * - skip: amount of items that will skip in the order (default value: 0)
   */
  async getCreatorsIds(searchParams?: { first: number; skip: number }): Promise<CreatorUsersIdQuery> {
    return await this.subgraph.creatorUsersId({
      first: searchParams?.first || 100,
      skip: searchParams?.skip || 0,
    })
  }

  /**
   * Obtain a user giving its address
   *
   * @param userAddress
   */
  async getByAddress(userAddress: string): Promise<UserQuery> {
    return await this.subgraph.user({ userAddress })
  }

  /**
   * Obtain badges of a user giving a custom filter
   *
   * @param userAddress
   * @param badgesFilter
   */
  async getBadgesOfUserFiltered(userAddress: string, badgesFilter: Badge_Filter): Promise<UserBadgesFilteredQuery> {
    return await this.subgraph.userBadgesFiltered({ userAddress, badgesFilter })
  }

  /**
   * Obtain badges of user with a specific badge model
   *
   * @param userAddress
   * @param badgeModelId
   */
  async getBadgesOfUserByModelId(userAddress: string, badgeModelId: string): Promise<UserBadgesByModelIdQuery> {
    return await this.subgraph.userBadgesByModelId({ userAddress, modelId: badgeModelId })
  }

  /**
   * Obtain badge models created by a user
   *
   * @param userAddress
   */
  async getBadgeModelsCreatedByUser(userAddress: string): Promise<UserCreatedBadgeModelsQuery> {
    return await this.subgraph.userCreatedBadgeModels({ userAddress })
  }

  /**
   * Obtain badges of a user with status 'Requested'
   *
   * @param userAddress
   * @param dateTimestamp
   */
  async getBadgesOfUserWithInReviewStatus(
    userAddress: string,
    dateTimestamp: BigInteger,
  ): Promise<UserBadgesInReviewQuery> {
    return await this.subgraph.userBadgesInReview({ userAddress, dateTimestamp })
  }

  /**
   * Obtain badges of a user with status 'Challenged'
   *
   * @param userAddress
   * @param dateTimestamp
   */
  async getBadgesOfUserWithChallengedStatus(
    userAddress: string,
    dateTimestamp: BigInteger,
  ): Promise<UserBadgesChallengedQuery> {
    return await this.subgraph.userBadgesChallenged({ userAddress, dateTimestamp })
  }

  /**
   * Obtain badges of a user with status 'Requested' or 'Challenged'
   *
   * @param userAddress
   * @param dateTimestamp
   */
  async getBadgesOfUserWithInReviewOrChallengedStatus(
    userAddress: string,
    dateTimestamp: BigInteger,
  ): Promise<UserBadgesInReviewOrChallengedQuery> {
    return await this.subgraph.userBadgesInReviewOrChallenged({ userAddress, dateTimestamp })
  }

  /**
   * Obtain badges of a user with expiration date between two given dates
   *
   * @param userAddress
   * @param startDateTimestamp
   * @param endDateTimestamp
   */
  async getBadgesOfUserExpiringBetweenDates(
    userAddress: string,
    startDateTimestamp: BigInteger,
    endDateTimestamp: BigInteger,
  ): Promise<UserBadgesExpiringBetweenQuery> {
    return await this.subgraph.userBadgesExpiringBetween({ userAddress, startDateTimestamp, endDateTimestamp })
  }
}
