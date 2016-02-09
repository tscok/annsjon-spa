require('./site-header')
require('./site-footer')

require('./layout-index')
require('./layout-page')

<site-app>
    <div class="site">
        <header riot-tag="site-header" class="site-header"></header>
        <main riot-tag="layout-index" if={ index }></main>
        <main riot-tag="layout-page" if={ !index } class="page"></main>
    </div>
    <footer riot-tag="site-footer" class="site-footer"></footer>

    <script>
        const riotcontrol = require('riotcontrol')
        const utils = require('../utils')

        riotcontrol.on('ROUTE', (route) => {
            this.update({index: !route ? true : false })
        })

        riotcontrol.on('SITE_LANGUAGE', () => {
            this.update()
            utils.scrollUp()
        })
    </script>
</site-app>
