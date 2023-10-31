import {
  BadgeByBadgeModelIdQuery as BadgeByBadgeModelIdQuery_DEV,
  BadgeByIdQuery as BadgeByIdQuery_DEV,
  BadgesByUserQuery as BadgesByUserQuery_DEV,
  BadgesChallengedQuery as BadgesChallengedQuery_DEV,
  BadgesInReviewOrChallengedQuery as BadgesInReviewOrChallengedQuery_DEV,
  BadgesInReviewQuery as BadgesInReviewQuery_DEV,
  BadgeStatus as BadgeStatus_DEV,
  BadgesUserCanReviewQuery as BadgesUserCanReviewQuery_DEV,
  BadgesOfUserByStatusesQuery as BadgesOfUserByStatusesQuery_DEV,
  BadgesNotOfUserByStatusesQuery as BadgesNotOfUserByStatusesQuery_DEV,
  Badge_Filter as Badge_Filter_DEV,
  BadgesQuery as BadgesQuery_DEV,
  BadgeMetadataByIdQuery as BadgeMetadataByIdQuery_DEV,
  BadgesMetadataUserHasChallengedQuery as BadgesMetadataUserHasChallengedQuery_DEV,
} from '@subgraph/dev/generated/subgraph'
import {
  BadgeByBadgeModelIdQuery as BadgeByBadgeModelIdQuery_STAGING,
  BadgeByIdQuery as BadgeByIdQuery_STAGING,
  BadgesByUserQuery as BadgesByUserQuery_STAGING,
  BadgesChallengedQuery as BadgesChallengedQuery_STAGING,
  BadgesInReviewOrChallengedQuery as BadgesInReviewOrChallengedQuery_STAGING,
  BadgesInReviewQuery as BadgesInReviewQuery_STAGING,
  BadgeStatus as BadgeStatus_STAGING,
  BadgesUserCanReviewQuery as BadgesUserCanReviewQuery_STAGING,
  BadgesOfUserByStatusesQuery as BadgesOfUserByStatusesQuery_STAGING,
  BadgesNotOfUserByStatusesQuery as BadgesNotOfUserByStatusesQuery_STAGING,
  Badge_Filter as Badge_Filter_STAGING,
  BadgesQuery as BadgesQuery_STAGING,
  BadgeMetadataByIdQuery as BadgeMetadataByIdQuery_STAGING,
  BadgesMetadataUserHasChallengedQuery as BadgesMetadataUserHasChallengedQuery_STAGING,
} from '@subgraph/staging/generated/subgraph'
import {
  BadgeByBadgeModelIdQuery as BadgeByBadgeModelIdQuery_PROD,
  BadgeByIdQuery as BadgeByIdQuery_PROD,
  BadgesByUserQuery as BadgesByUserQuery_PROD,
  BadgesChallengedQuery as BadgesChallengedQuery_PROD,
  BadgesInReviewOrChallengedQuery as BadgesInReviewOrChallengedQuery_PROD,
  BadgesInReviewQuery as BadgesInReviewQuery_PROD,
  BadgeStatus as BadgeStatus_PROD,
  BadgesUserCanReviewQuery as BadgesUserCanReviewQuery_PROD,
  BadgesOfUserByStatusesQuery as BadgesOfUserByStatusesQuery_PROD,
  BadgesNotOfUserByStatusesQuery as BadgesNotOfUserByStatusesQuery_PROD,
  Badge_Filter as Badge_Filter_PROD,
  BadgesQuery as BadgesQuery_PROD,
  BadgeMetadataByIdQuery as BadgeMetadataByIdQuery_PROD,
  BadgesMetadataUserHasChallengedQuery as BadgesMetadataUserHasChallengedQuery_PROD,
} from '@subgraph/prod/generated/subgraph'
import { ContractTransaction } from 'ethers'
import { TheBadgeSDKConfig } from '../../config'
import { MetadataColumn } from '@businessLogic/kleros/types'
import { BadgeModelMetadata } from '@businessLogic/theBadge/BadgeMetadata'
import { BackendFileResponse } from '@businessLogic/types'
import { getFromIPFS } from '@utils/ipfs'
import {
  createAndUploadBadgeEvidence,
  createAndUploadBadgeMetadata,
  createEvidencesValuesObject,
  encodeIpfsEvidence,
} from '@utils/badges/mintHelpers'
import { KlerosListStructure } from '@utils/kleros/generateKlerosListMetaEvidence'
import { schemaFactory } from '@utils/zod/validators'

