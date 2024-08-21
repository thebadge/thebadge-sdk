import gql from 'graphql-tag'

gql`
  fragment BadgeModel on BadgeModel {
    id
    uri
    controllerType
    validFor
    creatorFee
    paused
    badgesMintedAmount
    createdTxHash
    creator {
      id
      metadataUri
    }
  }
`

gql`
  fragment BadgeModelKlerosMetadata on BadgeModelKlerosMetaData {
    id
    admin
    arbitrator
    challengePeriodDuration
    governor
    registrationUri
    removalUri
    submissionBaseDeposit
    tcrList
  }
`

gql`
  fragment BadgeModelThirdPartyMetaData on BadgeModelThirdPartyMetaData {
    id
    admin
    arbitrator
    challengePeriodDuration
    governor
    requirementsIPFSHash
    submissionBaseDeposit
    tcrList
  }
`
