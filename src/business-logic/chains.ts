import { Chains } from '@utils/web3'
import { ObjectValues } from '@businessLogic/types'

export type ChainConfig = {
  id: ChainsValues
  name: string
  shortName: string
  chainId: ChainsValues
  chainIdHex: string
  rpcUrl: string
  blockExplorerUrls: string[]
  token: string
}

export type ChainsValues = ObjectValues<typeof Chains>
export type ChainsKeys = keyof typeof Chains
