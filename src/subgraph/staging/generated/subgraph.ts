import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  /**
   * 8 bytes signed integer
   *
   */
  Int8: any;
};

export type Badge = {
  __typename?: 'Badge';
  account: User;
  badgeKlerosMetaData?: Maybe<BadgeKlerosMetaData>;
  badgeModel: BadgeModel;
  createdAt: Scalars['BigInt'];
  createdTxHash: Scalars['Bytes'];
  id: Scalars['ID'];
  networkName: Scalars['String'];
  status: BadgeStatus;
  uri: Scalars['String'];
  validUntil: Scalars['BigInt'];
};

export type BadgeKlerosMetaData = {
  __typename?: 'BadgeKlerosMetaData';
  badge: Badge;
  id: Scalars['ID'];
  itemID: Scalars['Bytes'];
  /** The total number of requests for this item. */
  numberOfRequests: Scalars['BigInt'];
  requests: Array<KlerosBadgeRequest>;
  reviewDueDate: Scalars['BigInt'];
};


export type BadgeKlerosMetaDataRequestsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<KlerosBadgeRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KlerosBadgeRequest_Filter>;
};

export type BadgeKlerosMetaData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BadgeKlerosMetaData_Filter>>>;
  badge?: InputMaybe<Scalars['String']>;
  badge_?: InputMaybe<Badge_Filter>;
  badge_contains?: InputMaybe<Scalars['String']>;
  badge_contains_nocase?: InputMaybe<Scalars['String']>;
  badge_ends_with?: InputMaybe<Scalars['String']>;
  badge_ends_with_nocase?: InputMaybe<Scalars['String']>;
  badge_gt?: InputMaybe<Scalars['String']>;
  badge_gte?: InputMaybe<Scalars['String']>;
  badge_in?: InputMaybe<Array<Scalars['String']>>;
  badge_lt?: InputMaybe<Scalars['String']>;
  badge_lte?: InputMaybe<Scalars['String']>;
  badge_not?: InputMaybe<Scalars['String']>;
  badge_not_contains?: InputMaybe<Scalars['String']>;
  badge_not_contains_nocase?: InputMaybe<Scalars['String']>;
  badge_not_ends_with?: InputMaybe<Scalars['String']>;
  badge_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  badge_not_in?: InputMaybe<Array<Scalars['String']>>;
  badge_not_starts_with?: InputMaybe<Scalars['String']>;
  badge_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  badge_starts_with?: InputMaybe<Scalars['String']>;
  badge_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  itemID?: InputMaybe<Scalars['Bytes']>;
  itemID_contains?: InputMaybe<Scalars['Bytes']>;
  itemID_gt?: InputMaybe<Scalars['Bytes']>;
  itemID_gte?: InputMaybe<Scalars['Bytes']>;
  itemID_in?: InputMaybe<Array<Scalars['Bytes']>>;
  itemID_lt?: InputMaybe<Scalars['Bytes']>;
  itemID_lte?: InputMaybe<Scalars['Bytes']>;
  itemID_not?: InputMaybe<Scalars['Bytes']>;
  itemID_not_contains?: InputMaybe<Scalars['Bytes']>;
  itemID_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  numberOfRequests?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfRequests_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_not?: InputMaybe<Scalars['BigInt']>;
  numberOfRequests_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<BadgeKlerosMetaData_Filter>>>;
  requests_?: InputMaybe<KlerosBadgeRequest_Filter>;
  reviewDueDate?: InputMaybe<Scalars['BigInt']>;
  reviewDueDate_gt?: InputMaybe<Scalars['BigInt']>;
  reviewDueDate_gte?: InputMaybe<Scalars['BigInt']>;
  reviewDueDate_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reviewDueDate_lt?: InputMaybe<Scalars['BigInt']>;
  reviewDueDate_lte?: InputMaybe<Scalars['BigInt']>;
  reviewDueDate_not?: InputMaybe<Scalars['BigInt']>;
  reviewDueDate_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum BadgeKlerosMetaData_OrderBy {
  Badge = 'badge',
  BadgeCreatedAt = 'badge__createdAt',
  BadgeCreatedTxHash = 'badge__createdTxHash',
  BadgeId = 'badge__id',
  BadgeNetworkName = 'badge__networkName',
  BadgeStatus = 'badge__status',
  BadgeUri = 'badge__uri',
  BadgeValidUntil = 'badge__validUntil',
  Id = 'id',
  ItemId = 'itemID',
  NumberOfRequests = 'numberOfRequests',
  Requests = 'requests',
  ReviewDueDate = 'reviewDueDate'
}

export type BadgeModel = {
  __typename?: 'BadgeModel';
  badgeModelKleros?: Maybe<BadgeModelKlerosMetaData>;
  badgesMintedAmount: Scalars['BigInt'];
  contractAddress: Scalars['Bytes'];
  controllerType: Scalars['String'];
  createdAt: Scalars['BigInt'];
  creator: User;
  creatorFee: Scalars['BigInt'];
  id: Scalars['ID'];
  mintedBadges: Array<Badge>;
  networkName: Scalars['String'];
  paused: Scalars['Boolean'];
  protocolFeeInBps: Scalars['BigInt'];
  totalFeesGenerated: Scalars['BigInt'];
  uri: Scalars['String'];
  validFor: Scalars['BigInt'];
  version: Scalars['String'];
};


export type BadgeModelMintedBadgesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Badge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Badge_Filter>;
};

export type BadgeModelKlerosMetaData = {
  __typename?: 'BadgeModelKlerosMetaData';
  admin: Scalars['Bytes'];
  arbitrator: Scalars['Bytes'];
  badgeModel: BadgeModel;
  challengePeriodDuration: Scalars['BigInt'];
  governor: Scalars['Bytes'];
  id: Scalars['ID'];
  registrationUri: Scalars['String'];
  removalUri: Scalars['String'];
  submissionBaseDeposit: Scalars['BigInt'];
  tcrList: Scalars['Bytes'];
};

export type BadgeModelKlerosMetaData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  admin?: InputMaybe<Scalars['Bytes']>;
  admin_contains?: InputMaybe<Scalars['Bytes']>;
  admin_gt?: InputMaybe<Scalars['Bytes']>;
  admin_gte?: InputMaybe<Scalars['Bytes']>;
  admin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  admin_lt?: InputMaybe<Scalars['Bytes']>;
  admin_lte?: InputMaybe<Scalars['Bytes']>;
  admin_not?: InputMaybe<Scalars['Bytes']>;
  admin_not_contains?: InputMaybe<Scalars['Bytes']>;
  admin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<BadgeModelKlerosMetaData_Filter>>>;
  arbitrator?: InputMaybe<Scalars['Bytes']>;
  arbitrator_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_gt?: InputMaybe<Scalars['Bytes']>;
  arbitrator_gte?: InputMaybe<Scalars['Bytes']>;
  arbitrator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitrator_lt?: InputMaybe<Scalars['Bytes']>;
  arbitrator_lte?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  badgeModel?: InputMaybe<Scalars['String']>;
  badgeModel_?: InputMaybe<BadgeModel_Filter>;
  badgeModel_contains?: InputMaybe<Scalars['String']>;
  badgeModel_contains_nocase?: InputMaybe<Scalars['String']>;
  badgeModel_ends_with?: InputMaybe<Scalars['String']>;
  badgeModel_ends_with_nocase?: InputMaybe<Scalars['String']>;
  badgeModel_gt?: InputMaybe<Scalars['String']>;
  badgeModel_gte?: InputMaybe<Scalars['String']>;
  badgeModel_in?: InputMaybe<Array<Scalars['String']>>;
  badgeModel_lt?: InputMaybe<Scalars['String']>;
  badgeModel_lte?: InputMaybe<Scalars['String']>;
  badgeModel_not?: InputMaybe<Scalars['String']>;
  badgeModel_not_contains?: InputMaybe<Scalars['String']>;
  badgeModel_not_contains_nocase?: InputMaybe<Scalars['String']>;
  badgeModel_not_ends_with?: InputMaybe<Scalars['String']>;
  badgeModel_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  badgeModel_not_in?: InputMaybe<Array<Scalars['String']>>;
  badgeModel_not_starts_with?: InputMaybe<Scalars['String']>;
  badgeModel_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  badgeModel_starts_with?: InputMaybe<Scalars['String']>;
  badgeModel_starts_with_nocase?: InputMaybe<Scalars['String']>;
  challengePeriodDuration?: InputMaybe<Scalars['BigInt']>;
  challengePeriodDuration_gt?: InputMaybe<Scalars['BigInt']>;
  challengePeriodDuration_gte?: InputMaybe<Scalars['BigInt']>;
  challengePeriodDuration_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengePeriodDuration_lt?: InputMaybe<Scalars['BigInt']>;
  challengePeriodDuration_lte?: InputMaybe<Scalars['BigInt']>;
  challengePeriodDuration_not?: InputMaybe<Scalars['BigInt']>;
  challengePeriodDuration_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  governor?: InputMaybe<Scalars['Bytes']>;
  governor_contains?: InputMaybe<Scalars['Bytes']>;
  governor_gt?: InputMaybe<Scalars['Bytes']>;
  governor_gte?: InputMaybe<Scalars['Bytes']>;
  governor_in?: InputMaybe<Array<Scalars['Bytes']>>;
  governor_lt?: InputMaybe<Scalars['Bytes']>;
  governor_lte?: InputMaybe<Scalars['Bytes']>;
  governor_not?: InputMaybe<Scalars['Bytes']>;
  governor_not_contains?: InputMaybe<Scalars['Bytes']>;
  governor_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<BadgeModelKlerosMetaData_Filter>>>;
  registrationUri?: InputMaybe<Scalars['String']>;
  registrationUri_contains?: InputMaybe<Scalars['String']>;
  registrationUri_contains_nocase?: InputMaybe<Scalars['String']>;
  registrationUri_ends_with?: InputMaybe<Scalars['String']>;
  registrationUri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrationUri_gt?: InputMaybe<Scalars['String']>;
  registrationUri_gte?: InputMaybe<Scalars['String']>;
  registrationUri_in?: InputMaybe<Array<Scalars['String']>>;
  registrationUri_lt?: InputMaybe<Scalars['String']>;
  registrationUri_lte?: InputMaybe<Scalars['String']>;
  registrationUri_not?: InputMaybe<Scalars['String']>;
  registrationUri_not_contains?: InputMaybe<Scalars['String']>;
  registrationUri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  registrationUri_not_ends_with?: InputMaybe<Scalars['String']>;
  registrationUri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  registrationUri_not_in?: InputMaybe<Array<Scalars['String']>>;
  registrationUri_not_starts_with?: InputMaybe<Scalars['String']>;
  registrationUri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registrationUri_starts_with?: InputMaybe<Scalars['String']>;
  registrationUri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  removalUri?: InputMaybe<Scalars['String']>;
  removalUri_contains?: InputMaybe<Scalars['String']>;
  removalUri_contains_nocase?: InputMaybe<Scalars['String']>;
  removalUri_ends_with?: InputMaybe<Scalars['String']>;
  removalUri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  removalUri_gt?: InputMaybe<Scalars['String']>;
  removalUri_gte?: InputMaybe<Scalars['String']>;
  removalUri_in?: InputMaybe<Array<Scalars['String']>>;
  removalUri_lt?: InputMaybe<Scalars['String']>;
  removalUri_lte?: InputMaybe<Scalars['String']>;
  removalUri_not?: InputMaybe<Scalars['String']>;
  removalUri_not_contains?: InputMaybe<Scalars['String']>;
  removalUri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  removalUri_not_ends_with?: InputMaybe<Scalars['String']>;
  removalUri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  removalUri_not_in?: InputMaybe<Array<Scalars['String']>>;
  removalUri_not_starts_with?: InputMaybe<Scalars['String']>;
  removalUri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  removalUri_starts_with?: InputMaybe<Scalars['String']>;
  removalUri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  submissionBaseDeposit?: InputMaybe<Scalars['BigInt']>;
  submissionBaseDeposit_gt?: InputMaybe<Scalars['BigInt']>;
  submissionBaseDeposit_gte?: InputMaybe<Scalars['BigInt']>;
  submissionBaseDeposit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  submissionBaseDeposit_lt?: InputMaybe<Scalars['BigInt']>;
  submissionBaseDeposit_lte?: InputMaybe<Scalars['BigInt']>;
  submissionBaseDeposit_not?: InputMaybe<Scalars['BigInt']>;
  submissionBaseDeposit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tcrList?: InputMaybe<Scalars['Bytes']>;
  tcrList_contains?: InputMaybe<Scalars['Bytes']>;
  tcrList_gt?: InputMaybe<Scalars['Bytes']>;
  tcrList_gte?: InputMaybe<Scalars['Bytes']>;
  tcrList_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tcrList_lt?: InputMaybe<Scalars['Bytes']>;
  tcrList_lte?: InputMaybe<Scalars['Bytes']>;
  tcrList_not?: InputMaybe<Scalars['Bytes']>;
  tcrList_not_contains?: InputMaybe<Scalars['Bytes']>;
  tcrList_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum BadgeModelKlerosMetaData_OrderBy {
  Admin = 'admin',
  Arbitrator = 'arbitrator',
  BadgeModel = 'badgeModel',
  BadgeModelBadgesMintedAmount = 'badgeModel__badgesMintedAmount',
  BadgeModelContractAddress = 'badgeModel__contractAddress',
  BadgeModelControllerType = 'badgeModel__controllerType',
  BadgeModelCreatedAt = 'badgeModel__createdAt',
  BadgeModelCreatorFee = 'badgeModel__creatorFee',
  BadgeModelId = 'badgeModel__id',
  BadgeModelNetworkName = 'badgeModel__networkName',
  BadgeModelPaused = 'badgeModel__paused',
  BadgeModelProtocolFeeInBps = 'badgeModel__protocolFeeInBps',
  BadgeModelTotalFeesGenerated = 'badgeModel__totalFeesGenerated',
  BadgeModelUri = 'badgeModel__uri',
  BadgeModelValidFor = 'badgeModel__validFor',
  BadgeModelVersion = 'badgeModel__version',
  ChallengePeriodDuration = 'challengePeriodDuration',
  Governor = 'governor',
  Id = 'id',
  RegistrationUri = 'registrationUri',
  RemovalUri = 'removalUri',
  SubmissionBaseDeposit = 'submissionBaseDeposit',
  TcrList = 'tcrList'
}

export type BadgeModel_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BadgeModel_Filter>>>;
  badgeModelKleros?: InputMaybe<Scalars['String']>;
  badgeModelKleros_?: InputMaybe<BadgeModelKlerosMetaData_Filter>;
  badgeModelKleros_contains?: InputMaybe<Scalars['String']>;
  badgeModelKleros_contains_nocase?: InputMaybe<Scalars['String']>;
  badgeModelKleros_ends_with?: InputMaybe<Scalars['String']>;
  badgeModelKleros_ends_with_nocase?: InputMaybe<Scalars['String']>;
  badgeModelKleros_gt?: InputMaybe<Scalars['String']>;
  badgeModelKleros_gte?: InputMaybe<Scalars['String']>;
  badgeModelKleros_in?: InputMaybe<Array<Scalars['String']>>;
  badgeModelKleros_lt?: InputMaybe<Scalars['String']>;
  badgeModelKleros_lte?: InputMaybe<Scalars['String']>;
  badgeModelKleros_not?: InputMaybe<Scalars['String']>;
  badgeModelKleros_not_contains?: InputMaybe<Scalars['String']>;
  badgeModelKleros_not_contains_nocase?: InputMaybe<Scalars['String']>;
  badgeModelKleros_not_ends_with?: InputMaybe<Scalars['String']>;
  badgeModelKleros_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  badgeModelKleros_not_in?: InputMaybe<Array<Scalars['String']>>;
  badgeModelKleros_not_starts_with?: InputMaybe<Scalars['String']>;
  badgeModelKleros_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  badgeModelKleros_starts_with?: InputMaybe<Scalars['String']>;
  badgeModelKleros_starts_with_nocase?: InputMaybe<Scalars['String']>;
  badgesMintedAmount?: InputMaybe<Scalars['BigInt']>;
  badgesMintedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  badgesMintedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  badgesMintedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  badgesMintedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  badgesMintedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  badgesMintedAmount_not?: InputMaybe<Scalars['BigInt']>;
  badgesMintedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  contractAddress?: InputMaybe<Scalars['Bytes']>;
  contractAddress_contains?: InputMaybe<Scalars['Bytes']>;
  contractAddress_gt?: InputMaybe<Scalars['Bytes']>;
  contractAddress_gte?: InputMaybe<Scalars['Bytes']>;
  contractAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAddress_lt?: InputMaybe<Scalars['Bytes']>;
  contractAddress_lte?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  contractAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controllerType?: InputMaybe<Scalars['String']>;
  controllerType_contains?: InputMaybe<Scalars['String']>;
  controllerType_contains_nocase?: InputMaybe<Scalars['String']>;
  controllerType_ends_with?: InputMaybe<Scalars['String']>;
  controllerType_ends_with_nocase?: InputMaybe<Scalars['String']>;
  controllerType_gt?: InputMaybe<Scalars['String']>;
  controllerType_gte?: InputMaybe<Scalars['String']>;
  controllerType_in?: InputMaybe<Array<Scalars['String']>>;
  controllerType_lt?: InputMaybe<Scalars['String']>;
  controllerType_lte?: InputMaybe<Scalars['String']>;
  controllerType_not?: InputMaybe<Scalars['String']>;
  controllerType_not_contains?: InputMaybe<Scalars['String']>;
  controllerType_not_contains_nocase?: InputMaybe<Scalars['String']>;
  controllerType_not_ends_with?: InputMaybe<Scalars['String']>;
  controllerType_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  controllerType_not_in?: InputMaybe<Array<Scalars['String']>>;
  controllerType_not_starts_with?: InputMaybe<Scalars['String']>;
  controllerType_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  controllerType_starts_with?: InputMaybe<Scalars['String']>;
  controllerType_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creator?: InputMaybe<Scalars['String']>;
  creatorFee?: InputMaybe<Scalars['BigInt']>;
  creatorFee_gt?: InputMaybe<Scalars['BigInt']>;
  creatorFee_gte?: InputMaybe<Scalars['BigInt']>;
  creatorFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creatorFee_lt?: InputMaybe<Scalars['BigInt']>;
  creatorFee_lte?: InputMaybe<Scalars['BigInt']>;
  creatorFee_not?: InputMaybe<Scalars['BigInt']>;
  creatorFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creator_?: InputMaybe<User_Filter>;
  creator_contains?: InputMaybe<Scalars['String']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_ends_with?: InputMaybe<Scalars['String']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_gt?: InputMaybe<Scalars['String']>;
  creator_gte?: InputMaybe<Scalars['String']>;
  creator_in?: InputMaybe<Array<Scalars['String']>>;
  creator_lt?: InputMaybe<Scalars['String']>;
  creator_lte?: InputMaybe<Scalars['String']>;
  creator_not?: InputMaybe<Scalars['String']>;
  creator_not_contains?: InputMaybe<Scalars['String']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  creator_starts_with?: InputMaybe<Scalars['String']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  mintedBadges_?: InputMaybe<Badge_Filter>;
  networkName?: InputMaybe<Scalars['String']>;
  networkName_contains?: InputMaybe<Scalars['String']>;
  networkName_contains_nocase?: InputMaybe<Scalars['String']>;
  networkName_ends_with?: InputMaybe<Scalars['String']>;
  networkName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  networkName_gt?: InputMaybe<Scalars['String']>;
  networkName_gte?: InputMaybe<Scalars['String']>;
  networkName_in?: InputMaybe<Array<Scalars['String']>>;
  networkName_lt?: InputMaybe<Scalars['String']>;
  networkName_lte?: InputMaybe<Scalars['String']>;
  networkName_not?: InputMaybe<Scalars['String']>;
  networkName_not_contains?: InputMaybe<Scalars['String']>;
  networkName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  networkName_not_ends_with?: InputMaybe<Scalars['String']>;
  networkName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  networkName_not_in?: InputMaybe<Array<Scalars['String']>>;
  networkName_not_starts_with?: InputMaybe<Scalars['String']>;
  networkName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  networkName_starts_with?: InputMaybe<Scalars['String']>;
  networkName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<BadgeModel_Filter>>>;
  paused?: InputMaybe<Scalars['Boolean']>;
  paused_in?: InputMaybe<Array<Scalars['Boolean']>>;
  paused_not?: InputMaybe<Scalars['Boolean']>;
  paused_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  protocolFeeInBps?: InputMaybe<Scalars['BigInt']>;
  protocolFeeInBps_gt?: InputMaybe<Scalars['BigInt']>;
  protocolFeeInBps_gte?: InputMaybe<Scalars['BigInt']>;
  protocolFeeInBps_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocolFeeInBps_lt?: InputMaybe<Scalars['BigInt']>;
  protocolFeeInBps_lte?: InputMaybe<Scalars['BigInt']>;
  protocolFeeInBps_not?: InputMaybe<Scalars['BigInt']>;
  protocolFeeInBps_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFeesGenerated?: InputMaybe<Scalars['BigInt']>;
  totalFeesGenerated_gt?: InputMaybe<Scalars['BigInt']>;
  totalFeesGenerated_gte?: InputMaybe<Scalars['BigInt']>;
  totalFeesGenerated_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFeesGenerated_lt?: InputMaybe<Scalars['BigInt']>;
  totalFeesGenerated_lte?: InputMaybe<Scalars['BigInt']>;
  totalFeesGenerated_not?: InputMaybe<Scalars['BigInt']>;
  totalFeesGenerated_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  uri?: InputMaybe<Scalars['String']>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  validFor?: InputMaybe<Scalars['BigInt']>;
  validFor_gt?: InputMaybe<Scalars['BigInt']>;
  validFor_gte?: InputMaybe<Scalars['BigInt']>;
  validFor_in?: InputMaybe<Array<Scalars['BigInt']>>;
  validFor_lt?: InputMaybe<Scalars['BigInt']>;
  validFor_lte?: InputMaybe<Scalars['BigInt']>;
  validFor_not?: InputMaybe<Scalars['BigInt']>;
  validFor_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  version?: InputMaybe<Scalars['String']>;
  version_contains?: InputMaybe<Scalars['String']>;
  version_contains_nocase?: InputMaybe<Scalars['String']>;
  version_ends_with?: InputMaybe<Scalars['String']>;
  version_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_gt?: InputMaybe<Scalars['String']>;
  version_gte?: InputMaybe<Scalars['String']>;
  version_in?: InputMaybe<Array<Scalars['String']>>;
  version_lt?: InputMaybe<Scalars['String']>;
  version_lte?: InputMaybe<Scalars['String']>;
  version_not?: InputMaybe<Scalars['String']>;
  version_not_contains?: InputMaybe<Scalars['String']>;
  version_not_contains_nocase?: InputMaybe<Scalars['String']>;
  version_not_ends_with?: InputMaybe<Scalars['String']>;
  version_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  version_not_in?: InputMaybe<Array<Scalars['String']>>;
  version_not_starts_with?: InputMaybe<Scalars['String']>;
  version_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  version_starts_with?: InputMaybe<Scalars['String']>;
  version_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum BadgeModel_OrderBy {
  BadgeModelKleros = 'badgeModelKleros',
  BadgeModelKlerosAdmin = 'badgeModelKleros__admin',
  BadgeModelKlerosArbitrator = 'badgeModelKleros__arbitrator',
  BadgeModelKlerosChallengePeriodDuration = 'badgeModelKleros__challengePeriodDuration',
  BadgeModelKlerosGovernor = 'badgeModelKleros__governor',
  BadgeModelKlerosId = 'badgeModelKleros__id',
  BadgeModelKlerosRegistrationUri = 'badgeModelKleros__registrationUri',
  BadgeModelKlerosRemovalUri = 'badgeModelKleros__removalUri',
  BadgeModelKlerosSubmissionBaseDeposit = 'badgeModelKleros__submissionBaseDeposit',
  BadgeModelKlerosTcrList = 'badgeModelKleros__tcrList',
  BadgesMintedAmount = 'badgesMintedAmount',
  ContractAddress = 'contractAddress',
  ControllerType = 'controllerType',
  CreatedAt = 'createdAt',
  Creator = 'creator',
  CreatorFee = 'creatorFee',
  CreatorId = 'creator__id',
  CreatorIsCreator = 'creator__isCreator',
  CreatorIsCurator = 'creator__isCurator',
  CreatorMetadataUri = 'creator__metadataUri',
  Id = 'id',
  MintedBadges = 'mintedBadges',
  NetworkName = 'networkName',
  Paused = 'paused',
  ProtocolFeeInBps = 'protocolFeeInBps',
  TotalFeesGenerated = 'totalFeesGenerated',
  Uri = 'uri',
  ValidFor = 'validFor',
  Version = 'version'
}

export enum BadgeStatus {
  Absent = 'Absent',
  Approved = 'Approved',
  Challenged = 'Challenged',
  RequestRemoval = 'RequestRemoval',
  Requested = 'Requested'
}

