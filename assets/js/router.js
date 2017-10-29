import RiotRoute from 'riot-route';
import RiotControl from 'riotcontrol';


function Router() {

    function setPageToTrack(route, subroute) {
        let page = '/';
        page += route ? (subroute ? route + '/' + subroute : route) : 'index';

        if (window.ga) {
            window.ga('set', 'page', page);
            window.ga('send', 'pageview');
        }
    }

    function onRoute(route, subroute) {
        RiotControl.trigger('ROUTE', route, subroute);
        setPageToTrack(route, subroute);
    }

    RiotRoute(onRoute);
    RiotRoute.base('/#');
    RiotRoute.stop();
    RiotRoute.start(true);
};

export default Router;
