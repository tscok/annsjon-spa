let Cookies = require('js-cookie')
let mygettext = require('../data/mygettext')

require('./raw')

<layout-index>
    <section class="hero">
        <div class="container">
            <h1 class="hero__title">{ getText('annsjons_fagelstation') }</h1>
            <hr class="hero__ruler">
            <h5 class="hero__body"><raw content={ getText('hero_body') }/></h5>
        </div>
    </section>
    <section class="projects">
        <div class="container">
            <h6 class="projects__header">{ getText('projects_header') }</h6>
            <div class="row">
                <div class="projects__brief one-third column">
                    <h5 class="projects__title">{ getText('projects_title-great-snipe') }</h5>
                    <div class="projects__placeholder"></div>
                    <p class="projects__body"><raw content={ getText('projects_body-great-snipe') }/></p>
                </div>
                <div class="projects__brief one-third column">
                    <h5 class="projects__title">{ getText('projects_title-census') }</h5>
                    <div class="projects__placeholder"></div>
                    <p class="projects__body"><raw content={ getText('projects_body-census') }/></p>
                </div>
                <div class="projects__brief one-third column">
                    <h5 class="projects__title">{ getText('projects_title-ringing') }</h5>
                    <div class="projects__placeholder"></div>
                    <p class="projects__body"><raw content={ getText('projects_body-ringing') }/></p>
                </div>
            </div>
            <div class="projects__actions" if={ language == 'se' }>
                <a href="#projects" class="projects__button button">{ getText('projects_button') }</a>
            </div>
        </div>
    </section>
    <section class="guides last-section-before-footer">
        <div class="container">
            <h6 class="guides__header">{ getText('guides_header') }</h6>
            <div class="row">
                <div class="one-half column guides__brief">
                    <h5 class="guides__title">Handöl</h5>
                    <p class="guides__body"><raw content={ getText('guides_body-handol') }/></p>
                </div>
                <div class="one-half column guides__brief">
                    <h5 class="guides__title">Storulvån</h5>
                    <p class="guides__body"><raw content={ getText('guides_body-storulvan') }/></p>
                </div>
            </div>
            <div class="row">
                <div class="one-half column guides__brief">
                    <h5 class="guides__title">Storlien</h5>
                    <p class="guides__body"><raw content={ getText('guides_body-storlien') }/></p>
                </div>
                <div class="one-half column guides__brief">
                    <h5 class="guides__title">Ånn</h5>
                    <p class="guides__body"><raw content={ getText('guides_body-ann') }/></p>
                </div>
            </div>
            <div class="guides__actions" if={ language == 'se' }>
                <a href="#guide" class="guides__button button">{ getText('guides_button') }</a>
            </div>
        </div>
    </section>

    <script>
        this.on('mount', () => {
            this.getText = mygettext
        })

        this.on('update', () => {
            this.language = Cookies.get('language')
        })
    </script>
</layout-index>
