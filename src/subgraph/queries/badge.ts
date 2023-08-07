import gql from 'graphql-tag'

// TODO: hardcoded for kleros, fix it.

export const BADGES = gql`
  query badges($first: Int!, $skip: Int!, $filter: Badge_filter) {
    badges(first: $first, skip: $skip, orderBy: createdAt, orderDirection: desc, where: $filter) {
      ...Badge
    }
  }
`

export const BADGE_BY_ID = gql`
  query badgeById($id: ID!) {
    badge(id: $id) {
      ...Badge
    }
  }
`

export const BADGE_BY_BADGE_MODEL_ID = gql`
  query badgeByBadgeModelId($id: String!) {
    badges(where: { badgeModel: $id }) {
      ...Badge
    }
  }
`

export const BADGES_BY_USER = gql`
  query badgesByUser($userAddress: String!) {
    badges(where: { account: $userAddress }) {
      ...Badge
    }
  }
`

export const BADGES_IN_REVIEW = gql`
  query badgesInReview($dateTimestamp: BigInt!) {
    badges(where: { badgeKlerosMetaData_: { reviewDueDate_gt: $dateTimestamp }, status: Requested }) {
      ...Badge
    }
  }
`

export const BADGES_CHALLENGED = gql`
  query badgesChallenged($dateTimestamp: BigInt!) {
    badges(where: { badgeKlerosMetaData_: { reviewDueDate_gt: $dateTimestamp }, status: Challenged }) {
      ...Badge
    }
  }
`

export const BADGES_IN_REVIEW_OR_CHALLENGED = gql`
  query badgesInReviewOrChallenged($dateTimestamp: BigInt!) {
    badges(where: { badgeKlerosMetaData_: { reviewDueDate_gt: $dateTimestamp }, status_in: [Requested, Challenged] }) {
      ...Badge
    }
  }
`

export const BADGES_USER_CAN_REVIEW = gql`
  query badgesUserCanReview($userAddress: String!, $dateTimestamp: BigInt!) {
    badges(
      where: {
        badgeKlerosMetaData_: { reviewDueDate_gt: $dateTimestamp }
        status_in: [Requested, Challenged]
        account_not: $userAddress
      }
    ) {
      ...Badge
    }
  }
`

export const BADGE_IDS_OF_USER_BY_STATUSES = gql`
  query badgeIdsOfUserByStatuses($userAddress: String!, $statuses: [BadgeStatus!]!) {
    badges(where: { status_in: $statuses, account_starts_with: $userAddress }) {
      ...Badge
    }
  }
`

export const BADGE_IDS_NOT_OF_USER_BY_STATUSES = gql`
  query badgeIdsNotOfUserByStatuses($userAddress: String!, $statuses: [BadgeStatus!]!) {
    badges(where: { status_in: $statuses, account_not: $userAddress }) {
      ...Badge
    }
  }
`
