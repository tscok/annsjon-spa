import './layout-index.tag'
import './layout-page.tag'
import './site-footer.tag'
import './site-header.tag'

<site-app>
    <div class="site">
        <header data-is="site-header" class="site-header" />
        <main data-is="layout-index" if={ isIndex } />
        <main data-is="layout-page" if={ !isIndex } class="page" />
    </div>
    <footer data-is="site-footer" class="site-footer" />

    <script>
        import RiotControl from 'riotcontrol'
        import utils from '../utils'

        const self = this

        RiotControl.on('ROUTE', function(route) {
            self.update({ isIndex: route == '' })
        })

        RiotControl.on('SITE_LANGUAGE', function() {
            self.update()
            utils.scrollUp()
        })
    </script>
</site-app>
