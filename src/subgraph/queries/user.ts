import gql from 'graphql-tag'

export const USERS = gql`
  query users {
    users {
      id
    }
  }
`

export const USER_BY_ID = gql`
  query userById($id: ID!) {
    user(id: $id) {
      ...User
    }
  }
`

export const USERS_CREATORS = gql`
  query usersCreators {
    users(where: { isCreator: true }) {
      id
    }
  }
`

export const USER_BY_ID_WITH_BADGES = gql`
  query userByIdWithBadges($id: ID!) {
    user(id: $id) {
      ...UserWithBadges
    }
  }
`

export const USER_BADGES = gql`
  query userBadges($userAddress: ID!, $where: Badge_filter) {
    user(id: $userAddress) {
      id
      badges(where: $where) {
        ...FullBadgeDetails
      }
    }
  }
`

export const USER_BADGES_BY_MODEL_ID = gql`
  query userBadgesByModelId($userId: ID!, $modelId: String!) {
    user(id: $userId) {
      badges(where: { badgeModel: $modelId }) {
        id
        status
        createdAt
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
      createdBadgesModelAmount
    }
  }
`

export const USER_BADGES_IN_REVIEW = gql`
  query userBadgesInReview($userAddress: ID!) {
    user(id: $userAddress) {
      badges(where: { status_in: [Requested] }) {
        ...FullBadgeDetails
      }
    }
  }
`

export const USER_BADGES_IN_REVIEW_AND_CHALLENGED = gql`
  query userBadgesInReviewAndChallenged($userAddress: ID!, $dateTimestamp: BigInt!) {
    user(id: $userAddress) {
      badges(where: { badgeKlerosMetaData_: { reviewDueDate_gt: $dateTimestamp }, status_in: [Requested] }) {
        ...BadgesInReview
      }
    }
  }
`

export const USER_BADGES_EXPIRING_BETWEEN = gql`
  query userBadgesExpiringBetween($userAddress: ID!, $startDate: BigInt!, $endDate: BigInt!) {
    user(id: $userAddress) {
      badges(where: { validFor_gte: $startDate, validFor_lte: $endDate }) {
        ...FullBadgeDetails
      }
    }
  }
`
