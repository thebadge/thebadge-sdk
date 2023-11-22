// subgraph URLs

// Goerli
const GOERLI_SG_URL_QA = 'https://api.studio.thegraph.com/query/51391/thebadge-goerli-staging/version/latest'

// Sepolia
const SEPOLIA_SG_URL_QA = 'https://api.studio.thegraph.com/query/51391/thebadge-sepolia-staging/version/latest'

// Gnosis
const GNOSIS_SG_URL_QA = 'https://api.studio.thegraph.com/query/51391/thebadge-gnosis-prod/version/latest'

export default {
  // chainId: {
  //   chainName: string,
  //   url: string,
  // }

  5: {
    chainName: 'Goerli (Ethereum testnet)',
    url: GOERLI_SG_URL_QA,
  },
  11155111: {
    chainName: 'Sepolia (Ethereum testnet)',
    url: SEPOLIA_SG_URL_QA,
  },
  100: {
    chainName: 'xDai (Gnosis Chain)',
    url: GNOSIS_SG_URL_QA,
  },
  // 80001: {
  //   chainName: 'Mumbai (Polygon testnet)',
  //   url: POLYGON_SG_URL_QA,
  // },
}
