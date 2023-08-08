import { THE_BADGE_THE_GRAPH_BASE_URL } from '../utils/constants'

const THE_BADGE_THE_GRAPH_URL_DEV = THE_BADGE_THE_GRAPH_BASE_URL + 'develop'
const THE_BADGE_THE_GRAPH_URL_QA = THE_BADGE_THE_GRAPH_BASE_URL + 'staging'
const THE_BADGE_THE_GRAPH_URL_PROD = THE_BADGE_THE_GRAPH_BASE_URL + 'prod'

export enum SubgraphName {
  TheBadge = 'theBadge',
  TheBadgeDEV = 'theBadgeDEV',
}

const testnetConfiguration = {
  [SubgraphName.TheBadge]: THE_BADGE_THE_GRAPH_URL_QA,
  [SubgraphName.TheBadgeDEV]: THE_BADGE_THE_GRAPH_URL_DEV,
}

const mainnetConfiguration = {
  [SubgraphName.TheBadge]: THE_BADGE_THE_GRAPH_URL_QA, // TODO replace with PROD url when it is available
  [SubgraphName.TheBadgeDEV]: null, // for mainnet chains there is no 'dev' subgraph, only prod
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
    urls: testnetConfiguration,
  },
  100: {
    chainName: 'Gnosis',
    urls: mainnetConfiguration,
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
