import { Dictionary } from './types'
import { useDictionary } from './use-dictionary'

export function Translate<N extends keyof Dictionary>({
  i18nKey,
  namespace,
}: {
  i18nKey: keyof Dictionary[N]
  namespace: N
}) {
  const t = useDictionary(namespace)
  return t(i18nKey) as string
}