type BadgeByBadgeModelIdQuery =
  | BadgeByBadgeModelIdQuery_DEV
  | BadgeByBadgeModelIdQuery_STAGING
  | BadgeByBadgeModelIdQuery_PROD
type BadgeByIdQuery = BadgeByIdQuery_DEV | BadgeByIdQuery_STAGING | BadgeByIdQuery_PROD
type BadgesByUserQuery = BadgesByUserQuery_DEV | BadgesByUserQuery_STAGING | BadgesByUserQuery_PROD
type BadgesChallengedQuery = BadgesChallengedQuery_DEV | BadgesChallengedQuery_STAGING | BadgesChallengedQuery_PROD
type BadgesInReviewOrChallengedQuery =
  | BadgesInReviewOrChallengedQuery_DEV
  | BadgesInReviewOrChallengedQuery_STAGING
  | BadgesInReviewOrChallengedQuery_PROD
type BadgesInReviewQuery = BadgesInReviewQuery_DEV | BadgesInReviewQuery_STAGING | BadgesInReviewQuery_PROD
type BadgeStatus = BadgeStatus_DEV | BadgeStatus_STAGING | BadgeStatus_PROD
type BadgesUserCanReviewQuery =
  | BadgesUserCanReviewQuery_DEV
  | BadgesUserCanReviewQuery_STAGING
  | BadgesUserCanReviewQuery_PROD
type BadgesOfUserByStatusesQuery =
  | BadgesOfUserByStatusesQuery_DEV
  | BadgesOfUserByStatusesQuery_STAGING
  | BadgesOfUserByStatusesQuery_PROD
type BadgesNotOfUserByStatusesQuery =
  | BadgesNotOfUserByStatusesQuery_DEV
  | BadgesNotOfUserByStatusesQuery_STAGING
  | BadgesNotOfUserByStatusesQuery_PROD
type Badge_Filter = Badge_Filter_DEV | Badge_Filter_STAGING | Badge_Filter_PROD
type BadgesQuery = BadgesQuery_DEV | BadgesQuery_STAGING | BadgesQuery_PROD
type BadgeMetadataByIdQuery = BadgeMetadataByIdQuery_DEV | BadgeMetadataByIdQuery_STAGING | BadgeMetadataByIdQuery_PROD
type BadgesMetadataUserHasChallengedQuery =
  | BadgesMetadataUserHasChallengedQuery_DEV
  | BadgesMetadataUserHasChallengedQuery_STAGING
  | BadgesMetadataUserHasChallengedQuery_PROD

interface BadgesServiceMethods {
  get(searchParams?: { first: number; skip: number; filter?: Badge_Filter }): Promise<BadgesQuery>
  getById(badgeId: string): Promise<BadgeByIdQuery>
  getByBadgeModelId(badgeModelId: string): Promise<BadgeByBadgeModelIdQuery>
  getByOwnerUser(userAddress: string): Promise<BadgesByUserQuery>
  getWithInReviewStatus(dateTimestamp: BigInteger): Promise<BadgesInReviewQuery>
  getWithChallengedStatus(dateTimestamp: BigInteger): Promise<BadgesChallengedQuery>
  getWithInReviewOrChallengedStatus(dateTimestamp: BigInteger): Promise<BadgesInReviewOrChallengedQuery>
  getAbleForUserToReview(userAddress: string, dateTimestamp: BigInteger): Promise<BadgesUserCanReviewQuery>
  getOwnedByUserWithStatuses(userAddress: string, statuses: BadgeStatus[]): Promise<BadgesOfUserByStatusesQuery>
  getNotOwnedByUserWithStatuses(userAddress: string, statuses: BadgeStatus[]): Promise<BadgesNotOfUserByStatusesQuery>
  getMetadataOfBadge(badgeId: string): Promise<BadgeMetadataByIdQuery>
  getMetadataOfBadgesUserHasChallenged(userAddress: string): Promise<BadgesMetadataUserHasChallengedQuery>
  getImageIPFSHashOfBadge(badgeId: string): Promise<string>
  mint(
    userAddress: string,
    badgeModelId: string,
    evidences: Record<string, unknown>,
    base64PreviewImage: string,
  ): Promise<ContractTransaction>
  claim(userAddress: string, badgeId: string): Promise<string>
  // challenge(userAddress: string, badgeId: string, evidences?: List<Evidence>) TODO coming soon
}

