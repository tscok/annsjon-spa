function PageForm() {
    riot.observable(this);

    this.sendApplication = function(form) {
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'service.php', true);

        this.trigger('FORM_APPLICATION_LOADING');

        const self = this
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const name = xhr.responseText;
                self.trigger('FORM_APPLICATION_SUCCESS', name ? name : '');
            } else {
                self.trigger('FORM_APPLICATION_FAILURE');
            }
        }

        xhr.send(formData);
    }

    this.on('FORM_APPLICATION', this.sendApplication);
}

module.exports = PageForm;
