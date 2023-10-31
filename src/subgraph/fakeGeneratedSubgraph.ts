/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * IMPORTANT: this file will replace the generated subgraph in case the generation fails.
 * The idea is to avoid compiling errors if the subgraph generation does not match.
 * Please update it with new methods if necessary.
 */

import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'

export function getSdk(client: GraphQLClient) {
  return {
    badges(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    badgeById(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    badgeByBadgeModelId(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    badgesByUser(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    badgesInReview(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    badgesChallenged(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    badgesInReviewOrChallenged(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    badgesUserCanReview(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    badgesOfUserByStatuses(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    badgesNotOfUserByStatuses(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    badgeMetadataById(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    badgesMetadataUserHasChallenged(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    badgeModels(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    badgeModelById(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    badgeModelMetadataById(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    subgraphErrors(variables?: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    usersId(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    creatorUsersId(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    user(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    userBadgesFiltered(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    userBadgesByModelId(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    userCreatedBadgeModels(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    userBadgesInReview(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    userBadgesChallenged(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    userBadgesInReviewOrChallenged(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
    userBadgesExpiringBetween(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('TheBadge SDK: Method not found')
    },
  }
}

export enum BadgeStatus {
  Absent = 'Absent',
  Approved = 'Approved',
  Challenged = 'Challenged',
  RequestRemoval = 'RequestRemoval',
  Requested = 'Requested',
}

export enum KlerosRequestType {
  Clearing = 'Clearing',
  Registration = 'Registration',
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type Badge_Filter = {}
// eslint-disable-next-line @typescript-eslint/ban-types
export type BadgeModel_Filter = {}

export type BadgesQuery = {
  __typename?: 'Query'
  badges: Array<{
    __typename?: 'Badge'
    id: string
    status: BadgeStatus
    uri: string
    validUntil: any
    account: { __typename?: 'User'; id: string }
    badgeModel: { __typename?: 'BadgeModel'; id: string }
    badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
  }>
}

export type BadgeByIdQuery = {
  __typename?: 'Query'
  badge?: {
    __typename?: 'Badge'
    id: string
    status: BadgeStatus
    uri: string
    validUntil: any
    account: { __typename?: 'User'; id: string }
    badgeModel: { __typename?: 'BadgeModel'; id: string }
    badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
  } | null
}

export type BadgeByBadgeModelIdQuery = {
  __typename?: 'Query'
  badges: Array<{
    __typename?: 'Badge'
    id: string
    status: BadgeStatus
    uri: string
    validUntil: any
    account: { __typename?: 'User'; id: string }
    badgeModel: { __typename?: 'BadgeModel'; id: string }
    badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
  }>
}

export type BadgesByUserQuery = {
  __typename?: 'Query'
  badges: Array<{
    __typename?: 'Badge'
    id: string
    status: BadgeStatus
    uri: string
    validUntil: any
    account: { __typename?: 'User'; id: string }
    badgeModel: { __typename?: 'BadgeModel'; id: string }
    badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
  }>
}

export type BadgesInReviewQuery = {
  __typename?: 'Query'
  badges: Array<{
    __typename?: 'Badge'
    id: string
    status: BadgeStatus
    uri: string
    validUntil: any
    account: { __typename?: 'User'; id: string }
    badgeModel: { __typename?: 'BadgeModel'; id: string }
    badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
  }>
}

export type BadgesChallengedQuery = {
  __typename?: 'Query'
  badges: Array<{
    __typename?: 'Badge'
    id: string
    status: BadgeStatus
    uri: string
    validUntil: any
    account: { __typename?: 'User'; id: string }
    badgeModel: { __typename?: 'BadgeModel'; id: string }
    badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
  }>
}

export type BadgesInReviewOrChallengedQuery = {
  __typename?: 'Query'
  badges: Array<{
    __typename?: 'Badge'
    id: string
    status: BadgeStatus
    uri: string
    validUntil: any
    account: { __typename?: 'User'; id: string }
    badgeModel: { __typename?: 'BadgeModel'; id: string }
    badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
  }>
}

export type BadgesUserCanReviewQuery = {
  __typename?: 'Query'
  badges: Array<{
    __typename?: 'Badge'
    id: string
    status: BadgeStatus
    uri: string
    validUntil: any
    account: { __typename?: 'User'; id: string }
    badgeModel: { __typename?: 'BadgeModel'; id: string }
    badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
  }>
}

export type BadgesOfUserByStatusesQuery = {
  __typename?: 'Query'
  badges: Array<{
    __typename?: 'Badge'
    id: string
    status: BadgeStatus
    uri: string
    validUntil: any
    account: { __typename?: 'User'; id: string }
    badgeModel: { __typename?: 'BadgeModel'; id: string }
    badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
  }>
}

export type BadgesNotOfUserByStatusesQuery = {
  __typename?: 'Query'
  badges: Array<{
    __typename?: 'Badge'
    id: string
    status: BadgeStatus
    uri: string
    validUntil: any
    account: { __typename?: 'User'; id: string }
    badgeModel: { __typename?: 'BadgeModel'; id: string }
    badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
  }>
}

export type BadgeMetadataByIdQuery = {
  __typename?: 'Query'
  badgeKlerosMetaData?: {
    __typename?: 'BadgeKlerosMetaData'
    id: string
    itemID: any
    reviewDueDate: any
    requests: Array<{
      __typename?: 'KlerosBadgeRequest'
      id: string
      type: KlerosRequestType
      createdAt: any
      requestIndex?: any | null
      arbitrationParamsIndex?: any | null
      requester?: any | null
      challenger?: any | null
      disputeID?: any | null
      evidences: Array<{ __typename?: 'Evidence'; id: string; sender: any; timestamp: any; uri: string }>
    }>
    badge: { __typename?: 'Badge'; id: string }
  } | null
}

export type BadgesMetadataUserHasChallengedQuery = {
  __typename?: 'Query'
  badgeKlerosMetaDatas: Array<{
    __typename?: 'BadgeKlerosMetaData'
    id: string
    itemID: any
    reviewDueDate: any
    requests: Array<{
      __typename?: 'KlerosBadgeRequest'
      id: string
      type: KlerosRequestType
      createdAt: any
      requestIndex?: any | null
      arbitrationParamsIndex?: any | null
      requester?: any | null
      challenger?: any | null
      disputeID?: any | null
      evidences: Array<{ __typename?: 'Evidence'; id: string; sender: any; timestamp: any; uri: string }>
    }>
    badge: { __typename?: 'Badge'; id: string }
  }>
}

export type BadgeModelsQuery = {
  __typename?: 'Query'
  badgeModels: Array<{
    __typename?: 'BadgeModel'
    id: string
    uri: string
    controllerType: string
    validFor: any
    creatorFee: any
    paused: boolean
    badgesMintedAmount: any
    creator: { __typename?: 'User'; id: string; metadataUri?: string | null }
  }>
}

export type BadgeModelByIdQuery = {
  __typename?: 'Query'
  badgeModel?: {
    __typename?: 'BadgeModel'
    id: string
    uri: string
    controllerType: string
    validFor: any
    creatorFee: any
    paused: boolean
    badgesMintedAmount: any
    creator: { __typename?: 'User'; id: string; metadataUri?: string | null }
  } | null
}

export type BadgeModelMetadataByIdQuery = {
  __typename?: 'Query'
  badgeModelKlerosMetaData?: {
    __typename?: 'BadgeModelKlerosMetaData'
    id: string
    registrationUri: string
    removalUri: string
    tcrList: any
    submissionBaseDeposit: any
    challengePeriodDuration: any
  } | null
}

export type SubgraphErrorsQuery = {
  __typename?: 'Query'
  _meta?: { __typename?: '_Meta_'; hasIndexingErrors: boolean } | null
}

export type UsersIdQuery = { __typename?: 'Query'; users: Array<{ __typename?: 'User'; id: string }> }

export type CreatorUsersIdQuery = { __typename?: 'Query'; users: Array<{ __typename?: 'User'; id: string }> }

export type UserQuery = {
  __typename?: 'Query'
  user?: {
    __typename?: 'User'
    id: string
    isCreator: boolean
    metadataUri?: string | null
    statistics: {
      __typename?: 'UserStatistic'
      mintedBadgesAmount: any
      creatorStatistic?: { __typename?: 'CreatorStatistic'; createdBadgeModelsAmount: any } | null
    }
    badges?: Array<{ __typename?: 'Badge'; id: string }> | null
  } | null
}

export type UserBadgesFilteredQuery = {
  __typename?: 'Query'
  user?: {
    __typename?: 'User'
    id: string
    badges?: Array<{
      __typename?: 'Badge'
      id: string
      status: BadgeStatus
      uri: string
      validUntil: any
      account: { __typename?: 'User'; id: string }
      badgeModel: { __typename?: 'BadgeModel'; id: string }
      badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
    }> | null
  } | null
}

export type UserBadgesByModelIdQuery = {
  __typename?: 'Query'
  user?: {
    __typename?: 'User'
    badges?: Array<{
      __typename?: 'Badge'
      id: string
      status: BadgeStatus
      uri: string
      validUntil: any
      account: { __typename?: 'User'; id: string }
      badgeModel: { __typename?: 'BadgeModel'; id: string }
      badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
    }> | null
  } | null
}

export type UserCreatedBadgeModelsQuery = {
  __typename?: 'Query'
  user?: {
    __typename?: 'User'
    createdBadgeModels: Array<{
      __typename?: 'BadgeModel'
      validFor: any
      paused: boolean
      uri: string
      id: string
      controllerType: string
      badgesMintedAmount: any
    }>
    statistics: {
      __typename?: 'UserStatistic'
      creatorStatistic?: { __typename?: 'CreatorStatistic'; createdBadgeModelsAmount: any } | null
    }
  } | null
}

export type UserBadgesInReviewQuery = {
  __typename?: 'Query'
  user?: {
    __typename?: 'User'
    badges?: Array<{
      __typename?: 'Badge'
      id: string
      status: BadgeStatus
      uri: string
      validUntil: any
      account: { __typename?: 'User'; id: string }
      badgeModel: { __typename?: 'BadgeModel'; id: string }
      badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
    }> | null
  } | null
}

export type UserBadgesChallengedQuery = {
  __typename?: 'Query'
  user?: {
    __typename?: 'User'
    badges?: Array<{
      __typename?: 'Badge'
      id: string
      status: BadgeStatus
      uri: string
      validUntil: any
      account: { __typename?: 'User'; id: string }
      badgeModel: { __typename?: 'BadgeModel'; id: string }
      badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
    }> | null
  } | null
}

export type UserBadgesInReviewOrChallengedQuery = {
  __typename?: 'Query'
  user?: {
    __typename?: 'User'
    badges?: Array<{
      __typename?: 'Badge'
      id: string
      status: BadgeStatus
      uri: string
      validUntil: any
      account: { __typename?: 'User'; id: string }
      badgeModel: { __typename?: 'BadgeModel'; id: string }
      badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
    }> | null
  } | null
}

export type UserBadgesExpiringBetweenQuery = {
  __typename?: 'Query'
  user?: {
    __typename?: 'User'
    badges?: Array<{
      __typename?: 'Badge'
      id: string
      status: BadgeStatus
      uri: string
      validUntil: any
      account: { __typename?: 'User'; id: string }
      badgeModel: { __typename?: 'BadgeModel'; id: string }
      badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData'; id: string; reviewDueDate: any } | null
    }> | null
  } | null
}