export class BadgesService extends TheBadgeSDKConfig implements BadgesServiceMethods {
  /**
   * Obtain badges
   *
   * @param searchParams:
   * - first: max. amount of items that will return (default value: 100)
   * - skip: amount of items that will skip in the order (default value: 0)
   * - filter: customized badge filtering criteria
   */
  public async get(searchParams?: { first: number; skip: number; filter?: Badge_Filter }): Promise<BadgesQuery> {
    return await this.subgraph.badges({
      first: searchParams?.first || 100,
      skip: searchParams?.skip || 0,
      filter: searchParams?.filter,
    })
  }

  /**
   * Obtain a badge giving its id
   * @param badgeId
   */
  public async getById(badgeId: string): Promise<BadgeByIdQuery> {
    return await this.subgraph.badgeById({ id: badgeId })
  }

  /**
   * Obtain badges with a specific badge model
   *
   * @param badgeModelId
   */
  public async getByBadgeModelId(badgeModelId: string): Promise<BadgeByBadgeModelIdQuery> {
    return await this.subgraph.badgeByBadgeModelId({ id: badgeModelId })
  }

  /**
   * Obtain badges owned by a user giving the user's address
   *
   * @param userAddress
   */
  public async getByOwnerUser(userAddress: string): Promise<BadgesByUserQuery> {
    return await this.subgraph.badgesByUser({ userAddress })
  }

  /**
   * Obtain badges with status 'Requested'
   *
   * @param dateTimestamp
   */
  public async getWithInReviewStatus(dateTimestamp: BigInteger): Promise<BadgesInReviewQuery> {
    return await this.subgraph.badgesInReview({ dateTimestamp })
  }

  /**
   * Obtain badges with status 'Challenged'
   *
   * @param dateTimestamp
   */
  public async getWithChallengedStatus(dateTimestamp: BigInteger): Promise<BadgesChallengedQuery> {
    return await this.subgraph.badgesChallenged({ dateTimestamp })
  }

  /**
   * Obtain badges with status 'Requested' or 'Challenged'
   *
   * @param dateTimestamp
   */
  public async getWithInReviewOrChallengedStatus(dateTimestamp: BigInteger): Promise<BadgesInReviewOrChallengedQuery> {
    return await this.subgraph.badgesInReviewOrChallenged({ dateTimestamp })
  }

  /**
   * Obtain badges that a specific user can review at a specific moment (date timestamp)
   *
   * @param userAddress
   * @param dateTimestamp
   */
  public async getAbleForUserToReview(
    userAddress: string,
    dateTimestamp: BigInteger,
  ): Promise<BadgesUserCanReviewQuery> {
    return await this.subgraph.badgesUserCanReview({ userAddress, dateTimestamp })
  }

  /**
   * Obtain badges owned by a user and with one status contained in a given list
   *
   * @param userAddress
   * @param statuses
   */
  public async getOwnedByUserWithStatuses(
    userAddress: string,
    statuses: BadgeStatus[],
  ): Promise<BadgesOfUserByStatusesQuery> {
    return await this.subgraph.badgesOfUserByStatuses({ userAddress, statuses })
  }

  /**
   * Obtain badges not owned by a user and with one status contained in a given list
   *
   * @param userAddress
   * @param statuses
   */
  public async getNotOwnedByUserWithStatuses(
    userAddress: string,
    statuses: BadgeStatus[],
  ): Promise<BadgesNotOfUserByStatusesQuery> {
    return await this.subgraph.badgesNotOfUserByStatuses({ userAddress, statuses })
  }

  /**
   * Get metadata of a badge
   *
   * @param badgeId
   */
  public async getMetadataOfBadge(badgeId: string): Promise<BadgeMetadataByIdQuery> {
    return await this.subgraph.badgeMetadataById({ id: badgeId })
  }

  /**
   * Get metadata of badges that a specific user has challenged
   *
   * @param userAddress
   */
  public async getMetadataOfBadgesUserHasChallenged(
    userAddress: string,
  ): Promise<BadgesMetadataUserHasChallengedQuery> {
    return await this.subgraph.badgesMetadataUserHasChallenged({ userAddress })
  }

  /**
   * Get IPFS hash of the visual image of a certain badge
   *
   * @param badgeId
   * @returns string
   */
  public async getImageIPFSHashOfBadge(badgeId: string): Promise<string> {
    // get badge with the given id
    const badgeResponse = await this.getById(badgeId)

    // take ipfs uri from badge object
    const ipfsDataUri = badgeResponse?.badge?.uri
    if (!ipfsDataUri) {
      throw new Error('TheBadge SDK: Missing uri for the given badge id, provide a valid badge id.')
    }

    // obtain badge image data
    const { result, error } = await getFromIPFS<{ image: { ipfsHash: string } }>(ipfsDataUri)
    const badgeImageIPFSHash = result?.content?.image?.ipfsHash

    if (error || !badgeImageIPFSHash) {
      throw new Error('TheBadge SDK: Error obtaining badge image data from IPFS, please retry.')
    }

    // return badge image ipfs hash
    return badgeImageIPFSHash
  }

