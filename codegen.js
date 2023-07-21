// eslint-disable-next-line @typescript-eslint/no-var-requires
const endpoints = require('./src/subgraph/subgraph-endpoints.json')

const codeGenOutDir = 'subgraph/generated/subgraph.ts'

const schemas = Object.values(endpoints).reduce((acc, current) => {
  return [...acc, ...Object.values(current)]
}, [])

module.exports = {
  overwrite: true,
  schema: 'https://api.thegraph.com/subgraphs/name/thebadgeadmin/dev', // TODO use schemas object
  documents: 'src/subgraph/queries/**/*.ts',
  generates: {
    [codeGenOutDir]: {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
        'plugin-typescript-swr',
      ],
    },
  },
  config: {
    rawRequest: false,
    autogenSWRKey: true,
  },
}
