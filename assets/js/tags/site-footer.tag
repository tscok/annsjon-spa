let purebem = require('purebem')
let riotcontrol = require('riotcontrol')

<site-footer>
    <footer class={ block() }>
        <div class="container">
            <div class="row">
                <a href="#" class={ block('logo') }>{ getText('annsjons_fagelstation') }</a>
                <nav class={ block('links') }>
                    <a each="{ links }" href="#{ href }" class={ block('link') }>{ label }</a>
                </nav>
            </div>
            <div class="row">
                <p class={ block('misc') }>
                    <a href="#" class={ block('misc-link', 'separator') } onclick={ setLanguage }>{ getText('language') }</a>
                    <a href="#cookies" class={ block('misc-link') }>Cookies</a>
                    <span class={ block('credits') }>{ getText('credits') } <a href="http://twitter.com/tscok" target="_blank" class={ block('misc-link') }>Mikael Carlsson</a></span>
                </p>
            </div>
        </div>
    </footer>

    <script>
        this.getText = require('../data/mygettext')

        this.block = purebem.of('site-footer')

        this.setLanguage = () => {
            riotcontrol.trigger('SET_SITE_LANGUAGE')
        }

        riotcontrol.on('SITE_NAVIGATION', (links) => {
            this.links = links
        })
    </script>
</site-footer>
