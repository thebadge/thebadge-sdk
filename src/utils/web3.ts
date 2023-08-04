import nullthrows from 'nullthrows'

import { ChainConfig, ChainsValues } from '@businessLogic/chains'

export const Chains = {
  //mainnet: 1,
  goerli: 5,
  gnosis: 100,
} as const

export type RPCProviderConfig = {
  name: RPCProviders
  token: string
}

export enum RPCProviders {
  infura = 'infura',
  alchemy = 'alchemy',
}

export type ProviderChains = { [key in RPCProviders]: { [key in ChainsValues]: string } }

export const providerChains: ProviderChains = {
  [RPCProviders.infura]: {
    [Chains.goerli]: 'goerli',
    [Chains.gnosis]: 'gnosis',
  },
  [RPCProviders.alchemy]: {
    [Chains.goerli]: 'eth-goerli',
    [Chains.gnosis]: 'xDai-gnosis',
  },
}

const getInfuraRPCUrl = (chainId: ChainsValues, token: string): string =>
  `https://${providerChains[RPCProviders.infura][chainId]}.infura.io/v3/${token}`

const getAlchemyRPCUrl = (chainId: ChainsValues, token: string): string =>
  `https://${providerChains[RPCProviders.alchemy][chainId]}.g.alchemy.com/v2/${token}`

export const getProviderUrl = (chainId: ChainsValues, rpcProviderConfig: RPCProviderConfig): string => {
  switch (rpcProviderConfig.name) {
    case RPCProviders.infura:
      return getInfuraRPCUrl(chainId, rpcProviderConfig.token)
    case RPCProviders.alchemy:
      return getAlchemyRPCUrl(chainId, rpcProviderConfig.token)
    default:
      return ''
  }
}

export function getChainsConfig(rpcProviderConfig: RPCProviderConfig): Record<ChainsValues, ChainConfig> {
  return {
    [Chains.goerli]: {
      id: Chains.goerli,
      name: 'Görli Testnet',
      shortName: 'Goerli',
      chainId: Chains.goerli,
      chainIdHex: '0x5',
      rpcUrl: getProviderUrl(Chains.goerli, rpcProviderConfig),
      blockExplorerUrls: ['https://goerli.etherscan.io/'],
      token: 'ETH',
    },
    [Chains.gnosis]: {
      id: Chains.gnosis,
      name: 'Gnosis Chain',
      shortName: 'xDai',
      chainId: Chains.gnosis,
      chainIdHex: '0x64',
      rpcUrl: getProviderUrl(Chains.gnosis, rpcProviderConfig),
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

export function getNetworkConfig(chainId: ChainsValues, rpcProviderConfig: RPCProviderConfig): ChainConfig {
  const networkConfig = getChainsConfig(rpcProviderConfig)[chainId]
  return nullthrows(networkConfig, `No config for chain id: ${chainId}`)
}
