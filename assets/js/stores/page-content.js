import RiotRoute from 'riot-route';
import RiotControl from 'riotcontrol';
import Cookies from 'js-cookie';

const contents = {};
const req_en = require.context("../../md/en", false, /\.md$/);
const req_se = require.context("../../md/se", false, /\.md$/);

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

    const self = this;
    const subRoute = RiotRoute.create();
    let lang = Cookies.get('language');

    function setPageContent(data) {
        if (!data) {
            data = contents[lang]['./404.md'];
        }

        RiotControl.trigger('SET_PAGE_CONTENT', data);
    }

    // Main routes
    
    this.on('ROUTE', function(route) {
        lang = Cookies.get('language');

        const content = contents[lang]['./'+ route +'.md'];
        setPageContent(content);
    });

    // Subroutes

    subRoute('guide/*', function(name) {
        const content = contents[lang]['./guide-'+ name +'.md'];
        setPageContent(content);
    });

    subRoute('projects/*', function(name) {
        const content = contents[lang]['./projects-'+ name +'.md'];
        setPageContent(content);
    });

    subRoute('reports/*', function(name) {
        const content = contents[lang]['./reports-'+ name +'.md'];
        setPageContent(content);
    });

    subRoute('volunteer/*', function(name) {
        const content = contents[lang]['./volunteer-'+ name +'.md'];
        setPageContent(content);
    });

    /**
     * Navigate to route in specified language.
     * Example: #about/?lang=en
     */
    subRoute('*/..', function(name) {
        const q = RiotRoute.query();
        if (q.lang) {
            Cookies.set('language', q.lang);
            RiotRoute(name);
        }
    });
}

export default PageContent
