const EMAILS = {
  INFO: 'info@annsjon.org',
  LARS: 'lars.falkdalen@annsjon.org',
  MIKAEL: 'webmaster@annsjon.org',
  PETER: 'peter.bahlenberg@annsjon.org',
  ULLA: 'ulla.falkdalen@annsjon.org',
}

const NAMES = {
  INFO: '',
  LARS: 'Lars Falkdalen Lindahl',
  MIKAEL: 'Mikael Carlsson',
  PETER: 'Peter Bahlenberg',
  ULLA: 'Ulla Falkdalen',
}

const ROLES = {
  LARS: 'cashier',
  MIKAEL: 'webmaster',
  PETER: 'chairman',
  ULLA: 'recruiter',
}

export const INFO = { email: EMAILS.INFO, name: NAMES.INFO }
export const LARS = { email: EMAILS.LARS, name: NAMES.LARS, role: ROLES.LARS }
export const MIKAEL = { email: EMAILS.MIKAEL, name: NAMES.MIKAEL, role: ROLES.MIKAEL }
export const PETER = { email: EMAILS.PETER, name: NAMES.PETER, role: ROLES.PETER }
export const ULLA = { email: EMAILS.ULLA, name: NAMES.ULLA, role: ROLES.ULLA }

export default { INFO, LARS, MIKAEL, PETER, ULLA }
