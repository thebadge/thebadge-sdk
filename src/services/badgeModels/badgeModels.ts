import { BadgeModel_Filter, BadgeModelByIdQuery, BadgeModelsQuery } from '@subgraph/generated/subgraph'
import { TheBadgeSDKConfig } from '@businessLogic/sdk/config'

interface BadgeModelsServiceMethods {
  get(searchParams?: { first: number; skip: number; filter?: BadgeModel_Filter }): Promise<BadgeModelsQuery>
  getById(badgeId: string): Promise<BadgeModelByIdQuery>
  getMetadataOfBadgeModelById(badgeModelMetadataId: string): Promise<BadgeModelByIdQuery>
  // create(userAddress: string, params: BadgeModelCreationParams) TODO coming soon
  // challenge(userAddress: string, badgeModelId: string, evidences?: List<Evidence>) TODO coming soon
}

export class BadgeModelsService extends TheBadgeSDKConfig implements BadgeModelsServiceMethods {
  /**
   * Obtain all Badge Models
   * @param searchParams:
   * - first: amount of items that will return (default value: 100)
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
   * @param badgeModelId
   */
  async getById(badgeModelId: string): Promise<BadgeModelByIdQuery> {
    return await this.subgraph.badgeModelById({ badgeModelId })
  }

  /**
   * Obtain the metadata of a badge model giving its id
   * @param badgeModelMetadataId
   */
  async getMetadataOfBadgeModelById(badgeModelMetadataId: string): Promise<BadgeModelByIdQuery> {
    return await this.subgraph.badgeModelMetadataById({ id: badgeModelMetadataId })
  }
}
