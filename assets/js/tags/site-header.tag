let riotcontrol = require('riotcontrol')
let purebem = require('purebem')

<site-header>
    <header class={ block() }>
        <div class="container">
            <div class="row">
                <a href="#" class={ block('logo') }>Ånnsjöns fågelstation</a>
                <div id="burger" class={ block('burger') } onclick={ toggleMenu }>
                    <span class={ block('burger-bar', { 'close': menuOpen }) }></span>
                </div>
            </div>
            <nav class={ block('menu', { 'open': menuOpen }) }>
                <a each="{ links }" href="#{ href }" class={ block('link', href, isActive()) }>{ label }</a>
            </nav>
        </div>
    </header>

    <script>
        let self = this
        
        this.menuOpen = false

        this.block = purebem.of('site-header')
        
        this.isActive = function() {
            return self.route === this._item.href ? 'active' : null
        }

        this.toggleMenu = () => {
            this.update({menuOpen: this.menuOpen ? false : true})
        }

        this.links = [
            { href: 'iba', label: 'Fågelskydd' },
            { href: 'guide', label: 'Skådarguide' },
            { href: 'projects', label: 'Projekt' },
            { href: 'reports', label: 'Rapporter' },
            { href: 'about', label: 'Föreningen' },
            { href: 'contact', label: 'Kontakt' }
        ]

        riotcontrol.on('route', (route) => {
            this.update({route: route, menuOpen: false})
        })
    </script>
</site-header>