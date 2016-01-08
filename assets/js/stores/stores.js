const riotcontrol = require('riotcontrol');

function Stores() {
    let SiteLanguage = require('./site-language');
    let SiteNavigation = require('./site-navigation');
    let PageContent = require('./page-content');

    riotcontrol.addStore(new SiteLanguage());
    riotcontrol.addStore(new SiteNavigation());
    riotcontrol.addStore(new PageContent());
};

module.exports = Stores();