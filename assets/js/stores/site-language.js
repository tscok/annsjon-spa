let Cookies = require('js-cookie');

function SiteLanguage() {
    riot.observable(this);

    this.setCookie = () => {
        let oldCookie = Cookies.get('language') || 'se';
        let newCookie = oldCookie === 'se' ? 'en' : 'se';
        
        Cookies.set('language', newCookie, { expires: 365 });
        this.trigger('SITE_LANGUAGE', Cookies.get('language'));
        
        riot.route('/');
        window.scrollTo(0,0);
    };

    this.on('SET_SITE_LANGUAGE', this.setCookie);
};

module.exports = SiteLanguage;
