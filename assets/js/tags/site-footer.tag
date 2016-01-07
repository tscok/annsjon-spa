let purebem = require('purebem')

<site-footer>
    <footer class={ block() }>
        <div class="container">
            <div class="row">
                <nav class={ block('links') }>
                    <a each="{ links }" href="#{ href }" class={ block('link') }>{ label }</a>
                </nav>
                <a href="#" class={ block('logo') }>Ånnsjöns fågelstation</a>
            </div>
            <div class="row">
                <p class={ block('misc') }><a href="#cookies" class={ block('misc-link', 'separator') }>Cookies</a>Design och utveckling av <a href="http://twitter.com/tscok" target="_blank" class={ block('misc-link') }>@tscok</a></p>
            </div>
        </div>
    </footer>

    <script>
        this.block = purebem.of('site-footer')

        this.links = [
            { href: 'iba', label: 'Fågelskydd' },
            { href: 'guide', label: 'Skådarguide' },
            { href: 'projects', label: 'Projekt' },
            { href: 'reports', label: 'Rapporter' },
            { href: 'about', label: 'Föreningen' },
            { href: 'contact', label: 'Kontakt' }
        ]
    </script>
</site-footer>