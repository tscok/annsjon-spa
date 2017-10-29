<page-guide>
    <div class={ block() } if={ isVisible }>
        <h4>Våra guider</h4>
        <nav class={ block('links') }>
            <a href="#guide/handol" class={ block('link') } if={ isNot('handol') }>Handöl</a>
            <a href="#guide/hogasen" class={ block('link') } if={ isNot('hogasen') }>Högåsen</a>
            <a href="#guide/storulvan" class={ block('link') } if={ isNot('storulvan') }>Storulvån</a>
            <a href="#guide/storlien" class={ block('link') } if={ isNot('storlien') }>Storlien</a>
            <a href="#guide/ann" class={ block('link') } if={ isNot('ann') }>Ånn</a>
        </nav>
    </div>

    <script>
        import purebem from 'purebem'
        import RiotControl from 'riotcontrol'
        import RiotRoute from 'riot-route'

        const subRoute = RiotRoute.create()

        this.block = purebem.of('page-guide')
        this.isVisible = false

        this.isNot = (name) => {
            return this.guide != name
        }

        RiotControl.on('ROUTE', (route, subroute) => {
            this.update({
                isVisible: route == 'guide',
                guide: subroute
            })
        })
    </script>
</page-guide>
