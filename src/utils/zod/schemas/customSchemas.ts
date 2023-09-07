import { isAddress } from 'ethers/lib/utils'
import { z } from 'zod'
import { KLEROS_LIST_TYPES_KEYS } from '@businessLogic/kleros/types'

export function isEmail(email: string) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
}

export const CheckBoxSchema = z.boolean({
  required_error: 'Is required',
  invalid_type_error: 'Must be a boolean',
})

export const LinkSchema = z
  .string({
    required_error: 'Is required',
    invalid_type_error: 'Must be a link',
  })
  .refine((value) => value.startsWith('http'), {
    message: 'You need to add valid url.',
  })

export const RadioButtonSchema = z.boolean({
  required_error: 'Is required',
  invalid_type_error: 'Must be a boolean',
})

export const AddressSchema = z.string({ required_error: 'Is required' }).refine(isAddress, {
  message: 'Address must be an valid Ethereum addresses.',
})

export const TwitterSchema = z
  .string({
    required_error: 'Is required',
    invalid_type_error: 'Must be a twitter user',
  })
  .startsWith('@')

export const EmailSchema = z.string({ required_error: 'Is required' }).refine(isEmail, {
  message: 'Must be a valid email addresses.',
})

export const NumberSchema = z.number({
  required_error: 'Is required',
  invalid_type_error: 'Must be a number',
})

export const LongTextSchema = z
  .string({
    required_error: 'Is required',
    invalid_type_error: 'Must be an string',
  })
  .min(25, { message: 'Text field most have at least 25 characters.' })
export const DescriptionTextSchema = z
  .string({
    required_error: 'Is required',
    invalid_type_error: 'Must be an string',
  })
  .min(25, { message: 'Text field most have at least 25 characters.' })

// TODO Move to env variables
const ONE_MB = 1000000
const MAX_FILE_SIZE = ONE_MB * 5
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

export const ImageSchema = z
  .any()
  .refine((value) => !!value?.base64File, 'Upload an image is required.')
  .refine((value) => (value?.base64File?.length / 4) * 3 <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  .refine((value) => ACCEPTED_IMAGE_TYPES.includes(value?.mimeType), '.jpg, .jpeg, .png and .webp files are accepted.')

export const AvatarSchema = z
  .any()
  .refine((value) => !!value?.base64File, 'Upload an image is required.')
  .refine((value) => (value?.base64File?.length / 4) * 3 <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  .refine((value) => ACCEPTED_IMAGE_TYPES.includes(value?.mimeType), '.jpg, .jpeg, .png and .webp files are accepted.')

export const FileSchema = z
  .any()
  .refine((value) => !!value && !!value.base64File, 'Upload a file is required.')
  .refine((value) => (value?.base64File?.length / 4) * 3 <= MAX_FILE_SIZE, `Max file size is 5MB.`)

export const OptionalFileSchema = z
  .any()
  .refine((value) => !!value && !!value.base64File, 'Upload a file is required.')
  .refine((value) => (value?.base64File?.length / 4) * 3 <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  .optional()
  .nullable()

export const ExpirationTypeSchema = z.number({
  required_error: 'Is required',
  invalid_type_error: 'Must enter an amount of days',
})

export const ChallengePeriodTypeSchema = z
  .number({
    required_error: 'Is required',
    invalid_type_error: 'Must enter an amount of days',
  })
  .min(2, 'The challenge time must be greater than 1 day')
  .max(90, `The challenge period duration can't be greater than 90 days.`)

export const SeverityTypeSchema = z.object({
  amountOfJurors: z
    .number()
    .positive()
    .refine((v) => v % 2 != 0, 'Must be even'),
  challengeBounty: z.string(),
})

export const KlerosFieldTypeSchema = z.enum(KLEROS_LIST_TYPES_KEYS)

// Schema used to generate a form inside the KlerosDynamicFields handler and also
// to create the KlerosDynamicFields Unique field
export const KlerosFormFieldSchema = z.object({
  label: z.string().describe('Name // Field name that the user will be when they create the badge.'),
  type: KlerosFieldTypeSchema.describe('Field Type // Type of the required data.'),
  description: LongTextSchema.describe('Description // Field description that explains what the field data is.'),
})

export const KlerosDynamicFields = z
  .array(KlerosFormFieldSchema, {
    required_error: 'Must provide at least one field.',
  })
  .min(1, 'Must provide at least one field.')
  .max(20, `Can't add more than twenty (20)`)
