import { useRef } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useDictionary } from 'app/i18n/use-dictionary'
import { interpolate } from 'app/utils/interpolate'
import { TextArea } from 'app/ui/form/text-input'
import { H2, H5 } from 'app/ui/text/heading'
import { P } from 'app/ui/text/p'
import { A } from 'app/ui/text/a'

export const ApplicationError = ({ formData }: { formData: string }) => {
  const t = useDictionary('form')
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleCopy = () => {
    if (!inputRef.current) return
    inputRef.current.select()
    const contents = inputRef.current.innerHTML
    navigator.clipboard.writeText(contents)
  }

  return (
    <>
      <H2>{t('error.title')}</H2>
      <P>
        {interpolate(t('error.body'), {
          $1: <A href="mailto:volunteer@annsjon.org" />,
        })}
      </P>
      <Stack spacing={2}>
        <H5>{t('error.formData')}</H5>
        <TextArea inputRef={inputRef} defaultValue={formData} readOnly />
        <Button onClick={handleCopy}>{t('error.copyData')}</Button>
      </Stack>
    </>
  )
}
