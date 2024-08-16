import { Dictionary, I18nKey } from './types'
import { useDictionary } from './use-dictionary'

export function Translate<N extends keyof Dictionary>({
  i18nKey,
  namespace,
}: {
  i18nKey: I18nKey<N>
  namespace: N
}) {
  const t = useDictionary(namespace)
  return t(i18nKey)
}
