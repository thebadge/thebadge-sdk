import gql from 'graphql-tag'

gql`
  fragment Badge on Badge {
    id
    status
    uri
    validUntil
    createdTxHash
    contractAddress
    claimedAt
    claimedTxHash
    createdAt
    createdTxHash
    networkName
    account {
      id
    }
    badgeModel {
      id
      uri
      contractAddress
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