export type Badge_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']>;
  account_?: InputMaybe<User_Filter>;
  account_contains?: InputMaybe<Scalars['String']>;
  account_contains_nocase?: InputMaybe<Scalars['String']>;
  account_ends_with?: InputMaybe<Scalars['String']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_gt?: InputMaybe<Scalars['String']>;
  account_gte?: InputMaybe<Scalars['String']>;
  account_in?: InputMaybe<Array<Scalars['String']>>;
  account_lt?: InputMaybe<Scalars['String']>;
  account_lte?: InputMaybe<Scalars['String']>;
  account_not?: InputMaybe<Scalars['String']>;
  account_not_contains?: InputMaybe<Scalars['String']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']>;
  account_not_ends_with?: InputMaybe<Scalars['String']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  account_not_in?: InputMaybe<Array<Scalars['String']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  account_starts_with?: InputMaybe<Scalars['String']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']>;
  and?: InputMaybe<Array<InputMaybe<Badge_Filter>>>;
  badgeKlerosMetaData_?: InputMaybe<BadgeKlerosMetaData_Filter>;
  badgeModel?: InputMaybe<Scalars['String']>;
  badgeModel_?: InputMaybe<BadgeModel_Filter>;
  badgeModel_contains?: InputMaybe<Scalars['String']>;
  badgeModel_contains_nocase?: InputMaybe<Scalars['String']>;
  badgeModel_ends_with?: InputMaybe<Scalars['String']>;
  badgeModel_ends_with_nocase?: InputMaybe<Scalars['String']>;
  badgeModel_gt?: InputMaybe<Scalars['String']>;
  badgeModel_gte?: InputMaybe<Scalars['String']>;
  badgeModel_in?: InputMaybe<Array<Scalars['String']>>;
  badgeModel_lt?: InputMaybe<Scalars['String']>;
  badgeModel_lte?: InputMaybe<Scalars['String']>;
  badgeModel_not?: InputMaybe<Scalars['String']>;
  badgeModel_not_contains?: InputMaybe<Scalars['String']>;
  badgeModel_not_contains_nocase?: InputMaybe<Scalars['String']>;
  badgeModel_not_ends_with?: InputMaybe<Scalars['String']>;
  badgeModel_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  badgeModel_not_in?: InputMaybe<Array<Scalars['String']>>;
  badgeModel_not_starts_with?: InputMaybe<Scalars['String']>;
  badgeModel_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  badgeModel_starts_with?: InputMaybe<Scalars['String']>;
  badgeModel_starts_with_nocase?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdTxHash?: InputMaybe<Scalars['Bytes']>;
  createdTxHash_contains?: InputMaybe<Scalars['Bytes']>;
  createdTxHash_gt?: InputMaybe<Scalars['Bytes']>;
  createdTxHash_gte?: InputMaybe<Scalars['Bytes']>;
  createdTxHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createdTxHash_lt?: InputMaybe<Scalars['Bytes']>;
  createdTxHash_lte?: InputMaybe<Scalars['Bytes']>;
  createdTxHash_not?: InputMaybe<Scalars['Bytes']>;
  createdTxHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  createdTxHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  networkName?: InputMaybe<Scalars['String']>;
  networkName_contains?: InputMaybe<Scalars['String']>;
  networkName_contains_nocase?: InputMaybe<Scalars['String']>;
  networkName_ends_with?: InputMaybe<Scalars['String']>;
  networkName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  networkName_gt?: InputMaybe<Scalars['String']>;
  networkName_gte?: InputMaybe<Scalars['String']>;
  networkName_in?: InputMaybe<Array<Scalars['String']>>;
  networkName_lt?: InputMaybe<Scalars['String']>;
  networkName_lte?: InputMaybe<Scalars['String']>;
  networkName_not?: InputMaybe<Scalars['String']>;
  networkName_not_contains?: InputMaybe<Scalars['String']>;
  networkName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  networkName_not_ends_with?: InputMaybe<Scalars['String']>;
  networkName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  networkName_not_in?: InputMaybe<Array<Scalars['String']>>;
  networkName_not_starts_with?: InputMaybe<Scalars['String']>;
  networkName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  networkName_starts_with?: InputMaybe<Scalars['String']>;
  networkName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<Badge_Filter>>>;
  status?: InputMaybe<BadgeStatus>;
  status_in?: InputMaybe<Array<BadgeStatus>>;
  status_not?: InputMaybe<BadgeStatus>;
  status_not_in?: InputMaybe<Array<BadgeStatus>>;
  uri?: InputMaybe<Scalars['String']>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  validUntil?: InputMaybe<Scalars['BigInt']>;
  validUntil_gt?: InputMaybe<Scalars['BigInt']>;
  validUntil_gte?: InputMaybe<Scalars['BigInt']>;
  validUntil_in?: InputMaybe<Array<Scalars['BigInt']>>;
  validUntil_lt?: InputMaybe<Scalars['BigInt']>;
  validUntil_lte?: InputMaybe<Scalars['BigInt']>;
  validUntil_not?: InputMaybe<Scalars['BigInt']>;
  validUntil_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Badge_OrderBy {
  Account = 'account',
  AccountId = 'account__id',
  AccountIsCreator = 'account__isCreator',
  AccountIsCurator = 'account__isCurator',
  AccountMetadataUri = 'account__metadataUri',
  BadgeKlerosMetaData = 'badgeKlerosMetaData',
  BadgeKlerosMetaDataId = 'badgeKlerosMetaData__id',
  BadgeKlerosMetaDataItemId = 'badgeKlerosMetaData__itemID',
  BadgeKlerosMetaDataNumberOfRequests = 'badgeKlerosMetaData__numberOfRequests',
  BadgeKlerosMetaDataReviewDueDate = 'badgeKlerosMetaData__reviewDueDate',
  BadgeModel = 'badgeModel',
  BadgeModelBadgesMintedAmount = 'badgeModel__badgesMintedAmount',
  BadgeModelContractAddress = 'badgeModel__contractAddress',
  BadgeModelControllerType = 'badgeModel__controllerType',
  BadgeModelCreatedAt = 'badgeModel__createdAt',
  BadgeModelCreatorFee = 'badgeModel__creatorFee',
  BadgeModelId = 'badgeModel__id',
  BadgeModelNetworkName = 'badgeModel__networkName',
  BadgeModelPaused = 'badgeModel__paused',
  BadgeModelProtocolFeeInBps = 'badgeModel__protocolFeeInBps',
  BadgeModelTotalFeesGenerated = 'badgeModel__totalFeesGenerated',
  BadgeModelUri = 'badgeModel__uri',
  BadgeModelValidFor = 'badgeModel__validFor',
  BadgeModelVersion = 'badgeModel__version',
  CreatedAt = 'createdAt',
  CreatedTxHash = 'createdTxHash',
  Id = 'id',
  NetworkName = 'networkName',
  Status = 'status',
  Uri = 'uri',
  ValidUntil = 'validUntil'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export enum Controller {
  Kleros = 'kleros'
}

export type ControllerConfig = {
  __typename?: 'ControllerConfig';
  arbitrator?: Maybe<Scalars['Bytes']>;
  contractAdmin: Scalars['Bytes'];
  controllerName: Scalars['String'];
  generalProtocolConfig: ProtocolConfig;
  id: Scalars['ID'];
  tcrFactory?: Maybe<Scalars['Bytes']>;
  verifyUserProtocolFee: Scalars['BigInt'];
};

export type ControllerConfig_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ControllerConfig_Filter>>>;
  arbitrator?: InputMaybe<Scalars['Bytes']>;
  arbitrator_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_gt?: InputMaybe<Scalars['Bytes']>;
  arbitrator_gte?: InputMaybe<Scalars['Bytes']>;
  arbitrator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitrator_lt?: InputMaybe<Scalars['Bytes']>;
  arbitrator_lte?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAdmin?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_contains?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_gt?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_gte?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAdmin_lt?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_lte?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_not?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_not_contains?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controllerName?: InputMaybe<Scalars['String']>;
  controllerName_contains?: InputMaybe<Scalars['String']>;
  controllerName_contains_nocase?: InputMaybe<Scalars['String']>;
  controllerName_ends_with?: InputMaybe<Scalars['String']>;
  controllerName_ends_with_nocase?: InputMaybe<Scalars['String']>;
  controllerName_gt?: InputMaybe<Scalars['String']>;
  controllerName_gte?: InputMaybe<Scalars['String']>;
  controllerName_in?: InputMaybe<Array<Scalars['String']>>;
  controllerName_lt?: InputMaybe<Scalars['String']>;
  controllerName_lte?: InputMaybe<Scalars['String']>;
  controllerName_not?: InputMaybe<Scalars['String']>;
  controllerName_not_contains?: InputMaybe<Scalars['String']>;
  controllerName_not_contains_nocase?: InputMaybe<Scalars['String']>;
  controllerName_not_ends_with?: InputMaybe<Scalars['String']>;
  controllerName_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  controllerName_not_in?: InputMaybe<Array<Scalars['String']>>;
  controllerName_not_starts_with?: InputMaybe<Scalars['String']>;
  controllerName_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  controllerName_starts_with?: InputMaybe<Scalars['String']>;
  controllerName_starts_with_nocase?: InputMaybe<Scalars['String']>;
  generalProtocolConfig?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_?: InputMaybe<ProtocolConfig_Filter>;
  generalProtocolConfig_contains?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_contains_nocase?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_ends_with?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_ends_with_nocase?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_gt?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_gte?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_in?: InputMaybe<Array<Scalars['String']>>;
  generalProtocolConfig_lt?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_lte?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_not?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_not_contains?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_not_contains_nocase?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_not_ends_with?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_not_in?: InputMaybe<Array<Scalars['String']>>;
  generalProtocolConfig_not_starts_with?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_starts_with?: InputMaybe<Scalars['String']>;
  generalProtocolConfig_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<ControllerConfig_Filter>>>;
  tcrFactory?: InputMaybe<Scalars['Bytes']>;
  tcrFactory_contains?: InputMaybe<Scalars['Bytes']>;
  tcrFactory_gt?: InputMaybe<Scalars['Bytes']>;
  tcrFactory_gte?: InputMaybe<Scalars['Bytes']>;
  tcrFactory_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tcrFactory_lt?: InputMaybe<Scalars['Bytes']>;
  tcrFactory_lte?: InputMaybe<Scalars['Bytes']>;
  tcrFactory_not?: InputMaybe<Scalars['Bytes']>;
  tcrFactory_not_contains?: InputMaybe<Scalars['Bytes']>;
  tcrFactory_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  verifyUserProtocolFee?: InputMaybe<Scalars['BigInt']>;
  verifyUserProtocolFee_gt?: InputMaybe<Scalars['BigInt']>;
  verifyUserProtocolFee_gte?: InputMaybe<Scalars['BigInt']>;
  verifyUserProtocolFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  verifyUserProtocolFee_lt?: InputMaybe<Scalars['BigInt']>;
  verifyUserProtocolFee_lte?: InputMaybe<Scalars['BigInt']>;
  verifyUserProtocolFee_not?: InputMaybe<Scalars['BigInt']>;
  verifyUserProtocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum ControllerConfig_OrderBy {
  Arbitrator = 'arbitrator',
  ContractAdmin = 'contractAdmin',
  ControllerName = 'controllerName',
  GeneralProtocolConfig = 'generalProtocolConfig',
  GeneralProtocolConfigContractAdmin = 'generalProtocolConfig__contractAdmin',
  GeneralProtocolConfigCreateBadgeModelProtocolFee = 'generalProtocolConfig__createBadgeModelProtocolFee',
  GeneralProtocolConfigFeeCollector = 'generalProtocolConfig__feeCollector',
  GeneralProtocolConfigId = 'generalProtocolConfig__id',
  GeneralProtocolConfigMintBadgeProtocolDefaultFeeInBps = 'generalProtocolConfig__mintBadgeProtocolDefaultFeeInBps',
  GeneralProtocolConfigRegisterUserProtocolFee = 'generalProtocolConfig__registerUserProtocolFee',
  Id = 'id',
  TcrFactory = 'tcrFactory',
  VerifyUserProtocolFee = 'verifyUserProtocolFee'
}

export type CreatorStatistic = {
  __typename?: 'CreatorStatistic';
  allTimeBadgeMinters: Array<Scalars['Bytes']>;
  allTimeBadgeMintersAmount: Scalars['BigInt'];
  createdBadgeModelsAmount: Scalars['BigInt'];
  createdBadgeModelsMintedAmount: Scalars['BigInt'];
  id: Scalars['ID'];
  mostPopularCreatedBadge: Scalars['BigInt'];
  totalFeesEarned: Scalars['BigInt'];
  userStatistic: UserStatistic;
};

export type CreatorStatistic_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  allTimeBadgeMinters?: InputMaybe<Array<Scalars['Bytes']>>;
  allTimeBadgeMintersAmount?: InputMaybe<Scalars['BigInt']>;
  allTimeBadgeMintersAmount_gt?: InputMaybe<Scalars['BigInt']>;
  allTimeBadgeMintersAmount_gte?: InputMaybe<Scalars['BigInt']>;
  allTimeBadgeMintersAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allTimeBadgeMintersAmount_lt?: InputMaybe<Scalars['BigInt']>;
  allTimeBadgeMintersAmount_lte?: InputMaybe<Scalars['BigInt']>;
  allTimeBadgeMintersAmount_not?: InputMaybe<Scalars['BigInt']>;
  allTimeBadgeMintersAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  allTimeBadgeMinters_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  allTimeBadgeMinters_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  allTimeBadgeMinters_not?: InputMaybe<Array<Scalars['Bytes']>>;
  allTimeBadgeMinters_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  allTimeBadgeMinters_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  and?: InputMaybe<Array<InputMaybe<CreatorStatistic_Filter>>>;
  createdBadgeModelsAmount?: InputMaybe<Scalars['BigInt']>;
  createdBadgeModelsAmount_gt?: InputMaybe<Scalars['BigInt']>;
  createdBadgeModelsAmount_gte?: InputMaybe<Scalars['BigInt']>;
  createdBadgeModelsAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBadgeModelsAmount_lt?: InputMaybe<Scalars['BigInt']>;
  createdBadgeModelsAmount_lte?: InputMaybe<Scalars['BigInt']>;
  createdBadgeModelsAmount_not?: InputMaybe<Scalars['BigInt']>;
  createdBadgeModelsAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBadgeModelsMintedAmount?: InputMaybe<Scalars['BigInt']>;
  createdBadgeModelsMintedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  createdBadgeModelsMintedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  createdBadgeModelsMintedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdBadgeModelsMintedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  createdBadgeModelsMintedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  createdBadgeModelsMintedAmount_not?: InputMaybe<Scalars['BigInt']>;
  createdBadgeModelsMintedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  mostPopularCreatedBadge?: InputMaybe<Scalars['BigInt']>;
  mostPopularCreatedBadge_gt?: InputMaybe<Scalars['BigInt']>;
  mostPopularCreatedBadge_gte?: InputMaybe<Scalars['BigInt']>;
  mostPopularCreatedBadge_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mostPopularCreatedBadge_lt?: InputMaybe<Scalars['BigInt']>;
  mostPopularCreatedBadge_lte?: InputMaybe<Scalars['BigInt']>;
  mostPopularCreatedBadge_not?: InputMaybe<Scalars['BigInt']>;
  mostPopularCreatedBadge_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<CreatorStatistic_Filter>>>;
  totalFeesEarned?: InputMaybe<Scalars['BigInt']>;
  totalFeesEarned_gt?: InputMaybe<Scalars['BigInt']>;
  totalFeesEarned_gte?: InputMaybe<Scalars['BigInt']>;
  totalFeesEarned_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFeesEarned_lt?: InputMaybe<Scalars['BigInt']>;
  totalFeesEarned_lte?: InputMaybe<Scalars['BigInt']>;
  totalFeesEarned_not?: InputMaybe<Scalars['BigInt']>;
  totalFeesEarned_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userStatistic?: InputMaybe<Scalars['String']>;
  userStatistic_?: InputMaybe<UserStatistic_Filter>;
  userStatistic_contains?: InputMaybe<Scalars['String']>;
  userStatistic_contains_nocase?: InputMaybe<Scalars['String']>;
  userStatistic_ends_with?: InputMaybe<Scalars['String']>;
  userStatistic_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userStatistic_gt?: InputMaybe<Scalars['String']>;
  userStatistic_gte?: InputMaybe<Scalars['String']>;
  userStatistic_in?: InputMaybe<Array<Scalars['String']>>;
  userStatistic_lt?: InputMaybe<Scalars['String']>;
  userStatistic_lte?: InputMaybe<Scalars['String']>;
  userStatistic_not?: InputMaybe<Scalars['String']>;
  userStatistic_not_contains?: InputMaybe<Scalars['String']>;
  userStatistic_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userStatistic_not_ends_with?: InputMaybe<Scalars['String']>;
  userStatistic_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userStatistic_not_in?: InputMaybe<Array<Scalars['String']>>;
  userStatistic_not_starts_with?: InputMaybe<Scalars['String']>;
  userStatistic_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userStatistic_starts_with?: InputMaybe<Scalars['String']>;
  userStatistic_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum CreatorStatistic_OrderBy {
  AllTimeBadgeMinters = 'allTimeBadgeMinters',
  AllTimeBadgeMintersAmount = 'allTimeBadgeMintersAmount',
  CreatedBadgeModelsAmount = 'createdBadgeModelsAmount',
  CreatedBadgeModelsMintedAmount = 'createdBadgeModelsMintedAmount',
  Id = 'id',
  MostPopularCreatedBadge = 'mostPopularCreatedBadge',
  TotalFeesEarned = 'totalFeesEarned',
  UserStatistic = 'userStatistic',
  UserStatisticChallengesReceivedAmount = 'userStatistic__challengesReceivedAmount',
  UserStatisticChallengesReceivedLostAmount = 'userStatistic__challengesReceivedLostAmount',
  UserStatisticChallengesReceivedRejectedAmount = 'userStatistic__challengesReceivedRejectedAmount',
  UserStatisticChallengesReceivedWonAmount = 'userStatistic__challengesReceivedWonAmount',
  UserStatisticId = 'userStatistic__id',
  UserStatisticMintedBadgesAmount = 'userStatistic__mintedBadgesAmount',
  UserStatisticTimeOfLastChallengeReceived = 'userStatistic__timeOfLastChallengeReceived'
}

export type CuratorStatistic = {
  __typename?: 'CuratorStatistic';
  challengesMadeAmount: Scalars['BigInt'];
  challengesMadeLostAmount: Scalars['BigInt'];
  challengesMadeRejectedAmount: Scalars['BigInt'];
  challengesMadeWonAmount: Scalars['BigInt'];
  id: Scalars['ID'];
  userStatistic: UserStatistic;
};

export type CuratorStatistic_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CuratorStatistic_Filter>>>;
  challengesMadeAmount?: InputMaybe<Scalars['BigInt']>;
  challengesMadeAmount_gt?: InputMaybe<Scalars['BigInt']>;
  challengesMadeAmount_gte?: InputMaybe<Scalars['BigInt']>;
  challengesMadeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengesMadeAmount_lt?: InputMaybe<Scalars['BigInt']>;
  challengesMadeAmount_lte?: InputMaybe<Scalars['BigInt']>;
  challengesMadeAmount_not?: InputMaybe<Scalars['BigInt']>;
  challengesMadeAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengesMadeLostAmount?: InputMaybe<Scalars['BigInt']>;
  challengesMadeLostAmount_gt?: InputMaybe<Scalars['BigInt']>;
  challengesMadeLostAmount_gte?: InputMaybe<Scalars['BigInt']>;
  challengesMadeLostAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengesMadeLostAmount_lt?: InputMaybe<Scalars['BigInt']>;
  challengesMadeLostAmount_lte?: InputMaybe<Scalars['BigInt']>;
  challengesMadeLostAmount_not?: InputMaybe<Scalars['BigInt']>;
  challengesMadeLostAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengesMadeRejectedAmount?: InputMaybe<Scalars['BigInt']>;
  challengesMadeRejectedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  challengesMadeRejectedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  challengesMadeRejectedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengesMadeRejectedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  challengesMadeRejectedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  challengesMadeRejectedAmount_not?: InputMaybe<Scalars['BigInt']>;
  challengesMadeRejectedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengesMadeWonAmount?: InputMaybe<Scalars['BigInt']>;
  challengesMadeWonAmount_gt?: InputMaybe<Scalars['BigInt']>;
  challengesMadeWonAmount_gte?: InputMaybe<Scalars['BigInt']>;
  challengesMadeWonAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengesMadeWonAmount_lt?: InputMaybe<Scalars['BigInt']>;
  challengesMadeWonAmount_lte?: InputMaybe<Scalars['BigInt']>;
  challengesMadeWonAmount_not?: InputMaybe<Scalars['BigInt']>;
  challengesMadeWonAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<CuratorStatistic_Filter>>>;
  userStatistic?: InputMaybe<Scalars['String']>;
  userStatistic_?: InputMaybe<UserStatistic_Filter>;
  userStatistic_contains?: InputMaybe<Scalars['String']>;
  userStatistic_contains_nocase?: InputMaybe<Scalars['String']>;
  userStatistic_ends_with?: InputMaybe<Scalars['String']>;
  userStatistic_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userStatistic_gt?: InputMaybe<Scalars['String']>;
  userStatistic_gte?: InputMaybe<Scalars['String']>;
  userStatistic_in?: InputMaybe<Array<Scalars['String']>>;
  userStatistic_lt?: InputMaybe<Scalars['String']>;
  userStatistic_lte?: InputMaybe<Scalars['String']>;
  userStatistic_not?: InputMaybe<Scalars['String']>;
  userStatistic_not_contains?: InputMaybe<Scalars['String']>;
  userStatistic_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userStatistic_not_ends_with?: InputMaybe<Scalars['String']>;
  userStatistic_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userStatistic_not_in?: InputMaybe<Array<Scalars['String']>>;
  userStatistic_not_starts_with?: InputMaybe<Scalars['String']>;
  userStatistic_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userStatistic_starts_with?: InputMaybe<Scalars['String']>;
  userStatistic_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum CuratorStatistic_OrderBy {
  ChallengesMadeAmount = 'challengesMadeAmount',
  ChallengesMadeLostAmount = 'challengesMadeLostAmount',
  ChallengesMadeRejectedAmount = 'challengesMadeRejectedAmount',
  ChallengesMadeWonAmount = 'challengesMadeWonAmount',
  Id = 'id',
  UserStatistic = 'userStatistic',
  UserStatisticChallengesReceivedAmount = 'userStatistic__challengesReceivedAmount',
  UserStatisticChallengesReceivedLostAmount = 'userStatistic__challengesReceivedLostAmount',
  UserStatisticChallengesReceivedRejectedAmount = 'userStatistic__challengesReceivedRejectedAmount',
  UserStatisticChallengesReceivedWonAmount = 'userStatistic__challengesReceivedWonAmount',
  UserStatisticId = 'userStatistic__id',
  UserStatisticMintedBadgesAmount = 'userStatistic__mintedBadgesAmount',
  UserStatisticTimeOfLastChallengeReceived = 'userStatistic__timeOfLastChallengeReceived'
}

export type Evidence = {
  __typename?: 'Evidence';
  /** <Request.id>-<evidence number> */
  id: Scalars['ID'];
  /** The latest request when this evidence was submitted. */
  request?: Maybe<KlerosBadgeRequest>;
  /** Who has send the evidence */
  sender: Scalars['Bytes'];
  /** When was this evidence posted */
  timestamp: Scalars['BigInt'];
  /** The URI of the evidence file. */
  uri: Scalars['String'];
};

export type Evidence_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Evidence_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<Evidence_Filter>>>;
  request?: InputMaybe<Scalars['String']>;
  request_?: InputMaybe<KlerosBadgeRequest_Filter>;
  request_contains?: InputMaybe<Scalars['String']>;
  request_contains_nocase?: InputMaybe<Scalars['String']>;
  request_ends_with?: InputMaybe<Scalars['String']>;
  request_ends_with_nocase?: InputMaybe<Scalars['String']>;
  request_gt?: InputMaybe<Scalars['String']>;
  request_gte?: InputMaybe<Scalars['String']>;
  request_in?: InputMaybe<Array<Scalars['String']>>;
  request_lt?: InputMaybe<Scalars['String']>;
  request_lte?: InputMaybe<Scalars['String']>;
  request_not?: InputMaybe<Scalars['String']>;
  request_not_contains?: InputMaybe<Scalars['String']>;
  request_not_contains_nocase?: InputMaybe<Scalars['String']>;
  request_not_ends_with?: InputMaybe<Scalars['String']>;
  request_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  request_not_in?: InputMaybe<Array<Scalars['String']>>;
  request_not_starts_with?: InputMaybe<Scalars['String']>;
  request_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  request_starts_with?: InputMaybe<Scalars['String']>;
  request_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender?: InputMaybe<Scalars['Bytes']>;
  sender_contains?: InputMaybe<Scalars['Bytes']>;
  sender_gt?: InputMaybe<Scalars['Bytes']>;
  sender_gte?: InputMaybe<Scalars['Bytes']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']>;
  sender_lte?: InputMaybe<Scalars['Bytes']>;
  sender_not?: InputMaybe<Scalars['Bytes']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  uri?: InputMaybe<Scalars['String']>;
  uri_contains?: InputMaybe<Scalars['String']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_ends_with?: InputMaybe<Scalars['String']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_gt?: InputMaybe<Scalars['String']>;
  uri_gte?: InputMaybe<Scalars['String']>;
  uri_in?: InputMaybe<Array<Scalars['String']>>;
  uri_lt?: InputMaybe<Scalars['String']>;
  uri_lte?: InputMaybe<Scalars['String']>;
  uri_not?: InputMaybe<Scalars['String']>;
  uri_not_contains?: InputMaybe<Scalars['String']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  uri_starts_with?: InputMaybe<Scalars['String']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum Evidence_OrderBy {
  Id = 'id',
  Request = 'request',
  RequestArbitrationParamsIndex = 'request__arbitrationParamsIndex',
  RequestArbitrator = 'request__arbitrator',
  RequestChallenger = 'request__challenger',
  RequestCreatedAt = 'request__createdAt',
  RequestDisputeId = 'request__disputeID',
  RequestDisputeOutcome = 'request__disputeOutcome',
  RequestDisputed = 'request__disputed',
  RequestId = 'request__id',
  RequestNumberOfEvidences = 'request__numberOfEvidences',
  RequestRequestIndex = 'request__requestIndex',
  RequestRequester = 'request__requester',
  RequestResolutionTime = 'request__resolutionTime',
  RequestResolutionTx = 'request__resolutionTx',
  RequestResolved = 'request__resolved',
  RequestType = 'request__type',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Uri = 'uri'
}

export type KlerosBadgeRequest = {
  __typename?: 'KlerosBadgeRequest';
  arbitrationParamsIndex?: Maybe<Scalars['BigInt']>;
  /** The arbitrator's address. */
  arbitrator: Scalars['Bytes'];
  badgeKlerosMetaData?: Maybe<BadgeKlerosMetaData>;
  challenger?: Maybe<Scalars['Bytes']>;
  createdAt: Scalars['BigInt'];
  disputeID?: Maybe<Scalars['BigInt']>;
  /** The outcome of the dispute, if any. Note that unsuccessful appeal fundings can invert the arbitrator ruling (so this may differ from the ruling given by the arbitrator). */
  disputeOutcome: Ruling;
  /** Whether the item is currently disputed. */
  disputed: Scalars['Boolean'];
  /** Evidence provided regarding this request (matching evidenceGroupID). */
  evidences: Array<Evidence>;
  id: Scalars['ID'];
  /** Number of evidences. */
  numberOfEvidences: Scalars['BigInt'];
  requestIndex?: Maybe<Scalars['BigInt']>;
  requester?: Maybe<Scalars['Bytes']>;
  /** The time the request was resolved. */
  resolutionTime: Scalars['BigInt'];
  /** The hash of the transaction that solved this request. */
  resolutionTx?: Maybe<Scalars['Bytes']>;
  /** True if the request was executed and/or any raised disputes were resolved. */
  resolved: Scalars['Boolean'];
  type: KlerosRequestType;
};


export type KlerosBadgeRequestEvidencesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Evidence_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Evidence_Filter>;
};

