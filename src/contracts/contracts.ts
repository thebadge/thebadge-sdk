import Kleros from './abis/Kleros.json'
import TheBadge from './abis/TheBadge.json'
import { SupportedChains } from '@businessLogic/chains'

export const contracts = {
  TheBadge: {
    address: {
      // TODO check support of different envs per chain
      [SupportedChains.goerli]: '0x4e14816A80D7c4FeEeb56C225e821c6374F4AB56',
      [SupportedChains.sepolia]: '0x4e14816A80D7c4FeEeb56C225e821c6374F4AB56',
      [SupportedChains.gnosis]: '0x5f90580636AE29a9E4CD2AFFCE6d73501cD594F2',
    },
    abi: TheBadge.abi,
  },
  Kleros: {
    address: {
      // TODO check support of different envs per chain
      [SupportedChains.goerli]: '0x1128ed55ab2d796fa92d2f8e1f336d745354a77a', // Arbitror address
      [SupportedChains.sepolia]: '0x90992fb4e15ce0c59aeffb376460fda4ee19c879', // Arbitror address
      [SupportedChains.gnosis]: '0x9C1dA9A04925bDfDedf0f6421bC7EEa8305F9002',
    },
    abi: Kleros,
  },
} as const

export type ContractsKeys = keyof typeof contracts

export const isKnownContract = (contractName: ContractsKeys | string): contractName is ContractsKeys => {
  return contracts[contractName as ContractsKeys] !== undefined
}
