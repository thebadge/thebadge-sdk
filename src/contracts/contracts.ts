import Kleros from './abis/Kleros.json'
import TheBadge from './abis/TheBadge.json'
import { SupportedChains } from '@businessLogic/chains'

export const contracts = {
  TheBadge: {
    address: {
      // TODO check support of different envs per chain
      [SupportedChains.goerli]: '0xa86D1858D751A2f71231456fC136c4837aD76009',
      [SupportedChains.sepolia]: '0xec5b3e3E14D201D47fC7b7fE0F6Fc7833783A248',
      // [SupportedChains.gnosis]: 'null',
    },
    abi: TheBadge,
  },
  Kleros: {
    address: {
      // TODO check support of different envs per chain
      [SupportedChains.goerli]: '0x1128ed55ab2d796fa92d2f8e1f336d745354a77a', // Arbitror address
      [SupportedChains.sepolia]: '0x90992fb4e15ce0c59aeffb376460fda4ee19c879', // Arbitror address
      // [SupportedChains.gnosis]: 'null',
    },
    abi: Kleros,
  },
} as const

export type ContractsKeys = keyof typeof contracts

export const isKnownContract = (contractName: ContractsKeys | string): contractName is ContractsKeys => {
  return contracts[contractName as ContractsKeys] !== undefined
}
