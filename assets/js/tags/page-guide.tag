<page-guide>
    <div class={ block() } if={ isVisible }>
        <h4>Våra guider</h4>
        <nav class={ block('links') }>
            <a href="#guide/handol" class={ block('link') } if={ isNot('handol') }>Handöl</a>
            <a href="#guide/storulvan" class={ block('link') } if={ isNot('storulvan') }>Storulvån</a>
            <a href="#guide/storlien" class={ block('link') } if={ isNot('storlien') }>Storlien</a>
            <a href="#guide/ann" class={ block('link') } if={ isNot('ann') }>Ånn</a>
        </nav>
    </div>

    <script>
        const riotcontrol = require('riotcontrol')
        const purebem = require('purebem')
        const subRoute = riot.route.create()

        this.block = purebem.of('page-guide')
        this.isVisible = false

        this.isNot = (name) => {
            return this.guide !== name
        }

        riotcontrol.on('ROUTE', (route) => {
            this.update({isVisible: false})
        })

        subRoute('guide', () => {
            this.update({
                isVisible: true,
                guide: null
            })
        })

        subRoute('guide/*', (name) => {
            this.update({
                isVisible: true,
                guide: name
            })
        })
    </script>
</page-guide>
