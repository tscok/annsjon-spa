export function parsePhone(tel: string, countryCode = '46'): string {
  let parsed = tel.replaceAll(' ', '').replace('-', '')
  if (parsed.startsWith('0')) {
    parsed = `+${countryCode}${parsed.slice(1)}`
  }
  return parsed
}
