const EMAILS = {
  INFO: 'info@annsjon.org',
  LARS: 'lars.falkdalen@annsjon.org',
  MIKAEL: 'webmaster@annsjon.org',
  PETER: 'peter.bahlenberg@annsjon.org',
  ULLA: 'ulla.falkdalen@annsjon.org',
  THOMAS: 'thomas.holmberg@annsjon.org',
}

const NAMES = {
  INFO: '',
  LARS: 'Lars Falkdalen Lindahl',
  MIKAEL: 'Mikael Carlsson',
  PETER: 'Peter Bahlenberg',
  ULLA: 'Ulla Falkdalen',
  THOMAS: 'Thomas Holmberg',
}

const ROLES = {
  CASHIER: 'cashier',
  CHAIRMAN: 'chairman',
  RECRUITER: 'recruiter',
  WEBMASTER: 'webmaster',
}

export const INFO = { email: EMAILS.INFO, name: NAMES.INFO }
export const LARS = { email: EMAILS.LARS, name: NAMES.LARS, role: ROLES.CASHIER }
export const MIKAEL = { email: EMAILS.MIKAEL, name: NAMES.MIKAEL, role: ROLES.WEBMASTER }
export const PETER = { email: EMAILS.PETER, name: NAMES.PETER, role: '' }
export const ULLA = { email: EMAILS.ULLA, name: NAMES.ULLA, role: ROLES.RECRUITER }
export const THOMAS = { email: EMAILS.THOMAS, name: NAMES.THOMAS, role: ROLES.CHAIRMAN }

export default { INFO, LARS, MIKAEL, PETER, ULLA, THOMAS }
