// subgraph URLs

const POLYGON_SG_URL_PROD = 'https://api.studio.thegraph.com/query/51391/thebadge-polygon-prod/version/latest'

const GNOSIS_SG_URL_PROD = 'https://api.studio.thegraph.com/query/51391/thebadge-gnosis-prod/version/latest'

// AVAX
const AVAX_SG_URL_PROD = 'https://api.studio.thegraph.com/query/51391/thebadge-avax-prod/version/latest'

// OPTIMISM
const OPTIMISM_SG_URL_PROD = 'https://api.studio.thegraph.com/query/51391/thebadge-optimism-prod/version/latest'

export default {
  100: {
    chainName: 'Gnosis',
    url: GNOSIS_SG_URL_PROD,
  },
  137: {
    chainName: 'Matic',
    url: POLYGON_SG_URL_PROD,
  },
  43114: {
    chainName: 'Avalanche',
    url: AVAX_SG_URL_PROD,
  },
  10: {
    chainName: 'Optimism',
    url: OPTIMISM_SG_URL_PROD,
  },
}
