import gql from 'graphql-tag'

// TODO: hardcoded for kleros, fix it.

export const BADGE_MODEL_METADATA_BY_ID = gql`
  query badgeModelMetadataById($id: ID!) {
    badgeModelKlerosMetaData(id: $id) {
      ...BadgeModelKlerosMetadata
    }
  }
`
