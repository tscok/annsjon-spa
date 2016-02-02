require('./raw')

<page-form>
    <form name="application" class="page-form__application" onsubmit={ onSubmit } if={ showForm }>
        <div class="row">
            <div class="six columns">
                <label>{ getText('first-name') }*</label>
                <input type="text" name="fname" class="u-full-width" required>
            </div>
            <div class="six columns">
                <label>{ getText('last-name') }*</label>
                <input type="text" name="lname" class="u-full-width" required>
            </div>
        </div>
        <label>{ getText('volunteer_about') }*<span class="label-body label-body--block">{ getText('volunteer_about-hint') }</span></label>
        <textarea name="about" class="u-full-width" required></textarea>
        <label>{ getText('volunteer_timeframe') }*<span class="label-body label-body--block">{ getText('volunteer_timeframe-hint') }</span></label>
        <input type="text" name="timeframe" class="u-full-width" required>
        <div class="row">
            <div class="six columns">
                <label>{ getText('email') }*</label>
                <input type="email" name="email" class="u-full-width" required>
            </div>
            <div class="six columns">
                <label>{ getText('phone') }</label>
                <input type="text" name="phone" class="u-full-width">
            </div>
        </div>
        <div class="row">
            <div class="six columns">
                <label>{ getText('volunteer_birthyear') }*</label>
                <select name="birth" class="u-full-width" required>
                    <option value="" selected>{ getText('select') }</option>
                    <option each={ year, i in birthYears() } value={ year }>{ year }</option>
                </select>
            </div>
            <div class="six columns">
                <label>{ getText('volunteer_gender') }*</label>
                <label class="u-pull-left">
                    <input type="radio" name="gender" value="Female" required>
                    <span class="label-body">{ getText('volunteer_gender-f') }</span>
                </label>
                <label class="u-pull-left" style="margin-left:20px;">
                    <input type="radio" name="gender" value="Male" required>
                    <span class="label-body">{ getText('volunteer_gender-m') }</span>
                </label>
            </div>
        </div>
        <div class="row">
            <div class="six columns">
                <label>{ getText('volunteer_car') }?</label>
                <label class="u-pull-left">
                    <input type="checkbox" name="car" value="Yes">
                    <span class="label-body">{ getText('yes') }</span>
                </label>
            </div>
            <div class="six columns">
                <label>{ getText('volunteer_driving-license') }?</label>
                <label class="u-pull-left">
                    <input type="checkbox" name="driver" value="Yes">
                    <span class="label-body">{ getText('yes') }</span>
                </label>
            </div>
        </div>
        <hr>
        <p class="page-form__mandatory"><raw content={ getText('volunteer_mandatory') }/></p>
        <p if={ isUndelivered }><raw content={ getText('volunteer_undelivered') }/></p>
        <button type="submit" name="submit" class="button-primary" disabled={ isSubmitting }>{ getText('volunteer_submit') }</button>
    </form>
    <div class="page-form__thank-you" if={ showThanks }>
        <h4 class="page-form__tahnk-you--title">{ getText('thank-you') }<span if={ applyee }>, { applyee }</span>!</h4>
        <p class="page-form__tahnk-you--body"><raw content={ getText('volunteer_confirmation') }/></p>
    </div>

    <script>
        const riotcontrol = require('riotcontrol')
        const mygettext = require('../data/mygettext')
        const serialize = require('form-serialize');
        const subRoute = riot.route.create()

        this.showForm = false
        this.showThanks = false
        this.isSubmitting = false
        this.isUndelivered = false
        this.isIncomplete = false

        this.birthYears = () => {
            let minYear = new Date().getFullYear() - 15,
                maxYear = new Date().getFullYear() - 85,
                years = []
            while ( minYear >= maxYear ) {
                years.push(minYear--)
            }
            return years
        }

        this.formIsComplete = () => {
            let valid = true
            let input = serialize(this.application, { hash: true })
            let required = ['fname','lname','about','timeframe','email','gender','birth']
            let isNotEmpty = (label) => {
                return input[label] && input[label].trim() !== '';
            }
            return required.every(isNotEmpty)
        }

        this.onSubmit = () => {
            if (!this.formIsComplete()) {
                return;
            }

            riotcontrol.trigger('FORM_APPLICATION', this.application)
        }

        this.onReset = () => {
            this.application.reset()
        }

        this.handleLoading = () => {
            this.submit.innerHTML = getText('volunteer_submitting')
            this.update({ isUndelivered: false, isSubmitting: true })
        }

        this.handleFailure = () => {
            this.submit.innerHTML = getText('volunteer_submit')
            this.update({ isUndelivered: true, isSubmitting: false })
        }

        this.handleSuccess = (name) => {
            this.onReset()
            this.update({ showForm: false, showThanks: true, applyee: name })
        }

        riotcontrol.on('FORM_APPLICATION_LOADING', this.handleLoading)
        riotcontrol.on('FORM_APPLICATION_FAILURE', this.handleFailure)
        riotcontrol.on('FORM_APPLICATION_SUCCESS', this.handleSuccess)

        riotcontrol.on('ROUTE', () => {
            this.update({ showForm: false, showThanks: false })
        })

        subRoute('volunteer', () => {
            this.update({ showForm: false, showThanks: false })
        })

        subRoute('volunteer/apply', () => {
            this.update({ showForm: true, showThanks: false })
        })

        this.on('mount', () => {
            this.getText = mygettext
        })
    </script>
</page-form>
