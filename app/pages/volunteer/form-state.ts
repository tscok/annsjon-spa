export type FormState = {
  firstName: string
  lastName: string
  gender?: Gender
  birthyear?: string
  about: string
  arrival?: string
  departure?: string
  email: string
  phone?: string
  nationality?: string
  arrivesByCar?: boolean
  drivingLicense?: boolean
}

export type Gender = 'female' | 'male' | 'other'

export const formState: FormState = {
  firstName: '',
  lastName: '',
  gender: undefined,
  birthyear: undefined,
  about: '',
  arrival: undefined,
  departure: undefined,
  email: '',
  phone: '',
  nationality: '',
  arrivesByCar: false,
  drivingLicense: false,
}
