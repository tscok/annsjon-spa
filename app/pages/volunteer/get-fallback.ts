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

function uppercase(text: string) {
  return text.slice(0, 1).toUpperCase() + text.slice(1)
}

function parseData<T extends string>(data: FormData) {
  return Object.fromEntries(data) as Record<T, string>
}

export function getFallback(formData: FormData) {
  const data = parseData<InputName>(formData)
  const fields = [
    ['First name', data.fname],
    ['Last name', data.lname],
    ['Gender', uppercase(data.gender)],
    ['Year of Birth', data.birth],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Nationality', data.nationality],
    ['Arrives by car', data.car ? 'Yes' : 'No'],
    ['Driving license', data.driver ? 'Yes' : 'No'],
    ['\r\nTimeframe', `\r\n${data.timeframe}`],
    ['\r\nPresentation', `\r\n${data.about}`],
  ]
  return fields.flatMap((entry) => entry.join(': ')).join('\r\n')
}