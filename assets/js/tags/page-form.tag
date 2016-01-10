<page-form>
    <form name="application" onsubmit={ onSubmit } if={ showForm }>
        <label>Your name</label>
        <input type="text" name="name" class="u-full-width" required>
        <label>Message<span class="label-body">Tell us about yourself and any previous experience with birds</span></label>
        <textarea name="message" class="u-full-width" required></textarea>
        <div class="row">
            <div class="six columns">
                <label>Phone number</label>
                <input type="text" name="phone" class="u-full-width">
            </div>
            <div class="six columns">
                <label>Email address</label>
                <input type="email" name="email" class="u-full-width" required>
            </div>
        </div>
        <div class="row">
            <div class="six columns">
                <label>Arrival date<span class="label-body form-error-hint" if={ dates.arrive.error }>Invalid date</span></label>
                <input type="date" name="arrive" class="u-full-width {form-error: dates.arrive.error}" onchange={ onInput } placeholder="yyyy-mm-dd" required>
            </div>
            <div class="six columns">
                <label>Departure date<span class="label-body form-error-hint" if={ dates.depart.error }>Invalid date</span></label>
                <input type="date" name="depart" class="u-full-width {form-error: dates.depart.error}" onchange={ onInput } placeholder="yyyy-mm-dd" required>
            </div>
        </div>
        <p if={ dates.misplaced } class="form-error-hint">Arrival date is later than or the same as departure.</p>
        <div class="u-cf">
            <label>Arrives with a car?</label>
            <label class="u-pull-left">
                <input type="checkbox" name="car" value="Yes">
                <span class="label-body">Yes</span>
            </label>
        </div>
        <hr>
        <p if={ dates.errors }>Please correct any errors to submit the form.</p>
        <p if={ deliveryError }><strong>Submission Error:</strong> Application was <em>not</em> sent! Please contact webmaste@annsjon.org if you keep getting this message.</p>
        <button type="submit" class="button-primary" disabled={ dates.errors }>Send</button>
        <button type="button" onclick={ onReset }>Reset</button>
    </form>
    <div if={ showThanks }>
        <h3>Thank you!</h3>
        <p>Your application has been sent. We will process it and get back to you as soon as possible.</p>
    </div>

    <script>
        const riotcontrol = require('riotcontrol')
        const serialize = require('form-serialize')
        const subRoute = riot.route.create()

        this.showForm = false
        this.showThanks = false
        this.deliveryError = false
        this.dates = {}

        this.isFutureDate = (str) => {
            return new Date(str) > new Date()
        }

        this.isInvalidDate = (str) => {
            return str && !this.isFutureDate(str)
        }

        this.isInvalidOrder = () => {
            return new Date(this['arrive'].value) >= new Date(this['depart'].value)
        }

        this.onInput = (ev) => {
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

            let form = serialize(this.application, { hash: true })
            riotcontrol.trigger('FORM_APPLICATION', form)
        }

        this.onReset = () => {
            this.application.reset()
            this.dates = {}
        }

        riotcontrol.on('FORM_APPLICATION_SENT', () => {
            this.onReset()
            this.update({showForm: false, showThanks: true})
        })
        riotcontrol.on('FORM_APPLICATION_NOT_SENT', () => {
            this.update({deliveryError: true})
        })

        riotcontrol.on('ROUTE', () => {
            this.update({showForm: false})
        })
        subRoute('volunteer/apply', () => {
            this.update({showForm: true})
        })
    </script>
</page-form>
