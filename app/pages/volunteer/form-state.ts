export type FormState = {
  fname: string
  lname: string
  gender: 'female' | 'male' | 'other' | null
  birth?: string
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
  gender: null,
  birth: undefined,
  about: '',
  timeframe: '',
  email: '',
  phone: '',
  nationality: '',
  car: false,
  driver: false,
}
