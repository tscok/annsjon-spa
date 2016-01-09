function PageForm() {
    riot.observable(this);

    this.on('FORM_APPLICATION', (form) => {
        console.log(form);
    });
}

module.exports = PageForm;