  /**
   * Mint a new badge of a certain model
   *
   * @param userAddress
   * @param badgeModelId
   * @param evidences is an object with { evidenceIndex: evidenceValue }, example: { 0: 'text1', 1: 'text2', 2: date1 }
   * @param base64PreviewImage
   * @returns contract transaction
   */
  public async mint(
    userAddress: string,
    badgeModelId: string,
    evidences: Record<number, unknown>,
    base64PreviewImage: string,
  ): Promise<ContractTransaction> {
    // connect contract with selected chainId and signer
    const tbContract = this.getTBContractInstance(userAddress)

    // get badge model
    const badgeModelResponse = await this.subgraph.badgeModelById({ id: badgeModelId })
    const badgeModel = badgeModelResponse.badgeModel

    if (!badgeModel?.uri) {
      throw new Error('TheBadge SDK: No badge model uri, please enter a valid badge model id')
    }

    // get ipfs data of badge model
    const { result: badgeModelIPFSDataResult, error: badgeModelIPFSDataError } = await getFromIPFS<
      BadgeModelMetadata<BackendFileResponse>
    >(badgeModel?.uri)
    if (badgeModelIPFSDataError) {
      throw new Error('TheBadge SDK: Error obtaining IPFS data of badge model')
    }
    const badgeModelIPFSData = badgeModelIPFSDataResult?.content

    // get badge model metadata
    const badgeModelMetadataResponse = await this.subgraph.badgeModelMetadataById({ id: badgeModelId })
    const badgeModelMetadata = badgeModelMetadataResponse.badgeModelKlerosMetaData

    const registrationUri = badgeModelMetadata?.registrationUri
    if (!registrationUri) {
      throw new Error('TheBadge SDK: No badge model metadata registration uri, please enter a valid badge model id')
    }
    const { result: registrationUriResult, error: registrationUriError } = await getFromIPFS<KlerosListStructure>(
      registrationUri,
    )
    if (registrationUriError) {
      throw new Error('TheBadge SDK: Could not obtain registration data from IPFS, please enter a valid model id')
    }

    const requiredEvidencesList = registrationUriResult?.content?.metadata?.columns as MetadataColumn[]

    // check if evidences fulfill the evidence requirements of the badge model
    const schema = schemaFactory(requiredEvidencesList)
    // try {
    const evidencesParsedObject = schema.parse(evidences)
    // } catch (e) {
    //   throw e // TODO add custom error parsing zod error
    // }
    if (!evidencesParsedObject) {
      throw new Error('TheBadge SDK: Wrong evidences sent, please check the required evidences list')
    }

    // upload evidence to IPFS
    const evidencesValues = createEvidencesValuesObject(evidencesParsedObject, requiredEvidencesList)
    const evidenceIPFSHash = await createAndUploadBadgeEvidence(requiredEvidencesList, evidencesValues)
    if (!evidenceIPFSHash) {
      throw new Error('TheBadge SDK: No evidence IPFS hash, could not upload evidence to IPFS')
    }

    // encode data for kleros minting
    const klerosControllerDataEncoded = encodeIpfsEvidence(evidenceIPFSHash)

    // obtain price of mint
    const mintValue = await tbContract.mintValue(badgeModelId)

    // create metadata of next minted badge and upload to IPFS
    const badgeMetadataIPFSHash = await createAndUploadBadgeMetadata(
      badgeModelIPFSData as BadgeModelMetadata,
      userAddress,
      { imageBase64File: base64PreviewImage },
    )

    // mint badge
    return tbContract.mint(badgeModelId, userAddress, badgeMetadataIPFSHash, klerosControllerDataEncoded, {
      value: mintValue,
    })
  }

  /**
   * Claim a badge that has been already minted
   *
   * @param userAddress
   * @param badgeId
   * @param extraArgs (optional)
   * @returns string with the hash of the transaction
   */
  public async claim(userAddress: string, badgeId: string, extraArgs = '0x'): Promise<string> {
    const theBadgeContract = this.getTBContractInstance(userAddress)
    const claimResult = await theBadgeContract.claim(badgeId, extraArgs)
    return claimResult.hash
  }
}
