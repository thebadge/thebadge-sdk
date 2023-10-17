import Kleros from './abis/Kleros.json'
import TheBadge from './abis/TheBadge.json'
import { SupportedChains } from '@businessLogic/chains'

export const contracts = {
  TheBadge: {
    address: {
      // TODO check support of different envs per chain
      [SupportedChains.goerli]: '0x8948cc0dcf830a345891d68d504fbfdeed9cd4ee',
      [SupportedChains.sepolia]: '0x276c3FDc29ef2c7CD621446448fadfcFA4acd1D6',
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