export type KlerosBadgeRequest_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<KlerosBadgeRequest_Filter>>>;
  arbitrationParamsIndex?: InputMaybe<Scalars['BigInt']>;
  arbitrationParamsIndex_gt?: InputMaybe<Scalars['BigInt']>;
  arbitrationParamsIndex_gte?: InputMaybe<Scalars['BigInt']>;
  arbitrationParamsIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  arbitrationParamsIndex_lt?: InputMaybe<Scalars['BigInt']>;
  arbitrationParamsIndex_lte?: InputMaybe<Scalars['BigInt']>;
  arbitrationParamsIndex_not?: InputMaybe<Scalars['BigInt']>;
  arbitrationParamsIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  arbitrator?: InputMaybe<Scalars['Bytes']>;
  arbitrator_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_gt?: InputMaybe<Scalars['Bytes']>;
  arbitrator_gte?: InputMaybe<Scalars['Bytes']>;
  arbitrator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  arbitrator_lt?: InputMaybe<Scalars['Bytes']>;
  arbitrator_lte?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_contains?: InputMaybe<Scalars['Bytes']>;
  arbitrator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  badgeKlerosMetaData?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_?: InputMaybe<BadgeKlerosMetaData_Filter>;
  badgeKlerosMetaData_contains?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_contains_nocase?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_ends_with?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_ends_with_nocase?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_gt?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_gte?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_in?: InputMaybe<Array<Scalars['String']>>;
  badgeKlerosMetaData_lt?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_lte?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_not?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_not_contains?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_not_contains_nocase?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_not_ends_with?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_not_in?: InputMaybe<Array<Scalars['String']>>;
  badgeKlerosMetaData_not_starts_with?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_starts_with?: InputMaybe<Scalars['String']>;
  badgeKlerosMetaData_starts_with_nocase?: InputMaybe<Scalars['String']>;
  challenger?: InputMaybe<Scalars['Bytes']>;
  challenger_contains?: InputMaybe<Scalars['Bytes']>;
  challenger_gt?: InputMaybe<Scalars['Bytes']>;
  challenger_gte?: InputMaybe<Scalars['Bytes']>;
  challenger_in?: InputMaybe<Array<Scalars['Bytes']>>;
  challenger_lt?: InputMaybe<Scalars['Bytes']>;
  challenger_lte?: InputMaybe<Scalars['Bytes']>;
  challenger_not?: InputMaybe<Scalars['Bytes']>;
  challenger_not_contains?: InputMaybe<Scalars['Bytes']>;
  challenger_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  disputeID?: InputMaybe<Scalars['BigInt']>;
  disputeID_gt?: InputMaybe<Scalars['BigInt']>;
  disputeID_gte?: InputMaybe<Scalars['BigInt']>;
  disputeID_in?: InputMaybe<Array<Scalars['BigInt']>>;
  disputeID_lt?: InputMaybe<Scalars['BigInt']>;
  disputeID_lte?: InputMaybe<Scalars['BigInt']>;
  disputeID_not?: InputMaybe<Scalars['BigInt']>;
  disputeID_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  disputeOutcome?: InputMaybe<Ruling>;
  disputeOutcome_in?: InputMaybe<Array<Ruling>>;
  disputeOutcome_not?: InputMaybe<Ruling>;
  disputeOutcome_not_in?: InputMaybe<Array<Ruling>>;
  disputed?: InputMaybe<Scalars['Boolean']>;
  disputed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  disputed_not?: InputMaybe<Scalars['Boolean']>;
  disputed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  evidences_?: InputMaybe<Evidence_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  numberOfEvidences?: InputMaybe<Scalars['BigInt']>;
  numberOfEvidences_gt?: InputMaybe<Scalars['BigInt']>;
  numberOfEvidences_gte?: InputMaybe<Scalars['BigInt']>;
  numberOfEvidences_in?: InputMaybe<Array<Scalars['BigInt']>>;
  numberOfEvidences_lt?: InputMaybe<Scalars['BigInt']>;
  numberOfEvidences_lte?: InputMaybe<Scalars['BigInt']>;
  numberOfEvidences_not?: InputMaybe<Scalars['BigInt']>;
  numberOfEvidences_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<KlerosBadgeRequest_Filter>>>;
  requestIndex?: InputMaybe<Scalars['BigInt']>;
  requestIndex_gt?: InputMaybe<Scalars['BigInt']>;
  requestIndex_gte?: InputMaybe<Scalars['BigInt']>;
  requestIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  requestIndex_lt?: InputMaybe<Scalars['BigInt']>;
  requestIndex_lte?: InputMaybe<Scalars['BigInt']>;
  requestIndex_not?: InputMaybe<Scalars['BigInt']>;
  requestIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  requester?: InputMaybe<Scalars['Bytes']>;
  requester_contains?: InputMaybe<Scalars['Bytes']>;
  requester_gt?: InputMaybe<Scalars['Bytes']>;
  requester_gte?: InputMaybe<Scalars['Bytes']>;
  requester_in?: InputMaybe<Array<Scalars['Bytes']>>;
  requester_lt?: InputMaybe<Scalars['Bytes']>;
  requester_lte?: InputMaybe<Scalars['Bytes']>;
  requester_not?: InputMaybe<Scalars['Bytes']>;
  requester_not_contains?: InputMaybe<Scalars['Bytes']>;
  requester_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  resolutionTime?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_gt?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_gte?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  resolutionTime_lt?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_lte?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_not?: InputMaybe<Scalars['BigInt']>;
  resolutionTime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  resolutionTx?: InputMaybe<Scalars['Bytes']>;
  resolutionTx_contains?: InputMaybe<Scalars['Bytes']>;
  resolutionTx_gt?: InputMaybe<Scalars['Bytes']>;
  resolutionTx_gte?: InputMaybe<Scalars['Bytes']>;
  resolutionTx_in?: InputMaybe<Array<Scalars['Bytes']>>;
  resolutionTx_lt?: InputMaybe<Scalars['Bytes']>;
  resolutionTx_lte?: InputMaybe<Scalars['Bytes']>;
  resolutionTx_not?: InputMaybe<Scalars['Bytes']>;
  resolutionTx_not_contains?: InputMaybe<Scalars['Bytes']>;
  resolutionTx_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  resolved?: InputMaybe<Scalars['Boolean']>;
  resolved_in?: InputMaybe<Array<Scalars['Boolean']>>;
  resolved_not?: InputMaybe<Scalars['Boolean']>;
  resolved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  type?: InputMaybe<KlerosRequestType>;
  type_in?: InputMaybe<Array<KlerosRequestType>>;
  type_not?: InputMaybe<KlerosRequestType>;
  type_not_in?: InputMaybe<Array<KlerosRequestType>>;
};

export enum KlerosBadgeRequest_OrderBy {
  ArbitrationParamsIndex = 'arbitrationParamsIndex',
  Arbitrator = 'arbitrator',
  BadgeKlerosMetaData = 'badgeKlerosMetaData',
  BadgeKlerosMetaDataId = 'badgeKlerosMetaData__id',
  BadgeKlerosMetaDataItemId = 'badgeKlerosMetaData__itemID',
  BadgeKlerosMetaDataNumberOfRequests = 'badgeKlerosMetaData__numberOfRequests',
  BadgeKlerosMetaDataReviewDueDate = 'badgeKlerosMetaData__reviewDueDate',
  Challenger = 'challenger',
  CreatedAt = 'createdAt',
  DisputeId = 'disputeID',
  DisputeOutcome = 'disputeOutcome',
  Disputed = 'disputed',
  Evidences = 'evidences',
  Id = 'id',
  NumberOfEvidences = 'numberOfEvidences',
  RequestIndex = 'requestIndex',
  Requester = 'requester',
  ResolutionTime = 'resolutionTime',
  ResolutionTx = 'resolutionTx',
  Resolved = 'resolved',
  Type = 'type'
}

export enum KlerosRequestType {
  Clearing = 'Clearing',
  Registration = 'Registration'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type ProtocolConfig = {
  __typename?: 'ProtocolConfig';
  contractAdmin: Scalars['Bytes'];
  controllerConfigs?: Maybe<Array<ControllerConfig>>;
  createBadgeModelProtocolFee: Scalars['BigInt'];
  feeCollector: Scalars['Bytes'];
  id: Scalars['ID'];
  mintBadgeProtocolDefaultFeeInBps: Scalars['BigInt'];
  protocolStatistics: ProtocolStatistic;
  registerUserProtocolFee: Scalars['BigInt'];
};


export type ProtocolConfigControllerConfigsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ControllerConfig_Filter>;
};

export type ProtocolConfig_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProtocolConfig_Filter>>>;
  contractAdmin?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_contains?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_gt?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_gte?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_in?: InputMaybe<Array<Scalars['Bytes']>>;
  contractAdmin_lt?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_lte?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_not?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_not_contains?: InputMaybe<Scalars['Bytes']>;
  contractAdmin_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  controllerConfigs_?: InputMaybe<ControllerConfig_Filter>;
  createBadgeModelProtocolFee?: InputMaybe<Scalars['BigInt']>;
  createBadgeModelProtocolFee_gt?: InputMaybe<Scalars['BigInt']>;
  createBadgeModelProtocolFee_gte?: InputMaybe<Scalars['BigInt']>;
  createBadgeModelProtocolFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createBadgeModelProtocolFee_lt?: InputMaybe<Scalars['BigInt']>;
  createBadgeModelProtocolFee_lte?: InputMaybe<Scalars['BigInt']>;
  createBadgeModelProtocolFee_not?: InputMaybe<Scalars['BigInt']>;
  createBadgeModelProtocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeCollector?: InputMaybe<Scalars['Bytes']>;
  feeCollector_contains?: InputMaybe<Scalars['Bytes']>;
  feeCollector_gt?: InputMaybe<Scalars['Bytes']>;
  feeCollector_gte?: InputMaybe<Scalars['Bytes']>;
  feeCollector_in?: InputMaybe<Array<Scalars['Bytes']>>;
  feeCollector_lt?: InputMaybe<Scalars['Bytes']>;
  feeCollector_lte?: InputMaybe<Scalars['Bytes']>;
  feeCollector_not?: InputMaybe<Scalars['Bytes']>;
  feeCollector_not_contains?: InputMaybe<Scalars['Bytes']>;
  feeCollector_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  mintBadgeProtocolDefaultFeeInBps?: InputMaybe<Scalars['BigInt']>;
  mintBadgeProtocolDefaultFeeInBps_gt?: InputMaybe<Scalars['BigInt']>;
  mintBadgeProtocolDefaultFeeInBps_gte?: InputMaybe<Scalars['BigInt']>;
  mintBadgeProtocolDefaultFeeInBps_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mintBadgeProtocolDefaultFeeInBps_lt?: InputMaybe<Scalars['BigInt']>;
  mintBadgeProtocolDefaultFeeInBps_lte?: InputMaybe<Scalars['BigInt']>;
  mintBadgeProtocolDefaultFeeInBps_not?: InputMaybe<Scalars['BigInt']>;
  mintBadgeProtocolDefaultFeeInBps_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<ProtocolConfig_Filter>>>;
  protocolStatistics?: InputMaybe<Scalars['String']>;
  protocolStatistics_?: InputMaybe<ProtocolStatistic_Filter>;
  protocolStatistics_contains?: InputMaybe<Scalars['String']>;
  protocolStatistics_contains_nocase?: InputMaybe<Scalars['String']>;
  protocolStatistics_ends_with?: InputMaybe<Scalars['String']>;
  protocolStatistics_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocolStatistics_gt?: InputMaybe<Scalars['String']>;
  protocolStatistics_gte?: InputMaybe<Scalars['String']>;
  protocolStatistics_in?: InputMaybe<Array<Scalars['String']>>;
  protocolStatistics_lt?: InputMaybe<Scalars['String']>;
  protocolStatistics_lte?: InputMaybe<Scalars['String']>;
  protocolStatistics_not?: InputMaybe<Scalars['String']>;
  protocolStatistics_not_contains?: InputMaybe<Scalars['String']>;
  protocolStatistics_not_contains_nocase?: InputMaybe<Scalars['String']>;
  protocolStatistics_not_ends_with?: InputMaybe<Scalars['String']>;
  protocolStatistics_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  protocolStatistics_not_in?: InputMaybe<Array<Scalars['String']>>;
  protocolStatistics_not_starts_with?: InputMaybe<Scalars['String']>;
  protocolStatistics_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  protocolStatistics_starts_with?: InputMaybe<Scalars['String']>;
  protocolStatistics_starts_with_nocase?: InputMaybe<Scalars['String']>;
  registerUserProtocolFee?: InputMaybe<Scalars['BigInt']>;
  registerUserProtocolFee_gt?: InputMaybe<Scalars['BigInt']>;
  registerUserProtocolFee_gte?: InputMaybe<Scalars['BigInt']>;
  registerUserProtocolFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registerUserProtocolFee_lt?: InputMaybe<Scalars['BigInt']>;
  registerUserProtocolFee_lte?: InputMaybe<Scalars['BigInt']>;
  registerUserProtocolFee_not?: InputMaybe<Scalars['BigInt']>;
  registerUserProtocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum ProtocolConfig_OrderBy {
  ContractAdmin = 'contractAdmin',
  ControllerConfigs = 'controllerConfigs',
  CreateBadgeModelProtocolFee = 'createBadgeModelProtocolFee',
  FeeCollector = 'feeCollector',
  Id = 'id',
  MintBadgeProtocolDefaultFeeInBps = 'mintBadgeProtocolDefaultFeeInBps',
  ProtocolStatistics = 'protocolStatistics',
  ProtocolStatisticsBadgeCreatorsAmount = 'protocolStatistics__badgeCreatorsAmount',
  ProtocolStatisticsBadgeCuratorsAmount = 'protocolStatistics__badgeCuratorsAmount',
  ProtocolStatisticsBadgeModelsCreatedAmount = 'protocolStatistics__badgeModelsCreatedAmount',
  ProtocolStatisticsBadgesChallengedAmount = 'protocolStatistics__badgesChallengedAmount',
  ProtocolStatisticsBadgesMintedAmount = 'protocolStatistics__badgesMintedAmount',
  ProtocolStatisticsBadgesOwnersAmount = 'protocolStatistics__badgesOwnersAmount',
  ProtocolStatisticsId = 'protocolStatistics__id',
  ProtocolStatisticsProtocolEarnedFees = 'protocolStatistics__protocolEarnedFees',
  ProtocolStatisticsRegisteredUsersAmount = 'protocolStatistics__registeredUsersAmount',
  ProtocolStatisticsTotalCreatorsFees = 'protocolStatistics__totalCreatorsFees',
  RegisterUserProtocolFee = 'registerUserProtocolFee'
}

export type ProtocolStatistic = {
  __typename?: 'ProtocolStatistic';
  badgeCreators: Array<Scalars['Bytes']>;
  badgeCreatorsAmount: Scalars['BigInt'];
  badgeCurators: Array<Scalars['Bytes']>;
  badgeCuratorsAmount: Scalars['BigInt'];
  badgeModelsCreatedAmount: Scalars['BigInt'];
  badgesChallengedAmount: Scalars['BigInt'];
  badgesMintedAmount: Scalars['BigInt'];
  badgesOwnersAmount: Scalars['BigInt'];
  id: Scalars['ID'];
  protocolConfig: ProtocolConfig;
  protocolEarnedFees: Scalars['BigInt'];
  registeredUsers: Array<Scalars['Bytes']>;
  registeredUsersAmount: Scalars['BigInt'];
  totalCreatorsFees: Scalars['BigInt'];
};

export type ProtocolStatistic_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ProtocolStatistic_Filter>>>;
  badgeCreators?: InputMaybe<Array<Scalars['Bytes']>>;
  badgeCreatorsAmount?: InputMaybe<Scalars['BigInt']>;
  badgeCreatorsAmount_gt?: InputMaybe<Scalars['BigInt']>;
  badgeCreatorsAmount_gte?: InputMaybe<Scalars['BigInt']>;
  badgeCreatorsAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  badgeCreatorsAmount_lt?: InputMaybe<Scalars['BigInt']>;
  badgeCreatorsAmount_lte?: InputMaybe<Scalars['BigInt']>;
  badgeCreatorsAmount_not?: InputMaybe<Scalars['BigInt']>;
  badgeCreatorsAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  badgeCreators_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  badgeCreators_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  badgeCreators_not?: InputMaybe<Array<Scalars['Bytes']>>;
  badgeCreators_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  badgeCreators_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  badgeCurators?: InputMaybe<Array<Scalars['Bytes']>>;
  badgeCuratorsAmount?: InputMaybe<Scalars['BigInt']>;
  badgeCuratorsAmount_gt?: InputMaybe<Scalars['BigInt']>;
  badgeCuratorsAmount_gte?: InputMaybe<Scalars['BigInt']>;
  badgeCuratorsAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  badgeCuratorsAmount_lt?: InputMaybe<Scalars['BigInt']>;
  badgeCuratorsAmount_lte?: InputMaybe<Scalars['BigInt']>;
  badgeCuratorsAmount_not?: InputMaybe<Scalars['BigInt']>;
  badgeCuratorsAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  badgeCurators_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  badgeCurators_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  badgeCurators_not?: InputMaybe<Array<Scalars['Bytes']>>;
  badgeCurators_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  badgeCurators_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  badgeModelsCreatedAmount?: InputMaybe<Scalars['BigInt']>;
  badgeModelsCreatedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  badgeModelsCreatedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  badgeModelsCreatedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  badgeModelsCreatedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  badgeModelsCreatedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  badgeModelsCreatedAmount_not?: InputMaybe<Scalars['BigInt']>;
  badgeModelsCreatedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  badgesChallengedAmount?: InputMaybe<Scalars['BigInt']>;
  badgesChallengedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  badgesChallengedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  badgesChallengedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  badgesChallengedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  badgesChallengedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  badgesChallengedAmount_not?: InputMaybe<Scalars['BigInt']>;
  badgesChallengedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  badgesMintedAmount?: InputMaybe<Scalars['BigInt']>;
  badgesMintedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  badgesMintedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  badgesMintedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  badgesMintedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  badgesMintedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  badgesMintedAmount_not?: InputMaybe<Scalars['BigInt']>;
  badgesMintedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  badgesOwnersAmount?: InputMaybe<Scalars['BigInt']>;
  badgesOwnersAmount_gt?: InputMaybe<Scalars['BigInt']>;
  badgesOwnersAmount_gte?: InputMaybe<Scalars['BigInt']>;
  badgesOwnersAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  badgesOwnersAmount_lt?: InputMaybe<Scalars['BigInt']>;
  badgesOwnersAmount_lte?: InputMaybe<Scalars['BigInt']>;
  badgesOwnersAmount_not?: InputMaybe<Scalars['BigInt']>;
  badgesOwnersAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<ProtocolStatistic_Filter>>>;
  protocolConfig_?: InputMaybe<ProtocolConfig_Filter>;
  protocolEarnedFees?: InputMaybe<Scalars['BigInt']>;
  protocolEarnedFees_gt?: InputMaybe<Scalars['BigInt']>;
  protocolEarnedFees_gte?: InputMaybe<Scalars['BigInt']>;
  protocolEarnedFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocolEarnedFees_lt?: InputMaybe<Scalars['BigInt']>;
  protocolEarnedFees_lte?: InputMaybe<Scalars['BigInt']>;
  protocolEarnedFees_not?: InputMaybe<Scalars['BigInt']>;
  protocolEarnedFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registeredUsers?: InputMaybe<Array<Scalars['Bytes']>>;
  registeredUsersAmount?: InputMaybe<Scalars['BigInt']>;
  registeredUsersAmount_gt?: InputMaybe<Scalars['BigInt']>;
  registeredUsersAmount_gte?: InputMaybe<Scalars['BigInt']>;
  registeredUsersAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registeredUsersAmount_lt?: InputMaybe<Scalars['BigInt']>;
  registeredUsersAmount_lte?: InputMaybe<Scalars['BigInt']>;
  registeredUsersAmount_not?: InputMaybe<Scalars['BigInt']>;
  registeredUsersAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  registeredUsers_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  registeredUsers_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  registeredUsers_not?: InputMaybe<Array<Scalars['Bytes']>>;
  registeredUsers_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  registeredUsers_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  totalCreatorsFees?: InputMaybe<Scalars['BigInt']>;
  totalCreatorsFees_gt?: InputMaybe<Scalars['BigInt']>;
  totalCreatorsFees_gte?: InputMaybe<Scalars['BigInt']>;
  totalCreatorsFees_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalCreatorsFees_lt?: InputMaybe<Scalars['BigInt']>;
  totalCreatorsFees_lte?: InputMaybe<Scalars['BigInt']>;
  totalCreatorsFees_not?: InputMaybe<Scalars['BigInt']>;
  totalCreatorsFees_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum ProtocolStatistic_OrderBy {
  BadgeCreators = 'badgeCreators',
  BadgeCreatorsAmount = 'badgeCreatorsAmount',
  BadgeCurators = 'badgeCurators',
  BadgeCuratorsAmount = 'badgeCuratorsAmount',
  BadgeModelsCreatedAmount = 'badgeModelsCreatedAmount',
  BadgesChallengedAmount = 'badgesChallengedAmount',
  BadgesMintedAmount = 'badgesMintedAmount',
  BadgesOwnersAmount = 'badgesOwnersAmount',
  Id = 'id',
  ProtocolConfig = 'protocolConfig',
  ProtocolConfigContractAdmin = 'protocolConfig__contractAdmin',
  ProtocolConfigCreateBadgeModelProtocolFee = 'protocolConfig__createBadgeModelProtocolFee',
  ProtocolConfigFeeCollector = 'protocolConfig__feeCollector',
  ProtocolConfigId = 'protocolConfig__id',
  ProtocolConfigMintBadgeProtocolDefaultFeeInBps = 'protocolConfig__mintBadgeProtocolDefaultFeeInBps',
  ProtocolConfigRegisterUserProtocolFee = 'protocolConfig__registerUserProtocolFee',
  ProtocolEarnedFees = 'protocolEarnedFees',
  RegisteredUsers = 'registeredUsers',
  RegisteredUsersAmount = 'registeredUsersAmount',
  TotalCreatorsFees = 'totalCreatorsFees'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  badge?: Maybe<Badge>;
  badgeKlerosMetaData?: Maybe<BadgeKlerosMetaData>;
  badgeKlerosMetaDatas: Array<BadgeKlerosMetaData>;
  badgeModel?: Maybe<BadgeModel>;
  badgeModelKlerosMetaData?: Maybe<BadgeModelKlerosMetaData>;
  badgeModelKlerosMetaDatas: Array<BadgeModelKlerosMetaData>;
  badgeModels: Array<BadgeModel>;
  badges: Array<Badge>;
  controllerConfig?: Maybe<ControllerConfig>;
  controllerConfigs: Array<ControllerConfig>;
  creatorStatistic?: Maybe<CreatorStatistic>;
  creatorStatistics: Array<CreatorStatistic>;
  curatorStatistic?: Maybe<CuratorStatistic>;
  curatorStatistics: Array<CuratorStatistic>;
  evidence?: Maybe<Evidence>;
  evidenceGroupIDItemID?: Maybe<_EvidenceGroupIdItemId>;
  evidenceGroupIDItemIDs: Array<_EvidenceGroupIdItemId>;
  evidences: Array<Evidence>;
  itemIDToEvidenceGroupIDToBadgeID?: Maybe<_ItemIdToEvidenceGroupIdToBadgeId>;
  itemIDToEvidenceGroupIDToBadgeIDs: Array<_ItemIdToEvidenceGroupIdToBadgeId>;
  klerosBadgeIdToBadgeId?: Maybe<_KlerosBadgeIdToBadgeId>;
  klerosBadgeIdToBadgeIds: Array<_KlerosBadgeIdToBadgeId>;
  klerosBadgeRequest?: Maybe<KlerosBadgeRequest>;
  klerosBadgeRequests: Array<KlerosBadgeRequest>;
  protocolConfig?: Maybe<ProtocolConfig>;
  protocolConfigs: Array<ProtocolConfig>;
  protocolStatistic?: Maybe<ProtocolStatistic>;
  protocolStatistics: Array<ProtocolStatistic>;
  user?: Maybe<User>;
  userStatistic?: Maybe<UserStatistic>;
  userStatistics: Array<UserStatistic>;
  users: Array<User>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryBadgeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBadgeKlerosMetaDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBadgeKlerosMetaDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BadgeKlerosMetaData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BadgeKlerosMetaData_Filter>;
};


export type QueryBadgeModelArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBadgeModelKlerosMetaDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBadgeModelKlerosMetaDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BadgeModelKlerosMetaData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BadgeModelKlerosMetaData_Filter>;
};


export type QueryBadgeModelsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BadgeModel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BadgeModel_Filter>;
};


export type QueryBadgesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Badge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Badge_Filter>;
};


export type QueryControllerConfigArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryControllerConfigsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerConfig_Filter>;
};


export type QueryCreatorStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCreatorStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CreatorStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CreatorStatistic_Filter>;
};


export type QueryCuratorStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCuratorStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CuratorStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CuratorStatistic_Filter>;
};


export type QueryEvidenceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEvidenceGroupIdItemIdArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEvidenceGroupIdItemIDsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_EvidenceGroupIdItemId_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_EvidenceGroupIdItemId_Filter>;
};


export type QueryEvidencesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Evidence_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Evidence_Filter>;
};


export type QueryItemIdToEvidenceGroupIdToBadgeIdArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryItemIdToEvidenceGroupIdToBadgeIDsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_ItemIdToEvidenceGroupIdToBadgeId_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_ItemIdToEvidenceGroupIdToBadgeId_Filter>;
};


export type QueryKlerosBadgeIdToBadgeIdArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryKlerosBadgeIdToBadgeIdsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_KlerosBadgeIdToBadgeId_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_KlerosBadgeIdToBadgeId_Filter>;
};


export type QueryKlerosBadgeRequestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryKlerosBadgeRequestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<KlerosBadgeRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<KlerosBadgeRequest_Filter>;
};


export type QueryProtocolConfigArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProtocolConfigsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolConfig_Filter>;
};


