import Cookies from 'js-cookie';
import RiotControl from 'riotcontrol';

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

    this.isInHeader = function(obj) {
        return header.some(function(elem) { return elem === obj.href });
    };

    this.getHeaderLinks = function(lang) {
        return links[lang].filter(this.isInHeader);
    }
    
    this.on('ROUTE', function(route) {
        const lang = Cookies.get('language');

        this.trigger('SITE_NAVIGATION_HEADER', this.getHeaderLinks(lang));
        this.trigger('SITE_NAVIGATION_FOOTER', links[lang]);
        this.trigger('SITE_LANGUAGE', lang);
    });

    RiotControl.on('SITE_LANGUAGE', (newLang) => {
        this.trigger('SITE_NAVIGATION_HEADER', this.getHeaderLinks(newLang));
        this.trigger('SITE_NAVIGATION_FOOTER', links[newLang]);
    })
}

module.exports = SiteNavigation;
