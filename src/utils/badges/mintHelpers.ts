import { convertHashToValidIPFSKlerosHash, uploadToIPFS } from '@utils/ipfs'
import { KlerosListStructure } from '@utils/kleros/generateKlerosListMetaEvidence'
import { THE_BADGE_DAPP_URL } from '@utils/constants'
import { BadgeEvidenceMetadata, BadgeMetadata, BadgeModelMetadata } from '@businessLogic/theBadge/BadgeMetadata'
import { BackendFileUpload } from '@businessLogic/types'
import { MetadataColumn } from '@businessLogic/kleros/types'
import { defaultAbiCoder } from 'ethers/lib/utils'

export async function createAndUploadBadgeMetadata(
  badgeModelMetadata: BadgeModelMetadata,
  minterAddress: string,
  additionalArgs: {
    imageBase64File: string
  },
) {
  const badgeMetadataIPFSUploaded = await uploadToIPFS<BadgeMetadata<BackendFileUpload>>({
    attributes: {
      name: badgeModelMetadata?.name || '',
      description: badgeModelMetadata?.description || '',
      external_link: `${THE_BADGE_DAPP_URL}/profile/${minterAddress}`,
      attributes: [],
      image: { mimeType: 'image/png', base64File: additionalArgs.imageBase64File },
    },
    filePaths: ['image'],
  })

  return `ipfs://${badgeMetadataIPFSUploaded.result?.ipfsHash}`
}

export async function createAndUploadBadgeEvidence(
  columns: MetadataColumn[],
  values: Record<string, unknown>,
): Promise<string | null> {
  const filePaths = getFilePathsFromValues(values)
  const evidenceIPFSUploaded = await uploadToIPFS<BadgeEvidenceMetadata>({
    attributes: {
      columns,
      values,
      submittedAt: Date.now(),
    },
    filePaths: filePaths,
  })

  const ipfsHash = evidenceIPFSUploaded.result?.ipfsHash
  if (!ipfsHash) {
    throw new Error('Evidence could not be uploaded to IPFS.')
  }

  return convertHashToValidIPFSKlerosHash(ipfsHash)
}

export function createKlerosValuesObject(
  data: Record<string, unknown>,
  klerosBadgeMetadata?: KlerosListStructure | null,
): Record<string, unknown> {
  const values: Record<string, unknown> = {}
  if (!klerosBadgeMetadata) return values
  // If we change this "shape" key values, we need to update the klerosSchemaFactory on src/components/form/helpers/validators.ts
  klerosBadgeMetadata.metadata.columns.forEach((column, i) => {
    values[`${column.label}`] = data[`${i}`]
  })
  return values
}

function getFilePathsFromValues(values: Record<string, any>) {
  if (!values) return []
  const filePaths: string[] = []
  Object.keys(values).forEach((key) => {
    if (values[key].base64File) {
      filePaths.push(`values.${key}`)
    }
  })

  return filePaths
}

export const encodeIpfsEvidence = (ipfsEvidenceHash: string): string => {
  return defaultAbiCoder.encode([`tuple(string)`], [[ipfsEvidenceHash]])
}
