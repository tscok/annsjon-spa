import RiotRoute from 'riot-route';
import RiotControl from 'riotcontrol';

var Cookies = require('js-cookie');

var contents = {};

var req_en = require.context("../../md/en", false, /\.md$/);
var req_se = require.context("../../md/se", false, /\.md$/);

function setContents(context, lang) {
    contents[lang] = {};

    context.keys().forEach(function(key) {
        contents[lang][key] = context(key);
    });
}

setContents(req_en, 'en');
setContents(req_se, 'se');


function PageContent() {
    riot.observable(this);

    var self = this;
    var subRoute = RiotRoute.create();
    var lang, content;

    function setPageContent(data) {
        if (!data) {
            data = contents[lang]['./404.md'];
        }

        RiotControl.trigger('SET_PAGE_CONTENT', data);
    }

    // Main routes
    
    this.on('ROUTE', function(route) {
        lang = Cookies.get('language');

        content = contents[lang]['./'+ route +'.md'];
        setPageContent(content);
    });

    // Subroutes

    subRoute('guide/*', function(name) {
        content = contents[lang]['./guide-'+ name +'.md'];
        setPageContent(content);
    });

    subRoute('projects/*', function(name) {
        content = contents[lang]['./projects-'+ name +'.md'];
        setPageContent(content);
    });

    subRoute('reports/*', function(name) {
        content = contents[lang]['./reports-'+ name +'.md'];
        setPageContent(content);
    });

    subRoute('volunteer/*', function(name) {
        content = contents[lang]['./volunteer-'+ name +'.md'];
        setPageContent(content);
    });

    /**
     * Navigate to route in specified language.
     * Example: #about/?lang=en
     */
    subRoute('*/..', function(name) {
        let q = RiotRoute.query();
        if (q.lang) {
            Cookies.set('language', q.lang);
            RiotRoute(name);
        }
    });
}

module.exports = PageContent;
