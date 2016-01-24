require('./raw')

<page-form>
    <form name="application" class="page-form__application" onsubmit={ onSubmit } if={ showForm }>
        <div class="row">
            <div class="six columns">
                <label>{ getText('first-name') }</label>
                <input type="text" name="fname" class="u-full-width" required>
            </div>
            <div class="six columns">
                <label>{ getText('last-name') }</label>
                <input type="text" name="lname" class="u-full-width" required>
            </div>
        </div>
        <div class="row">
            <div class="six columns">
                <label>{ getText('volunteer_gender') }</label>
                <label class="u-pull-left">
                    <input type="radio" name="gender" value="Female" required>
                    <span class="label-body">{ getText('volunteer_gender-f') }</span>
                </label>
                <label class="u-pull-left" style="margin-left:20px;">
                    <input type="radio" name="gender" value="Male" required>
                    <span class="label-body">{ getText('volunteer_gender-m') }</span>
                </label>
            </div>
            <div class="six columns">
                <label>{ getText('volunteer_birthyear') }</label>
                <select name="birth" class="u-full-width" required>
                    <option value="" selected>{ getText('select') }</option>
                    <option each={ year, i in birthYears() } value={ year }>{ year }</option>
                </select>
            </div>
        </div>
        <label>{ getText('volunteer_about') }<span class="label-body">{ getText('volunteer_about-hint') }</span></label>
        <textarea name="about" class="u-full-width" required></textarea>
        <div class="row">
            <div class="six columns">
                <label>{ getText('email') }</label>
                <input type="email" name="email" class="u-full-width" required>
            </div>
            <div class="six columns">
                <label>{ getText('phone') }</label>
                <input type="text" name="phone" class="u-full-width" required>
            </div>
        </div>
        <div class="row">
            <div class="six columns">
                <label>{ getText('volunteer_arrival-date') }<span class="label-body form-error-hint" if={ dates.arrive.error }>{ getText('volunteer_invalid-date') }</span></label>
                <input type="date" name="arrive" class="u-full-width {form-error: dates.arrive.error}" onchange={ onDateInput } placeholder="yyyy-mm-dd" required>
            </div>
            <div class="six columns">
                <label>{ getText('volunteer_departure-date') }<span class="label-body form-error-hint" if={ dates.depart.error }>{ getText('volunteer_invalid-date') }</span></label>
                <input type="date" name="depart" class="u-full-width {form-error: dates.depart.error}" onchange={ onDateInput } placeholder="yyyy-mm-dd" required>
            </div>
        </div>
        <p if={ dates.misplaced } class="form-error-hint">{ getText('volunteer_dates-misplaced') }</p>
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
        <p if={ dates.errors }>{ getText('volunteer_errors') }</p>
        <p if={ isUndelivered }><raw content={ getText('volunteer_undelivered') }/></p>
        <button type="submit" name="submit" class="button-primary" disabled={ dates.errors || isSubmitting }>{ getText('volunteer_submit') }</button>
    </form>
    <div class="page-form__thank-you" if={ showThanks }>
        <h4 class="page-form__tahnk-you--title">{ getText('thank-you') }<span if={ applyee }>, { applyee }</span>!</h4>
        <p class="page-form__tahnk-you--body">{ getText('volunteer_confirmation') }</p>
    </div>

    <script>
        const riotcontrol = require('riotcontrol')
        const mygettext = require('../data/mygettext')
        const subRoute = riot.route.create()

        this.dates = {}
        this.showForm = false
        this.showThanks = false
        this.isSubmitting = false
        this.isUndelivered = false

        this.birthYears = () => {
            let minYear = new Date().getFullYear() - 15,
                maxYear = new Date().getFullYear() - 85,
                years = []
            while ( minYear >= maxYear ) {
                years.push(minYear--)
            }
            return years
        }

        this.isFutureDate = (str) => {
            return new Date(str) > new Date()
        }

        this.isInvalidDate = (str) => {
            return str && !this.isFutureDate(str)
        }

        this.isInvalidOrder = () => {
            return new Date(this['arrive'].value) >= new Date(this['depart'].value)
        }

        this.onDateInput = (ev) => {
            this.dates[ev.target.name] = {
                value: ev.target.value,
                error: this.isInvalidDate(ev.target.value)
            }

            let arrive = this.dates.arrive
            let depart = this.dates.depart

            if ((arrive && !arrive.error) && (depart && !depart.error)) {
                this.dates.misplaced = this.isInvalidOrder()
            }

            this.dates.errors = (arrive && arrive.error) || (depart && depart.error) || this.dates.misplaced
        }

        this.onSubmit = () => {
            if (this.dates.errors) {
                return
            }
            riotcontrol.trigger('FORM_APPLICATION', this.application)
        }

        this.onReset = () => {
            this.application.reset()
            this.dates = {}
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
            this.update({ showForm: false })
        })

        subRoute('volunteer', () => {
            this.update({ showForm: false })
        })

        subRoute('volunteer/apply', () => {
            this.update({ showForm: true })
        })

        this.on('mount', () => {
            this.getText = mygettext
        })
    </script>
</page-form>
