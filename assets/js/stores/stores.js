import RiotControl from 'riotcontrol';

import SiteLanguage from './site-language';
import SiteNavigation from './site-navigation';
import PageContent from './page-content';
import PageForm from './page-form';


function Stores() {
    RiotControl.addStore(new SiteLanguage());
    RiotControl.addStore(new SiteNavigation());
    RiotControl.addStore(new PageContent());
    RiotControl.addStore(new PageForm());
};

export default Stores()
