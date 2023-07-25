import { getSubgraph } from '@subgraph/subgraph'
import { ChainsValues } from '@businessLogic/chains'

export async function getBadgeById(chainId: ChainsValues, badgeId: string) {
  const subgraph = getSubgraph(chainId)
  return await subgraph.badgeById({ id: badgeId })
}
