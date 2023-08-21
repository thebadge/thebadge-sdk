import { ObjectValues } from '@businessLogic/types'
import nullthrows from 'nullthrows'

export const SupportedChains = {
  //mainnet: 1,
  goerli: 5,
  sepolia: 11155111,
  gnosis: 100,
} as const

export type SupportedChainsValues = ObjectValues<typeof SupportedChains>
export type ChainsKeys = keyof typeof SupportedChains

export type RPCProviderConfig = {
  name: RPCProvider
  token: string
}

export enum RPCProvider {
  infura = 'infura',
  alchemy = 'alchemy',
}

export type ProviderChains = { [key in RPCProvider]: { [key in SupportedChainsValues]: string } }

export const providerChains: ProviderChains = {
  [RPCProvider.infura]: {
    [SupportedChains.goerli]: 'goerli',
    [SupportedChains.sepolia]: 'sepolia',
    [SupportedChains.gnosis]: 'gnosis',
  },
  [RPCProvider.alchemy]: {
    [SupportedChains.goerli]: 'eth-goerli',
    [SupportedChains.sepolia]: 'eth-sepolia',
    [SupportedChains.gnosis]: 'xDai-gnosis',
  },
}

const getInfuraRPCUrl = (chainId: SupportedChainsValues, token: string): string =>
  `https://${providerChains[RPCProvider.infura][chainId]}.infura.io/v3/${token}`

const getAlchemyRPCUrl = (chainId: SupportedChainsValues, token: string): string =>
  `https://${providerChains[RPCProvider.alchemy][chainId]}.g.alchemy.com/v2/${token}`

export const getProviderUrl = (chainId: SupportedChainsValues, rpcProviderConfig: RPCProviderConfig): string => {
  switch (rpcProviderConfig.name) {
    case RPCProvider.infura:
      return getInfuraRPCUrl(chainId, rpcProviderConfig.token)
    case RPCProvider.alchemy:
      return getAlchemyRPCUrl(chainId, rpcProviderConfig.token)
    default:
      return ''
  }
}

export type ChainConfig = {
  id: SupportedChainsValues
  name: string
  shortName: string
  chainId: SupportedChainsValues
  chainIdHex: string
  rpcUrl: string
  blockExplorerUrls: string[]
  token: string
}

export function getChainsConfig(rpcProviderConfig: RPCProviderConfig): Record<SupportedChainsValues, ChainConfig> {
  return {
    [SupportedChains.goerli]: {
      id: SupportedChains.goerli,
      name: 'Görli Testnet',
      shortName: 'Goerli',
      chainId: SupportedChains.goerli,
      chainIdHex: '0x5',
      rpcUrl: getProviderUrl(SupportedChains.goerli, rpcProviderConfig),
      blockExplorerUrls: ['https://goerli.etherscan.io/'],
      token: 'ETH',
    },
    [SupportedChains.sepolia]: {
      id: SupportedChains.sepolia,
      name: 'Ethereum Sepolia',
      shortName: 'sepoliaeth',
      chainId: SupportedChains.sepolia,
      chainIdHex: '0xaa36a7',
      rpcUrl: getProviderUrl(SupportedChains.sepolia, rpcProviderConfig),
      blockExplorerUrls: ['https://sepolia.etherscan.io/'],
      token: 'ETH',
    },
    [SupportedChains.gnosis]: {
      id: SupportedChains.gnosis,
      name: 'Gnosis Chain',
      shortName: 'xDai',
      chainId: SupportedChains.gnosis,
      chainIdHex: '0x64',
      rpcUrl: getProviderUrl(SupportedChains.gnosis, rpcProviderConfig),
      blockExplorerUrls: ['https://gnosisscan.io/'],
      token: 'xDAI',
    },
    // [Chains.mainnet]: {
    //   id: Chains.mainnet,
    //   name: 'Mainnet',
    //   shortName: 'Mainnet',
    //   chainId: Chains.mainnet,
    //   chainIdHex: '0x1',
    //   rpcUrl: getProviderUrl(Chains.mainnet),
    //   blockExplorerUrls: ['https://etherscan.io/'],
    //   token: 'ETH',
    // },
  }
}

export function getNetworkConfig(chainId: SupportedChainsValues, rpcProviderConfig: RPCProviderConfig): ChainConfig {
  const networkConfig = getChainsConfig(rpcProviderConfig)[chainId]
  return nullthrows(networkConfig, `No config for chain id: ${chainId}`)
}
