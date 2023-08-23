import {
  BadgeModel_Filter,
  BadgeModelByIdQuery,
  BadgeModelsQuery,
  BadgeModelMetadataByIdQuery,
} from '@subgraph/generated/subgraph'
import { TheBadgeSDKConfig } from '@businessLogic/sdk/config'
import { getFromIPFS } from '@utils/ipfs'
import { MetadataColumn } from '@businessLogic/kleros/types'

interface BadgeModelsServiceMethods {
  get(searchParams?: { first: number; skip: number; filter?: BadgeModel_Filter }): Promise<BadgeModelsQuery>
  getById(badgeModelId: string): Promise<BadgeModelByIdQuery>
  getMetadataOfBadgeModel(badgeModelId: string): Promise<BadgeModelByIdQuery>
  getEvidenceRequirementsOfBadgeModel(badgeModelId: string): Promise<Array<MetadataColumn> | null>
  // create(userAddress: string, params: BadgeModelCreationParams) TODO coming soon
  // challenge(userAddress: string, badgeModelId: string, evidences?: List<Evidence>) TODO coming soon
}

export class BadgeModelsService extends TheBadgeSDKConfig implements BadgeModelsServiceMethods {
  /**
   * Obtain badge models
   *
   * @param searchParams:
   * - first: max. amount of items that will return (default value: 100)
   * - skip: amount of items that will skip in the order (default value: 0)
   * - filter: customized badge model filtering criteria
   */
  async get(searchParams?: { first?: number; skip?: number; filter?: BadgeModel_Filter }): Promise<BadgeModelsQuery> {
    return await this.subgraph.badgeModels({
      first: searchParams?.first || 100,
      skip: searchParams?.skip || 0,
      filter: searchParams?.filter,
    })
  }

  /**
   * Obtain a badge model giving its id
   *
   * @param badgeModelId
   */
  async getById(badgeModelId: string): Promise<BadgeModelByIdQuery> {
    return await this.subgraph.badgeModelById({ id: badgeModelId })
  }

  /**
   * Obtain the metadata of a badge model giving its id
   *
   * @param badgeModelId
   */
  async getMetadataOfBadgeModel(badgeModelId: string): Promise<BadgeModelMetadataByIdQuery> {
    return await this.subgraph.badgeModelMetadataById({ id: badgeModelId })
  }

  /**
   * Get evidence requirements of a badge model giving its id
   *
   * @param badgeModelId
   * @returns an Array<MetadataColumn> or null if not found
   */
  public async getEvidenceRequirementsOfBadgeModel(badgeModelId: string): Promise<Array<MetadataColumn> | null> {
    // take ipfs uri from metadata of the badge model
    const badgeModelMetadataResponse = await this.getMetadataOfBadgeModel(badgeModelId)
    const ipfsDataUri = badgeModelMetadataResponse?.badgeModelKlerosMetaData?.registrationUri
    if (!ipfsDataUri) {
      return null
    }

    // obtain evidences required
    const { result, error } = await getFromIPFS<{ metadata: { columns: MetadataColumn[] } }>(ipfsDataUri)

    if (error) {
      return null
    }

    // return the list of evidences required
    return result?.content?.metadata?.columns || null
  }
}
