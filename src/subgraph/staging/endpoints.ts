// subgraph URLs

// Goerli
const GOERLI_SG_URL_QA = 'https://api.studio.thegraph.com/query/51391/thebadge-goerli-staging/1.0.14'

// Sepolia
const SEPOLIA_SG_URL_QA = 'https://api.studio.thegraph.com/query/51391/thebadge-sepolia-staging/1.0.14'

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
  // 80001: {
  //   chainName: 'Mumbai (Polygon testnet)',
  //   url: POLYGON_SG_URL_QA,
  // },
}
