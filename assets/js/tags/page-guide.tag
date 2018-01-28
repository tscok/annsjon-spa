<page-guide>
    <div class={ block() } show={ isVisible }>
        <h4>Våra guider</h4>
        <nav class={ block('links') }>
            <a each={ links } if={ isNot(path) } class={ block('link') } href="#guide/{ path }">{ name }</a>
        </nav>
    </div>

    <script>
        import purebem from 'purebem'
        import RiotControl from 'riotcontrol'
        import RiotRoute from 'riot-route'

        const self = this
        
        const links = [
            { name: 'Handöl', path: 'handol' },
            { name: 'Högåsen', path: 'hogasen' },
            { name: 'Storulvan', path: 'storulvan' },
            { name: 'Storlien', path: 'storlien' },
            { name: 'Ånn', path: 'ann' },
        ]

        this.update({
            block: purebem.of('page-guide'),
            isVisible: false,
            links: links,
        })

        this.isNot = function(name) {
            return this.guide != name
        }

        RiotControl.on('ROUTE', function(route, subroute) {
            self.update({
                isVisible: route == 'guide',
                guide: subroute
            })
        })
    </script>
</page-guide>
