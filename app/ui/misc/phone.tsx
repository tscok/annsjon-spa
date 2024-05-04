import { parsePhone } from 'app/utils/parse-phone'
import { A } from '../text/a'

export const Phone = ({ tel }: { tel: string }) => (
  <A href={`tel:${parsePhone(tel)}`}>{tel}</A>
)
