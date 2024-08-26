import {
  BadgeModel_Filter as BadgeModel_Filter_DEV,
  BadgeModelByIdQuery as BadgeModelByIdQuery_DEV,
  BadgeModelsQuery as BadgeModelsQuery_DEV,
  BadgeModelKlerosMetadataByIdQuery as BadgeModelMetadataByIdQuery_DEV,
  BadgeModelThirdPartyMetaDataByIdQuery as BadgeModelThirdPartyMetaDataByIdQuery_DEV,
} from '@subgraph/dev/generated/subgraph'
import {
  BadgeModel_Filter as BadgeModel_Filter_STAGING,
  BadgeModelByIdQuery as BadgeModelByIdQuery_STAGING,
  BadgeModelsQuery as BadgeModelsQuery_STAGING,
  BadgeModelKlerosMetadataByIdQuery as BadgeModelMetadataByIdQuery_STAGING,
  BadgeModelThirdPartyMetaDataByIdQuery as BadgeModelThirdPartyMetaDataByIdQuery_STAGING,
} from '@subgraph/staging/generated/subgraph'
import {
  BadgeModel_Filter as BadgeModel_Filter_PROD,
  BadgeModelByIdQuery as BadgeModelByIdQuery_PROD,
  BadgeModelsQuery as BadgeModelsQuery_PROD,
  BadgeModelKlerosMetadataByIdQuery as BadgeModelMetadataByIdQuery_PROD,
  BadgeModelThirdPartyMetaDataByIdQuery as BadgeModelThirdPartyMetaDataByIdQuery_PROD,
} from '@subgraph/prod/generated/subgraph'
import { TheBadgeSDKConfig } from '../../config'
import { MetadataColumn, BadgeModelKlerosMetadata, ThirdPartyMetadataColumn } from '@businessLogic/kleros/types'
import { getFromIPFS } from '@utils/ipfs'

type BadgeModel_Filter = BadgeModel_Filter_DEV | BadgeModel_Filter_STAGING | BadgeModel_Filter_PROD
type BadgeModelByIdQuery = BadgeModelByIdQuery_DEV | BadgeModelByIdQuery_STAGING | BadgeModelByIdQuery_PROD
type BadgeModelsQuery = BadgeModelsQuery_DEV | BadgeModelsQuery_STAGING | BadgeModelsQuery_PROD
type BadgeModelMetadataByIdQuery =
  | BadgeModelMetadataByIdQuery_DEV
  | BadgeModelMetadataByIdQuery_STAGING
  | BadgeModelMetadataByIdQuery_PROD

type BadgeModelThirdPartyMetadataByIdQuery =
  | BadgeModelThirdPartyMetaDataByIdQuery_DEV
  | BadgeModelThirdPartyMetaDataByIdQuery_STAGING
  | BadgeModelThirdPartyMetaDataByIdQuery_PROD

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
  async getMetadataOfBadgeModel(
    badgeModelId: string,
  ): Promise<BadgeModelMetadataByIdQuery | BadgeModelThirdPartyMetadataByIdQuery> {
    const badgeModel = await this.getById(badgeModelId)
    if (!badgeModel) {
      throw new Error('TheBadge SDK: Missing BadgeModel for the given badge model id, provide a valid model id.')
    }
    if (badgeModel.badgeModel?.controllerType === 'thirdParty') {
      return await this.subgraph.badgeModelThirdPartyMetaDataById({ id: badgeModelId })
    } else {
      return await this.subgraph.badgeModelKlerosMetadataById({ id: badgeModelId })
    }
  }

  private async getKlerosEvidenceRequirementsOfBadgeModel(
    evidencesListIpfsHash?: string,
  ): Promise<Array<MetadataColumn>> {
    if (!evidencesListIpfsHash) {
      throw new Error('TheBadge SDK: Missing registrationUri for the given badge model id, provide a valid model id.')
    }

    // obtain evidences required
    const { result, error } = await getFromIPFS(evidencesListIpfsHash, this.env)

    const evidencesList = (result as BadgeModelKlerosMetadata)?.content?.metadata.columns

    if (error || !evidencesList) {
      throw new Error('TheBadge SDK: Error obtaining required evidences list from IPFS, please retry.')
    }

    return evidencesList
  }

  private async getThirdPartyEvidenceRequirementsOfBadgeModel(
    evidencesListIpfsHash?: string,
  ): Promise<Array<ThirdPartyMetadataColumn>> {
    if (!evidencesListIpfsHash) {
      throw new Error('TheBadge SDK: Missing registrationUri for the given badge model id, provide a valid model id.')
    }

    // obtain evidences required
    const { result, error } = await getFromIPFS<{
      requirementsColumns: ThirdPartyMetadataColumn[]
    }>(evidencesListIpfsHash, this.env)

    const evidencesList = result?.content?.requirementsColumns

    if (error || !evidencesList) {
      throw new Error('TheBadge SDK: Error obtaining required evidences list from IPFS, please retry.')
    }

    return evidencesList
  }

  /**
   * Get evidence requirements of a badge model giving its id
   *
   * @param badgeModelId
   * @returns Array<MetadataColumn>
   */
  public async getEvidenceRequirementsOfBadgeModel(
    badgeModelId: string,
  ): Promise<Array<MetadataColumn | ThirdPartyMetadataColumn>> {
    // take ipfs uri from metadata of the badge model
    let evidencesList

    const badgeModelMetadataResponse = await this.getMetadataOfBadgeModel(badgeModelId)
    if ('badgeModelThirdPartyMetaData' in badgeModelMetadataResponse) {
      evidencesList = await this.getThirdPartyEvidenceRequirementsOfBadgeModel(
        badgeModelMetadataResponse?.badgeModelThirdPartyMetaData?.requirementsIPFSHash,
      )
    }
    if ('badgeModelKlerosMetaData' in badgeModelMetadataResponse) {
      evidencesList = await this.getKlerosEvidenceRequirementsOfBadgeModel(
        badgeModelMetadataResponse?.badgeModelKlerosMetaData?.registrationUri,
      )
    }

    if (!evidencesList) {
      throw new Error('TheBadge SDK: Error obtaining required evidences list from IPFS, please retry.')
    }

    // return the list of evidences required
    return evidencesList
  }
}
