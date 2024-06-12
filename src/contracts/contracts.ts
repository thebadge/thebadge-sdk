import Kleros from './abis/Kleros.json'
import TheBadge from './abis/TheBadge.json'
import { SupportedChains } from '@businessLogic/chains'

export const contracts = {
  TheBadge: {
    address: {
      // TODO check support of different envs per chain
      [SupportedChains.goerli]: '0x4e14816A80D7c4FeEeb56C225e821c6374F4AB56',
      [SupportedChains.sepolia]: '0x4e14816A80D7c4FeEeb56C225e821c6374F4AB56',
      [SupportedChains.mumbai]: '0xBc8B15322279D7DEDfA6f38EC22075491aEDDB0f',
      [SupportedChains.gnosis]: '0x5f90580636AE29a9E4CD2AFFCE6d73501cD594F2',
      [SupportedChains.polygon]: '0xE6c5c3174439DA7D2D60456Ca7eB97E7Dcd551e6',
      [SupportedChains.avax]: '0xd7859d7f8fc33Eee2df9edbafd247a2F398087a6',
      [SupportedChains.optimism]: '0xd7859d7f8fc33Eee2df9edbafd247a2F398087a6',
    },
    abi: TheBadge.abi,
  },
  Kleros: {
    address: {
      // TODO check support of different envs per chain
      [SupportedChains.goerli]: '0x1128ed55ab2d796fa92d2f8e1f336d745354a77a', // Arbitror address
      [SupportedChains.sepolia]: '0x90992fb4e15ce0c59aeffb376460fda4ee19c879', // Arbitror address
      [SupportedChains.mumbai]: '0x0f7aa4776538b83a7afd4802880512979f7e8f93', // Arbitror address
      [SupportedChains.gnosis]: '0x0f7aa4776538b83a7afd4802880512979f7e8f93',
      [SupportedChains.polygon]: '0x0f7aa4776538b83a7afd4802880512979f7e8f93',
    },
    abi: Kleros,
  },
} as const

export type ContractsKeys = keyof typeof contracts

export const isKnownContract = (contractName: ContractsKeys | string): contractName is ContractsKeys => {
  return contracts[contractName as ContractsKeys] !== undefined
}
