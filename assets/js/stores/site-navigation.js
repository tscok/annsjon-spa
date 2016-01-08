const Cookies = require('js-cookie');
const riotcontrol = require('riotcontrol');

const links = {
    se: [
        { href: 'iba', label: 'Fågelskydd' },
        { href: 'guide', label: 'Skådarguide' },
        { href: 'projects', label: 'Projekt' },
        { href: 'reports', label: 'Rapporter' },
        { href: 'about', label: 'Föreningen' },
        { href: 'contact', label: 'Kontakt' }
    ],
    en: [
        { href: 'about', label: 'About' },
        { href: 'contact', label: 'Contact' }
    ]
};

function SiteNavigation(args) {
    riot.observable(this);

    let lang;
    
    this.on('ROUTE', (route) => {
        lang = Cookies.get('language');

        this.trigger('SITE_NAVIGATION', links[lang]);
        this.trigger('SITE_LANGUAGE', lang);
    });

    riotcontrol.on('SITE_LANGUAGE', (newLang) => {
        this.trigger('SITE_NAVIGATION', links[newLang]);
    })
}

module.exports = SiteNavigation;
