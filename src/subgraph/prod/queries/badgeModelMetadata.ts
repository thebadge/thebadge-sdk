import gql from 'graphql-tag'

export const BADGE_MODEL_KLEROS_METADATA_BY_ID = gql`
  query badgeModelKlerosMetadataById($id: ID!) {
    badgeModelKlerosMetaData(id: $id) {
      ...BadgeModelKlerosMetadata
    }
  }
`

export const BADGE_MODEL_THIRD_PARTY_METADATA_BY_ID = gql`
  query badgeModelThirdPartyMetaDataById($id: ID!) {
    badgeModelThirdPartyMetaData(id: $id) {
      ...BadgeModelThirdPartyMetaData
    }
  }
`
