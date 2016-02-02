const Cookies = require('js-cookie');
const riotcontrol = require('riotcontrol');

const links = {
    se: [
        { href: 'iba', label: 'Fågelskydd' },
        { href: 'guide', label: 'Skådarguide' },
        { href: 'projects', label: 'Projekt' },
        { href: 'reports', label: 'Rapporter' },
        { href: 'volunteer', label: 'Medarbetare' },
        { href: 'about', label: 'Föreningen' },
        { href: 'contact', label: 'Kontakt' }
    ],
    en: [
        { href: 'volunteer', label: 'Volunteer' },
        { href: 'about', label: 'About' },
        { href: 'contact', label: 'Contact' }
    ]
};

const header = ['guide','projects','volunteer','about','contact'];

function SiteNavigation(args) {
    riot.observable(this);

    let lang;

    this.isInHeader = (obj) => {
        return header.some(elem => elem === obj.href);
    };

    this.getHeaderLinks = (lang) => {
        return links[lang].filter(this.isInHeader);
    }
    
    this.on('ROUTE', (route) => {
        lang = Cookies.get('language');

        this.trigger('SITE_NAVIGATION_HEADER', this.getHeaderLinks(lang));
        this.trigger('SITE_NAVIGATION_FOOTER', links[lang]);
        this.trigger('SITE_LANGUAGE', lang);
    });

    riotcontrol.on('SITE_LANGUAGE', (newLang) => {
        this.trigger('SITE_NAVIGATION_HEADER', this.getHeaderLinks(newLang));
        this.trigger('SITE_NAVIGATION_FOOTER', links[newLang]);
    })
}

module.exports = SiteNavigation;
