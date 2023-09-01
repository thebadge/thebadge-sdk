import { convertHashToValidIPFSKlerosHash, uploadToIPFS } from '@utils/ipfs'

export async function createAndUploadChallengeEvidence(
  challengeTitle: string,
  challengeDescription: string,
  attachment: { mimeType: string; base64File: string },
): Promise<string | null> {
  const evidenceIPFSUploaded = await uploadToIPFS({
    attributes: {
      title: challengeTitle,
      description: challengeDescription,
      ...(attachment
        ? {
            fileURI: attachment,
            fileTypeExtension: attachment?.mimeType,
            type: attachment?.mimeType.split('/')[1],
          }
        : {}),
    },
    filePaths: attachment ? ['fileURI'] : [],
  })

  const ipfsHash = evidenceIPFSUploaded.result?.ipfsHash
  if (!ipfsHash) {
    throw new Error('Evidence could not be uploaded to IPFS.')
  }

  return convertHashToValidIPFSKlerosHash(ipfsHash)
}