export type QueryProtocolStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProtocolStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolStatistic_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserStatistic_Filter>;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export enum Ruling {
  /** The arbitrator ruled in favor of the requester. */
  Accept = 'Accept',
  /** The arbitrator did not rule or refused to rule. */
  None = 'None',
  /** The arbitrator in favor of the challenger. */
  Reject = 'Reject'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  badge?: Maybe<Badge>;
  badgeKlerosMetaData?: Maybe<BadgeKlerosMetaData>;
  badgeKlerosMetaDatas: Array<BadgeKlerosMetaData>;
  badgeModel?: Maybe<BadgeModel>;
  badgeModelKlerosMetaData?: Maybe<BadgeModelKlerosMetaData>;
  badgeModelKlerosMetaDatas: Array<BadgeModelKlerosMetaData>;
  badgeModels: Array<BadgeModel>;
  badges: Array<Badge>;
  controllerConfig?: Maybe<ControllerConfig>;
  controllerConfigs: Array<ControllerConfig>;
  creatorStatistic?: Maybe<CreatorStatistic>;
  creatorStatistics: Array<CreatorStatistic>;
  curatorStatistic?: Maybe<CuratorStatistic>;
  curatorStatistics: Array<CuratorStatistic>;
  evidence?: Maybe<Evidence>;
  evidenceGroupIDItemID?: Maybe<_EvidenceGroupIdItemId>;
  evidenceGroupIDItemIDs: Array<_EvidenceGroupIdItemId>;
  evidences: Array<Evidence>;
  itemIDToEvidenceGroupIDToBadgeID?: Maybe<_ItemIdToEvidenceGroupIdToBadgeId>;
  itemIDToEvidenceGroupIDToBadgeIDs: Array<_ItemIdToEvidenceGroupIdToBadgeId>;
  klerosBadgeIdToBadgeId?: Maybe<_KlerosBadgeIdToBadgeId>;
  klerosBadgeIdToBadgeIds: Array<_KlerosBadgeIdToBadgeId>;
  klerosBadgeRequest?: Maybe<KlerosBadgeRequest>;
  klerosBadgeRequests: Array<KlerosBadgeRequest>;
  protocolConfig?: Maybe<ProtocolConfig>;
  protocolConfigs: Array<ProtocolConfig>;
  protocolStatistic?: Maybe<ProtocolStatistic>;
  protocolStatistics: Array<ProtocolStatistic>;
  user?: Maybe<User>;
  userStatistic?: Maybe<UserStatistic>;
  userStatistics: Array<UserStatistic>;
  users: Array<User>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionBadgeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBadgeKlerosMetaDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBadgeKlerosMetaDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BadgeKlerosMetaData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BadgeKlerosMetaData_Filter>;
};


export type SubscriptionBadgeModelArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBadgeModelKlerosMetaDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBadgeModelKlerosMetaDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BadgeModelKlerosMetaData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BadgeModelKlerosMetaData_Filter>;
};


export type SubscriptionBadgeModelsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BadgeModel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BadgeModel_Filter>;
};


export type SubscriptionBadgesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Badge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Badge_Filter>;
};


export type SubscriptionControllerConfigArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionControllerConfigsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ControllerConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ControllerConfig_Filter>;
};


export type SubscriptionCreatorStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCreatorStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CreatorStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CreatorStatistic_Filter>;
};


export type SubscriptionCuratorStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCuratorStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CuratorStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CuratorStatistic_Filter>;
};


export type SubscriptionEvidenceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEvidenceGroupIdItemIdArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEvidenceGroupIdItemIDsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_EvidenceGroupIdItemId_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_EvidenceGroupIdItemId_Filter>;
};


export type SubscriptionEvidencesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Evidence_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Evidence_Filter>;
};


export type SubscriptionItemIdToEvidenceGroupIdToBadgeIdArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionItemIdToEvidenceGroupIdToBadgeIDsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_ItemIdToEvidenceGroupIdToBadgeId_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_ItemIdToEvidenceGroupIdToBadgeId_Filter>;
};


export type SubscriptionKlerosBadgeIdToBadgeIdArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionKlerosBadgeIdToBadgeIdsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<_KlerosBadgeIdToBadgeId_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<_KlerosBadgeIdToBadgeId_Filter>;
};


export type SubscriptionKlerosBadgeRequestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionKlerosBadgeRequestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<KlerosBadgeRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<KlerosBadgeRequest_Filter>;
};


export type SubscriptionProtocolConfigArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProtocolConfigsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolConfig_Filter>;
};


export type SubscriptionProtocolStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProtocolStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ProtocolStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ProtocolStatistic_Filter>;
};


export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserStatisticArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserStatisticsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserStatistic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserStatistic_Filter>;
};


export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type User = {
  __typename?: 'User';
  badges?: Maybe<Array<Badge>>;
  createdBadgeModels: Array<BadgeModel>;
  id: Scalars['ID'];
  isCreator: Scalars['Boolean'];
  isCurator: Scalars['Boolean'];
  metadataUri?: Maybe<Scalars['String']>;
  /** User protocol statistics. */
  statistics: UserStatistic;
};


export type UserBadgesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Badge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Badge_Filter>;
};


export type UserCreatedBadgeModelsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BadgeModel_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BadgeModel_Filter>;
};

export type UserStatistic = {
  __typename?: 'UserStatistic';
  challengesReceivedAmount: Scalars['BigInt'];
  challengesReceivedLostAmount: Scalars['BigInt'];
  challengesReceivedRejectedAmount: Scalars['BigInt'];
  challengesReceivedWonAmount: Scalars['BigInt'];
  creatorStatistic?: Maybe<CreatorStatistic>;
  curatorStatistic?: Maybe<CuratorStatistic>;
  id: Scalars['ID'];
  mintedBadgesAmount: Scalars['BigInt'];
  timeOfLastChallengeReceived: Scalars['BigInt'];
  user: User;
};

export type UserStatistic_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserStatistic_Filter>>>;
  challengesReceivedAmount?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengesReceivedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedAmount_not?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengesReceivedLostAmount?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedLostAmount_gt?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedLostAmount_gte?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedLostAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengesReceivedLostAmount_lt?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedLostAmount_lte?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedLostAmount_not?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedLostAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengesReceivedRejectedAmount?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedRejectedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedRejectedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedRejectedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengesReceivedRejectedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedRejectedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedRejectedAmount_not?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedRejectedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengesReceivedWonAmount?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedWonAmount_gt?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedWonAmount_gte?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedWonAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  challengesReceivedWonAmount_lt?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedWonAmount_lte?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedWonAmount_not?: InputMaybe<Scalars['BigInt']>;
  challengesReceivedWonAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  creatorStatistic_?: InputMaybe<CreatorStatistic_Filter>;
  curatorStatistic_?: InputMaybe<CuratorStatistic_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  mintedBadgesAmount?: InputMaybe<Scalars['BigInt']>;
  mintedBadgesAmount_gt?: InputMaybe<Scalars['BigInt']>;
  mintedBadgesAmount_gte?: InputMaybe<Scalars['BigInt']>;
  mintedBadgesAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  mintedBadgesAmount_lt?: InputMaybe<Scalars['BigInt']>;
  mintedBadgesAmount_lte?: InputMaybe<Scalars['BigInt']>;
  mintedBadgesAmount_not?: InputMaybe<Scalars['BigInt']>;
  mintedBadgesAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<UserStatistic_Filter>>>;
  timeOfLastChallengeReceived?: InputMaybe<Scalars['BigInt']>;
  timeOfLastChallengeReceived_gt?: InputMaybe<Scalars['BigInt']>;
  timeOfLastChallengeReceived_gte?: InputMaybe<Scalars['BigInt']>;
  timeOfLastChallengeReceived_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timeOfLastChallengeReceived_lt?: InputMaybe<Scalars['BigInt']>;
  timeOfLastChallengeReceived_lte?: InputMaybe<Scalars['BigInt']>;
  timeOfLastChallengeReceived_not?: InputMaybe<Scalars['BigInt']>;
  timeOfLastChallengeReceived_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  user?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum UserStatistic_OrderBy {
  ChallengesReceivedAmount = 'challengesReceivedAmount',
  ChallengesReceivedLostAmount = 'challengesReceivedLostAmount',
  ChallengesReceivedRejectedAmount = 'challengesReceivedRejectedAmount',
  ChallengesReceivedWonAmount = 'challengesReceivedWonAmount',
  CreatorStatistic = 'creatorStatistic',
  CreatorStatisticAllTimeBadgeMintersAmount = 'creatorStatistic__allTimeBadgeMintersAmount',
  CreatorStatisticCreatedBadgeModelsAmount = 'creatorStatistic__createdBadgeModelsAmount',
  CreatorStatisticCreatedBadgeModelsMintedAmount = 'creatorStatistic__createdBadgeModelsMintedAmount',
  CreatorStatisticId = 'creatorStatistic__id',
  CreatorStatisticMostPopularCreatedBadge = 'creatorStatistic__mostPopularCreatedBadge',
  CreatorStatisticTotalFeesEarned = 'creatorStatistic__totalFeesEarned',
  CuratorStatistic = 'curatorStatistic',
  CuratorStatisticChallengesMadeAmount = 'curatorStatistic__challengesMadeAmount',
  CuratorStatisticChallengesMadeLostAmount = 'curatorStatistic__challengesMadeLostAmount',
  CuratorStatisticChallengesMadeRejectedAmount = 'curatorStatistic__challengesMadeRejectedAmount',
  CuratorStatisticChallengesMadeWonAmount = 'curatorStatistic__challengesMadeWonAmount',
  CuratorStatisticId = 'curatorStatistic__id',
  Id = 'id',
  MintedBadgesAmount = 'mintedBadgesAmount',
  TimeOfLastChallengeReceived = 'timeOfLastChallengeReceived',
  User = 'user',
  UserId = 'user__id',
  UserIsCreator = 'user__isCreator',
  UserIsCurator = 'user__isCurator',
  UserMetadataUri = 'user__metadataUri'
}

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  badges_?: InputMaybe<Badge_Filter>;
  createdBadgeModels?: InputMaybe<Array<Scalars['String']>>;
  createdBadgeModels_?: InputMaybe<BadgeModel_Filter>;
  createdBadgeModels_contains?: InputMaybe<Array<Scalars['String']>>;
  createdBadgeModels_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  createdBadgeModels_not?: InputMaybe<Array<Scalars['String']>>;
  createdBadgeModels_not_contains?: InputMaybe<Array<Scalars['String']>>;
  createdBadgeModels_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isCreator?: InputMaybe<Scalars['Boolean']>;
  isCreator_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isCreator_not?: InputMaybe<Scalars['Boolean']>;
  isCreator_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isCurator?: InputMaybe<Scalars['Boolean']>;
  isCurator_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isCurator_not?: InputMaybe<Scalars['Boolean']>;
  isCurator_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  metadataUri?: InputMaybe<Scalars['String']>;
  metadataUri_contains?: InputMaybe<Scalars['String']>;
  metadataUri_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataUri_ends_with?: InputMaybe<Scalars['String']>;
  metadataUri_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataUri_gt?: InputMaybe<Scalars['String']>;
  metadataUri_gte?: InputMaybe<Scalars['String']>;
  metadataUri_in?: InputMaybe<Array<Scalars['String']>>;
  metadataUri_lt?: InputMaybe<Scalars['String']>;
  metadataUri_lte?: InputMaybe<Scalars['String']>;
  metadataUri_not?: InputMaybe<Scalars['String']>;
  metadataUri_not_contains?: InputMaybe<Scalars['String']>;
  metadataUri_not_contains_nocase?: InputMaybe<Scalars['String']>;
  metadataUri_not_ends_with?: InputMaybe<Scalars['String']>;
  metadataUri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  metadataUri_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadataUri_not_starts_with?: InputMaybe<Scalars['String']>;
  metadataUri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  metadataUri_starts_with?: InputMaybe<Scalars['String']>;
  metadataUri_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  statistics_?: InputMaybe<UserStatistic_Filter>;
};

export enum User_OrderBy {
  Badges = 'badges',
  CreatedBadgeModels = 'createdBadgeModels',
  Id = 'id',
  IsCreator = 'isCreator',
  IsCurator = 'isCurator',
  MetadataUri = 'metadataUri',
  Statistics = 'statistics',
  StatisticsChallengesReceivedAmount = 'statistics__challengesReceivedAmount',
  StatisticsChallengesReceivedLostAmount = 'statistics__challengesReceivedLostAmount',
  StatisticsChallengesReceivedRejectedAmount = 'statistics__challengesReceivedRejectedAmount',
  StatisticsChallengesReceivedWonAmount = 'statistics__challengesReceivedWonAmount',
  StatisticsId = 'statistics__id',
  StatisticsMintedBadgesAmount = 'statistics__mintedBadgesAmount',
  StatisticsTimeOfLastChallengeReceived = 'statistics__timeOfLastChallengeReceived'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

export type _EvidenceGroupIdItemId = {
  __typename?: '_EvidenceGroupIDItemID';
  id: Scalars['ID'];
  /** Item submission ID, it can be a TCR random item or a badge submission request */
  itemID: Scalars['String'];
};

export type _EvidenceGroupIdItemId_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<_EvidenceGroupIdItemId_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  itemID?: InputMaybe<Scalars['String']>;
  itemID_contains?: InputMaybe<Scalars['String']>;
  itemID_contains_nocase?: InputMaybe<Scalars['String']>;
  itemID_ends_with?: InputMaybe<Scalars['String']>;
  itemID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  itemID_gt?: InputMaybe<Scalars['String']>;
  itemID_gte?: InputMaybe<Scalars['String']>;
  itemID_in?: InputMaybe<Array<Scalars['String']>>;
  itemID_lt?: InputMaybe<Scalars['String']>;
  itemID_lte?: InputMaybe<Scalars['String']>;
  itemID_not?: InputMaybe<Scalars['String']>;
  itemID_not_contains?: InputMaybe<Scalars['String']>;
  itemID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  itemID_not_ends_with?: InputMaybe<Scalars['String']>;
  itemID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  itemID_not_in?: InputMaybe<Array<Scalars['String']>>;
  itemID_not_starts_with?: InputMaybe<Scalars['String']>;
  itemID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  itemID_starts_with?: InputMaybe<Scalars['String']>;
  itemID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<InputMaybe<_EvidenceGroupIdItemId_Filter>>>;
};

export enum _EvidenceGroupIdItemId_OrderBy {
  Id = 'id',
  ItemId = 'itemID'
}

export type _ItemIdToEvidenceGroupIdToBadgeId = {
  __typename?: '_ItemIDToEvidenceGroupIDToBadgeID';
  badgeID?: Maybe<Scalars['String']>;
  evidenceGroupID: Scalars['String'];
  /** Item submission ID, it can be a TCR random item or a badge submission request */
  id: Scalars['ID'];
};

export type _ItemIdToEvidenceGroupIdToBadgeId_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<_ItemIdToEvidenceGroupIdToBadgeId_Filter>>>;
  badgeID?: InputMaybe<Scalars['String']>;
  badgeID_contains?: InputMaybe<Scalars['String']>;
  badgeID_contains_nocase?: InputMaybe<Scalars['String']>;
  badgeID_ends_with?: InputMaybe<Scalars['String']>;
  badgeID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  badgeID_gt?: InputMaybe<Scalars['String']>;
  badgeID_gte?: InputMaybe<Scalars['String']>;
  badgeID_in?: InputMaybe<Array<Scalars['String']>>;
  badgeID_lt?: InputMaybe<Scalars['String']>;
  badgeID_lte?: InputMaybe<Scalars['String']>;
  badgeID_not?: InputMaybe<Scalars['String']>;
  badgeID_not_contains?: InputMaybe<Scalars['String']>;
  badgeID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  badgeID_not_ends_with?: InputMaybe<Scalars['String']>;
  badgeID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  badgeID_not_in?: InputMaybe<Array<Scalars['String']>>;
  badgeID_not_starts_with?: InputMaybe<Scalars['String']>;
  badgeID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  badgeID_starts_with?: InputMaybe<Scalars['String']>;
  badgeID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  evidenceGroupID?: InputMaybe<Scalars['String']>;
  evidenceGroupID_contains?: InputMaybe<Scalars['String']>;
  evidenceGroupID_contains_nocase?: InputMaybe<Scalars['String']>;
  evidenceGroupID_ends_with?: InputMaybe<Scalars['String']>;
  evidenceGroupID_ends_with_nocase?: InputMaybe<Scalars['String']>;
  evidenceGroupID_gt?: InputMaybe<Scalars['String']>;
  evidenceGroupID_gte?: InputMaybe<Scalars['String']>;
  evidenceGroupID_in?: InputMaybe<Array<Scalars['String']>>;
  evidenceGroupID_lt?: InputMaybe<Scalars['String']>;
  evidenceGroupID_lte?: InputMaybe<Scalars['String']>;
  evidenceGroupID_not?: InputMaybe<Scalars['String']>;
  evidenceGroupID_not_contains?: InputMaybe<Scalars['String']>;
  evidenceGroupID_not_contains_nocase?: InputMaybe<Scalars['String']>;
  evidenceGroupID_not_ends_with?: InputMaybe<Scalars['String']>;
  evidenceGroupID_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  evidenceGroupID_not_in?: InputMaybe<Array<Scalars['String']>>;
  evidenceGroupID_not_starts_with?: InputMaybe<Scalars['String']>;
  evidenceGroupID_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  evidenceGroupID_starts_with?: InputMaybe<Scalars['String']>;
  evidenceGroupID_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<_ItemIdToEvidenceGroupIdToBadgeId_Filter>>>;
};

export enum _ItemIdToEvidenceGroupIdToBadgeId_OrderBy {
  BadgeId = 'badgeID',
  EvidenceGroupId = 'evidenceGroupID',
  Id = 'id'
}

export type _KlerosBadgeIdToBadgeId = {
  __typename?: '_KlerosBadgeIdToBadgeId';
  badgeId: Scalars['String'];
  id: Scalars['ID'];
};

export type _KlerosBadgeIdToBadgeId_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<_KlerosBadgeIdToBadgeId_Filter>>>;
  badgeId?: InputMaybe<Scalars['String']>;
  badgeId_contains?: InputMaybe<Scalars['String']>;
  badgeId_contains_nocase?: InputMaybe<Scalars['String']>;
  badgeId_ends_with?: InputMaybe<Scalars['String']>;
  badgeId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  badgeId_gt?: InputMaybe<Scalars['String']>;
  badgeId_gte?: InputMaybe<Scalars['String']>;
  badgeId_in?: InputMaybe<Array<Scalars['String']>>;
  badgeId_lt?: InputMaybe<Scalars['String']>;
  badgeId_lte?: InputMaybe<Scalars['String']>;
  badgeId_not?: InputMaybe<Scalars['String']>;
  badgeId_not_contains?: InputMaybe<Scalars['String']>;
  badgeId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  badgeId_not_ends_with?: InputMaybe<Scalars['String']>;
  badgeId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  badgeId_not_in?: InputMaybe<Array<Scalars['String']>>;
  badgeId_not_starts_with?: InputMaybe<Scalars['String']>;
  badgeId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  badgeId_starts_with?: InputMaybe<Scalars['String']>;
  badgeId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<_KlerosBadgeIdToBadgeId_Filter>>>;
};

export enum _KlerosBadgeIdToBadgeId_OrderBy {
  BadgeId = 'badgeId',
  Id = 'id'
}

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type BadgesQueryVariables = Exact<{
  first: Scalars['Int'];
  skip: Scalars['Int'];
  filter?: InputMaybe<Badge_Filter>;
}>;


export type BadgesQuery = { __typename?: 'Query', badges: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> };

export type BadgeByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BadgeByIdQuery = { __typename?: 'Query', badge?: { __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null } | null };

export type BadgeByBadgeModelIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type BadgeByBadgeModelIdQuery = { __typename?: 'Query', badges: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> };

export type BadgesByUserQueryVariables = Exact<{
  userAddress: Scalars['String'];
}>;


export type BadgesByUserQuery = { __typename?: 'Query', badges: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> };

export type BadgesInReviewQueryVariables = Exact<{
  dateTimestamp: Scalars['BigInt'];
}>;


export type BadgesInReviewQuery = { __typename?: 'Query', badges: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> };

export type BadgesChallengedQueryVariables = Exact<{
  dateTimestamp: Scalars['BigInt'];
}>;


export type BadgesChallengedQuery = { __typename?: 'Query', badges: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> };

export type BadgesInReviewOrChallengedQueryVariables = Exact<{
  dateTimestamp: Scalars['BigInt'];
}>;


export type BadgesInReviewOrChallengedQuery = { __typename?: 'Query', badges: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> };

export type BadgesUserCanReviewQueryVariables = Exact<{
  userAddress: Scalars['String'];
  dateTimestamp: Scalars['BigInt'];
}>;


export type BadgesUserCanReviewQuery = { __typename?: 'Query', badges: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> };

export type BadgesOfUserByStatusesQueryVariables = Exact<{
  userAddress: Scalars['String'];
  statuses: Array<BadgeStatus> | BadgeStatus;
}>;


export type BadgesOfUserByStatusesQuery = { __typename?: 'Query', badges: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> };

export type BadgesNotOfUserByStatusesQueryVariables = Exact<{
  userAddress: Scalars['String'];
  statuses: Array<BadgeStatus> | BadgeStatus;
}>;


export type BadgesNotOfUserByStatusesQuery = { __typename?: 'Query', badges: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> };

export type BadgeMetadataByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BadgeMetadataByIdQuery = { __typename?: 'Query', badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, itemID: any, reviewDueDate: any, requests: Array<{ __typename?: 'KlerosBadgeRequest', id: string, type: KlerosRequestType, createdAt: any, requestIndex?: any | null, arbitrationParamsIndex?: any | null, requester?: any | null, challenger?: any | null, disputeID?: any | null, evidences: Array<{ __typename?: 'Evidence', id: string, sender: any, timestamp: any, uri: string }> }>, badge: { __typename?: 'Badge', id: string } } | null };

export type BadgesMetadataUserHasChallengedQueryVariables = Exact<{
  userAddress: Scalars['Bytes'];
}>;


export type BadgesMetadataUserHasChallengedQuery = { __typename?: 'Query', badgeKlerosMetaDatas: Array<{ __typename?: 'BadgeKlerosMetaData', id: string, itemID: any, reviewDueDate: any, requests: Array<{ __typename?: 'KlerosBadgeRequest', id: string, type: KlerosRequestType, createdAt: any, requestIndex?: any | null, arbitrationParamsIndex?: any | null, requester?: any | null, challenger?: any | null, disputeID?: any | null, evidences: Array<{ __typename?: 'Evidence', id: string, sender: any, timestamp: any, uri: string }> }>, badge: { __typename?: 'Badge', id: string } }> };

export type BadgeModelsQueryVariables = Exact<{
  first: Scalars['Int'];
  skip: Scalars['Int'];
  filter?: InputMaybe<BadgeModel_Filter>;
}>;


export type BadgeModelsQuery = { __typename?: 'Query', badgeModels: Array<{ __typename?: 'BadgeModel', id: string, uri: string, controllerType: string, validFor: any, creatorFee: any, paused: boolean, badgesMintedAmount: any, creator: { __typename?: 'User', id: string, metadataUri?: string | null } }> };

export type BadgeModelByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BadgeModelByIdQuery = { __typename?: 'Query', badgeModel?: { __typename?: 'BadgeModel', id: string, uri: string, controllerType: string, validFor: any, creatorFee: any, paused: boolean, badgesMintedAmount: any, creator: { __typename?: 'User', id: string, metadataUri?: string | null } } | null };

export type BadgeModelMetadataByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BadgeModelMetadataByIdQuery = { __typename?: 'Query', badgeModelKlerosMetaData?: { __typename?: 'BadgeModelKlerosMetaData', id: string, registrationUri: string, removalUri: string, tcrList: any, submissionBaseDeposit: any, challengePeriodDuration: any } | null };

export type BadgeFragment = { __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null };

export type BadgeKlerosMetadataFragment = { __typename?: 'BadgeKlerosMetaData', id: string, itemID: any, reviewDueDate: any, requests: Array<{ __typename?: 'KlerosBadgeRequest', id: string, type: KlerosRequestType, createdAt: any, requestIndex?: any | null, arbitrationParamsIndex?: any | null, requester?: any | null, challenger?: any | null, disputeID?: any | null, evidences: Array<{ __typename?: 'Evidence', id: string, sender: any, timestamp: any, uri: string }> }>, badge: { __typename?: 'Badge', id: string } };

export type BadgeModelFragment = { __typename?: 'BadgeModel', id: string, uri: string, controllerType: string, validFor: any, creatorFee: any, paused: boolean, badgesMintedAmount: any, creator: { __typename?: 'User', id: string, metadataUri?: string | null } };

export type BadgeModelKlerosMetadataFragment = { __typename?: 'BadgeModelKlerosMetaData', id: string, registrationUri: string, removalUri: string, tcrList: any, submissionBaseDeposit: any, challengePeriodDuration: any };

export type RequestFragment = { __typename?: 'KlerosBadgeRequest', id: string, type: KlerosRequestType, createdAt: any, requestIndex?: any | null, arbitrationParamsIndex?: any | null, requester?: any | null, challenger?: any | null, disputeID?: any | null, evidences: Array<{ __typename?: 'Evidence', id: string, sender: any, timestamp: any, uri: string }> };

export type EvidenceFragment = { __typename?: 'Evidence', id: string, sender: any, timestamp: any, uri: string };

export type UserFragment = { __typename?: 'User', id: string, isCreator: boolean, metadataUri?: string | null, statistics: { __typename?: 'UserStatistic', mintedBadgesAmount: any, creatorStatistic?: { __typename?: 'CreatorStatistic', createdBadgeModelsAmount: any } | null }, badges?: Array<{ __typename?: 'Badge', id: string }> | null };

export type SubgraphErrorsQueryVariables = Exact<{ [key: string]: never; }>;


export type SubgraphErrorsQuery = { __typename?: 'Query', _meta?: { __typename?: '_Meta_', hasIndexingErrors: boolean } | null };

export type UsersIdQueryVariables = Exact<{
  first: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type UsersIdQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string }> };

export type CreatorUsersIdQueryVariables = Exact<{
  first: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type CreatorUsersIdQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string }> };

export type UserQueryVariables = Exact<{
  userAddress: Scalars['ID'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, isCreator: boolean, metadataUri?: string | null, statistics: { __typename?: 'UserStatistic', mintedBadgesAmount: any, creatorStatistic?: { __typename?: 'CreatorStatistic', createdBadgeModelsAmount: any } | null }, badges?: Array<{ __typename?: 'Badge', id: string }> | null } | null };

export type UserBadgesFilteredQueryVariables = Exact<{
  userAddress: Scalars['ID'];
  badgesFilter?: InputMaybe<Badge_Filter>;
}>;


export type UserBadgesFilteredQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, badges?: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> | null } | null };

export type UserBadgesByModelIdQueryVariables = Exact<{
  userAddress: Scalars['ID'];
  modelId: Scalars['String'];
}>;


export type UserBadgesByModelIdQuery = { __typename?: 'Query', user?: { __typename?: 'User', badges?: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> | null } | null };

export type UserCreatedBadgeModelsQueryVariables = Exact<{
  userAddress: Scalars['ID'];
}>;


