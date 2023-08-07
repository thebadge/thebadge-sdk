import gql from 'graphql-tag'

gql`
  fragment User on User {
    id
    isVerified
    isCreator
    creatorUri
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
