export const KLEROS_LIST_TYPES_KEYS = [
  'address',
  'rich address',
  'number',
  'text',
  'boolean',
  'GTCR address',
  'image',
  'file',
  'link',
  'Twitter User',
  'long text',
] as const

export enum KLEROS_LIST_TYPES {
  ADDRESS = 'address',
  RICH_ADDRESS = 'rich address',
  NUMBER = 'number',
  TEXT = 'text',
  BOOLEAN = 'boolean',
  GTCR_ADDRESS = 'GTCR address',
  IMAGE = 'image',
  FILE = 'file',
  LINK = 'link',
  TWITTER_USER_ID = 'Twitter User',
  LONG_TEXT = 'long text',
}

export type BadgeModelKlerosMetadata = {
  ipfsHash: string
  ipfsUrl: string
  s3Url: string
  extension: string
  content: {
    name: string
    title: string
    description: string
    rulingOptions: { titles: Record<string, string>; descriptions: Record<string, string> }
    category: string
    question: string
    fileURI: {
      ipfsHash: string
      ipfsUrl: string
      s3Url: string
      extension: string
    }
    fileTypeExtension: string
    evidenceDisplayInterfaceURI: string
    dynamicScriptURI: {
      ipfsHash: string
      ipfsUrl: string
      s3Url: string
      extension: string
    }
    dynamicScriptRequiredParams: string[]
    metadata: {
      tcrTitle: string
      tcrDescription: string
      columns: MetadataColumn[]
      itemName: string
      itemNamePlural: string
      logoURI: string
      requireRemovalEvidence: boolean
      isTCRofTCRs: boolean
      relTcrDisabled: boolean
    }
  }
}

export type MetadataColumn = {
  label: string
  description: string
  type: KLEROS_LIST_TYPES
  isIdentifier: boolean
}

export type ThirdPartyMetadataColumn = MetadataColumn & {
  replacementKey?: string
  isAutoFillable: boolean
}
