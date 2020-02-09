import RiotControl from 'riotcontrol'
import utils from '../utils'

<page-content>
    <script>
        const self = this

        RiotControl.on('SET_PAGE_CONTENT', function(content) {
            self.root.innerHTML = content
            utils.scrollUp();
        })

        this.setLinkTarget = function() {
            const elements = self.root.querySelectorAll('a[href$=".pdf"], a[href$=".xls"], a[href^="http"]')

            if (elements.length) {
                for (var i = 0; i < elements.length; i++) {
                    elements[i].setAttribute('target', '_blank')
                }
            }
        }

        this.on('update', this.setLinkTarget)
    </script>
</page-content>