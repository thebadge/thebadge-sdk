import gql from 'graphql-tag'

// TODO: hardcoded for kleros, fix it.

export const BADGE_METADATA_BY_ID = gql`
  query badgeMetadataById($id: ID!) {
    badgeKlerosMetaData(id: $id) {
      ...BadgeKlerosMetadata
    }
  }
`

export const BADGES_METADATA_USER_HAS_CHALLENGED = gql`
  query badgesMetadataUserHasChallenged($userAddress: Bytes!) {
    badgeKlerosMetaDatas(where: { requests_: { challenger: $userAddress }, badge_: { status: Challenged } }) {
      ...BadgeKlerosMetadataWithBadge
    }
  }
`
