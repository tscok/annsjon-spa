require('./site-header')
require('./site-footer')

require('./layout-index')
require('./layout-page')

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

        RiotControl.on('ROUTE', (route) => {
            this.update({ isIndex: route == '' })
        })

        RiotControl.on('SITE_LANGUAGE', () => {
            this.update()
            utils.scrollUp()
        })
    </script>
</site-app>
