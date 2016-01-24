const riotcontrol = require('riotcontrol');

function Stores() {
    let SiteLanguage = require('./site-language');
    let SiteNavigation = require('./site-navigation');
    let PageContent = require('./page-content');
    let PageForm = require('./page-form');

    riotcontrol.addStore(new SiteLanguage());
    riotcontrol.addStore(new SiteNavigation());
    riotcontrol.addStore(new PageContent());
    riotcontrol.addStore(new PageForm());
};

module.exports = Stores();
