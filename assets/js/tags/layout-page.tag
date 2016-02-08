require('./page-content')
require('./page-guide')
require('./page-form')
require('./page-map')

<layout-page>
    <div class="container">
        <article class="page__content">
            <section riot-tag="page-content" />
            <section riot-tag="page-map" />
            <section riot-tag="page-guide" />
            <section riot-tag="page-form" />
        </article>
    </div>
</layout-page>
