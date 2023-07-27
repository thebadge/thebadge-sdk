import { MetadataColumn } from '@businessLogic/kleros/types'
import { BackendFileResponse, BackendFileUpload, IPFSHash, NFTAttribute } from '@businessLogic/types'

export type BadgeEvidenceMetadata = {
  columns: MetadataColumn[]
  values: Record<string, unknown>
}

export type BadgeModelMetadata<T = IPFSHash | BackendFileResponse | BackendFileUpload> = {
  name: string
  description: string
  image: T
  external_link: string
  attributes?: NFTAttribute[]
}

// This type follows the https://docs.opensea.io/docs/metadata-standards
export type BadgeMetadata<T = IPFSHash | BackendFileResponse | BackendFileUpload> = {
  name: string
  description: string
  external_link: string
  image: T
  attributes?: NFTAttribute[]
}
