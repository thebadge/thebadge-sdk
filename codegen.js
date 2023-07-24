// eslint-disable-next-line @typescript-eslint/no-var-requires
const endpoints = require('./src/subgraph/subgraph-endpoints.json')

const codeGenOutDir = './src/subgraph/generated/subgraph.ts'

const schemas = Object.values(endpoints).reduce((acc, current) => {
  const values = Object.values(current)
  return values && values[0] && values[0] !== '' ? [...acc, ...values] : [...acc]
}, [])

module.exports = {
  overwrite: true,
  schema: schemas,
  documents: 'src/subgraph/queries/**/*.ts',
  generates: {
    [codeGenOutDir]: {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request', 'plugin-typescript-swr'],
    },
  },
  config: {
    rawRequest: false,
    autogenSWRKey: true,
  },
}