export type UserCreatedBadgeModelsQuery = { __typename?: 'Query', user?: { __typename?: 'User', createdBadgeModels: Array<{ __typename?: 'BadgeModel', validFor: any, paused: boolean, uri: string, id: string, controllerType: string, badgesMintedAmount: any }>, statistics: { __typename?: 'UserStatistic', creatorStatistic?: { __typename?: 'CreatorStatistic', createdBadgeModelsAmount: any } | null } } | null };

export type UserBadgesInReviewQueryVariables = Exact<{
  userAddress: Scalars['ID'];
  dateTimestamp: Scalars['BigInt'];
}>;


export type UserBadgesInReviewQuery = { __typename?: 'Query', user?: { __typename?: 'User', badges?: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> | null } | null };

export type UserBadgesChallengedQueryVariables = Exact<{
  userAddress: Scalars['ID'];
  dateTimestamp: Scalars['BigInt'];
}>;


export type UserBadgesChallengedQuery = { __typename?: 'Query', user?: { __typename?: 'User', badges?: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> | null } | null };

export type UserBadgesInReviewOrChallengedQueryVariables = Exact<{
  userAddress: Scalars['ID'];
  dateTimestamp: Scalars['BigInt'];
}>;


export type UserBadgesInReviewOrChallengedQuery = { __typename?: 'Query', user?: { __typename?: 'User', badges?: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> | null } | null };

export type UserBadgesExpiringBetweenQueryVariables = Exact<{
  userAddress: Scalars['ID'];
  startDateTimestamp: Scalars['BigInt'];
  endDateTimestamp: Scalars['BigInt'];
}>;


export type UserBadgesExpiringBetweenQuery = { __typename?: 'Query', user?: { __typename?: 'User', badges?: Array<{ __typename?: 'Badge', id: string, status: BadgeStatus, uri: string, validUntil: any, account: { __typename?: 'User', id: string }, badgeModel: { __typename?: 'BadgeModel', id: string }, badgeKlerosMetaData?: { __typename?: 'BadgeKlerosMetaData', id: string, reviewDueDate: any } | null }> | null } | null };

export const BadgeFragmentDoc = gql`
    fragment Badge on Badge {
  id
  status
  uri
  validUntil
  account {
    id
  }
  badgeModel {
    id
  }
  badgeKlerosMetaData {
    id
    reviewDueDate
  }
}
    `;
export const EvidenceFragmentDoc = gql`
    fragment Evidence on Evidence {
  id
  sender
  timestamp
  uri
}
    `;
export const RequestFragmentDoc = gql`
    fragment Request on KlerosBadgeRequest {
  id
  type
  createdAt
  requestIndex
  arbitrationParamsIndex
  requester
  challenger
  disputeID
  evidences {
    ...Evidence
  }
}
    ${EvidenceFragmentDoc}`;
export const BadgeKlerosMetadataFragmentDoc = gql`
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
    ${RequestFragmentDoc}`;
export const BadgeModelFragmentDoc = gql`
    fragment BadgeModel on BadgeModel {
  id
  uri
  controllerType
  validFor
  creatorFee
  paused
  badgesMintedAmount
  creator {
    id
    metadataUri
  }
}
    `;
export const BadgeModelKlerosMetadataFragmentDoc = gql`
    fragment BadgeModelKlerosMetadata on BadgeModelKlerosMetaData {
  id
  registrationUri
  removalUri
  tcrList
  submissionBaseDeposit
  challengePeriodDuration
}
    `;
export const UserFragmentDoc = gql`
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
    `;
export const BadgesDocument = gql`
    query badges($first: Int!, $skip: Int!, $filter: Badge_filter) {
  badges(
    first: $first
    skip: $skip
    orderBy: createdAt
    orderDirection: desc
    where: $filter
  ) {
    ...Badge
  }
}
    ${BadgeFragmentDoc}`;
export const BadgeByIdDocument = gql`
    query badgeById($id: ID!) {
  badge(id: $id) {
    ...Badge
  }
}
    ${BadgeFragmentDoc}`;
export const BadgeByBadgeModelIdDocument = gql`
    query badgeByBadgeModelId($id: String!) {
  badges(where: {badgeModel: $id}) {
    ...Badge
  }
}
    ${BadgeFragmentDoc}`;
export const BadgesByUserDocument = gql`
    query badgesByUser($userAddress: String!) {
  badges(where: {account: $userAddress}) {
    ...Badge
  }
}
    ${BadgeFragmentDoc}`;
export const BadgesInReviewDocument = gql`
    query badgesInReview($dateTimestamp: BigInt!) {
  badges(
    where: {badgeKlerosMetaData_: {reviewDueDate_gt: $dateTimestamp}, status: Requested}
  ) {
    ...Badge
  }
}
    ${BadgeFragmentDoc}`;
export const BadgesChallengedDocument = gql`
    query badgesChallenged($dateTimestamp: BigInt!) {
  badges(
    where: {badgeKlerosMetaData_: {reviewDueDate_gt: $dateTimestamp}, status: Challenged}
  ) {
    ...Badge
  }
}
    ${BadgeFragmentDoc}`;
export const BadgesInReviewOrChallengedDocument = gql`
    query badgesInReviewOrChallenged($dateTimestamp: BigInt!) {
  badges(
    where: {badgeKlerosMetaData_: {reviewDueDate_gt: $dateTimestamp}, status_in: [Requested, Challenged]}
  ) {
    ...Badge
  }
}
    ${BadgeFragmentDoc}`;
export const BadgesUserCanReviewDocument = gql`
    query badgesUserCanReview($userAddress: String!, $dateTimestamp: BigInt!) {
  badges(
    where: {badgeKlerosMetaData_: {reviewDueDate_gt: $dateTimestamp}, status_in: [Requested, Challenged], account_not: $userAddress}
  ) {
    ...Badge
  }
}
    ${BadgeFragmentDoc}`;
export const BadgesOfUserByStatusesDocument = gql`
    query badgesOfUserByStatuses($userAddress: String!, $statuses: [BadgeStatus!]!) {
  badges(where: {status_in: $statuses, account_starts_with: $userAddress}) {
    ...Badge
  }
}
    ${BadgeFragmentDoc}`;
export const BadgesNotOfUserByStatusesDocument = gql`
    query badgesNotOfUserByStatuses($userAddress: String!, $statuses: [BadgeStatus!]!) {
  badges(where: {status_in: $statuses, account_not: $userAddress}) {
    ...Badge
  }
}
    ${BadgeFragmentDoc}`;
export const BadgeMetadataByIdDocument = gql`
    query badgeMetadataById($id: ID!) {
  badgeKlerosMetaData(id: $id) {
    ...BadgeKlerosMetadata
  }
}
    ${BadgeKlerosMetadataFragmentDoc}`;
export const BadgesMetadataUserHasChallengedDocument = gql`
    query badgesMetadataUserHasChallenged($userAddress: Bytes!) {
  badgeKlerosMetaDatas(
    where: {requests_: {challenger: $userAddress}, badge_: {status: Challenged}}
  ) {
    ...BadgeKlerosMetadata
  }
}
    ${BadgeKlerosMetadataFragmentDoc}`;
export const BadgeModelsDocument = gql`
    query badgeModels($first: Int!, $skip: Int!, $filter: BadgeModel_filter) {
  badgeModels(
    first: $first
    skip: $skip
    orderBy: createdAt
    orderDirection: desc
    where: $filter
  ) {
    ...BadgeModel
  }
}
    ${BadgeModelFragmentDoc}`;
export const BadgeModelByIdDocument = gql`
    query badgeModelById($id: ID!) {
  badgeModel(id: $id) {
    ...BadgeModel
  }
}
    ${BadgeModelFragmentDoc}`;
export const BadgeModelMetadataByIdDocument = gql`
    query badgeModelMetadataById($id: ID!) {
  badgeModelKlerosMetaData(id: $id) {
    ...BadgeModelKlerosMetadata
  }
}
    ${BadgeModelKlerosMetadataFragmentDoc}`;
export const SubgraphErrorsDocument = gql`
    query subgraphErrors {
  _meta {
    hasIndexingErrors
  }
}
    `;
export const UsersIdDocument = gql`
    query usersId($first: Int!, $skip: Int!) {
  users(first: $first, skip: $skip) {
    id
  }
}
    `;
export const CreatorUsersIdDocument = gql`
    query creatorUsersId($first: Int!, $skip: Int!) {
  users(first: $first, skip: $skip, where: {isCreator: true}) {
    id
  }
}
    `;
export const UserDocument = gql`
    query user($userAddress: ID!) {
  user(id: $userAddress) {
    ...User
  }
}
    ${UserFragmentDoc}`;
export const UserBadgesFilteredDocument = gql`
    query userBadgesFiltered($userAddress: ID!, $badgesFilter: Badge_filter) {
  user(id: $userAddress) {
    id
    badges(where: $badgesFilter) {
      ...Badge
    }
  }
}
    ${BadgeFragmentDoc}`;
export const UserBadgesByModelIdDocument = gql`
    query userBadgesByModelId($userAddress: ID!, $modelId: String!) {
  user(id: $userAddress) {
    badges(where: {badgeModel: $modelId}) {
      ...Badge
    }
  }
}
    ${BadgeFragmentDoc}`;
export const UserCreatedBadgeModelsDocument = gql`
    query userCreatedBadgeModels($userAddress: ID!) {
  user(id: $userAddress) {
    createdBadgeModels {
      validFor
      paused
      uri
      id
      controllerType
      badgesMintedAmount
    }
    statistics {
      creatorStatistic {
        createdBadgeModelsAmount
      }
    }
  }
}
    `;
export const UserBadgesInReviewDocument = gql`
    query userBadgesInReview($userAddress: ID!, $dateTimestamp: BigInt!) {
  user(id: $userAddress) {
    badges(
      where: {badgeKlerosMetaData_: {reviewDueDate_gt: $dateTimestamp}, status_in: [Requested]}
    ) {
      ...Badge
    }
  }
}
    ${BadgeFragmentDoc}`;
export const UserBadgesChallengedDocument = gql`
    query userBadgesChallenged($userAddress: ID!, $dateTimestamp: BigInt!) {
  user(id: $userAddress) {
    badges(
      where: {badgeKlerosMetaData_: {reviewDueDate_gt: $dateTimestamp}, status_in: [Challenged]}
    ) {
      ...Badge
    }
  }
}
    ${BadgeFragmentDoc}`;
export const UserBadgesInReviewOrChallengedDocument = gql`
    query userBadgesInReviewOrChallenged($userAddress: ID!, $dateTimestamp: BigInt!) {
  user(id: $userAddress) {
    badges(
      where: {badgeKlerosMetaData_: {reviewDueDate_gt: $dateTimestamp}, status_in: [Requested, Challenged]}
    ) {
      ...Badge
    }
  }
}
    ${BadgeFragmentDoc}`;
