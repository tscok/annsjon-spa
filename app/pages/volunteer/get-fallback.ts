import { FormState } from './form-state'

function uppercase(text: string = ''): string {
  return text.slice(0, 1).toUpperCase() + text.slice(1)
}

export function getFallback(state: FormState) {
  const fields = [
    ['First name', state.fname],
    ['Last name', state.lname],
    ['Gender', uppercase(state.gender)],
    ['Year of Birth', state.birth],
    ['Email', state.email],
    ['Phone', state.phone],
    ['Nationality', state.nationality],
    ['Arrives by car', state.car ? 'Yes' : 'No'],
    ['Driving license', state.driver ? 'Yes' : 'No'],
    ['\r\nTimeframe', `\r\n${state.timeframe}`],
    ['\r\nPresentation', `\r\n${state.about}`],
  ]
  return fields.flatMap((entry) => entry.join(': ')).join('\r\n')
}
