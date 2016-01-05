import riotcontrol from 'riotcontrol'
import purebem from 'purebem'

<site-header>
    <header class={ block() }>
        <div class="container">
            <div class="row">
                <div class="two columns">
                    <a href="#" class={ block('logo') }>Ånnsjöns fågelstation</a>
                </div>
                <div class="ten columns">
                    <nav class={ block('menu') }>
                        <a each="{ links }" href="#{ href }" class={ block('link', href, isActive()) }>{ label }</a>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <script>
        let self = this

        this.block = purebem.of('site-navigation')
        
        this.isActive = function() {
            return self.route === this._item.href ? 'active' : null
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
            this.update({route: route})
        })
    </script>
</site-header>