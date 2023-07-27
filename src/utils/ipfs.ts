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
export async function getFromIPFS<T, X = {}>(hash?: string): Promise<unknown> {
  if (!hash) return
  const cleanedHash = hash.replace(/^ipfs?:\/\//, '')
  if (!cleanedHash) return

  return await axios.get<BackendResponse<{ content: T } & X>>(`${THE_BADGE_BACKEND_URL}/api/ipfs/${cleanedHash}`)
}

/**
 * Uploads data to IPFS, using The Badge's backend.
 * @async
 * @param {attributes: Record<string, unknown>, filePaths?: string[]} metadata
 */
export async function uploadToIPFS(metadata: {
  attributes: Record<string, unknown>
  filePaths?: string[]
}): Promise<BackendResponse<{ ipfsHash: string; s3Url: string }>> {
  const res = await axios.post<BackendResponse<{ ipfsHash: string; s3Url: string }>>(
    `${THE_BADGE_BACKEND_URL}/api/ipfs/pin`,
    metadata,
  )
  return res.data
}
