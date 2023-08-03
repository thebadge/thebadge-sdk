import {
  Badge_Filter,
  UserBadgesFilteredQuery,
  UserQuery,
  UserBadgesQuery,
  CreatorUsersIdQuery,
  UsersIdQuery,
  UserBadgesByModelIdQuery,
  UserCreatedBadgeModelsQuery,
  UserBadgesChallengedQuery,
  UserBadgesInReviewQuery,
  UserBadgesInReviewOrChallengedQuery,
  UserBadgesExpiringBetweenQuery,
} from '@subgraph/generated/subgraph'
import { TheBadgeSDKConfig } from '@businessLogic/sdk/config'

interface UsersServiceMethods {
  getIds(): Promise<UsersIdQuery>
  getCreatorsIds(): Promise<CreatorUsersIdQuery>
  getByAddress(userAddress: string): Promise<UserQuery>
  getBadgesOfUser(userAddress: string): Promise<UserBadgesQuery>
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
  async getIds(): Promise<UsersIdQuery> {
    return await this.subgraph.usersId()
  }

  async getCreatorsIds(): Promise<CreatorUsersIdQuery> {
    return await this.subgraph.creatorUsersId()
  }

  async getByAddress(userAddress: string): Promise<UserQuery> {
    return await this.subgraph.user({ userAddress })
  }

  async getBadgesOfUser(userAddress: string): Promise<UserBadgesQuery> {
    return await this.subgraph.userBadges({ userAddress })
  }

  async getBadgesOfUserFiltered(userAddress: string, badgesFilter: Badge_Filter): Promise<UserBadgesFilteredQuery> {
    return await this.subgraph.userBadgesFiltered({ userAddress, badgesFilter })
  }

  async getBadgesOfUserByModelId(userAddress: string, modelId: string): Promise<UserBadgesByModelIdQuery> {
    return await this.subgraph.userBadgesByModelId({ userAddress, modelId })
  }

  async getBadgeModelsCreatedByUser(userAddress: string): Promise<UserCreatedBadgeModelsQuery> {
    return await this.subgraph.userCreatedBadgeModels({ userAddress })
  }

  async getBadgesOfUserWithInReviewStatus(
    userAddress: string,
    dateTimestamp: BigInteger,
  ): Promise<UserBadgesInReviewQuery> {
    return await this.subgraph.userBadgesInReview({ userAddress, dateTimestamp })
  }

  async getBadgesOfUserWithChallengedStatus(
    userAddress: string,
    dateTimestamp: BigInteger,
  ): Promise<UserBadgesChallengedQuery> {
    return await this.subgraph.userBadgesChallenged({ userAddress, dateTimestamp })
  }

  async getBadgesOfUserWithInReviewOrChallengedStatus(
    userAddress: string,
    dateTimestamp: BigInteger,
  ): Promise<UserBadgesInReviewOrChallengedQuery> {
    return await this.subgraph.userBadgesInReviewOrChallenged({ userAddress, dateTimestamp })
  }

  async getBadgesOfUserExpiringBetweenDates(
    userAddress: string,
    startDateTimestamp: BigInteger,
    endDateTimestamp: BigInteger,
  ): Promise<UserBadgesExpiringBetweenQuery> {
    return await this.subgraph.userBadgesExpiringBetween({ userAddress, startDateTimestamp, endDateTimestamp })
  }
}
