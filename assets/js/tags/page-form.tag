<page-form>
    <div if={ display }>
        <div>first name</div>
        <div>last name</div>
        <div>presentation</div>
        <div>phone</div>
        <div>email</div>
        <div>date from</div>
        <div>date to</div>
        <div>with car</div>
    </div>

    <script>
        this.display = false
        let subRoute = riot.route.create()
        let riotcontrol = require('riotcontrol')

        riotcontrol.on('ROUTE', (name) => {
            this.update({display: false})
        })
        subRoute('volunteer/apply', () => {
            this.update({display: true})
        })
    </script>
</page-form>
