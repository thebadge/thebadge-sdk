import {
  BadgeModel_Filter as BadgeModel_Filter_DEV,
  BadgeModelByIdQuery as BadgeModelByIdQuery_DEV,
  BadgeModelsQuery as BadgeModelsQuery_DEV,
  BadgeModelMetadataByIdQuery as BadgeModelMetadataByIdQuery_DEV,
} from '@subgraph/dev/generated/subgraph'
import {
  BadgeModel_Filter as BadgeModel_Filter_STAGING,
  BadgeModelByIdQuery as BadgeModelByIdQuery_STAGING,
  BadgeModelsQuery as BadgeModelsQuery_STAGING,
  BadgeModelMetadataByIdQuery as BadgeModelMetadataByIdQuery_STAGING,
} from '@subgraph/staging/generated/subgraph'
import {
  BadgeModel_Filter as BadgeModel_Filter_PROD,
  BadgeModelByIdQuery as BadgeModelByIdQuery_PROD,
  BadgeModelsQuery as BadgeModelsQuery_PROD,
  BadgeModelMetadataByIdQuery as BadgeModelMetadataByIdQuery_PROD,
} from '@subgraph/prod/generated/subgraph'
import { TheBadgeSDKConfig } from '../../config'
import { MetadataColumn } from '@businessLogic/kleros/types'
import { getFromIPFS } from '@utils/ipfs'

type BadgeModel_Filter = BadgeModel_Filter_DEV | BadgeModel_Filter_STAGING | BadgeModel_Filter_PROD
type BadgeModelByIdQuery = BadgeModelByIdQuery_DEV | BadgeModelByIdQuery_STAGING | BadgeModelByIdQuery_PROD
type BadgeModelsQuery = BadgeModelsQuery_DEV | BadgeModelsQuery_STAGING | BadgeModelsQuery_PROD
type BadgeModelMetadataByIdQuery =
  | BadgeModelMetadataByIdQuery_DEV
  | BadgeModelMetadataByIdQuery_STAGING
  | BadgeModelMetadataByIdQuery_PROD

interface BadgeModelsServiceMethods {
  get(searchParams?: { first: number; skip: number; filter?: BadgeModel_Filter }): Promise<BadgeModelsQuery>
  getById(badgeModelId: string): Promise<BadgeModelByIdQuery>
  getMetadataOfBadgeModel(badgeModelId: string): Promise<BadgeModelByIdQuery>
  getEvidenceRequirementsOfBadgeModel(badgeModelId: string): Promise<Array<MetadataColumn>>
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
   * @returns Array<MetadataColumn>
   */
  public async getEvidenceRequirementsOfBadgeModel(badgeModelId: string): Promise<Array<MetadataColumn>> {
    // take ipfs uri from metadata of the badge model
    const badgeModelMetadataResponse = await this.getMetadataOfBadgeModel(badgeModelId)
    const ipfsDataUri = badgeModelMetadataResponse?.badgeModelKlerosMetaData?.registrationUri
    if (!ipfsDataUri) {
      throw new Error('TheBadge SDK: Missing registrationUri for the given badge model id, provide a valid model id.')
    }

    // obtain evidences required
    const { result, error } = await getFromIPFS<{ metadata: { columns: MetadataColumn[] } }>(ipfsDataUri, this.env)
    const evidencesList = result?.content?.metadata?.columns
    if (error || !evidencesList) {
      throw new Error('TheBadge SDK: Error obtaining required evidences list from IPFS, please retry.')
    }

    // return the list of evidences required
    return evidencesList
  }
}
