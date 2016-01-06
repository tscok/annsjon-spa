const riotcontrol = require('riotcontrol');


const router = function() {

    let script = document.createElement('script');

    // function addBundle(route) {
    //     if (route) {
    //         script.src = 'build/Page.js'
    //     } else {
    //         script.src = 'build/Index.js'
    //     }
    //     document.body.appendChild(script);
    // }

    function onRoute(route, id, action) {
        riotcontrol.trigger('ROUTE', route);
        // addBundle(route);
    }

    riot.route(onRoute);
    riot.route.base('/#');
    riot.route.stop();
    riot.route.start(true);
};

module.exports = router();
