import endpoints from './endpoints'
import { codegenConfig } from '../common'

const queriesPath = 'src/subgraph/dev/queries/**/*.ts'
const codegenOutDir = './src/subgraph/dev/generated/subgraph.ts'

module.exports = {
  ...codegenConfig(endpoints, queriesPath, codegenOutDir)
}
