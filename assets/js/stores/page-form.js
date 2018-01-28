function PageForm() {
    riot.observable(this);

    this.sendApplication = function(form) {
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'service.php', true);

        this.trigger('FORM_APPLICATION_LOADING');
        
        xhr.onload = function(e) {
            if (e.target.status == 200) {
                const name = e.target.responseText
                this.trigger('FORM_APPLICATION_SUCCESS', name ? name : '');
            } else {
                this.trigger('FORM_APPLICATION_FAILURE');
            }
        };

        xhr.send(formData);
    }

    this.on('FORM_APPLICATION', this.sendApplication);
}

module.exports = PageForm;
