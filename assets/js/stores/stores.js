var riotcontrol = require('riotcontrol');

var stores = function() {
    var pageContent = require('./page-content');

    riotcontrol.addStore(new pageContent());
};

module.exports = stores;