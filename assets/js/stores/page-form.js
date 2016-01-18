// require('dotenv').load();
console.log('env', process.env);

function PageForm() {
    riot.observable(this);

    this.send = (data) => {
        console.log('form data', data);
    }

    this.on('FORM_APPLICATION', this.send);
}

module.exports = PageForm;
