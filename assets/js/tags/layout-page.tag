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
    </script>
</layout-page>