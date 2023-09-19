import {
  BadgeByBadgeModelIdQuery,
  BadgeByIdQuery,
  BadgesByUserQuery,
  BadgesChallengedQuery,
  BadgesInReviewOrChallengedQuery,
  BadgesInReviewQuery,
  BadgeStatus,
  BadgesUserCanReviewQuery,
  BadgesOfUserByStatusesQuery,
  BadgesNotOfUserByStatusesQuery,
  Badge_Filter,
  BadgesQuery,
  BadgeMetadataByIdQuery,
  BadgesMetadataUserHasChallengedQuery,
} from '@subgraph/generated/subgraph'
import { TheBadgeSDKConfig } from '@businessLogic/sdk/config'
import { getFromIPFS } from '@utils/ipfs'
import { MetadataColumn } from '@businessLogic/kleros/types'
import {
  createAndUploadBadgeEvidence,
  createAndUploadBadgeMetadata,
  createEvidencesValuesObject,
  encodeIpfsEvidence,
} from '@utils/badges/mintHelpers'
import { BadgeModelMetadata } from '@businessLogic/theBadge/BadgeMetadata'
import { KlerosListStructure } from '@utils/kleros/generateKlerosListMetaEvidence'
import { BackendFileResponse } from '@businessLogic/types'
import { ContractTransaction } from 'ethers'
import { schemaFactory } from '@utils/zod/validators'

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
  claim(userAddress: string, badgeId: string): void
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
      throw new Error('Missing uri for the given badge id, provide a valid badge id.')
    }

    // obtain badge image data
    const { result, error } = await getFromIPFS<{ image: { ipfsHash: string } }>(ipfsDataUri)
    const badgeImageIPFSHash = result?.content?.image?.ipfsHash

    if (error || !badgeImageIPFSHash) {
      throw new Error('Error obtaining badge image data from IPFS, please retry.')
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
      throw new Error('No badge model uri, please enter a valid badge model id')
    }

    // get ipfs data of badge model
    const { result: badgeModelIPFSDataResult, error: badgeModelIPFSDataError } = await getFromIPFS<
      BadgeModelMetadata<BackendFileResponse>
    >(badgeModel?.uri)
    if (badgeModelIPFSDataError) {
      throw new Error('Error obtaining IPFS data of badge model')
    }
    const badgeModelIPFSData = badgeModelIPFSDataResult?.content

    // get badge model metadata
    const badgeModelMetadataResponse = await this.subgraph.badgeModelMetadataById({ id: badgeModelId })
    const badgeModelMetadata = badgeModelMetadataResponse.badgeModelKlerosMetaData

    const registrationUri = badgeModelMetadata?.registrationUri
    if (!registrationUri) {
      throw new Error('No badge model metadata registration uri, please enter a valid badge model id')
    }
    const { result: registrationUriResult, error: registrationUriError } = await getFromIPFS<KlerosListStructure>(
      registrationUri,
    )
    if (registrationUriError) {
      throw new Error('Could not obtain registration data from IPFS, please enter a valid model id')
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
      throw new Error('Wrong evidences sent, please check the required evidences list')
    }

    // upload evidence to IPFS
    const evidencesValues = createEvidencesValuesObject(evidencesParsedObject, requiredEvidencesList)
    const evidenceIPFSHash = await createAndUploadBadgeEvidence(requiredEvidencesList, evidencesValues)
    if (!evidenceIPFSHash) {
      throw new Error('No evidence IPFS hash, could not upload evidence to IPFS')
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
