export const parseData = (data: FormData) => {
  const params = Object.fromEntries(data)
  return formatData(params)
}

type ObjectLike = Record<string, string | FormDataEntryValue>

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
