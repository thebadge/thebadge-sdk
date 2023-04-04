import * as React from 'react'

import { IconBadge, MiniBadgePreview, colors } from 'thebadge-ui-library'

import useS3Metadata from '@/src/hooks/useS3Metadata'
import { ThemeType } from '@/src/theme/types'

type Props = {
  metadata?: string
  highlightColor?: string
  theme: ThemeType
  disableAnimations?: boolean
  onClick?: () => void
  buttonTitle?: string
}

function MiniBadge({
  buttonTitle,
  disableAnimations,
  highlightColor,
  metadata,
  onClick,
  theme,
}: Props) {
  const res: any = useS3Metadata(metadata || '')
  const badgeMetadata = res.data.content

  return (
    <MiniBadgePreview
      animationEffects={!disableAnimations ? ['wobble', 'grow', 'glare'] : []}
      animationOnHover
      badgeBackgroundUrl="https://images.unsplash.com/photo-1512998844734-cd2cca565822?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxhYnN0cmFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      buttonTitle={buttonTitle}
      description={badgeMetadata.description}
      height={'50px'}
      highlightColor={highlightColor || (theme === 'light' ? colors.black : colors.white)}
      imageUrl={badgeMetadata.image.s3Url}
      miniIcon={<IconBadge color={colors.white} height={25} width={25} />}
      onClick={onClick}
      textContrast="light-withTextBackground"
      textContrastOutside={theme}
      title={badgeMetadata.name}
    />
  )
}

export default MiniBadge
