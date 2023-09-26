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
      throw new Error('Method not found')
    },
    badgeById(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    badgeByBadgeModelId(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    badgesByUser(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    badgesInReview(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    badgesChallenged(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    badgesInReviewOrChallenged(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    badgesUserCanReview(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    badgesOfUserByStatuses(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    badgesNotOfUserByStatuses(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    badgeMetadataById(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    badgesMetadataUserHasChallenged(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    badgeModels(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    badgeModelById(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    badgeModelMetadataById(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    subgraphErrors(variables?: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    usersId(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    creatorUsersId(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    user(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    userBadgesFiltered(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    userBadgesByModelId(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    userCreatedBadgeModels(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    userBadgesInReview(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    userBadgesChallenged(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    userBadgesInReviewOrChallenged(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
    userBadgesExpiringBetween(variables: any, requestHeaders?: Dom.RequestInit['headers']): Promise<any> {
      throw new Error('Method not found')
    },
  }
}
