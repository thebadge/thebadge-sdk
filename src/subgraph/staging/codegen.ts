import endpoints from './endpoints'
import { codegenConfig } from '../common'

const queriesPath = 'src/subgraph/staging/queries/**/*.ts'
const codegenOutDir = './src/subgraph/staging/generated/subgraph.ts'

module.exports = {
  ...codegenConfig(endpoints, queriesPath, codegenOutDir)
}
