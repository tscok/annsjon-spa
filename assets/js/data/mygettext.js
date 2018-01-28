import Cookies from 'js-cookie';
import translations from './translations';

function MyGetText(key) {
    const lang = Cookies.get('language');

    if (translations[key] && translations[key][lang]) {
        return translations[key][lang];
    }
    
    return key;
}

module.exports = MyGetText;
