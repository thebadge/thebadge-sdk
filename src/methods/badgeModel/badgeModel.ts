import { getSubgraph } from '@subgraph/subgraph'
import { ChainsValues } from '@businessLogic/chains'
import { BadgeModel_Filter, BadgeModelByIdQuery, BadgeModelsQuery } from '@subgraph/generated/subgraph'

export async function getBadgeModels(
  chainId: ChainsValues,
  searchParams?: { first?: number; skip?: number; filter?: BadgeModel_Filter },
): Promise<BadgeModelsQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.badgeModels({
    first: searchParams?.first || 100,
    skip: searchParams?.skip || 0,
    filter: searchParams?.filter,
  })
}

export async function getBadgeModelById(chainId: ChainsValues, badgeModelId: string): Promise<BadgeModelByIdQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.badgeModelById({ badgeModelId })
}

export async function getBadgeModelMetadataById(
  chainId: ChainsValues,
  badgeModelMetadataId: string,
): Promise<BadgeModelByIdQuery> {
  const subgraph = getSubgraph(chainId)
  return await subgraph.badgeModelMetadataById({ id: badgeModelMetadataId })
}
