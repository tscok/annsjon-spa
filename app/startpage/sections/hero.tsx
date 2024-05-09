import { useDictionary } from 'app/i18n/use-dictionary'
import { BackgroundImage } from 'app/ui/image/background-image'

export const Hero = () => {
  const t = useDictionary('startpage')
  return (
    <BackgroundImage
      creditProps={{
        content: `${t('credit.photo')} Steve Dahlfors`,
        placement: 'right',
        variant: 'light',
      }}
      height={380}
      src="/images/annsjon1_steve-dahlfors.jpg"
    />
  )
}
