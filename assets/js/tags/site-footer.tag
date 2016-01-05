let purebem = require('purebem')

<site-footer>
    <footer class={ block() }>
        <div class="container">
            <nav class={ block('links') }>
                <a each="{ links }" href="#{ href }" class={ block('link') }>{ label }</a>
            </nav>
            <a href="#" class={ block('logo') }>Ånnsjöns fågelstation</a>
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