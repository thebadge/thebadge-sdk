import gql from 'graphql-tag'

export const BADGE_BY_ID = gql`
  query badgeById($id: ID!) {
    badge(id: $id) {
      id
      evidenceMetadataUrl
      reviewDueDate
      reviewDueDate
      status
      isChallenged
      receiver {
        id
      }
      badgeType {
        id
        metadataURL
        mintCost
        validFor
        badgesMintedAmount
        klerosBadge {
          klerosMetadataURL
          klerosTCRList
          submissionBaseDeposit
          challengePeriodDuration
        }
      }
    }
  }
`
