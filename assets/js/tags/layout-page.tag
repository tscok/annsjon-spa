<layout-page>
    <section class="page">
        <div class="container">
            <article id="content" class="page__content"></article>
        </div>
    </section>

    <script>
        var riotcontrol = require('riotcontrol')

        riotcontrol.on('SET_PAGE_CONTENT', (content) => {
            this.content.innerHTML = content
        })

        this.setLinkTarget = () => {
            let elements = this.content.querySelectorAll('a[href$=".pdf"], a[href$=".xls"], a[href^="http"]')

            if (elements.length) {
                for (var i = 0; i < elements.length; i++) {
                    elements[i].setAttribute('target', '_blank')
                }
            }
        }

        this.on('update', this.setLinkTarget)
    </script>
</layout-page>