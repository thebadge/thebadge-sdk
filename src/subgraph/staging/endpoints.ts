// subgraph URLs

// Goerli
const GOERLI_SG_URL_QA = 'https://api.studio.thegraph.com/query/51391/thebadge-goerli-staging/version/latest'

// Sepolia
const SEPOLIA_SG_URL_QA = 'https://api.studio.thegraph.com/query/51391/thebadge-sepolia-staging/version/latest'

// Mumbai
const MUMBAI_SG_URL_QA = 'https://api.studio.thegraph.com/query/51391/thebadge-mumbai-prod/version/latest'

// Gnosis
const GNOSIS_SG_URL_QA = 'https://api.studio.thegraph.com/query/51391/thebadge-gnosis-prod/version/latest'

// Polygon
const POLYGON_SG_URL_QA = 'https://api.studio.thegraph.com/query/51391/thebadge-polygon-prod/version/latest'

// AVAX
const AVAX_SG_URL_QA = 'https://api.studio.thegraph.com/query/51391/thebadge-avax-prod/version/latest'

// OPTIMISM
const OPTIMISM_SG_URL_QA = 'https://api.studio.thegraph.com/query/51391/thebadge-optimism-prod/version/latest'

export default {
  5: {
    chainName: 'Goerli (Ethereum testnet)',
    url: GOERLI_SG_URL_QA,
  },
  11155111: {
    chainName: 'Sepolia (Ethereum testnet)',
    url: SEPOLIA_SG_URL_QA,
  },
  80001: {
    chainName: 'Mumbai (Polygon testnet)',
    url: MUMBAI_SG_URL_QA,
  },
  100: {
    chainName: 'xDai (Gnosis Chain)',
    url: GNOSIS_SG_URL_QA,
  },
  137: {
    chainName: 'Matic (Polygon)',
    url: POLYGON_SG_URL_QA,
  },
  43114: {
    chainName: 'Avalanche',
    url: AVAX_SG_URL_QA,
  },
  10: {
    chainName: 'Optimism',
    url: OPTIMISM_SG_URL_QA,
  },
}
