// Styling
import '../less/main.less';

// RiotControl Stores
import './stores/stores';

// RiotJS tag(s)
import './tags/site-app';

// RiotJS routing
import Router from './router';


riot.mount('*');
Router();
