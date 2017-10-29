import riotRoute from 'riot-route';
let Cookies = require('js-cookie');

function SiteLanguage() {
    riot.observable(this);

    // Set default cookie if non exists.
    if (!Cookies.get('language')) {
        Cookies.set('language', 'se', { expires: 365 });
    }

    this.setCookie = () => {
        let oldCookie = Cookies.get('language');
        let newCookie = oldCookie === 'se' ? 'en' : 'se';
        
        Cookies.set('language', newCookie, { expires: 365 });
        this.trigger('SITE_LANGUAGE', Cookies.get('language'));
        
        riotRoute('/');
    };

    this.on('SET_SITE_LANGUAGE', this.setCookie);
};

module.exports = SiteLanguage;
