import RiotControl from 'riotcontrol'
import purebem from 'purebem'
import mygettext from '../data/mygettext'

<site-footer>
    <div class="container">
        <div class="row">
            <a href="#" class={ block('logo') }>{ getText('site_title') }</a>
            <nav class={ block('links') }>
                <a each="{ links }" href="#{ href }" class={ block('link') }>{ label }</a>
            </nav>
        </div>
        <div class="row">
            <p class={ block('misc') }>
                <a href="#" class={ block('misc-link', ['separator']) } onclick={ setLanguage }>{ getText('language') }</a>
                <a href="#cookies" class={ block('misc-link') }>Cookies</a>
                <span class={ block('credits') }>{ getText('credits') } <a href="http://twitter.com/tscok" target="_blank" class={ block('misc-link') }>Mikael Carlsson</a></span>
            </p>
        </div>
    </div>

    <script>
        const self = this

        this.getText = mygettext

        this.block = purebem.of('site-footer')

        this.setLanguage = function() {
            RiotControl.trigger('SET_SITE_LANGUAGE')
        }

        RiotControl.on('SITE_NAVIGATION_FOOTER', function(links) {
            self.update({ links })
        })
    </script>
</site-footer>
