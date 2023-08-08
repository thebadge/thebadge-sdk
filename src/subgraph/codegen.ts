import endpoints from './endpoints'

const codeGenOutDir = './src/subgraph/generated/subgraph.ts'

const schemas = Object.values(endpoints).reduce((acc: Array<unknown>, current) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const values = Object.values(current.urls)
  return values && values[0] && values[0] !== '' ? [...acc, ...values] : [...acc]
}, [])
console.log('schemas', schemas)
module.exports = {
  overwrite: true,
  schema: schemas,
  documents: 'src/subgraph/queries/**/*.ts',
  generates: {
    [codeGenOutDir]: {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request', 'jsdoc'],
    },
  },
  config: {
    rawRequest: false,
    autogenSWRKey: false,
  },
}
