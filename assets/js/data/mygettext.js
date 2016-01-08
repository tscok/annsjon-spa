const Cookies = require('js-cookie');
const translations = require('./translations');

function MyGetText(key) {
    let lang = Cookies.get('language');

    if (translations[key] && translations[key][lang]) {
        return translations[key][lang];
    }
    
    return key;
}

module.exports = MyGetText;
