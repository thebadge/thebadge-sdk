// subgraph URLs

// Ethereum // TODO change this to the real ETH subgraph prod url
const ETH_SG_URL_PROD = 'https://api.studio.thegraph.com/query/51391/thebadge-sepolia-staging/version/latest'

// Polygon
const POLYGON_SG_URL_PROD = null // TODO add Polygon subgraph prod url

export default {
  // chainId: {
  //   chainName: string,
  //   url: string,
  // }

  1: {
    chainName: 'Ethereum mainnet',
    url: ETH_SG_URL_PROD,
  },
  137: {
    chainName: 'Polygon',
    url: POLYGON_SG_URL_PROD,
  },
}