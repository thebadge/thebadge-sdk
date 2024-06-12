import { ObjectValues } from '@businessLogic/types'
import nullthrows from 'nullthrows'

export const SupportedChains = {
  //mainnet: 1,
  goerli: 5,
  sepolia: 11155111,
  mumbai: 80001,
  gnosis: 100,
  polygon: 137,
  avax: 43114,
  optimism: 10,
} as const

export type SupportedChainsValues = ObjectValues<typeof SupportedChains>
export type ChainsKeys = keyof typeof SupportedChains

export type RPCProviderConfig = {
  name: RPCProvider
  apiKey: string
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
    [SupportedChains.mumbai]: 'polygon-mumbai',
    [SupportedChains.gnosis]: 'gnosis',
    [SupportedChains.polygon]: 'polygon-mainnet',
    [SupportedChains.avax]: 'avalanche-mainnet',
    [SupportedChains.optimism]: 'optimism-mainnet',
  },
  [RPCProvider.alchemy]: {
    [SupportedChains.goerli]: 'eth-goerli',
    [SupportedChains.sepolia]: 'eth-sepolia',
    [SupportedChains.mumbai]: 'mumbai',
    [SupportedChains.gnosis]: 'xDai-gnosis',
    [SupportedChains.polygon]: 'polygon-mainnet',
    [SupportedChains.avax]: 'avalanche-mainnet',
    [SupportedChains.optimism]: 'optimism-mainnet',
  },
}

const getInfuraRPCUrl = (chainId: SupportedChainsValues, apiKey: string): string =>
  `https://${providerChains[RPCProvider.infura][chainId]}.infura.io/v3/${apiKey}`

const getAlchemyRPCUrl = (chainId: SupportedChainsValues, apiKey: string): string =>
  `https://${providerChains[RPCProvider.alchemy][chainId]}.g.alchemy.com/v2/${apiKey}`

export const getProviderUrl = (chainId: SupportedChainsValues, rpcProviderConfig: RPCProviderConfig): string => {
  // Gnosis has its own rpc provider
  if (chainId === SupportedChains.gnosis) {
    return 'https://gnosis.drpc.org'
  }

  switch (rpcProviderConfig.name) {
    case RPCProvider.infura:
      return getInfuraRPCUrl(chainId, rpcProviderConfig.apiKey)
    case RPCProvider.alchemy:
      return getAlchemyRPCUrl(chainId, rpcProviderConfig.apiKey)
    default:
      return ''
  }
}

export type ChainConfig = {
  id: SupportedChainsValues
  name: string
  shortName: string
  isTestnet: boolean
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
      isTestnet: true,
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
      isTestnet: true,
    },
    [SupportedChains.mumbai]: {
      id: SupportedChains.mumbai,
      name: 'Mumbai',
      shortName: 'mumbai-matic',
      chainId: SupportedChains.mumbai,
      chainIdHex: '0x13881',
      rpcUrl: getProviderUrl(SupportedChains.mumbai, rpcProviderConfig),
      blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
      token: 'MATIC',
      isTestnet: true,
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
      isTestnet: false,
    },
    [SupportedChains.polygon]: {
      id: SupportedChains.polygon,
      name: 'Polygon',
      shortName: 'matic',
      chainId: SupportedChains.polygon,
      chainIdHex: '0x89',
      rpcUrl: getProviderUrl(SupportedChains.polygon, rpcProviderConfig),
      blockExplorerUrls: ['https://polygonscan.com/'],
      token: 'MATIC',
      isTestnet: false,
    },
    [SupportedChains.avax]: {
      id: SupportedChains.avax,
      name: 'Avalanche',
      shortName: 'AVAX',
      chainId: SupportedChains.avax,
      chainIdHex: '0xa86a',
      rpcUrl: getProviderUrl(SupportedChains.avax, rpcProviderConfig),
      blockExplorerUrls: ['https://snowtrace.io/'],
      token: 'AVAX',
      isTestnet: false,
    },
    [SupportedChains.optimism]: {
      id: SupportedChains.optimism,
      name: 'Optimism',
      shortName: 'OPT',
      chainId: SupportedChains.avax,
      chainIdHex: '0xa',
      rpcUrl: getProviderUrl(SupportedChains.optimism, rpcProviderConfig),
      blockExplorerUrls: ['https://optimistic.etherscan.io/'],
      token: 'OETH',
      isTestnet: false,
    },
    // [SupportedChains.mainnet]: {
    //   id: Chains.mainnet,
    //   name: 'Mainnet',
    //   shortName: 'Mainnet',
    //   chainId: SupportedChains.mainnet,
    //   chainIdHex: '0x1',
    //   rpcUrl: getProviderUrl(Chains.mainnet),
    //   blockExplorerUrls: ['https://etherscan.io/'],
    //   token: 'ETH',
    //   isTestnet: false,
    // },
  }
}

export function getNetworkConfig(chainId: SupportedChainsValues, rpcProviderConfig: RPCProviderConfig): ChainConfig {
  const networkConfig = getChainsConfig(rpcProviderConfig)[chainId]
  return nullthrows(networkConfig, `TheBadge SDK: No config for chain id: ${chainId}`)
}
