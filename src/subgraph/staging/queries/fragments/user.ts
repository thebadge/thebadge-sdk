import gql from 'graphql-tag'

gql`
  fragment User on User {
    id
    isCreator
    metadataUri
    statistics {
      mintedBadgesAmount
      creatorStatistic {
        createdBadgeModelsAmount
      }
    }
    badges {
      id
    }
  }
`
