import gql from 'graphql-tag'

export const BADGE_MODELS = gql`
  query badgeModels($first: Int!, $skip: Int!, $filter: BadgeModel_filter) {
    badgeModels(first: $first, skip: $skip, orderBy: createdAt, orderDirection: desc, where: $filter) {
      ...BadgeModel
    }
  }
`

export const BADGE_MODEL_BY_ID = gql`
  query badgeModelById($id: ID!) {
    badgeModel(id: $id) {
      ...BadgeModel
    }
  }
`
