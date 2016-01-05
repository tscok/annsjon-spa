require('./site-header')
require('./site-footer')

require('./layout-index')
require('./layout-page')

<site-app>
    <div class="site">
        <site-header></site-header>
        <layout-index if={ index }></layout-index>
        <layout-page if={ !index }></layout-page>
    </div>
    <site-footer></site-footer>

    <script>
        var riotcontrol = require('riotcontrol')

        riotcontrol.on('route', (route) => {
            this.update({index: !route ? true : false })
        })
    </script>
</site-app>