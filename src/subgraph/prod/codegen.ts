import endpoints from './endpoints'
import { codegenConfig } from '../common'

const queriesPath = 'src/subgraph/prod/queries/**/*.ts'
const codegenOutDir = './src/subgraph/prod/generated/subgraph.ts'

module.exports = {
  ...codegenConfig(endpoints, queriesPath, codegenOutDir)
}
