import axios from 'axios'
import useSWR from 'swr'

import { BackendResponse } from '@/types/utils'

import { BACKEND_URL } from '@/src/constants/common'

export default function useS3Metadata<T>(hash: string) {
  return useSWR(hash.length ? hash : null, async (_hash) => {
    const cleanedHash = (_hash as string).replace(/^ipfs?:\/\//, '')

    const res = await axios.get<BackendResponse<T>>(`${BACKEND_URL}/api/ipfs/${cleanedHash}`)
    return res.data.result
  })
}
