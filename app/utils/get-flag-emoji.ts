// https://gomakethings.com/getting-emoji-from-country-codes-with-vanilla-javascript/
export function getFlagEmoji(countryCode: string) {
  return String.fromCodePoint(
    ...countryCode
      .toUpperCase()
      .split('')
      .map((char) => 127397 + char.charCodeAt(0))
  )
}
