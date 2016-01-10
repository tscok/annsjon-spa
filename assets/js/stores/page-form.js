const xhr = require('xhr');

function PageForm() {
    riot.observable(this);

    this.send = (data) => {
        let xhrOptions = {
            uri: 'service.php',
            json: data
        };
        
        xhr.post(xhrOptions, (err, resp, body) => {
            if (!err && resp.statusCode == 200) {
                if (body === 'MAIL_SENT') {
                    this.trigger('FORM_APPLICATION_SENT');
                } else {
                    this.trigger('FORM_APPLICATION_NOT_SENT');
                }
            }
        });
    }

    this.on('FORM_APPLICATION', this.send);
}

module.exports = PageForm;
