const riotcontrol = require('riotcontrol');


function Router() {

    function setPageToTrack(route, subroute) {
        let page = '/';
        page += route ? (subroute ? route + '/' + subroute : route) : 'index';

        if (ga) {
            ga('set', 'page', page);
            ga('send', 'pageview');
        }
    }

    function onRoute(route, subroute) {
        riotcontrol.trigger('ROUTE', route);
        setPageToTrack(route, subroute);
    }

    riot.route(onRoute);
    riot.route.base('/#');
    riot.route.stop();
    riot.route.start(true);
};

module.exports = Router();
