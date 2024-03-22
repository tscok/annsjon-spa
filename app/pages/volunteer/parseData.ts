import { Form } from 'app/i18n/types'
import { useDictionary } from 'app/i18n/use-dictionary'

type ObjectLike = Record<string, string | FormDataEntryValue>

/** `InputName` should be `Form` from i18n/types, only `birth`/`dob` needs alignment */
type InputName =
  | 'fname'
  | 'lname'
  | 'gender'
  | 'birth'
  | 'about'
  | 'timeframe'
  | 'email'
  | 'phone'
  | 'nationality'
  | 'car'
  | 'driver'

type Entry = [InputName, string]

export function useFormattedData(data: Record<string, string>) {
  const t = useDictionary('form')

  const gender: Record<string, string> = {
    female: t('gender.female'),
    male: t('gender.male'),
    other: t('gender.other'),
  }

  const formatEntry = ([key, value]: Entry) => {
    if (key === 'gender') {
      return `${t(key)}: ${gender[value]}`
    }
    if (key === 'timeframe' || key === 'about') {
      return `\r\n${t(key)}:\r\n${value}`
    }
    if (key === 'car' || key === 'driver') {
      // use boolean value instead, value ? t('yes') : t('no')
      return `${t(key)}: ${value ?? 'no'}`
    }
    if (key === 'birth') {
      return `${t('dob')}: ${value}`
    }
    return `${t(key as keyof Form)}: ${value}`
  }

  return (Object.entries(data) as Entry[]).map(formatEntry).join('\r\n')
}

export function formatData<T extends ObjectLike>(data: T) {
  return [
    `First name: ${data.fname ?? ''}`,
    `Last name: ${data.lname ?? ''}`,
    `Gender: ${data.gender ?? ''}`,
    `Year of Birth: ${data.birth ?? ''}`,
    `Email: ${data.email ?? ''}`,
    `Phone: ${data.phone ?? ''}`,
    `Nationality: ${data.nationality ?? ''}`,
    `Arrives by car: ${data.car ?? 'no'}`,
    `Driving license: ${data.driver ?? 'no'}`,
    `\r\nTimeframe:\r\n${data.timeframe ?? ''}`,
    `\r\nPresentation:\r\n${data.about ?? ''}`,
  ].join('\r\n')
}
