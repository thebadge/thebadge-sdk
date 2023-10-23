// subgraph URLs

// Goerli
const GOERLI_SG_URL_DEV = 'https://api.studio.thegraph.com/query/51391/thebadge-goerli-dev/version/latest'

// Sepolia
const SEPOLIA_SG_URL_DEV = 'https://api.studio.thegraph.com/query/51391/thebadge-sepolia-dev/version/latest'

export default {
  // chainId: {
  //   chainName: string,
  //   url: string,
  // }

  5: {
    chainName: 'Goerli (Ethereum testnet)',
    url: GOERLI_SG_URL_DEV,
  },
  11155111: {
    chainName: 'Sepolia (Ethereum testnet)',
    url: SEPOLIA_SG_URL_DEV,
  },
  // 80001: {
  //   chainName: 'Mumbai (Polygon testnet)',
  //   urls: POLYGON_SG_URL_DEV,
  // },
}
