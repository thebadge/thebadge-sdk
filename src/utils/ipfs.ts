import axios from 'axios'
import { BackendResponse } from '@businessLogic/types'
import { THE_BADGE_BACKEND_URL } from '@utils/constants'

/**
 * Retrieves data from IPFS based on the given hash, using The Badge's backend.
 * @async
 * @template T - The type of the content data to retrieve from IPFS.
 * @template X - Additional type parameter that can be optionally provided to extend the backend response type.
 * @param {string} hash - The IPFS hash representing the content to retrieve.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export async function getFromIPFS<T, X = {}>(hash: string): Promise<BackendResponse<{ content: T } & X>> {
  const errorResponse: BackendResponse<{ content: T } & X> = {
    error: true,
    statusCode: 404,
    result: null,
  }

  if (!hash) return errorResponse
  const cleanedHash = cleanHash(hash)
  if (!cleanedHash) return errorResponse

  const response = await axios.get<BackendResponse<{ content: T } & X>>(
    `${THE_BADGE_BACKEND_URL}/api/ipfs/${cleanedHash}`,
  )
  return response.data
}

type Args<T = Record<string, unknown>> = {
  attributes: T
  filePaths?: string[]
  needKlerosPath?: boolean
}

/**
 * Uploads data to IPFS, using The Badge's backend.
 * @async
 * @param {attributes: Record<string, unknown>, filePaths?: string[]} metadata
 */
export async function uploadToIPFS<T>(
  metadata: Args<T>,
): Promise<BackendResponse<{ ipfsHash: string; s3Url: string }>> {
  const res = await axios.post<BackendResponse<{ ipfsHash: string; s3Url: string }>>(
    `${THE_BADGE_BACKEND_URL}/api/ipfs/pin`,
    metadata,
  )
  return res.data
}

/**
 * Given a IPFS Hash or Url it returns just the hash to be used on our backend
 * to fetch data
 *
 * @param hash
 * @returns string
 */
export function cleanHash(hash: string): string {
  // First replace the "ipfs://" and then the "ipfs/" that is needed for kleros
  // Expected hash as example: ipfs://ipfs/QmSaqcFHpTBP4Ks1DoLuE4yjDSWcr4xBxsnRvW3k8EFc6F
  return hash.replace(/^ipfs?:\/\//, '').replace(/^ipfs\//, '')
}

/**
 * As it is a hash that is going to be read by Kleros, it needs to have an extra path
 *
 * @param hash
 * @returns string
 */
export function convertHashToValidIPFSKlerosHash(hash: string): string {
  // Expected hash as example: 'ipfs://ipfs/[hash]'
  return `ipfs/${hash}`
}
