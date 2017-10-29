<page-content>
    <script>
        import RiotControl from 'riotcontrol'
        import utils from '../utils'

        this.content = 'hepp'

        RiotControl.on('SET_PAGE_CONTENT', (content) => {
            this.root.innerHTML = content
            utils.scrollUp();
        })

        this.setLinkTarget = () => {
            let elements = this.root.querySelectorAll('a[href$=".pdf"], a[href$=".xls"], a[href^="http"]')

            if (elements.length) {
                for (var i = 0; i < elements.length; i++) {
                    elements[i].setAttribute('target', '_blank')
                }
            }
        }

        this.on('update', this.setLinkTarget)
    </script>
</page-content>