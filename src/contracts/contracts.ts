import Kleros from './abis/Kleros.json'
import TheBadge from './abis/TheBadge.json'
import { SupportedChains } from '@businessLogic/chains'

export const contracts = {
  TheBadge: {
    address: {
      // TODO check support of different envs per chain
      [SupportedChains.goerli]: '0x5709c7f13FE36487Ebd2ed072AC9A0F43c33e86E',
      [SupportedChains.sepolia]: '0xeCc0B0B2715bc6b6a0E42Eb9A7139aE28A360045',
      // [SupportedChains.gnosis]: 'null',
    },
    abi: TheBadge.abi,
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
