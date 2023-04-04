import * as React from 'react'

import { BadgePreviewProps, BadgePreviewV2 } from 'thebadge-ui-library'

import useS3Metadata from '@/src/hooks/useS3Metadata'

type Props = {
  metadata?: string
  size?: BadgePreviewProps['size']
}

function Badge({ metadata, size = 'medium' }: Props) {
  const res: any = useS3Metadata(metadata || '')
  const badgeMetadata = res.data.content

  return (
    <BadgePreviewV2
      animationEffects={[]}
      animationOnHover
      badgeBackgroundUrl="https://images.unsplash.com/photo-1512998844734-cd2cca565822?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxhYnN0cmFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      badgeUrl="https://www.thebadge.xyz"
      category={badgeMetadata.name}
      description={badgeMetadata.description}
      imageUrl={badgeMetadata.image.s3Url}
      size={size}
      textContrast="light-withTextBackground"
    />
  )
}

export default Badge
