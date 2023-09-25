import gql from 'graphql-tag'

export const USERS_ID = gql`
  query usersId($first: Int!, $skip: Int!) {
    users(first: $first, skip: $skip) {
      id
    }
  }
`

export const CREATOR_USERS_ID = gql`
  query creatorUsersId($first: Int!, $skip: Int!) {
    users(first: $first, skip: $skip, where: { isCreator: true }) {
      id
    }
  }
`

export const USER = gql`
  query user($userAddress: ID!) {
    user(id: $userAddress) {
      ...User
    }
  }
`

export const USER_BADGES_FILTERED = gql`
  query userBadgesFiltered($userAddress: ID!, $badgesFilter: Badge_filter) {
    user(id: $userAddress) {
      id
      badges(where: $badgesFilter) {
        ...Badge
      }
    }
  }
`

export const USER_BADGES_BY_MODEL_ID = gql`
  query userBadgesByModelId($userAddress: ID!, $modelId: String!) {
    user(id: $userAddress) {
      badges(where: { badgeModel: $modelId }) {
        ...Badge
      }
    }
  }
`

export const USER_CREATED_BADGE_MODELS = gql`
  query userCreatedBadgeModels($userAddress: ID!) {
    user(id: $userAddress) {
      createdBadgeModels {
        validFor
        paused
        uri
        id
        controllerType
        badgesMintedAmount
      }
      statistics {
        creatorStatistic {
          createdBadgeModelsAmount
        }
      }
    }
  }
`

export const USER_BADGES_IN_REVIEW = gql`
  query userBadgesInReview($userAddress: ID!, $dateTimestamp: BigInt!) {
    user(id: $userAddress) {
      badges(where: { badgeKlerosMetaData_: { reviewDueDate_gt: $dateTimestamp }, status_in: [Requested] }) {
        ...Badge
      }
    }
  }
`

export const USER_BADGES_CHALLENGED = gql`
  query userBadgesChallenged($userAddress: ID!, $dateTimestamp: BigInt!) {
    user(id: $userAddress) {
      badges(where: { badgeKlerosMetaData_: { reviewDueDate_gt: $dateTimestamp }, status_in: [Challenged] }) {
        ...Badge
      }
    }
  }
`

export const USER_BADGES_IN_REVIEW_OR_CHALLENGED = gql`
  query userBadgesInReviewOrChallenged($userAddress: ID!, $dateTimestamp: BigInt!) {
    user(id: $userAddress) {
      badges(
        where: { badgeKlerosMetaData_: { reviewDueDate_gt: $dateTimestamp }, status_in: [Requested, Challenged] }
      ) {
        ...Badge
      }
    }
  }
`

export const USER_BADGES_EXPIRING_BETWEEN = gql`
  query userBadgesExpiringBetween($userAddress: ID!, $startDateTimestamp: BigInt!, $endDateTimestamp: BigInt!) {
    user(id: $userAddress) {
      badges(where: { validUntil_gte: $startDateTimestamp, validUntil_lte: $endDateTimestamp }) {
        ...Badge
      }
    }
  }
`
