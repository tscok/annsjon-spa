const links = {
    se: [
        { href: 'iba', label: 'Fågelskydd' },
        { href: 'guide', label: 'Skådarguide' },
        { href: 'projects', label: 'Projekt' },
        { href: 'reports', label: 'Rapporter' },
        { href: 'volunteer', label: 'Medarbetare' },
        { href: 'about', label: 'Föreningen' },
        { href: 'contact', label: 'Kontakt' },
    ],
    en: [
        { href: 'volunteer', label: 'Volunteer' },
        { href: 'about', label: 'About' },
        { href: 'contact', label: 'Contact' },
    ],
}

const header = ['guide', 'projects', 'volunteer', 'about', 'contact']

export const getFooterLinks = (language) => links[language]

export const getHeaderLinks = (language) =>
    links[language].filter((obj) => header.includes(obj.href))
