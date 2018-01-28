import riotRoute from 'riot-route';
import Cookies from 'js-cookie';

function SiteLanguage() {
    riot.observable(this);

    // Set default cookie if non exists.
    if (!Cookies.get('language')) {
        Cookies.set('language', 'se', { expires: 365 });
    }

    this.setCookie = function() {
        const oldCookie = Cookies.get('language');
        const newCookie = oldCookie === 'se' ? 'en' : 'se';
        
        Cookies.set('language', newCookie, { expires: 365 });
        this.trigger('SITE_LANGUAGE', Cookies.get('language'));
        
        riotRoute('/');
    };

    this.on('SET_SITE_LANGUAGE', this.setCookie);
};

module.exports = SiteLanguage;
