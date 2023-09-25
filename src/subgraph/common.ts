import { SupportedChainsValues } from '@businessLogic/chains'
import { getSdk as getDevSdk } from '@subgraph/dev/generated/subgraph'
import { getSdk as getStagingSdk } from '@subgraph/staging/generated/subgraph'
import { getSdk as getProdSdk } from '@subgraph/prod/generated/subgraph'

function getSchemas(endpoints: object) {
  return Object.values(endpoints).reduce((acc: Array<string>, current) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return current.url ? [...acc, current.url] : acc
  }, [])
}

export function codegenConfig(endpoints: object, queriesPath: string, outDir: string) {
  const schemas = getSchemas(endpoints)
  console.log('schemas', schemas)
  return {
    overwrite: true,
    schema: schemas,
    documents: queriesPath,
    generates: {
      [outDir]: {
        plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request', 'jsdoc'],
      },
    },
    config: {
      rawRequest: false,
      autogenSWRKey: false,
    },
  }
}

export function getSubgraphUrl(endpoints: object, chainId: SupportedChainsValues, env: string): string {
  let subgraphUrl = null
  const errorMessage = `No ${env} subgraph url found for chain id ${chainId}`

  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    subgraphUrl = endpoints[chainId]?.url
  } catch (e) {
    throw new Error(errorMessage)
  }

  if (!subgraphUrl) {
    throw new Error(errorMessage)
  }

  return subgraphUrl
}

export type Sdk = typeof getDevSdk | typeof getStagingSdk | typeof getProdSdk
