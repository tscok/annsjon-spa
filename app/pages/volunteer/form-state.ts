export type FormState = {
  fname: string
  lname: string
  gender?: 'female' | 'male' | 'other'
  birth: string
  about: string
  timeframe: string
  email: string
  phone: string
  nationality: string
  car: boolean
  driver: boolean
}

export const formState: FormState = {
  fname: '',
  lname: '',
  gender: undefined,
  birth: '',
  about: '',
  timeframe: '',
  email: '',
  phone: '',
  nationality: '',
  car: false,
  driver: false,
}
