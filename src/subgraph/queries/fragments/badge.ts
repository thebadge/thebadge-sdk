import gql from 'graphql-tag'

gql`
  fragment Badge on Badge {
    id
    status
    uri
    validUntil
    account {
      id
    }
    badgeModel {
      id
    }
    badgeKlerosMetaData {
      id
      reviewDueDate
    }
  }
`

gql`
  fragment BadgeKlerosMetadata on BadgeKlerosMetaData {
    id
    itemID
    reviewDueDate
    requests {
      ...Request
    }
    badge {
      id
    }
  }
`
