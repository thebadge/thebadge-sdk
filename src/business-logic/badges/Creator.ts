import { BackendFileResponse } from '@businessLogic/types'

export type Creator = {
  name: string
  description: string
  email: string
  terms: boolean
  discord?: string
  twitter?: string
  logo?: BackendFileResponse
}

export type CreatorMetadata = {
  name: string
  description: string
  email: string
  logo?: BackendFileResponse
  discord?: string
  twitter?: string
  terms: boolean
}
