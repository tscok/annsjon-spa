<site-header>
    <div class="container">
        <div class="row">
            <a href="#" class={ block('logo') }>Ånnsjöns fågelstation</a>
            <div id="burger" class={ block('burger') } onclick={ toggleMenu }>
                <span class={ block('burger-bar', { 'close': menuOpen }) }></span>
            </div>
        </div>
        <nav class={ block('menu', { 'open': menuOpen }) }>
            <a each="{ links }" href="#{ href }" class={ block('link', href, isActive(href)) }>{ label }</a>
        </nav>
    </div>

    <script>
        import RiotControl from 'riotcontrol'
        import purebem from 'purebem'

        this.menuOpen = false

        this.block = purebem.of('site-header')
        
        this.isActive = (href) => {
            return this.route === href ? 'active' : '';
        }

        this.toggleMenu = () => {
            this.update({menuOpen: this.menuOpen ? false : true})
        }

        RiotControl.on('ROUTE', (route) => {
            this.update({route: route, menuOpen: false})
        })

        RiotControl.on('SITE_NAVIGATION_HEADER', (links) => {
            this.links = links
        })
    </script>
</site-header>
