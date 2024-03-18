export const parseData = (data: FormData) => {
  const params = Object.fromEntries(data)
  return [
    `First name: ${params.fname ?? ''}`,
    `Last name: ${params.lname ?? ''}`,
    `Gender: ${params.gender ?? ''}`,
    `Year of Birth: ${params.birth ?? ''}`,
    `Email: ${params.email ?? ''}`,
    `Phone: ${params.phone ?? ''}`,
    `Nationality: ${params.nationality ?? ''}`,
    `Arrives by car: ${params.car ?? 'no'}`,
    `Driving license: ${params.driver ?? 'no'}`,
    `\r\nTimeframe:\r\n${params.timeframe ?? ''}`,
    `\r\nPresentation:\r\n${params.about ?? ''}`,
  ].join('\r\n')
}
