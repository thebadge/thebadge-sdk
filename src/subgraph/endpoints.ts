// subgraph URLs

// Goerli
const GOERLI_SG_URL_DEV = 'https://api.thegraph.com/subgraphs/name/thebadgeadmin/thebadge-goerli-dev'
const GOERLI_SG_URL_QA = 'https://api.thegraph.com/subgraphs/name/thebadgeadmin/thebadge-goerli-staging'

// Sepolia
const SEPOLIA_SG_URL_DEV = 'https://api.studio.thegraph.com/query/51391/thebadge-sepolia-dev/version/latest'
const SEPOLIA_SG_URL_QA = 'https://api.studio.thegraph.com/query/51391/thebadge-sepolia-staging/version/latest'

// TODO replace with ETH PROD url when it is available
const ETH_GRAPH_URL_PROD = SEPOLIA_SG_URL_QA

export enum SubgraphName {
  TheBadge = 'theBadge',
  TheBadgeDEV = 'theBadgeDEV',
}

const testnetConfiguration = (devUrl: string, qaUrl: string) => {
  return {
    [SubgraphName.TheBadgeDEV]: devUrl,
    [SubgraphName.TheBadge]: qaUrl,
  }
}

const mainnetConfiguration = (prodUrl: string) => {
  return {
    [SubgraphName.TheBadgeDEV]: null, // for mainnets there is no 'dev' subgraph, only prod
    [SubgraphName.TheBadge]: prodUrl,
  }
}

export default {
  // chainId: {
  //   chainName: string,
  //   urls: {
  //    name1: url1,
  //    name2: url2
  //   }
  // }

  // 1: {
  //   chainName: 'Ethereum mainnet',
  //   urls: mainnetConfiguration,
  // },
  5: {
    chainName: 'Goerli (Ethereum testnet)',
    urls: testnetConfiguration(GOERLI_SG_URL_DEV, GOERLI_SG_URL_QA),
  },
  100: {
    chainName: 'Gnosis',
    urls: mainnetConfiguration(ETH_GRAPH_URL_PROD),
  },
  11155111: {
    chainName: 'Sepolia (Ethereum testnet)',
    urls: testnetConfiguration(SEPOLIA_SG_URL_DEV, SEPOLIA_SG_URL_QA),
  },
  // 80001: {
  //   chainName: 'Mumbai (Polygon testnet)',
  //   urls: testnetConfiguration,
  // },
  // 137: {
  //   chainName: 'Polygon',
  //   urls: mainnetConfiguration,
  // },
}
