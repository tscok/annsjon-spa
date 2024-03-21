import { useDictionary } from 'app/i18n/use-dictionary'
import { BackgroundImage } from 'app/ui/image/background-image'

export const Hero = () => {
  const t = useDictionary('startpage')
  return (
    <BackgroundImage
      creditProps={{
        content: `${t('photo')} Steve Dahlfors`,
        placement: 'right',
        variant: 'light',
      }}
      height={380}
      margin="-64px 0 0"
      src="/images/annsjon1_steve-dahlfors.jpg"
    />
  )
}
