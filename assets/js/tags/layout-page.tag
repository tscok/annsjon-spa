require('./page-content')
require('./page-form')

<layout-page>
    <div class="container">
        <article class="page__content">
            <section riot-tag="page-content" />
            <section riot-tag="page-form" />
        </article>
    </div>
</layout-page>