export const UserBadgesExpiringBetweenDocument = gql`
    query userBadgesExpiringBetween($userAddress: ID!, $startDateTimestamp: BigInt!, $endDateTimestamp: BigInt!) {
  user(id: $userAddress) {
    badges(
      where: {validUntil_gte: $startDateTimestamp, validUntil_lte: $endDateTimestamp}
    ) {
      ...Badge
    }
  }
}
    ${BadgeFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    badges(variables: BadgesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgesQuery>(BadgesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badges', 'query');
    },
    badgeById(variables: BadgeByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgeByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgeByIdQuery>(BadgeByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badgeById', 'query');
    },
    badgeByBadgeModelId(variables: BadgeByBadgeModelIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgeByBadgeModelIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgeByBadgeModelIdQuery>(BadgeByBadgeModelIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badgeByBadgeModelId', 'query');
    },
    badgesByUser(variables: BadgesByUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgesByUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgesByUserQuery>(BadgesByUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badgesByUser', 'query');
    },
    badgesInReview(variables: BadgesInReviewQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgesInReviewQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgesInReviewQuery>(BadgesInReviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badgesInReview', 'query');
    },
    badgesChallenged(variables: BadgesChallengedQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgesChallengedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgesChallengedQuery>(BadgesChallengedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badgesChallenged', 'query');
    },
    badgesInReviewOrChallenged(variables: BadgesInReviewOrChallengedQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgesInReviewOrChallengedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgesInReviewOrChallengedQuery>(BadgesInReviewOrChallengedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badgesInReviewOrChallenged', 'query');
    },
    badgesUserCanReview(variables: BadgesUserCanReviewQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgesUserCanReviewQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgesUserCanReviewQuery>(BadgesUserCanReviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badgesUserCanReview', 'query');
    },
    badgesOfUserByStatuses(variables: BadgesOfUserByStatusesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgesOfUserByStatusesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgesOfUserByStatusesQuery>(BadgesOfUserByStatusesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badgesOfUserByStatuses', 'query');
    },
    badgesNotOfUserByStatuses(variables: BadgesNotOfUserByStatusesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgesNotOfUserByStatusesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgesNotOfUserByStatusesQuery>(BadgesNotOfUserByStatusesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badgesNotOfUserByStatuses', 'query');
    },
    badgeMetadataById(variables: BadgeMetadataByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgeMetadataByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgeMetadataByIdQuery>(BadgeMetadataByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badgeMetadataById', 'query');
    },
    badgesMetadataUserHasChallenged(variables: BadgesMetadataUserHasChallengedQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgesMetadataUserHasChallengedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgesMetadataUserHasChallengedQuery>(BadgesMetadataUserHasChallengedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badgesMetadataUserHasChallenged', 'query');
    },
    badgeModels(variables: BadgeModelsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgeModelsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgeModelsQuery>(BadgeModelsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badgeModels', 'query');
    },
    badgeModelById(variables: BadgeModelByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgeModelByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgeModelByIdQuery>(BadgeModelByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badgeModelById', 'query');
    },
    badgeModelMetadataById(variables: BadgeModelMetadataByIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<BadgeModelMetadataByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<BadgeModelMetadataByIdQuery>(BadgeModelMetadataByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'badgeModelMetadataById', 'query');
    },
    subgraphErrors(variables?: SubgraphErrorsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubgraphErrorsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SubgraphErrorsQuery>(SubgraphErrorsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'subgraphErrors', 'query');
    },
    usersId(variables: UsersIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsersIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersIdQuery>(UsersIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'usersId', 'query');
    },
    creatorUsersId(variables: CreatorUsersIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreatorUsersIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatorUsersIdQuery>(CreatorUsersIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'creatorUsersId', 'query');
    },
    user(variables: UserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserQuery>(UserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'user', 'query');
    },
    userBadgesFiltered(variables: UserBadgesFilteredQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserBadgesFilteredQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserBadgesFilteredQuery>(UserBadgesFilteredDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userBadgesFiltered', 'query');
    },
    userBadgesByModelId(variables: UserBadgesByModelIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserBadgesByModelIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserBadgesByModelIdQuery>(UserBadgesByModelIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userBadgesByModelId', 'query');
    },
    userCreatedBadgeModels(variables: UserCreatedBadgeModelsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserCreatedBadgeModelsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserCreatedBadgeModelsQuery>(UserCreatedBadgeModelsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userCreatedBadgeModels', 'query');
    },
    userBadgesInReview(variables: UserBadgesInReviewQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserBadgesInReviewQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserBadgesInReviewQuery>(UserBadgesInReviewDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userBadgesInReview', 'query');
    },
    userBadgesChallenged(variables: UserBadgesChallengedQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserBadgesChallengedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserBadgesChallengedQuery>(UserBadgesChallengedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userBadgesChallenged', 'query');
    },
    userBadgesInReviewOrChallenged(variables: UserBadgesInReviewOrChallengedQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserBadgesInReviewOrChallengedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserBadgesInReviewOrChallengedQuery>(UserBadgesInReviewOrChallengedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userBadgesInReviewOrChallenged', 'query');
    },
    userBadgesExpiringBetween(variables: UserBadgesExpiringBetweenQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserBadgesExpiringBetweenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserBadgesExpiringBetweenQuery>(UserBadgesExpiringBetweenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userBadgesExpiringBetween', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
/**
 * @typedef {Object} Badge
 * @property {User} account
 * @property {BadgeKlerosMetaData} [badgeKlerosMetaData]
 * @property {BadgeModel} badgeModel
 * @property {BigInt} createdAt
 * @property {Bytes} createdTxHash
 * @property {string} id
 * @property {string} networkName
 * @property {BadgeStatus} status
 * @property {string} uri
 * @property {BigInt} validUntil
 */

/**
 * @typedef {Object} BadgeKlerosMetaData
 * @property {Badge} badge
 * @property {string} id
 * @property {Bytes} itemID
 * @property {BigInt} numberOfRequests - The total number of requests for this item.
 * @property {Array<KlerosBadgeRequest>} requests
 * @property {BigInt} reviewDueDate
 */

/**
 * @typedef {Object} BadgeKlerosMetaData_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Array<(BadgeKlerosMetaData_filter|null|undefined)>} [and]
 * @property {string} [badge]
 * @property {Badge_filter} [badge_]
 * @property {string} [badge_contains]
 * @property {string} [badge_contains_nocase]
 * @property {string} [badge_ends_with]
 * @property {string} [badge_ends_with_nocase]
 * @property {string} [badge_gt]
 * @property {string} [badge_gte]
 * @property {Array<string>} [badge_in]
 * @property {string} [badge_lt]
 * @property {string} [badge_lte]
 * @property {string} [badge_not]
 * @property {string} [badge_not_contains]
 * @property {string} [badge_not_contains_nocase]
 * @property {string} [badge_not_ends_with]
 * @property {string} [badge_not_ends_with_nocase]
 * @property {Array<string>} [badge_not_in]
 * @property {string} [badge_not_starts_with]
 * @property {string} [badge_not_starts_with_nocase]
 * @property {string} [badge_starts_with]
 * @property {string} [badge_starts_with_nocase]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {Bytes} [itemID]
 * @property {Bytes} [itemID_contains]
 * @property {Bytes} [itemID_gt]
 * @property {Bytes} [itemID_gte]
 * @property {Array<Bytes>} [itemID_in]
 * @property {Bytes} [itemID_lt]
 * @property {Bytes} [itemID_lte]
 * @property {Bytes} [itemID_not]
 * @property {Bytes} [itemID_not_contains]
 * @property {Array<Bytes>} [itemID_not_in]
 * @property {BigInt} [numberOfRequests]
 * @property {BigInt} [numberOfRequests_gt]
 * @property {BigInt} [numberOfRequests_gte]
 * @property {Array<BigInt>} [numberOfRequests_in]
 * @property {BigInt} [numberOfRequests_lt]
 * @property {BigInt} [numberOfRequests_lte]
 * @property {BigInt} [numberOfRequests_not]
 * @property {Array<BigInt>} [numberOfRequests_not_in]
 * @property {Array<(BadgeKlerosMetaData_filter|null|undefined)>} [or]
 * @property {KlerosBadgeRequest_filter} [requests_]
 * @property {BigInt} [reviewDueDate]
 * @property {BigInt} [reviewDueDate_gt]
 * @property {BigInt} [reviewDueDate_gte]
 * @property {Array<BigInt>} [reviewDueDate_in]
 * @property {BigInt} [reviewDueDate_lt]
 * @property {BigInt} [reviewDueDate_lte]
 * @property {BigInt} [reviewDueDate_not]
 * @property {Array<BigInt>} [reviewDueDate_not_in]
 */

/**
 * @typedef {("badge"|"badge__createdAt"|"badge__createdTxHash"|"badge__id"|"badge__networkName"|"badge__status"|"badge__uri"|"badge__validUntil"|"id"|"itemID"|"numberOfRequests"|"requests"|"reviewDueDate")} BadgeKlerosMetaData_orderBy
 */

/**
 * @typedef {Object} BadgeModel
 * @property {BadgeModelKlerosMetaData} [badgeModelKleros]
 * @property {BigInt} badgesMintedAmount
 * @property {Bytes} contractAddress
 * @property {string} controllerType
 * @property {BigInt} createdAt
 * @property {User} creator
 * @property {BigInt} creatorFee
 * @property {string} id
 * @property {Array<Badge>} mintedBadges
 * @property {string} networkName
 * @property {boolean} paused
 * @property {BigInt} protocolFeeInBps
 * @property {BigInt} totalFeesGenerated
 * @property {string} uri
 * @property {BigInt} validFor
 * @property {string} version
 */

/**
 * @typedef {Object} BadgeModelKlerosMetaData
 * @property {Bytes} admin
 * @property {Bytes} arbitrator
 * @property {BadgeModel} badgeModel
 * @property {BigInt} challengePeriodDuration
 * @property {Bytes} governor
 * @property {string} id
 * @property {string} registrationUri
 * @property {string} removalUri
 * @property {BigInt} submissionBaseDeposit
 * @property {Bytes} tcrList
 */

/**
 * @typedef {Object} BadgeModelKlerosMetaData_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Bytes} [admin]
 * @property {Bytes} [admin_contains]
 * @property {Bytes} [admin_gt]
 * @property {Bytes} [admin_gte]
 * @property {Array<Bytes>} [admin_in]
 * @property {Bytes} [admin_lt]
 * @property {Bytes} [admin_lte]
 * @property {Bytes} [admin_not]
 * @property {Bytes} [admin_not_contains]
 * @property {Array<Bytes>} [admin_not_in]
 * @property {Array<(BadgeModelKlerosMetaData_filter|null|undefined)>} [and]
 * @property {Bytes} [arbitrator]
 * @property {Bytes} [arbitrator_contains]
 * @property {Bytes} [arbitrator_gt]
 * @property {Bytes} [arbitrator_gte]
 * @property {Array<Bytes>} [arbitrator_in]
 * @property {Bytes} [arbitrator_lt]
 * @property {Bytes} [arbitrator_lte]
 * @property {Bytes} [arbitrator_not]
 * @property {Bytes} [arbitrator_not_contains]
 * @property {Array<Bytes>} [arbitrator_not_in]
 * @property {string} [badgeModel]
 * @property {BadgeModel_filter} [badgeModel_]
 * @property {string} [badgeModel_contains]
 * @property {string} [badgeModel_contains_nocase]
 * @property {string} [badgeModel_ends_with]
 * @property {string} [badgeModel_ends_with_nocase]
 * @property {string} [badgeModel_gt]
 * @property {string} [badgeModel_gte]
 * @property {Array<string>} [badgeModel_in]
 * @property {string} [badgeModel_lt]
 * @property {string} [badgeModel_lte]
 * @property {string} [badgeModel_not]
 * @property {string} [badgeModel_not_contains]
 * @property {string} [badgeModel_not_contains_nocase]
 * @property {string} [badgeModel_not_ends_with]
 * @property {string} [badgeModel_not_ends_with_nocase]
 * @property {Array<string>} [badgeModel_not_in]
 * @property {string} [badgeModel_not_starts_with]
 * @property {string} [badgeModel_not_starts_with_nocase]
 * @property {string} [badgeModel_starts_with]
 * @property {string} [badgeModel_starts_with_nocase]
 * @property {BigInt} [challengePeriodDuration]
 * @property {BigInt} [challengePeriodDuration_gt]
 * @property {BigInt} [challengePeriodDuration_gte]
 * @property {Array<BigInt>} [challengePeriodDuration_in]
 * @property {BigInt} [challengePeriodDuration_lt]
 * @property {BigInt} [challengePeriodDuration_lte]
 * @property {BigInt} [challengePeriodDuration_not]
 * @property {Array<BigInt>} [challengePeriodDuration_not_in]
 * @property {Bytes} [governor]
 * @property {Bytes} [governor_contains]
 * @property {Bytes} [governor_gt]
 * @property {Bytes} [governor_gte]
 * @property {Array<Bytes>} [governor_in]
 * @property {Bytes} [governor_lt]
 * @property {Bytes} [governor_lte]
 * @property {Bytes} [governor_not]
 * @property {Bytes} [governor_not_contains]
 * @property {Array<Bytes>} [governor_not_in]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {Array<(BadgeModelKlerosMetaData_filter|null|undefined)>} [or]
 * @property {string} [registrationUri]
 * @property {string} [registrationUri_contains]
 * @property {string} [registrationUri_contains_nocase]
 * @property {string} [registrationUri_ends_with]
 * @property {string} [registrationUri_ends_with_nocase]
 * @property {string} [registrationUri_gt]
 * @property {string} [registrationUri_gte]
 * @property {Array<string>} [registrationUri_in]
 * @property {string} [registrationUri_lt]
 * @property {string} [registrationUri_lte]
 * @property {string} [registrationUri_not]
 * @property {string} [registrationUri_not_contains]
 * @property {string} [registrationUri_not_contains_nocase]
 * @property {string} [registrationUri_not_ends_with]
 * @property {string} [registrationUri_not_ends_with_nocase]
 * @property {Array<string>} [registrationUri_not_in]
 * @property {string} [registrationUri_not_starts_with]
 * @property {string} [registrationUri_not_starts_with_nocase]
 * @property {string} [registrationUri_starts_with]
 * @property {string} [registrationUri_starts_with_nocase]
 * @property {string} [removalUri]
 * @property {string} [removalUri_contains]
 * @property {string} [removalUri_contains_nocase]
 * @property {string} [removalUri_ends_with]
 * @property {string} [removalUri_ends_with_nocase]
 * @property {string} [removalUri_gt]
 * @property {string} [removalUri_gte]
 * @property {Array<string>} [removalUri_in]
 * @property {string} [removalUri_lt]
 * @property {string} [removalUri_lte]
 * @property {string} [removalUri_not]
 * @property {string} [removalUri_not_contains]
 * @property {string} [removalUri_not_contains_nocase]
 * @property {string} [removalUri_not_ends_with]
 * @property {string} [removalUri_not_ends_with_nocase]
 * @property {Array<string>} [removalUri_not_in]
 * @property {string} [removalUri_not_starts_with]
 * @property {string} [removalUri_not_starts_with_nocase]
 * @property {string} [removalUri_starts_with]
 * @property {string} [removalUri_starts_with_nocase]
 * @property {BigInt} [submissionBaseDeposit]
 * @property {BigInt} [submissionBaseDeposit_gt]
 * @property {BigInt} [submissionBaseDeposit_gte]
 * @property {Array<BigInt>} [submissionBaseDeposit_in]
 * @property {BigInt} [submissionBaseDeposit_lt]
 * @property {BigInt} [submissionBaseDeposit_lte]
 * @property {BigInt} [submissionBaseDeposit_not]
 * @property {Array<BigInt>} [submissionBaseDeposit_not_in]
 * @property {Bytes} [tcrList]
 * @property {Bytes} [tcrList_contains]
 * @property {Bytes} [tcrList_gt]
 * @property {Bytes} [tcrList_gte]
 * @property {Array<Bytes>} [tcrList_in]
 * @property {Bytes} [tcrList_lt]
 * @property {Bytes} [tcrList_lte]
 * @property {Bytes} [tcrList_not]
 * @property {Bytes} [tcrList_not_contains]
 * @property {Array<Bytes>} [tcrList_not_in]
 */

/**
 * @typedef {("admin"|"arbitrator"|"badgeModel"|"badgeModel__badgesMintedAmount"|"badgeModel__contractAddress"|"badgeModel__controllerType"|"badgeModel__createdAt"|"badgeModel__creatorFee"|"badgeModel__id"|"badgeModel__networkName"|"badgeModel__paused"|"badgeModel__protocolFeeInBps"|"badgeModel__totalFeesGenerated"|"badgeModel__uri"|"badgeModel__validFor"|"badgeModel__version"|"challengePeriodDuration"|"governor"|"id"|"registrationUri"|"removalUri"|"submissionBaseDeposit"|"tcrList")} BadgeModelKlerosMetaData_orderBy
 */

/**
 * @typedef {Object} BadgeModel_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Array<(BadgeModel_filter|null|undefined)>} [and]
 * @property {string} [badgeModelKleros]
 * @property {BadgeModelKlerosMetaData_filter} [badgeModelKleros_]
 * @property {string} [badgeModelKleros_contains]
 * @property {string} [badgeModelKleros_contains_nocase]
 * @property {string} [badgeModelKleros_ends_with]
 * @property {string} [badgeModelKleros_ends_with_nocase]
 * @property {string} [badgeModelKleros_gt]
 * @property {string} [badgeModelKleros_gte]
 * @property {Array<string>} [badgeModelKleros_in]
 * @property {string} [badgeModelKleros_lt]
 * @property {string} [badgeModelKleros_lte]
 * @property {string} [badgeModelKleros_not]
 * @property {string} [badgeModelKleros_not_contains]
 * @property {string} [badgeModelKleros_not_contains_nocase]
 * @property {string} [badgeModelKleros_not_ends_with]
 * @property {string} [badgeModelKleros_not_ends_with_nocase]
 * @property {Array<string>} [badgeModelKleros_not_in]
 * @property {string} [badgeModelKleros_not_starts_with]
 * @property {string} [badgeModelKleros_not_starts_with_nocase]
 * @property {string} [badgeModelKleros_starts_with]
 * @property {string} [badgeModelKleros_starts_with_nocase]
 * @property {BigInt} [badgesMintedAmount]
 * @property {BigInt} [badgesMintedAmount_gt]
 * @property {BigInt} [badgesMintedAmount_gte]
 * @property {Array<BigInt>} [badgesMintedAmount_in]
 * @property {BigInt} [badgesMintedAmount_lt]
 * @property {BigInt} [badgesMintedAmount_lte]
 * @property {BigInt} [badgesMintedAmount_not]
 * @property {Array<BigInt>} [badgesMintedAmount_not_in]
 * @property {Bytes} [contractAddress]
 * @property {Bytes} [contractAddress_contains]
 * @property {Bytes} [contractAddress_gt]
 * @property {Bytes} [contractAddress_gte]
 * @property {Array<Bytes>} [contractAddress_in]
 * @property {Bytes} [contractAddress_lt]
 * @property {Bytes} [contractAddress_lte]
 * @property {Bytes} [contractAddress_not]
 * @property {Bytes} [contractAddress_not_contains]
 * @property {Array<Bytes>} [contractAddress_not_in]
 * @property {string} [controllerType]
 * @property {string} [controllerType_contains]
 * @property {string} [controllerType_contains_nocase]
 * @property {string} [controllerType_ends_with]
 * @property {string} [controllerType_ends_with_nocase]
 * @property {string} [controllerType_gt]
 * @property {string} [controllerType_gte]
 * @property {Array<string>} [controllerType_in]
 * @property {string} [controllerType_lt]
 * @property {string} [controllerType_lte]
 * @property {string} [controllerType_not]
 * @property {string} [controllerType_not_contains]
 * @property {string} [controllerType_not_contains_nocase]
 * @property {string} [controllerType_not_ends_with]
 * @property {string} [controllerType_not_ends_with_nocase]
 * @property {Array<string>} [controllerType_not_in]
 * @property {string} [controllerType_not_starts_with]
 * @property {string} [controllerType_not_starts_with_nocase]
 * @property {string} [controllerType_starts_with]
 * @property {string} [controllerType_starts_with_nocase]
 * @property {BigInt} [createdAt]
 * @property {BigInt} [createdAt_gt]
 * @property {BigInt} [createdAt_gte]
 * @property {Array<BigInt>} [createdAt_in]
 * @property {BigInt} [createdAt_lt]
 * @property {BigInt} [createdAt_lte]
 * @property {BigInt} [createdAt_not]
 * @property {Array<BigInt>} [createdAt_not_in]
 * @property {string} [creator]
 * @property {BigInt} [creatorFee]
 * @property {BigInt} [creatorFee_gt]
 * @property {BigInt} [creatorFee_gte]
 * @property {Array<BigInt>} [creatorFee_in]
 * @property {BigInt} [creatorFee_lt]
 * @property {BigInt} [creatorFee_lte]
 * @property {BigInt} [creatorFee_not]
 * @property {Array<BigInt>} [creatorFee_not_in]
 * @property {User_filter} [creator_]
 * @property {string} [creator_contains]
 * @property {string} [creator_contains_nocase]
 * @property {string} [creator_ends_with]
 * @property {string} [creator_ends_with_nocase]
 * @property {string} [creator_gt]
 * @property {string} [creator_gte]
 * @property {Array<string>} [creator_in]
 * @property {string} [creator_lt]
 * @property {string} [creator_lte]
 * @property {string} [creator_not]
 * @property {string} [creator_not_contains]
 * @property {string} [creator_not_contains_nocase]
 * @property {string} [creator_not_ends_with]
 * @property {string} [creator_not_ends_with_nocase]
 * @property {Array<string>} [creator_not_in]
 * @property {string} [creator_not_starts_with]
 * @property {string} [creator_not_starts_with_nocase]
 * @property {string} [creator_starts_with]
 * @property {string} [creator_starts_with_nocase]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {Badge_filter} [mintedBadges_]
 * @property {string} [networkName]
 * @property {string} [networkName_contains]
 * @property {string} [networkName_contains_nocase]
 * @property {string} [networkName_ends_with]
 * @property {string} [networkName_ends_with_nocase]
 * @property {string} [networkName_gt]
 * @property {string} [networkName_gte]
 * @property {Array<string>} [networkName_in]
 * @property {string} [networkName_lt]
 * @property {string} [networkName_lte]
 * @property {string} [networkName_not]
 * @property {string} [networkName_not_contains]
 * @property {string} [networkName_not_contains_nocase]
 * @property {string} [networkName_not_ends_with]
 * @property {string} [networkName_not_ends_with_nocase]
 * @property {Array<string>} [networkName_not_in]
 * @property {string} [networkName_not_starts_with]
 * @property {string} [networkName_not_starts_with_nocase]
 * @property {string} [networkName_starts_with]
 * @property {string} [networkName_starts_with_nocase]
 * @property {Array<(BadgeModel_filter|null|undefined)>} [or]
 * @property {boolean} [paused]
 * @property {Array<boolean>} [paused_in]
 * @property {boolean} [paused_not]
 * @property {Array<boolean>} [paused_not_in]
 * @property {BigInt} [protocolFeeInBps]
 * @property {BigInt} [protocolFeeInBps_gt]
 * @property {BigInt} [protocolFeeInBps_gte]
 * @property {Array<BigInt>} [protocolFeeInBps_in]
 * @property {BigInt} [protocolFeeInBps_lt]
 * @property {BigInt} [protocolFeeInBps_lte]
 * @property {BigInt} [protocolFeeInBps_not]
 * @property {Array<BigInt>} [protocolFeeInBps_not_in]
 * @property {BigInt} [totalFeesGenerated]
 * @property {BigInt} [totalFeesGenerated_gt]
 * @property {BigInt} [totalFeesGenerated_gte]
 * @property {Array<BigInt>} [totalFeesGenerated_in]
 * @property {BigInt} [totalFeesGenerated_lt]
 * @property {BigInt} [totalFeesGenerated_lte]
 * @property {BigInt} [totalFeesGenerated_not]
 * @property {Array<BigInt>} [totalFeesGenerated_not_in]
 * @property {string} [uri]
 * @property {string} [uri_contains]
 * @property {string} [uri_contains_nocase]
 * @property {string} [uri_ends_with]
 * @property {string} [uri_ends_with_nocase]
 * @property {string} [uri_gt]
 * @property {string} [uri_gte]
 * @property {Array<string>} [uri_in]
 * @property {string} [uri_lt]
 * @property {string} [uri_lte]
 * @property {string} [uri_not]
 * @property {string} [uri_not_contains]
 * @property {string} [uri_not_contains_nocase]
 * @property {string} [uri_not_ends_with]
 * @property {string} [uri_not_ends_with_nocase]
 * @property {Array<string>} [uri_not_in]
 * @property {string} [uri_not_starts_with]
 * @property {string} [uri_not_starts_with_nocase]
 * @property {string} [uri_starts_with]
 * @property {string} [uri_starts_with_nocase]
 * @property {BigInt} [validFor]
 * @property {BigInt} [validFor_gt]
 * @property {BigInt} [validFor_gte]
 * @property {Array<BigInt>} [validFor_in]
 * @property {BigInt} [validFor_lt]
 * @property {BigInt} [validFor_lte]
 * @property {BigInt} [validFor_not]
 * @property {Array<BigInt>} [validFor_not_in]
 * @property {string} [version]
 * @property {string} [version_contains]
 * @property {string} [version_contains_nocase]
 * @property {string} [version_ends_with]
 * @property {string} [version_ends_with_nocase]
 * @property {string} [version_gt]
 * @property {string} [version_gte]
 * @property {Array<string>} [version_in]
 * @property {string} [version_lt]
 * @property {string} [version_lte]
 * @property {string} [version_not]
 * @property {string} [version_not_contains]
 * @property {string} [version_not_contains_nocase]
 * @property {string} [version_not_ends_with]
 * @property {string} [version_not_ends_with_nocase]
 * @property {Array<string>} [version_not_in]
 * @property {string} [version_not_starts_with]
 * @property {string} [version_not_starts_with_nocase]
 * @property {string} [version_starts_with]
 * @property {string} [version_starts_with_nocase]
 */

/**
 * @typedef {("badgeModelKleros"|"badgeModelKleros__admin"|"badgeModelKleros__arbitrator"|"badgeModelKleros__challengePeriodDuration"|"badgeModelKleros__governor"|"badgeModelKleros__id"|"badgeModelKleros__registrationUri"|"badgeModelKleros__removalUri"|"badgeModelKleros__submissionBaseDeposit"|"badgeModelKleros__tcrList"|"badgesMintedAmount"|"contractAddress"|"controllerType"|"createdAt"|"creator"|"creatorFee"|"creator__id"|"creator__isCreator"|"creator__isCurator"|"creator__metadataUri"|"id"|"mintedBadges"|"networkName"|"paused"|"protocolFeeInBps"|"totalFeesGenerated"|"uri"|"validFor"|"version")} BadgeModel_orderBy
 */

/**
 * @typedef {("Absent"|"Approved"|"Challenged"|"RequestRemoval"|"Requested")} BadgeStatus
 */

/**
 * @typedef {Object} Badge_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {string} [account]
 * @property {User_filter} [account_]
 * @property {string} [account_contains]
 * @property {string} [account_contains_nocase]
 * @property {string} [account_ends_with]
 * @property {string} [account_ends_with_nocase]
 * @property {string} [account_gt]
 * @property {string} [account_gte]
 * @property {Array<string>} [account_in]
 * @property {string} [account_lt]
 * @property {string} [account_lte]
 * @property {string} [account_not]
 * @property {string} [account_not_contains]
 * @property {string} [account_not_contains_nocase]
 * @property {string} [account_not_ends_with]
 * @property {string} [account_not_ends_with_nocase]
 * @property {Array<string>} [account_not_in]
 * @property {string} [account_not_starts_with]
 * @property {string} [account_not_starts_with_nocase]
 * @property {string} [account_starts_with]
 * @property {string} [account_starts_with_nocase]
 * @property {Array<(Badge_filter|null|undefined)>} [and]
 * @property {BadgeKlerosMetaData_filter} [badgeKlerosMetaData_]
 * @property {string} [badgeModel]
 * @property {BadgeModel_filter} [badgeModel_]
 * @property {string} [badgeModel_contains]
 * @property {string} [badgeModel_contains_nocase]
 * @property {string} [badgeModel_ends_with]
 * @property {string} [badgeModel_ends_with_nocase]
 * @property {string} [badgeModel_gt]
 * @property {string} [badgeModel_gte]
 * @property {Array<string>} [badgeModel_in]
 * @property {string} [badgeModel_lt]
 * @property {string} [badgeModel_lte]
 * @property {string} [badgeModel_not]
 * @property {string} [badgeModel_not_contains]
 * @property {string} [badgeModel_not_contains_nocase]
 * @property {string} [badgeModel_not_ends_with]
 * @property {string} [badgeModel_not_ends_with_nocase]
 * @property {Array<string>} [badgeModel_not_in]
 * @property {string} [badgeModel_not_starts_with]
 * @property {string} [badgeModel_not_starts_with_nocase]
 * @property {string} [badgeModel_starts_with]
 * @property {string} [badgeModel_starts_with_nocase]
 * @property {BigInt} [createdAt]
 * @property {BigInt} [createdAt_gt]
 * @property {BigInt} [createdAt_gte]
 * @property {Array<BigInt>} [createdAt_in]
 * @property {BigInt} [createdAt_lt]
 * @property {BigInt} [createdAt_lte]
 * @property {BigInt} [createdAt_not]
 * @property {Array<BigInt>} [createdAt_not_in]
 * @property {Bytes} [createdTxHash]
 * @property {Bytes} [createdTxHash_contains]
 * @property {Bytes} [createdTxHash_gt]
 * @property {Bytes} [createdTxHash_gte]
 * @property {Array<Bytes>} [createdTxHash_in]
 * @property {Bytes} [createdTxHash_lt]
 * @property {Bytes} [createdTxHash_lte]
 * @property {Bytes} [createdTxHash_not]
 * @property {Bytes} [createdTxHash_not_contains]
 * @property {Array<Bytes>} [createdTxHash_not_in]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {string} [networkName]
 * @property {string} [networkName_contains]
 * @property {string} [networkName_contains_nocase]
 * @property {string} [networkName_ends_with]
 * @property {string} [networkName_ends_with_nocase]
 * @property {string} [networkName_gt]
 * @property {string} [networkName_gte]
 * @property {Array<string>} [networkName_in]
 * @property {string} [networkName_lt]
 * @property {string} [networkName_lte]
 * @property {string} [networkName_not]
 * @property {string} [networkName_not_contains]
 * @property {string} [networkName_not_contains_nocase]
 * @property {string} [networkName_not_ends_with]
 * @property {string} [networkName_not_ends_with_nocase]
 * @property {Array<string>} [networkName_not_in]
 * @property {string} [networkName_not_starts_with]
 * @property {string} [networkName_not_starts_with_nocase]
 * @property {string} [networkName_starts_with]
 * @property {string} [networkName_starts_with_nocase]
 * @property {Array<(Badge_filter|null|undefined)>} [or]
 * @property {BadgeStatus} [status]
 * @property {Array<BadgeStatus>} [status_in]
 * @property {BadgeStatus} [status_not]
 * @property {Array<BadgeStatus>} [status_not_in]
 * @property {string} [uri]
 * @property {string} [uri_contains]
 * @property {string} [uri_contains_nocase]
 * @property {string} [uri_ends_with]
 * @property {string} [uri_ends_with_nocase]
 * @property {string} [uri_gt]
 * @property {string} [uri_gte]
 * @property {Array<string>} [uri_in]
 * @property {string} [uri_lt]
 * @property {string} [uri_lte]
 * @property {string} [uri_not]
 * @property {string} [uri_not_contains]
 * @property {string} [uri_not_contains_nocase]
 * @property {string} [uri_not_ends_with]
 * @property {string} [uri_not_ends_with_nocase]
 * @property {Array<string>} [uri_not_in]
 * @property {string} [uri_not_starts_with]
 * @property {string} [uri_not_starts_with_nocase]
 * @property {string} [uri_starts_with]
 * @property {string} [uri_starts_with_nocase]
 * @property {BigInt} [validUntil]
 * @property {BigInt} [validUntil_gt]
 * @property {BigInt} [validUntil_gte]
 * @property {Array<BigInt>} [validUntil_in]
 * @property {BigInt} [validUntil_lt]
 * @property {BigInt} [validUntil_lte]
 * @property {BigInt} [validUntil_not]
 * @property {Array<BigInt>} [validUntil_not_in]
 */

/**
 * @typedef {("account"|"account__id"|"account__isCreator"|"account__isCurator"|"account__metadataUri"|"badgeKlerosMetaData"|"badgeKlerosMetaData__id"|"badgeKlerosMetaData__itemID"|"badgeKlerosMetaData__numberOfRequests"|"badgeKlerosMetaData__reviewDueDate"|"badgeModel"|"badgeModel__badgesMintedAmount"|"badgeModel__contractAddress"|"badgeModel__controllerType"|"badgeModel__createdAt"|"badgeModel__creatorFee"|"badgeModel__id"|"badgeModel__networkName"|"badgeModel__paused"|"badgeModel__protocolFeeInBps"|"badgeModel__totalFeesGenerated"|"badgeModel__uri"|"badgeModel__validFor"|"badgeModel__version"|"createdAt"|"createdTxHash"|"id"|"networkName"|"status"|"uri"|"validUntil")} Badge_orderBy
 */

/**
 * @typedef {*} BigDecimal
 */

/**
 * @typedef {*} BigInt
 */

/**
 * @typedef {Object} BlockChangedFilter
 * @property {number} number_gte
 */

/**
 * @typedef {Object} Block_height
 * @property {Bytes} [hash]
 * @property {number} [number]
 * @property {number} [number_gte]
 */

/**
 * @typedef {*} Bytes
 */

/**
 * @typedef {("kleros")} Controller
 */

/**
 * @typedef {Object} ControllerConfig
 * @property {Bytes} [arbitrator]
 * @property {Bytes} contractAdmin
 * @property {string} controllerName
 * @property {ProtocolConfig} generalProtocolConfig
 * @property {string} id
 * @property {Bytes} [tcrFactory]
 * @property {BigInt} verifyUserProtocolFee
 */

/**
 * @typedef {Object} ControllerConfig_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Array<(ControllerConfig_filter|null|undefined)>} [and]
 * @property {Bytes} [arbitrator]
 * @property {Bytes} [arbitrator_contains]
 * @property {Bytes} [arbitrator_gt]
 * @property {Bytes} [arbitrator_gte]
 * @property {Array<Bytes>} [arbitrator_in]
 * @property {Bytes} [arbitrator_lt]
 * @property {Bytes} [arbitrator_lte]
 * @property {Bytes} [arbitrator_not]
 * @property {Bytes} [arbitrator_not_contains]
 * @property {Array<Bytes>} [arbitrator_not_in]
 * @property {Bytes} [contractAdmin]
 * @property {Bytes} [contractAdmin_contains]
 * @property {Bytes} [contractAdmin_gt]
 * @property {Bytes} [contractAdmin_gte]
 * @property {Array<Bytes>} [contractAdmin_in]
 * @property {Bytes} [contractAdmin_lt]
 * @property {Bytes} [contractAdmin_lte]
 * @property {Bytes} [contractAdmin_not]
 * @property {Bytes} [contractAdmin_not_contains]
 * @property {Array<Bytes>} [contractAdmin_not_in]
 * @property {string} [controllerName]
 * @property {string} [controllerName_contains]
 * @property {string} [controllerName_contains_nocase]
 * @property {string} [controllerName_ends_with]
 * @property {string} [controllerName_ends_with_nocase]
 * @property {string} [controllerName_gt]
 * @property {string} [controllerName_gte]
 * @property {Array<string>} [controllerName_in]
 * @property {string} [controllerName_lt]
 * @property {string} [controllerName_lte]
 * @property {string} [controllerName_not]
 * @property {string} [controllerName_not_contains]
 * @property {string} [controllerName_not_contains_nocase]
 * @property {string} [controllerName_not_ends_with]
 * @property {string} [controllerName_not_ends_with_nocase]
 * @property {Array<string>} [controllerName_not_in]
 * @property {string} [controllerName_not_starts_with]
 * @property {string} [controllerName_not_starts_with_nocase]
 * @property {string} [controllerName_starts_with]
 * @property {string} [controllerName_starts_with_nocase]
 * @property {string} [generalProtocolConfig]
 * @property {ProtocolConfig_filter} [generalProtocolConfig_]
 * @property {string} [generalProtocolConfig_contains]
 * @property {string} [generalProtocolConfig_contains_nocase]
 * @property {string} [generalProtocolConfig_ends_with]
 * @property {string} [generalProtocolConfig_ends_with_nocase]
 * @property {string} [generalProtocolConfig_gt]
 * @property {string} [generalProtocolConfig_gte]
 * @property {Array<string>} [generalProtocolConfig_in]
 * @property {string} [generalProtocolConfig_lt]
 * @property {string} [generalProtocolConfig_lte]
 * @property {string} [generalProtocolConfig_not]
 * @property {string} [generalProtocolConfig_not_contains]
 * @property {string} [generalProtocolConfig_not_contains_nocase]
 * @property {string} [generalProtocolConfig_not_ends_with]
 * @property {string} [generalProtocolConfig_not_ends_with_nocase]
 * @property {Array<string>} [generalProtocolConfig_not_in]
 * @property {string} [generalProtocolConfig_not_starts_with]
 * @property {string} [generalProtocolConfig_not_starts_with_nocase]
 * @property {string} [generalProtocolConfig_starts_with]
 * @property {string} [generalProtocolConfig_starts_with_nocase]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {Array<(ControllerConfig_filter|null|undefined)>} [or]
 * @property {Bytes} [tcrFactory]
 * @property {Bytes} [tcrFactory_contains]
 * @property {Bytes} [tcrFactory_gt]
 * @property {Bytes} [tcrFactory_gte]
 * @property {Array<Bytes>} [tcrFactory_in]
 * @property {Bytes} [tcrFactory_lt]
 * @property {Bytes} [tcrFactory_lte]
 * @property {Bytes} [tcrFactory_not]
 * @property {Bytes} [tcrFactory_not_contains]
 * @property {Array<Bytes>} [tcrFactory_not_in]
 * @property {BigInt} [verifyUserProtocolFee]
 * @property {BigInt} [verifyUserProtocolFee_gt]
 * @property {BigInt} [verifyUserProtocolFee_gte]
 * @property {Array<BigInt>} [verifyUserProtocolFee_in]
 * @property {BigInt} [verifyUserProtocolFee_lt]
 * @property {BigInt} [verifyUserProtocolFee_lte]
 * @property {BigInt} [verifyUserProtocolFee_not]
 * @property {Array<BigInt>} [verifyUserProtocolFee_not_in]
 */

/**
 * @typedef {("arbitrator"|"contractAdmin"|"controllerName"|"generalProtocolConfig"|"generalProtocolConfig__contractAdmin"|"generalProtocolConfig__createBadgeModelProtocolFee"|"generalProtocolConfig__feeCollector"|"generalProtocolConfig__id"|"generalProtocolConfig__mintBadgeProtocolDefaultFeeInBps"|"generalProtocolConfig__registerUserProtocolFee"|"id"|"tcrFactory"|"verifyUserProtocolFee")} ControllerConfig_orderBy
 */

/**
 * @typedef {Object} CreatorStatistic
 * @property {Array<Bytes>} allTimeBadgeMinters
 * @property {BigInt} allTimeBadgeMintersAmount
 * @property {BigInt} createdBadgeModelsAmount
 * @property {BigInt} createdBadgeModelsMintedAmount
 * @property {string} id
 * @property {BigInt} mostPopularCreatedBadge
 * @property {BigInt} totalFeesEarned
 * @property {UserStatistic} userStatistic
 */

/**
 * @typedef {Object} CreatorStatistic_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Array<Bytes>} [allTimeBadgeMinters]
 * @property {BigInt} [allTimeBadgeMintersAmount]
 * @property {BigInt} [allTimeBadgeMintersAmount_gt]
 * @property {BigInt} [allTimeBadgeMintersAmount_gte]
 * @property {Array<BigInt>} [allTimeBadgeMintersAmount_in]
 * @property {BigInt} [allTimeBadgeMintersAmount_lt]
 * @property {BigInt} [allTimeBadgeMintersAmount_lte]
 * @property {BigInt} [allTimeBadgeMintersAmount_not]
 * @property {Array<BigInt>} [allTimeBadgeMintersAmount_not_in]
 * @property {Array<Bytes>} [allTimeBadgeMinters_contains]
 * @property {Array<Bytes>} [allTimeBadgeMinters_contains_nocase]
 * @property {Array<Bytes>} [allTimeBadgeMinters_not]
 * @property {Array<Bytes>} [allTimeBadgeMinters_not_contains]
 * @property {Array<Bytes>} [allTimeBadgeMinters_not_contains_nocase]
 * @property {Array<(CreatorStatistic_filter|null|undefined)>} [and]
 * @property {BigInt} [createdBadgeModelsAmount]
 * @property {BigInt} [createdBadgeModelsAmount_gt]
 * @property {BigInt} [createdBadgeModelsAmount_gte]
 * @property {Array<BigInt>} [createdBadgeModelsAmount_in]
 * @property {BigInt} [createdBadgeModelsAmount_lt]
 * @property {BigInt} [createdBadgeModelsAmount_lte]
 * @property {BigInt} [createdBadgeModelsAmount_not]
 * @property {Array<BigInt>} [createdBadgeModelsAmount_not_in]
 * @property {BigInt} [createdBadgeModelsMintedAmount]
 * @property {BigInt} [createdBadgeModelsMintedAmount_gt]
 * @property {BigInt} [createdBadgeModelsMintedAmount_gte]
 * @property {Array<BigInt>} [createdBadgeModelsMintedAmount_in]
 * @property {BigInt} [createdBadgeModelsMintedAmount_lt]
 * @property {BigInt} [createdBadgeModelsMintedAmount_lte]
 * @property {BigInt} [createdBadgeModelsMintedAmount_not]
 * @property {Array<BigInt>} [createdBadgeModelsMintedAmount_not_in]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {BigInt} [mostPopularCreatedBadge]
 * @property {BigInt} [mostPopularCreatedBadge_gt]
 * @property {BigInt} [mostPopularCreatedBadge_gte]
 * @property {Array<BigInt>} [mostPopularCreatedBadge_in]
 * @property {BigInt} [mostPopularCreatedBadge_lt]
 * @property {BigInt} [mostPopularCreatedBadge_lte]
 * @property {BigInt} [mostPopularCreatedBadge_not]
 * @property {Array<BigInt>} [mostPopularCreatedBadge_not_in]
 * @property {Array<(CreatorStatistic_filter|null|undefined)>} [or]
 * @property {BigInt} [totalFeesEarned]
 * @property {BigInt} [totalFeesEarned_gt]
 * @property {BigInt} [totalFeesEarned_gte]
 * @property {Array<BigInt>} [totalFeesEarned_in]
 * @property {BigInt} [totalFeesEarned_lt]
 * @property {BigInt} [totalFeesEarned_lte]
 * @property {BigInt} [totalFeesEarned_not]
 * @property {Array<BigInt>} [totalFeesEarned_not_in]
 * @property {string} [userStatistic]
 * @property {UserStatistic_filter} [userStatistic_]
 * @property {string} [userStatistic_contains]
 * @property {string} [userStatistic_contains_nocase]
 * @property {string} [userStatistic_ends_with]
 * @property {string} [userStatistic_ends_with_nocase]
 * @property {string} [userStatistic_gt]
 * @property {string} [userStatistic_gte]
 * @property {Array<string>} [userStatistic_in]
 * @property {string} [userStatistic_lt]
 * @property {string} [userStatistic_lte]
 * @property {string} [userStatistic_not]
 * @property {string} [userStatistic_not_contains]
 * @property {string} [userStatistic_not_contains_nocase]
 * @property {string} [userStatistic_not_ends_with]
 * @property {string} [userStatistic_not_ends_with_nocase]
 * @property {Array<string>} [userStatistic_not_in]
 * @property {string} [userStatistic_not_starts_with]
 * @property {string} [userStatistic_not_starts_with_nocase]
 * @property {string} [userStatistic_starts_with]
 * @property {string} [userStatistic_starts_with_nocase]
 */

/**
 * @typedef {("allTimeBadgeMinters"|"allTimeBadgeMintersAmount"|"createdBadgeModelsAmount"|"createdBadgeModelsMintedAmount"|"id"|"mostPopularCreatedBadge"|"totalFeesEarned"|"userStatistic"|"userStatistic__challengesReceivedAmount"|"userStatistic__challengesReceivedLostAmount"|"userStatistic__challengesReceivedRejectedAmount"|"userStatistic__challengesReceivedWonAmount"|"userStatistic__id"|"userStatistic__mintedBadgesAmount"|"userStatistic__timeOfLastChallengeReceived")} CreatorStatistic_orderBy
 */

/**
 * @typedef {Object} CuratorStatistic
 * @property {BigInt} challengesMadeAmount
 * @property {BigInt} challengesMadeLostAmount
 * @property {BigInt} challengesMadeRejectedAmount
 * @property {BigInt} challengesMadeWonAmount
 * @property {string} id
 * @property {UserStatistic} userStatistic
 */

/**
 * @typedef {Object} CuratorStatistic_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Array<(CuratorStatistic_filter|null|undefined)>} [and]
 * @property {BigInt} [challengesMadeAmount]
 * @property {BigInt} [challengesMadeAmount_gt]
 * @property {BigInt} [challengesMadeAmount_gte]
 * @property {Array<BigInt>} [challengesMadeAmount_in]
 * @property {BigInt} [challengesMadeAmount_lt]
 * @property {BigInt} [challengesMadeAmount_lte]
 * @property {BigInt} [challengesMadeAmount_not]
 * @property {Array<BigInt>} [challengesMadeAmount_not_in]
 * @property {BigInt} [challengesMadeLostAmount]
 * @property {BigInt} [challengesMadeLostAmount_gt]
 * @property {BigInt} [challengesMadeLostAmount_gte]
 * @property {Array<BigInt>} [challengesMadeLostAmount_in]
 * @property {BigInt} [challengesMadeLostAmount_lt]
 * @property {BigInt} [challengesMadeLostAmount_lte]
 * @property {BigInt} [challengesMadeLostAmount_not]
 * @property {Array<BigInt>} [challengesMadeLostAmount_not_in]
 * @property {BigInt} [challengesMadeRejectedAmount]
 * @property {BigInt} [challengesMadeRejectedAmount_gt]
 * @property {BigInt} [challengesMadeRejectedAmount_gte]
 * @property {Array<BigInt>} [challengesMadeRejectedAmount_in]
 * @property {BigInt} [challengesMadeRejectedAmount_lt]
 * @property {BigInt} [challengesMadeRejectedAmount_lte]
 * @property {BigInt} [challengesMadeRejectedAmount_not]
 * @property {Array<BigInt>} [challengesMadeRejectedAmount_not_in]
 * @property {BigInt} [challengesMadeWonAmount]
 * @property {BigInt} [challengesMadeWonAmount_gt]
 * @property {BigInt} [challengesMadeWonAmount_gte]
 * @property {Array<BigInt>} [challengesMadeWonAmount_in]
 * @property {BigInt} [challengesMadeWonAmount_lt]
 * @property {BigInt} [challengesMadeWonAmount_lte]
 * @property {BigInt} [challengesMadeWonAmount_not]
 * @property {Array<BigInt>} [challengesMadeWonAmount_not_in]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {Array<(CuratorStatistic_filter|null|undefined)>} [or]
 * @property {string} [userStatistic]
 * @property {UserStatistic_filter} [userStatistic_]
 * @property {string} [userStatistic_contains]
 * @property {string} [userStatistic_contains_nocase]
 * @property {string} [userStatistic_ends_with]
 * @property {string} [userStatistic_ends_with_nocase]
 * @property {string} [userStatistic_gt]
 * @property {string} [userStatistic_gte]
 * @property {Array<string>} [userStatistic_in]
 * @property {string} [userStatistic_lt]
 * @property {string} [userStatistic_lte]
 * @property {string} [userStatistic_not]
 * @property {string} [userStatistic_not_contains]
 * @property {string} [userStatistic_not_contains_nocase]
 * @property {string} [userStatistic_not_ends_with]
 * @property {string} [userStatistic_not_ends_with_nocase]
 * @property {Array<string>} [userStatistic_not_in]
 * @property {string} [userStatistic_not_starts_with]
 * @property {string} [userStatistic_not_starts_with_nocase]
 * @property {string} [userStatistic_starts_with]
 * @property {string} [userStatistic_starts_with_nocase]
 */

/**
 * @typedef {("challengesMadeAmount"|"challengesMadeLostAmount"|"challengesMadeRejectedAmount"|"challengesMadeWonAmount"|"id"|"userStatistic"|"userStatistic__challengesReceivedAmount"|"userStatistic__challengesReceivedLostAmount"|"userStatistic__challengesReceivedRejectedAmount"|"userStatistic__challengesReceivedWonAmount"|"userStatistic__id"|"userStatistic__mintedBadgesAmount"|"userStatistic__timeOfLastChallengeReceived")} CuratorStatistic_orderBy
 */

/**
 * @typedef {Object} Evidence
 * @property {string} id - <Request.id>-<evidence number>
 * @property {KlerosBadgeRequest} [request] - The latest request when this evidence was submitted.
 * @property {Bytes} sender - Who has send the evidence
 * @property {BigInt} timestamp - When was this evidence posted
 * @property {string} uri - The URI of the evidence file.
 */

/**
 * @typedef {Object} Evidence_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Array<(Evidence_filter|null|undefined)>} [and]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {Array<(Evidence_filter|null|undefined)>} [or]
 * @property {string} [request]
 * @property {KlerosBadgeRequest_filter} [request_]
 * @property {string} [request_contains]
 * @property {string} [request_contains_nocase]
 * @property {string} [request_ends_with]
 * @property {string} [request_ends_with_nocase]
 * @property {string} [request_gt]
 * @property {string} [request_gte]
 * @property {Array<string>} [request_in]
 * @property {string} [request_lt]
 * @property {string} [request_lte]
 * @property {string} [request_not]
 * @property {string} [request_not_contains]
 * @property {string} [request_not_contains_nocase]
 * @property {string} [request_not_ends_with]
 * @property {string} [request_not_ends_with_nocase]
 * @property {Array<string>} [request_not_in]
 * @property {string} [request_not_starts_with]
 * @property {string} [request_not_starts_with_nocase]
 * @property {string} [request_starts_with]
 * @property {string} [request_starts_with_nocase]
 * @property {Bytes} [sender]
 * @property {Bytes} [sender_contains]
 * @property {Bytes} [sender_gt]
 * @property {Bytes} [sender_gte]
 * @property {Array<Bytes>} [sender_in]
 * @property {Bytes} [sender_lt]
 * @property {Bytes} [sender_lte]
 * @property {Bytes} [sender_not]
 * @property {Bytes} [sender_not_contains]
 * @property {Array<Bytes>} [sender_not_in]
 * @property {BigInt} [timestamp]
 * @property {BigInt} [timestamp_gt]
 * @property {BigInt} [timestamp_gte]
 * @property {Array<BigInt>} [timestamp_in]
 * @property {BigInt} [timestamp_lt]
 * @property {BigInt} [timestamp_lte]
 * @property {BigInt} [timestamp_not]
 * @property {Array<BigInt>} [timestamp_not_in]
 * @property {string} [uri]
 * @property {string} [uri_contains]
 * @property {string} [uri_contains_nocase]
 * @property {string} [uri_ends_with]
 * @property {string} [uri_ends_with_nocase]
 * @property {string} [uri_gt]
 * @property {string} [uri_gte]
 * @property {Array<string>} [uri_in]
 * @property {string} [uri_lt]
 * @property {string} [uri_lte]
 * @property {string} [uri_not]
 * @property {string} [uri_not_contains]
 * @property {string} [uri_not_contains_nocase]
 * @property {string} [uri_not_ends_with]
 * @property {string} [uri_not_ends_with_nocase]
 * @property {Array<string>} [uri_not_in]
 * @property {string} [uri_not_starts_with]
 * @property {string} [uri_not_starts_with_nocase]
 * @property {string} [uri_starts_with]
 * @property {string} [uri_starts_with_nocase]
 */

/**
 * @typedef {("id"|"request"|"request__arbitrationParamsIndex"|"request__arbitrator"|"request__challenger"|"request__createdAt"|"request__disputeID"|"request__disputeOutcome"|"request__disputed"|"request__id"|"request__numberOfEvidences"|"request__requestIndex"|"request__requester"|"request__resolutionTime"|"request__resolutionTx"|"request__resolved"|"request__type"|"sender"|"timestamp"|"uri")} Evidence_orderBy
 */

/**
 * 8 bytes signed integer
 * 
 * @typedef {*} Int8
 */

/**
 * @typedef {Object} KlerosBadgeRequest
 * @property {BigInt} [arbitrationParamsIndex]
 * @property {Bytes} arbitrator - The arbitrator's address.
 * @property {BadgeKlerosMetaData} [badgeKlerosMetaData]
 * @property {Bytes} [challenger]
 * @property {BigInt} createdAt
 * @property {BigInt} [disputeID]
 * @property {Ruling} disputeOutcome - The outcome of the dispute, if any. Note that unsuccessful appeal fundings can invert the arbitrator ruling (so this may differ from the ruling given by the arbitrator).
 * @property {boolean} disputed - Whether the item is currently disputed.
 * @property {Array<Evidence>} evidences - Evidence provided regarding this request (matching evidenceGroupID).
 * @property {string} id
 * @property {BigInt} numberOfEvidences - Number of evidences.
 * @property {BigInt} [requestIndex]
 * @property {Bytes} [requester]
 * @property {BigInt} resolutionTime - The time the request was resolved.
 * @property {Bytes} [resolutionTx] - The hash of the transaction that solved this request.
 * @property {boolean} resolved - True if the request was executed and/or any raised disputes were resolved.
 * @property {KlerosRequestType} type
 */

/**
 * @typedef {Object} KlerosBadgeRequest_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Array<(KlerosBadgeRequest_filter|null|undefined)>} [and]
 * @property {BigInt} [arbitrationParamsIndex]
 * @property {BigInt} [arbitrationParamsIndex_gt]
 * @property {BigInt} [arbitrationParamsIndex_gte]
 * @property {Array<BigInt>} [arbitrationParamsIndex_in]
 * @property {BigInt} [arbitrationParamsIndex_lt]
 * @property {BigInt} [arbitrationParamsIndex_lte]
 * @property {BigInt} [arbitrationParamsIndex_not]
 * @property {Array<BigInt>} [arbitrationParamsIndex_not_in]
 * @property {Bytes} [arbitrator]
 * @property {Bytes} [arbitrator_contains]
 * @property {Bytes} [arbitrator_gt]
 * @property {Bytes} [arbitrator_gte]
 * @property {Array<Bytes>} [arbitrator_in]
 * @property {Bytes} [arbitrator_lt]
 * @property {Bytes} [arbitrator_lte]
 * @property {Bytes} [arbitrator_not]
 * @property {Bytes} [arbitrator_not_contains]
 * @property {Array<Bytes>} [arbitrator_not_in]
 * @property {string} [badgeKlerosMetaData]
 * @property {BadgeKlerosMetaData_filter} [badgeKlerosMetaData_]
 * @property {string} [badgeKlerosMetaData_contains]
 * @property {string} [badgeKlerosMetaData_contains_nocase]
 * @property {string} [badgeKlerosMetaData_ends_with]
 * @property {string} [badgeKlerosMetaData_ends_with_nocase]
 * @property {string} [badgeKlerosMetaData_gt]
 * @property {string} [badgeKlerosMetaData_gte]
 * @property {Array<string>} [badgeKlerosMetaData_in]
 * @property {string} [badgeKlerosMetaData_lt]
 * @property {string} [badgeKlerosMetaData_lte]
 * @property {string} [badgeKlerosMetaData_not]
 * @property {string} [badgeKlerosMetaData_not_contains]
 * @property {string} [badgeKlerosMetaData_not_contains_nocase]
 * @property {string} [badgeKlerosMetaData_not_ends_with]
 * @property {string} [badgeKlerosMetaData_not_ends_with_nocase]
 * @property {Array<string>} [badgeKlerosMetaData_not_in]
 * @property {string} [badgeKlerosMetaData_not_starts_with]
 * @property {string} [badgeKlerosMetaData_not_starts_with_nocase]
 * @property {string} [badgeKlerosMetaData_starts_with]
 * @property {string} [badgeKlerosMetaData_starts_with_nocase]
 * @property {Bytes} [challenger]
 * @property {Bytes} [challenger_contains]
 * @property {Bytes} [challenger_gt]
 * @property {Bytes} [challenger_gte]
 * @property {Array<Bytes>} [challenger_in]
 * @property {Bytes} [challenger_lt]
 * @property {Bytes} [challenger_lte]
 * @property {Bytes} [challenger_not]
 * @property {Bytes} [challenger_not_contains]
 * @property {Array<Bytes>} [challenger_not_in]
 * @property {BigInt} [createdAt]
 * @property {BigInt} [createdAt_gt]
 * @property {BigInt} [createdAt_gte]
 * @property {Array<BigInt>} [createdAt_in]
 * @property {BigInt} [createdAt_lt]
 * @property {BigInt} [createdAt_lte]
 * @property {BigInt} [createdAt_not]
 * @property {Array<BigInt>} [createdAt_not_in]
 * @property {BigInt} [disputeID]
 * @property {BigInt} [disputeID_gt]
 * @property {BigInt} [disputeID_gte]
 * @property {Array<BigInt>} [disputeID_in]
 * @property {BigInt} [disputeID_lt]
 * @property {BigInt} [disputeID_lte]
 * @property {BigInt} [disputeID_not]
 * @property {Array<BigInt>} [disputeID_not_in]
 * @property {Ruling} [disputeOutcome]
 * @property {Array<Ruling>} [disputeOutcome_in]
 * @property {Ruling} [disputeOutcome_not]
 * @property {Array<Ruling>} [disputeOutcome_not_in]
 * @property {boolean} [disputed]
 * @property {Array<boolean>} [disputed_in]
 * @property {boolean} [disputed_not]
 * @property {Array<boolean>} [disputed_not_in]
 * @property {Evidence_filter} [evidences_]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {BigInt} [numberOfEvidences]
 * @property {BigInt} [numberOfEvidences_gt]
 * @property {BigInt} [numberOfEvidences_gte]
 * @property {Array<BigInt>} [numberOfEvidences_in]
 * @property {BigInt} [numberOfEvidences_lt]
 * @property {BigInt} [numberOfEvidences_lte]
 * @property {BigInt} [numberOfEvidences_not]
 * @property {Array<BigInt>} [numberOfEvidences_not_in]
 * @property {Array<(KlerosBadgeRequest_filter|null|undefined)>} [or]
 * @property {BigInt} [requestIndex]
 * @property {BigInt} [requestIndex_gt]
 * @property {BigInt} [requestIndex_gte]
 * @property {Array<BigInt>} [requestIndex_in]
 * @property {BigInt} [requestIndex_lt]
 * @property {BigInt} [requestIndex_lte]
 * @property {BigInt} [requestIndex_not]
 * @property {Array<BigInt>} [requestIndex_not_in]
 * @property {Bytes} [requester]
 * @property {Bytes} [requester_contains]
 * @property {Bytes} [requester_gt]
 * @property {Bytes} [requester_gte]
 * @property {Array<Bytes>} [requester_in]
 * @property {Bytes} [requester_lt]
 * @property {Bytes} [requester_lte]
 * @property {Bytes} [requester_not]
 * @property {Bytes} [requester_not_contains]
 * @property {Array<Bytes>} [requester_not_in]
 * @property {BigInt} [resolutionTime]
 * @property {BigInt} [resolutionTime_gt]
 * @property {BigInt} [resolutionTime_gte]
 * @property {Array<BigInt>} [resolutionTime_in]
 * @property {BigInt} [resolutionTime_lt]
 * @property {BigInt} [resolutionTime_lte]
 * @property {BigInt} [resolutionTime_not]
 * @property {Array<BigInt>} [resolutionTime_not_in]
 * @property {Bytes} [resolutionTx]
 * @property {Bytes} [resolutionTx_contains]
 * @property {Bytes} [resolutionTx_gt]
 * @property {Bytes} [resolutionTx_gte]
 * @property {Array<Bytes>} [resolutionTx_in]
 * @property {Bytes} [resolutionTx_lt]
 * @property {Bytes} [resolutionTx_lte]
 * @property {Bytes} [resolutionTx_not]
 * @property {Bytes} [resolutionTx_not_contains]
 * @property {Array<Bytes>} [resolutionTx_not_in]
 * @property {boolean} [resolved]
 * @property {Array<boolean>} [resolved_in]
 * @property {boolean} [resolved_not]
 * @property {Array<boolean>} [resolved_not_in]
 * @property {KlerosRequestType} [type]
 * @property {Array<KlerosRequestType>} [type_in]
 * @property {KlerosRequestType} [type_not]
 * @property {Array<KlerosRequestType>} [type_not_in]
 */

/**
 * @typedef {("arbitrationParamsIndex"|"arbitrator"|"badgeKlerosMetaData"|"badgeKlerosMetaData__id"|"badgeKlerosMetaData__itemID"|"badgeKlerosMetaData__numberOfRequests"|"badgeKlerosMetaData__reviewDueDate"|"challenger"|"createdAt"|"disputeID"|"disputeOutcome"|"disputed"|"evidences"|"id"|"numberOfEvidences"|"requestIndex"|"requester"|"resolutionTime"|"resolutionTx"|"resolved"|"type")} KlerosBadgeRequest_orderBy
 */

/**
 * @typedef {("Clearing"|"Registration")} KlerosRequestType
 */

/**
 * Defines the order direction, either ascending or descending
 * @typedef {("asc"|"desc")} OrderDirection
 */

/**
 * @typedef {Object} ProtocolConfig
 * @property {Bytes} contractAdmin
 * @property {Array<ControllerConfig>} [controllerConfigs]
 * @property {BigInt} createBadgeModelProtocolFee
 * @property {Bytes} feeCollector
 * @property {string} id
 * @property {BigInt} mintBadgeProtocolDefaultFeeInBps
 * @property {ProtocolStatistic} protocolStatistics
 * @property {BigInt} registerUserProtocolFee
 */

/**
 * @typedef {Object} ProtocolConfig_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Array<(ProtocolConfig_filter|null|undefined)>} [and]
 * @property {Bytes} [contractAdmin]
 * @property {Bytes} [contractAdmin_contains]
 * @property {Bytes} [contractAdmin_gt]
 * @property {Bytes} [contractAdmin_gte]
 * @property {Array<Bytes>} [contractAdmin_in]
 * @property {Bytes} [contractAdmin_lt]
 * @property {Bytes} [contractAdmin_lte]
 * @property {Bytes} [contractAdmin_not]
 * @property {Bytes} [contractAdmin_not_contains]
 * @property {Array<Bytes>} [contractAdmin_not_in]
 * @property {ControllerConfig_filter} [controllerConfigs_]
 * @property {BigInt} [createBadgeModelProtocolFee]
 * @property {BigInt} [createBadgeModelProtocolFee_gt]
 * @property {BigInt} [createBadgeModelProtocolFee_gte]
 * @property {Array<BigInt>} [createBadgeModelProtocolFee_in]
 * @property {BigInt} [createBadgeModelProtocolFee_lt]
 * @property {BigInt} [createBadgeModelProtocolFee_lte]
 * @property {BigInt} [createBadgeModelProtocolFee_not]
 * @property {Array<BigInt>} [createBadgeModelProtocolFee_not_in]
 * @property {Bytes} [feeCollector]
 * @property {Bytes} [feeCollector_contains]
 * @property {Bytes} [feeCollector_gt]
 * @property {Bytes} [feeCollector_gte]
 * @property {Array<Bytes>} [feeCollector_in]
 * @property {Bytes} [feeCollector_lt]
 * @property {Bytes} [feeCollector_lte]
 * @property {Bytes} [feeCollector_not]
 * @property {Bytes} [feeCollector_not_contains]
 * @property {Array<Bytes>} [feeCollector_not_in]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {BigInt} [mintBadgeProtocolDefaultFeeInBps]
 * @property {BigInt} [mintBadgeProtocolDefaultFeeInBps_gt]
 * @property {BigInt} [mintBadgeProtocolDefaultFeeInBps_gte]
 * @property {Array<BigInt>} [mintBadgeProtocolDefaultFeeInBps_in]
 * @property {BigInt} [mintBadgeProtocolDefaultFeeInBps_lt]
 * @property {BigInt} [mintBadgeProtocolDefaultFeeInBps_lte]
 * @property {BigInt} [mintBadgeProtocolDefaultFeeInBps_not]
 * @property {Array<BigInt>} [mintBadgeProtocolDefaultFeeInBps_not_in]
 * @property {Array<(ProtocolConfig_filter|null|undefined)>} [or]
 * @property {string} [protocolStatistics]
 * @property {ProtocolStatistic_filter} [protocolStatistics_]
 * @property {string} [protocolStatistics_contains]
 * @property {string} [protocolStatistics_contains_nocase]
 * @property {string} [protocolStatistics_ends_with]
 * @property {string} [protocolStatistics_ends_with_nocase]
 * @property {string} [protocolStatistics_gt]
 * @property {string} [protocolStatistics_gte]
 * @property {Array<string>} [protocolStatistics_in]
 * @property {string} [protocolStatistics_lt]
 * @property {string} [protocolStatistics_lte]
 * @property {string} [protocolStatistics_not]
 * @property {string} [protocolStatistics_not_contains]
 * @property {string} [protocolStatistics_not_contains_nocase]
 * @property {string} [protocolStatistics_not_ends_with]
 * @property {string} [protocolStatistics_not_ends_with_nocase]
 * @property {Array<string>} [protocolStatistics_not_in]
 * @property {string} [protocolStatistics_not_starts_with]
 * @property {string} [protocolStatistics_not_starts_with_nocase]
 * @property {string} [protocolStatistics_starts_with]
 * @property {string} [protocolStatistics_starts_with_nocase]
 * @property {BigInt} [registerUserProtocolFee]
 * @property {BigInt} [registerUserProtocolFee_gt]
 * @property {BigInt} [registerUserProtocolFee_gte]
 * @property {Array<BigInt>} [registerUserProtocolFee_in]
 * @property {BigInt} [registerUserProtocolFee_lt]
 * @property {BigInt} [registerUserProtocolFee_lte]
 * @property {BigInt} [registerUserProtocolFee_not]
 * @property {Array<BigInt>} [registerUserProtocolFee_not_in]
 */

/**
 * @typedef {("contractAdmin"|"controllerConfigs"|"createBadgeModelProtocolFee"|"feeCollector"|"id"|"mintBadgeProtocolDefaultFeeInBps"|"protocolStatistics"|"protocolStatistics__badgeCreatorsAmount"|"protocolStatistics__badgeCuratorsAmount"|"protocolStatistics__badgeModelsCreatedAmount"|"protocolStatistics__badgesChallengedAmount"|"protocolStatistics__badgesMintedAmount"|"protocolStatistics__badgesOwnersAmount"|"protocolStatistics__id"|"protocolStatistics__protocolEarnedFees"|"protocolStatistics__registeredUsersAmount"|"protocolStatistics__totalCreatorsFees"|"registerUserProtocolFee")} ProtocolConfig_orderBy
 */

/**
 * @typedef {Object} ProtocolStatistic
 * @property {Array<Bytes>} badgeCreators
 * @property {BigInt} badgeCreatorsAmount
 * @property {Array<Bytes>} badgeCurators
 * @property {BigInt} badgeCuratorsAmount
 * @property {BigInt} badgeModelsCreatedAmount
 * @property {BigInt} badgesChallengedAmount
 * @property {BigInt} badgesMintedAmount
 * @property {BigInt} badgesOwnersAmount
 * @property {string} id
 * @property {ProtocolConfig} protocolConfig
 * @property {BigInt} protocolEarnedFees
 * @property {Array<Bytes>} registeredUsers
 * @property {BigInt} registeredUsersAmount
 * @property {BigInt} totalCreatorsFees
 */

/**
 * @typedef {Object} ProtocolStatistic_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Array<(ProtocolStatistic_filter|null|undefined)>} [and]
 * @property {Array<Bytes>} [badgeCreators]
 * @property {BigInt} [badgeCreatorsAmount]
 * @property {BigInt} [badgeCreatorsAmount_gt]
 * @property {BigInt} [badgeCreatorsAmount_gte]
 * @property {Array<BigInt>} [badgeCreatorsAmount_in]
 * @property {BigInt} [badgeCreatorsAmount_lt]
 * @property {BigInt} [badgeCreatorsAmount_lte]
 * @property {BigInt} [badgeCreatorsAmount_not]
 * @property {Array<BigInt>} [badgeCreatorsAmount_not_in]
 * @property {Array<Bytes>} [badgeCreators_contains]
 * @property {Array<Bytes>} [badgeCreators_contains_nocase]
 * @property {Array<Bytes>} [badgeCreators_not]
 * @property {Array<Bytes>} [badgeCreators_not_contains]
 * @property {Array<Bytes>} [badgeCreators_not_contains_nocase]
 * @property {Array<Bytes>} [badgeCurators]
 * @property {BigInt} [badgeCuratorsAmount]
 * @property {BigInt} [badgeCuratorsAmount_gt]
 * @property {BigInt} [badgeCuratorsAmount_gte]
 * @property {Array<BigInt>} [badgeCuratorsAmount_in]
 * @property {BigInt} [badgeCuratorsAmount_lt]
 * @property {BigInt} [badgeCuratorsAmount_lte]
 * @property {BigInt} [badgeCuratorsAmount_not]
 * @property {Array<BigInt>} [badgeCuratorsAmount_not_in]
 * @property {Array<Bytes>} [badgeCurators_contains]
 * @property {Array<Bytes>} [badgeCurators_contains_nocase]
 * @property {Array<Bytes>} [badgeCurators_not]
 * @property {Array<Bytes>} [badgeCurators_not_contains]
 * @property {Array<Bytes>} [badgeCurators_not_contains_nocase]
 * @property {BigInt} [badgeModelsCreatedAmount]
 * @property {BigInt} [badgeModelsCreatedAmount_gt]
 * @property {BigInt} [badgeModelsCreatedAmount_gte]
 * @property {Array<BigInt>} [badgeModelsCreatedAmount_in]
 * @property {BigInt} [badgeModelsCreatedAmount_lt]
 * @property {BigInt} [badgeModelsCreatedAmount_lte]
 * @property {BigInt} [badgeModelsCreatedAmount_not]
 * @property {Array<BigInt>} [badgeModelsCreatedAmount_not_in]
 * @property {BigInt} [badgesChallengedAmount]
 * @property {BigInt} [badgesChallengedAmount_gt]
 * @property {BigInt} [badgesChallengedAmount_gte]
 * @property {Array<BigInt>} [badgesChallengedAmount_in]
 * @property {BigInt} [badgesChallengedAmount_lt]
 * @property {BigInt} [badgesChallengedAmount_lte]
 * @property {BigInt} [badgesChallengedAmount_not]
 * @property {Array<BigInt>} [badgesChallengedAmount_not_in]
 * @property {BigInt} [badgesMintedAmount]
 * @property {BigInt} [badgesMintedAmount_gt]
 * @property {BigInt} [badgesMintedAmount_gte]
 * @property {Array<BigInt>} [badgesMintedAmount_in]
 * @property {BigInt} [badgesMintedAmount_lt]
 * @property {BigInt} [badgesMintedAmount_lte]
 * @property {BigInt} [badgesMintedAmount_not]
 * @property {Array<BigInt>} [badgesMintedAmount_not_in]
 * @property {BigInt} [badgesOwnersAmount]
 * @property {BigInt} [badgesOwnersAmount_gt]
 * @property {BigInt} [badgesOwnersAmount_gte]
 * @property {Array<BigInt>} [badgesOwnersAmount_in]
 * @property {BigInt} [badgesOwnersAmount_lt]
 * @property {BigInt} [badgesOwnersAmount_lte]
 * @property {BigInt} [badgesOwnersAmount_not]
 * @property {Array<BigInt>} [badgesOwnersAmount_not_in]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {Array<(ProtocolStatistic_filter|null|undefined)>} [or]
 * @property {ProtocolConfig_filter} [protocolConfig_]
 * @property {BigInt} [protocolEarnedFees]
 * @property {BigInt} [protocolEarnedFees_gt]
 * @property {BigInt} [protocolEarnedFees_gte]
 * @property {Array<BigInt>} [protocolEarnedFees_in]
 * @property {BigInt} [protocolEarnedFees_lt]
 * @property {BigInt} [protocolEarnedFees_lte]
 * @property {BigInt} [protocolEarnedFees_not]
 * @property {Array<BigInt>} [protocolEarnedFees_not_in]
 * @property {Array<Bytes>} [registeredUsers]
 * @property {BigInt} [registeredUsersAmount]
 * @property {BigInt} [registeredUsersAmount_gt]
 * @property {BigInt} [registeredUsersAmount_gte]
 * @property {Array<BigInt>} [registeredUsersAmount_in]
 * @property {BigInt} [registeredUsersAmount_lt]
 * @property {BigInt} [registeredUsersAmount_lte]
 * @property {BigInt} [registeredUsersAmount_not]
 * @property {Array<BigInt>} [registeredUsersAmount_not_in]
 * @property {Array<Bytes>} [registeredUsers_contains]
 * @property {Array<Bytes>} [registeredUsers_contains_nocase]
 * @property {Array<Bytes>} [registeredUsers_not]
 * @property {Array<Bytes>} [registeredUsers_not_contains]
 * @property {Array<Bytes>} [registeredUsers_not_contains_nocase]
 * @property {BigInt} [totalCreatorsFees]
 * @property {BigInt} [totalCreatorsFees_gt]
 * @property {BigInt} [totalCreatorsFees_gte]
 * @property {Array<BigInt>} [totalCreatorsFees_in]
 * @property {BigInt} [totalCreatorsFees_lt]
 * @property {BigInt} [totalCreatorsFees_lte]
 * @property {BigInt} [totalCreatorsFees_not]
 * @property {Array<BigInt>} [totalCreatorsFees_not_in]
 */

/**
 * @typedef {("badgeCreators"|"badgeCreatorsAmount"|"badgeCurators"|"badgeCuratorsAmount"|"badgeModelsCreatedAmount"|"badgesChallengedAmount"|"badgesMintedAmount"|"badgesOwnersAmount"|"id"|"protocolConfig"|"protocolConfig__contractAdmin"|"protocolConfig__createBadgeModelProtocolFee"|"protocolConfig__feeCollector"|"protocolConfig__id"|"protocolConfig__mintBadgeProtocolDefaultFeeInBps"|"protocolConfig__registerUserProtocolFee"|"protocolEarnedFees"|"registeredUsers"|"registeredUsersAmount"|"totalCreatorsFees")} ProtocolStatistic_orderBy
 */

/**
 * @typedef {Object} Query
 * @property {_Meta_} [_meta] - Access to subgraph metadata
 * @property {Badge} [badge]
 * @property {BadgeKlerosMetaData} [badgeKlerosMetaData]
 * @property {Array<BadgeKlerosMetaData>} badgeKlerosMetaDatas
 * @property {BadgeModel} [badgeModel]
 * @property {BadgeModelKlerosMetaData} [badgeModelKlerosMetaData]
 * @property {Array<BadgeModelKlerosMetaData>} badgeModelKlerosMetaDatas
 * @property {Array<BadgeModel>} badgeModels
 * @property {Array<Badge>} badges
 * @property {ControllerConfig} [controllerConfig]
 * @property {Array<ControllerConfig>} controllerConfigs
 * @property {CreatorStatistic} [creatorStatistic]
 * @property {Array<CreatorStatistic>} creatorStatistics
 * @property {CuratorStatistic} [curatorStatistic]
 * @property {Array<CuratorStatistic>} curatorStatistics
 * @property {Evidence} [evidence]
 * @property {_EvidenceGroupIDItemID} [evidenceGroupIDItemID]
 * @property {Array<_EvidenceGroupIDItemID>} evidenceGroupIDItemIDs
 * @property {Array<Evidence>} evidences
 * @property {_ItemIDToEvidenceGroupIDToBadgeID} [itemIDToEvidenceGroupIDToBadgeID]
 * @property {Array<_ItemIDToEvidenceGroupIDToBadgeID>} itemIDToEvidenceGroupIDToBadgeIDs
 * @property {_KlerosBadgeIdToBadgeId} [klerosBadgeIdToBadgeId]
 * @property {Array<_KlerosBadgeIdToBadgeId>} klerosBadgeIdToBadgeIds
 * @property {KlerosBadgeRequest} [klerosBadgeRequest]
 * @property {Array<KlerosBadgeRequest>} klerosBadgeRequests
 * @property {ProtocolConfig} [protocolConfig]
 * @property {Array<ProtocolConfig>} protocolConfigs
 * @property {ProtocolStatistic} [protocolStatistic]
 * @property {Array<ProtocolStatistic>} protocolStatistics
 * @property {User} [user]
 * @property {UserStatistic} [userStatistic]
 * @property {Array<UserStatistic>} userStatistics
 * @property {Array<User>} users
 */

/**
 * @typedef {("Accept"|"None"|"Reject")} Ruling
 */

/**
 * @typedef {Object} Subscription
 * @property {_Meta_} [_meta] - Access to subgraph metadata
 * @property {Badge} [badge]
 * @property {BadgeKlerosMetaData} [badgeKlerosMetaData]
 * @property {Array<BadgeKlerosMetaData>} badgeKlerosMetaDatas
 * @property {BadgeModel} [badgeModel]
 * @property {BadgeModelKlerosMetaData} [badgeModelKlerosMetaData]
 * @property {Array<BadgeModelKlerosMetaData>} badgeModelKlerosMetaDatas
 * @property {Array<BadgeModel>} badgeModels
 * @property {Array<Badge>} badges
 * @property {ControllerConfig} [controllerConfig]
 * @property {Array<ControllerConfig>} controllerConfigs
 * @property {CreatorStatistic} [creatorStatistic]
 * @property {Array<CreatorStatistic>} creatorStatistics
 * @property {CuratorStatistic} [curatorStatistic]
 * @property {Array<CuratorStatistic>} curatorStatistics
 * @property {Evidence} [evidence]
 * @property {_EvidenceGroupIDItemID} [evidenceGroupIDItemID]
 * @property {Array<_EvidenceGroupIDItemID>} evidenceGroupIDItemIDs
 * @property {Array<Evidence>} evidences
 * @property {_ItemIDToEvidenceGroupIDToBadgeID} [itemIDToEvidenceGroupIDToBadgeID]
 * @property {Array<_ItemIDToEvidenceGroupIDToBadgeID>} itemIDToEvidenceGroupIDToBadgeIDs
 * @property {_KlerosBadgeIdToBadgeId} [klerosBadgeIdToBadgeId]
 * @property {Array<_KlerosBadgeIdToBadgeId>} klerosBadgeIdToBadgeIds
 * @property {KlerosBadgeRequest} [klerosBadgeRequest]
 * @property {Array<KlerosBadgeRequest>} klerosBadgeRequests
 * @property {ProtocolConfig} [protocolConfig]
 * @property {Array<ProtocolConfig>} protocolConfigs
 * @property {ProtocolStatistic} [protocolStatistic]
 * @property {Array<ProtocolStatistic>} protocolStatistics
 * @property {User} [user]
 * @property {UserStatistic} [userStatistic]
 * @property {Array<UserStatistic>} userStatistics
 * @property {Array<User>} users
 */

/**
 * @typedef {Object} User
 * @property {Array<Badge>} [badges]
 * @property {Array<BadgeModel>} createdBadgeModels
 * @property {string} id
 * @property {boolean} isCreator
 * @property {boolean} isCurator
 * @property {string} [metadataUri]
 * @property {UserStatistic} statistics - User protocol statistics.
 */

/**
 * @typedef {Object} UserStatistic
 * @property {BigInt} challengesReceivedAmount
 * @property {BigInt} challengesReceivedLostAmount
 * @property {BigInt} challengesReceivedRejectedAmount
 * @property {BigInt} challengesReceivedWonAmount
 * @property {CreatorStatistic} [creatorStatistic]
 * @property {CuratorStatistic} [curatorStatistic]
 * @property {string} id
 * @property {BigInt} mintedBadgesAmount
 * @property {BigInt} timeOfLastChallengeReceived
 * @property {User} user
 */

/**
 * @typedef {Object} UserStatistic_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Array<(UserStatistic_filter|null|undefined)>} [and]
 * @property {BigInt} [challengesReceivedAmount]
 * @property {BigInt} [challengesReceivedAmount_gt]
 * @property {BigInt} [challengesReceivedAmount_gte]
 * @property {Array<BigInt>} [challengesReceivedAmount_in]
 * @property {BigInt} [challengesReceivedAmount_lt]
 * @property {BigInt} [challengesReceivedAmount_lte]
 * @property {BigInt} [challengesReceivedAmount_not]
 * @property {Array<BigInt>} [challengesReceivedAmount_not_in]
 * @property {BigInt} [challengesReceivedLostAmount]
 * @property {BigInt} [challengesReceivedLostAmount_gt]
 * @property {BigInt} [challengesReceivedLostAmount_gte]
 * @property {Array<BigInt>} [challengesReceivedLostAmount_in]
 * @property {BigInt} [challengesReceivedLostAmount_lt]
 * @property {BigInt} [challengesReceivedLostAmount_lte]
 * @property {BigInt} [challengesReceivedLostAmount_not]
 * @property {Array<BigInt>} [challengesReceivedLostAmount_not_in]
 * @property {BigInt} [challengesReceivedRejectedAmount]
 * @property {BigInt} [challengesReceivedRejectedAmount_gt]
 * @property {BigInt} [challengesReceivedRejectedAmount_gte]
 * @property {Array<BigInt>} [challengesReceivedRejectedAmount_in]
 * @property {BigInt} [challengesReceivedRejectedAmount_lt]
 * @property {BigInt} [challengesReceivedRejectedAmount_lte]
 * @property {BigInt} [challengesReceivedRejectedAmount_not]
 * @property {Array<BigInt>} [challengesReceivedRejectedAmount_not_in]
 * @property {BigInt} [challengesReceivedWonAmount]
 * @property {BigInt} [challengesReceivedWonAmount_gt]
 * @property {BigInt} [challengesReceivedWonAmount_gte]
 * @property {Array<BigInt>} [challengesReceivedWonAmount_in]
 * @property {BigInt} [challengesReceivedWonAmount_lt]
 * @property {BigInt} [challengesReceivedWonAmount_lte]
 * @property {BigInt} [challengesReceivedWonAmount_not]
 * @property {Array<BigInt>} [challengesReceivedWonAmount_not_in]
 * @property {CreatorStatistic_filter} [creatorStatistic_]
 * @property {CuratorStatistic_filter} [curatorStatistic_]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {BigInt} [mintedBadgesAmount]
 * @property {BigInt} [mintedBadgesAmount_gt]
 * @property {BigInt} [mintedBadgesAmount_gte]
 * @property {Array<BigInt>} [mintedBadgesAmount_in]
 * @property {BigInt} [mintedBadgesAmount_lt]
 * @property {BigInt} [mintedBadgesAmount_lte]
 * @property {BigInt} [mintedBadgesAmount_not]
 * @property {Array<BigInt>} [mintedBadgesAmount_not_in]
 * @property {Array<(UserStatistic_filter|null|undefined)>} [or]
 * @property {BigInt} [timeOfLastChallengeReceived]
 * @property {BigInt} [timeOfLastChallengeReceived_gt]
 * @property {BigInt} [timeOfLastChallengeReceived_gte]
 * @property {Array<BigInt>} [timeOfLastChallengeReceived_in]
 * @property {BigInt} [timeOfLastChallengeReceived_lt]
 * @property {BigInt} [timeOfLastChallengeReceived_lte]
 * @property {BigInt} [timeOfLastChallengeReceived_not]
 * @property {Array<BigInt>} [timeOfLastChallengeReceived_not_in]
 * @property {string} [user]
 * @property {User_filter} [user_]
 * @property {string} [user_contains]
 * @property {string} [user_contains_nocase]
 * @property {string} [user_ends_with]
 * @property {string} [user_ends_with_nocase]
 * @property {string} [user_gt]
 * @property {string} [user_gte]
 * @property {Array<string>} [user_in]
 * @property {string} [user_lt]
 * @property {string} [user_lte]
 * @property {string} [user_not]
 * @property {string} [user_not_contains]
 * @property {string} [user_not_contains_nocase]
 * @property {string} [user_not_ends_with]
 * @property {string} [user_not_ends_with_nocase]
 * @property {Array<string>} [user_not_in]
 * @property {string} [user_not_starts_with]
 * @property {string} [user_not_starts_with_nocase]
 * @property {string} [user_starts_with]
 * @property {string} [user_starts_with_nocase]
 */

/**
 * @typedef {("challengesReceivedAmount"|"challengesReceivedLostAmount"|"challengesReceivedRejectedAmount"|"challengesReceivedWonAmount"|"creatorStatistic"|"creatorStatistic__allTimeBadgeMintersAmount"|"creatorStatistic__createdBadgeModelsAmount"|"creatorStatistic__createdBadgeModelsMintedAmount"|"creatorStatistic__id"|"creatorStatistic__mostPopularCreatedBadge"|"creatorStatistic__totalFeesEarned"|"curatorStatistic"|"curatorStatistic__challengesMadeAmount"|"curatorStatistic__challengesMadeLostAmount"|"curatorStatistic__challengesMadeRejectedAmount"|"curatorStatistic__challengesMadeWonAmount"|"curatorStatistic__id"|"id"|"mintedBadgesAmount"|"timeOfLastChallengeReceived"|"user"|"user__id"|"user__isCreator"|"user__isCurator"|"user__metadataUri")} UserStatistic_orderBy
 */

/**
 * @typedef {Object} User_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Array<(User_filter|null|undefined)>} [and]
 * @property {Badge_filter} [badges_]
 * @property {Array<string>} [createdBadgeModels]
 * @property {BadgeModel_filter} [createdBadgeModels_]
 * @property {Array<string>} [createdBadgeModels_contains]
 * @property {Array<string>} [createdBadgeModels_contains_nocase]
 * @property {Array<string>} [createdBadgeModels_not]
 * @property {Array<string>} [createdBadgeModels_not_contains]
 * @property {Array<string>} [createdBadgeModels_not_contains_nocase]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {boolean} [isCreator]
 * @property {Array<boolean>} [isCreator_in]
 * @property {boolean} [isCreator_not]
 * @property {Array<boolean>} [isCreator_not_in]
 * @property {boolean} [isCurator]
 * @property {Array<boolean>} [isCurator_in]
 * @property {boolean} [isCurator_not]
 * @property {Array<boolean>} [isCurator_not_in]
 * @property {string} [metadataUri]
 * @property {string} [metadataUri_contains]
 * @property {string} [metadataUri_contains_nocase]
 * @property {string} [metadataUri_ends_with]
 * @property {string} [metadataUri_ends_with_nocase]
 * @property {string} [metadataUri_gt]
 * @property {string} [metadataUri_gte]
 * @property {Array<string>} [metadataUri_in]
 * @property {string} [metadataUri_lt]
 * @property {string} [metadataUri_lte]
 * @property {string} [metadataUri_not]
 * @property {string} [metadataUri_not_contains]
 * @property {string} [metadataUri_not_contains_nocase]
 * @property {string} [metadataUri_not_ends_with]
 * @property {string} [metadataUri_not_ends_with_nocase]
 * @property {Array<string>} [metadataUri_not_in]
 * @property {string} [metadataUri_not_starts_with]
 * @property {string} [metadataUri_not_starts_with_nocase]
 * @property {string} [metadataUri_starts_with]
 * @property {string} [metadataUri_starts_with_nocase]
 * @property {Array<(User_filter|null|undefined)>} [or]
 * @property {UserStatistic_filter} [statistics_]
 */

/**
 * @typedef {("badges"|"createdBadgeModels"|"id"|"isCreator"|"isCurator"|"metadataUri"|"statistics"|"statistics__challengesReceivedAmount"|"statistics__challengesReceivedLostAmount"|"statistics__challengesReceivedRejectedAmount"|"statistics__challengesReceivedWonAmount"|"statistics__id"|"statistics__mintedBadgesAmount"|"statistics__timeOfLastChallengeReceived")} User_orderBy
 */

/**
 * @typedef {Object} _Block_
 * @property {Bytes} [hash] - The hash of the block
 * @property {number} number - The block number
 * @property {number} [timestamp] - Integer representation of the timestamp stored in blocks for the chain
 */

/**
 * @typedef {Object} _EvidenceGroupIDItemID
 * @property {string} id
 * @property {string} itemID - Item submission ID, it can be a TCR random item or a badge submission request
 */

/**
 * @typedef {Object} _EvidenceGroupIDItemID_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Array<(_EvidenceGroupIDItemID_filter|null|undefined)>} [and]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {string} [itemID]
 * @property {string} [itemID_contains]
 * @property {string} [itemID_contains_nocase]
 * @property {string} [itemID_ends_with]
 * @property {string} [itemID_ends_with_nocase]
 * @property {string} [itemID_gt]
 * @property {string} [itemID_gte]
 * @property {Array<string>} [itemID_in]
 * @property {string} [itemID_lt]
 * @property {string} [itemID_lte]
 * @property {string} [itemID_not]
 * @property {string} [itemID_not_contains]
 * @property {string} [itemID_not_contains_nocase]
 * @property {string} [itemID_not_ends_with]
 * @property {string} [itemID_not_ends_with_nocase]
 * @property {Array<string>} [itemID_not_in]
 * @property {string} [itemID_not_starts_with]
 * @property {string} [itemID_not_starts_with_nocase]
 * @property {string} [itemID_starts_with]
 * @property {string} [itemID_starts_with_nocase]
 * @property {Array<(_EvidenceGroupIDItemID_filter|null|undefined)>} [or]
 */

/**
 * @typedef {("id"|"itemID")} _EvidenceGroupIDItemID_orderBy
 */

/**
 * @typedef {Object} _ItemIDToEvidenceGroupIDToBadgeID
 * @property {string} [badgeID]
 * @property {string} evidenceGroupID
 * @property {string} id - Item submission ID, it can be a TCR random item or a badge submission request
 */

/**
 * @typedef {Object} _ItemIDToEvidenceGroupIDToBadgeID_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Array<(_ItemIDToEvidenceGroupIDToBadgeID_filter|null|undefined)>} [and]
 * @property {string} [badgeID]
 * @property {string} [badgeID_contains]
 * @property {string} [badgeID_contains_nocase]
 * @property {string} [badgeID_ends_with]
 * @property {string} [badgeID_ends_with_nocase]
 * @property {string} [badgeID_gt]
 * @property {string} [badgeID_gte]
 * @property {Array<string>} [badgeID_in]
 * @property {string} [badgeID_lt]
 * @property {string} [badgeID_lte]
 * @property {string} [badgeID_not]
 * @property {string} [badgeID_not_contains]
 * @property {string} [badgeID_not_contains_nocase]
 * @property {string} [badgeID_not_ends_with]
 * @property {string} [badgeID_not_ends_with_nocase]
 * @property {Array<string>} [badgeID_not_in]
 * @property {string} [badgeID_not_starts_with]
 * @property {string} [badgeID_not_starts_with_nocase]
 * @property {string} [badgeID_starts_with]
 * @property {string} [badgeID_starts_with_nocase]
 * @property {string} [evidenceGroupID]
 * @property {string} [evidenceGroupID_contains]
 * @property {string} [evidenceGroupID_contains_nocase]
 * @property {string} [evidenceGroupID_ends_with]
 * @property {string} [evidenceGroupID_ends_with_nocase]
 * @property {string} [evidenceGroupID_gt]
 * @property {string} [evidenceGroupID_gte]
 * @property {Array<string>} [evidenceGroupID_in]
 * @property {string} [evidenceGroupID_lt]
 * @property {string} [evidenceGroupID_lte]
 * @property {string} [evidenceGroupID_not]
 * @property {string} [evidenceGroupID_not_contains]
 * @property {string} [evidenceGroupID_not_contains_nocase]
 * @property {string} [evidenceGroupID_not_ends_with]
 * @property {string} [evidenceGroupID_not_ends_with_nocase]
 * @property {Array<string>} [evidenceGroupID_not_in]
 * @property {string} [evidenceGroupID_not_starts_with]
 * @property {string} [evidenceGroupID_not_starts_with_nocase]
 * @property {string} [evidenceGroupID_starts_with]
 * @property {string} [evidenceGroupID_starts_with_nocase]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {Array<(_ItemIDToEvidenceGroupIDToBadgeID_filter|null|undefined)>} [or]
 */

/**
 * @typedef {("badgeID"|"evidenceGroupID"|"id")} _ItemIDToEvidenceGroupIDToBadgeID_orderBy
 */

/**
 * @typedef {Object} _KlerosBadgeIdToBadgeId
 * @property {string} badgeId
 * @property {string} id
 */

/**
 * @typedef {Object} _KlerosBadgeIdToBadgeId_filter
 * @property {BlockChangedFilter} [_change_block] - Filter for the block changed event.
 * @property {Array<(_KlerosBadgeIdToBadgeId_filter|null|undefined)>} [and]
 * @property {string} [badgeId]
 * @property {string} [badgeId_contains]
 * @property {string} [badgeId_contains_nocase]
 * @property {string} [badgeId_ends_with]
 * @property {string} [badgeId_ends_with_nocase]
 * @property {string} [badgeId_gt]
 * @property {string} [badgeId_gte]
 * @property {Array<string>} [badgeId_in]
 * @property {string} [badgeId_lt]
 * @property {string} [badgeId_lte]
 * @property {string} [badgeId_not]
 * @property {string} [badgeId_not_contains]
 * @property {string} [badgeId_not_contains_nocase]
 * @property {string} [badgeId_not_ends_with]
 * @property {string} [badgeId_not_ends_with_nocase]
 * @property {Array<string>} [badgeId_not_in]
 * @property {string} [badgeId_not_starts_with]
 * @property {string} [badgeId_not_starts_with_nocase]
 * @property {string} [badgeId_starts_with]
 * @property {string} [badgeId_starts_with_nocase]
 * @property {string} [id]
 * @property {string} [id_gt]
 * @property {string} [id_gte]
 * @property {Array<string>} [id_in]
 * @property {string} [id_lt]
 * @property {string} [id_lte]
 * @property {string} [id_not]
 * @property {Array<string>} [id_not_in]
 * @property {Array<(_KlerosBadgeIdToBadgeId_filter|null|undefined)>} [or]
 */

/**
 * @typedef {("badgeId"|"id")} _KlerosBadgeIdToBadgeId_orderBy
 */

/**
 * The type for the top-level _meta field
 * @typedef {Object} _Meta_
 * @property {_Block_} block - Information about a specific subgraph block. The hash of the block
 * will be null if the _meta field has a block constraint that asks for
 * a block number. It will be filled if the _meta field has no block constraint
 * and therefore asks for the latest  block
 * 
 * @property {string} deployment - The deployment ID
 * @property {boolean} hasIndexingErrors - If `true`, the subgraph encountered indexing errors at some past block
 */

/**
 * @typedef {("allow"|"deny")} _SubgraphErrorPolicy_
 */