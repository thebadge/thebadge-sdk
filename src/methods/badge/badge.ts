import { getSubgraph } from '@subgraph/subgraph'
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

export async function getBadgeById(chainId: ChainsValues, badgeId: string): Promise<BadgeByIdQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.badgeById({ id: badgeId })
}

export async function getBadgeByBadgeModelId(
  chainId: ChainsValues,
  badgeModelId: string,
): Promise<BadgeByBadgeModelIdQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.badgeByBadgeModelId({ id: badgeModelId })
}

export async function getBadgesByUser(chainId: ChainsValues, userAddress: string): Promise<BadgesByUserQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.badgesByUser({ userAddress })
}

export async function getBadgesInReview(
  chainId: ChainsValues,
  dateTimestamp: BigInteger,
): Promise<BadgesInReviewQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.badgesInReview({ dateTimestamp })
}

export async function getBadgesChallenged(
  chainId: ChainsValues,
  dateTimestamp: BigInteger,
): Promise<BadgesChallengedQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.badgesChallenged({ dateTimestamp })
}

export async function getBadgesInReviewOrChallenged(
  chainId: ChainsValues,
  dateTimestamp: BigInteger,
): Promise<BadgesInReviewOrChallengedQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.badgesInReviewOrChallenged({ dateTimestamp })
}

export async function getBadgesUserCanReview(
  chainId: ChainsValues,
  userAddress: string,
  dateTimestamp: BigInteger,
): Promise<BadgesUserCanReviewQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.badgesUserCanReview({ userAddress, dateTimestamp })
}

export async function getBadgeIdsOfUserByStatuses(
  chainId: ChainsValues,
  userAddress: string,
  statuses: BadgeStatus[],
): Promise<BadgeIdsOfUserByStatusesQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.badgeIdsOfUserByStatuses({ userAddress, statuses })
}

export async function getBadgeIdsNotOfUserByStatuses(
  chainId: ChainsValues,
  userAddress: string,
  statuses: BadgeStatus[],
): Promise<BadgeIdsNotOfUserByStatusesQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.badgeIdsNotOfUserByStatuses({ userAddress, statuses })
}
