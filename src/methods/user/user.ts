import { getSubgraph } from '@subgraph/subgraph'
import { ChainsValues } from '@businessLogic/chains'
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

export async function getUsersId(chainId: ChainsValues): Promise<UsersIdQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.usersId()
}

export async function getCreatorUsersId(chainId: ChainsValues): Promise<CreatorUsersIdQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.creatorUsersId()
}

export async function getUser(chainId: ChainsValues, userAddress: string): Promise<UserQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.user({ userAddress })
}

export async function getUserBadges(chainId: ChainsValues, userAddress: string): Promise<UserBadgesQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.userBadges({ userAddress })
}

export async function getUserBadgesFiltered(
  chainId: ChainsValues,
  userAddress: string,
  badgesFilter: Badge_Filter,
): Promise<UserBadgesFilteredQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.userBadgesFiltered({ userAddress, badgesFilter })
}

export async function getUserBadgesByModelId(
  chainId: ChainsValues,
  userAddress: string,
  modelId: string,
): Promise<UserBadgesByModelIdQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.userBadgesByModelId({ userAddress, modelId })
}

export async function getUserCreatedBadgeModels(
  chainId: ChainsValues,
  userAddress: string,
): Promise<UserCreatedBadgeModelsQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.userCreatedBadgeModels({ userAddress })
}

export async function getUserBadgesInReview(
  chainId: ChainsValues,
  userAddress: string,
  dateTimestamp: BigInteger,
): Promise<UserBadgesInReviewQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.userBadgesInReview({ userAddress, dateTimestamp })
}

export async function getUserBadgesChallenged(
  chainId: ChainsValues,
  userAddress: string,
  dateTimestamp: BigInteger,
): Promise<UserBadgesChallengedQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.userBadgesChallenged({ userAddress, dateTimestamp })
}

export async function getUserBadgesInReviewOrChallenged(
  chainId: ChainsValues,
  userAddress: string,
  dateTimestamp: BigInteger,
): Promise<UserBadgesInReviewOrChallengedQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.userBadgesInReviewOrChallenged({ userAddress, dateTimestamp })
}

export async function getUserBadgesExpiringBetween(
  chainId: ChainsValues,
  userAddress: string,
  startDateTimestamp: BigInteger,
  endDateTimestamp: BigInteger,
): Promise<UserBadgesExpiringBetweenQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.userBadgesExpiringBetween({ userAddress, startDateTimestamp, endDateTimestamp })
}
