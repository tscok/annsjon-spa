import Cookies from 'js-cookie'
import mygettext from '../data/mygettext'
import purebem from 'purebem'

import './raw'
import './google-map'

<layout-index>
    <section class="hero">
        <div class="container">
            <h1 class="hero__title">{ getText('site_title') }</h1>
            <hr class="hero__ruler">
            <h5 class="hero__body"><raw content={ getText('hero_body') }/></h5>
        </div>
    </section>
    <section class={ projects() }>
        <div class="container">
            <h6 class={ projects('header') }>{ getText('projects_header') }</h6>
            <div class="row">
                <div class="{ projects('brief') } one-third column">
                    <div class={ projects('placeholder', ['great-snipe']) }></div>
                    <h5 class={ projects('title') }>{ getText('projects_title-great-snipe') }</h5>
                    <p class={ projects('body') }>{ getText('projects_body-great-snipe') }</p>
                </div>
                <div class="{ projects('brief') } one-third column">
                    <div class={ projects('placeholder', ['census']) }></div>
                    <h5 class={ projects('title') }>{ getText('projects_title-census') }</h5>
                    <p class={ projects('body') }><raw content={ getText('projects_body-census') }/></p>
                </div>
                <div class="{ projects('brief') } one-third column">
                    <div class={ projects('placeholder', ['ringing']) }></div>
                    <h5 class={ projects('title') }>{ getText('projects_title-ringing') }</h5>
                    <p class={ projects('body') }><raw content={ getText('projects_body-ringing') }/></p>
                </div>
            </div>
            <div class="projects__actions" if={ language == 'se' }>
                <a href="#projects" class="projects__button button button-primary">{ getText('projects_button') }</a>
            </div>
        </div>
    </section>
    <section class="guides">
        <div class="container">
            <h6 class="guides__header">{ getText('guides_header') }</h6>
            <div class="row">
                <div class="one-half column guides__brief">
                    <h5 class="guides__title">Högåsen</h5>
                    <p class="guides__body">
                        <raw content={ getText('guides_body-hogasen') }/>
                        <a href="#guide/hogasen" if={ language == 'se' }><raw content={ getText('read-more') }/></a>
                    </p>
                </div>
                <div class="one-half column guides__brief">
                    <h5 class="guides__title">Storulvån</h5>
                    <p class="guides__body">
                        <raw content={ getText('guides_body-storulvan') }/>
                        <a href="#guide/storulvan" if={ language == 'se' }><raw content={ getText('read-more') }/></a>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="one-half column guides__brief">
                    <h5 class="guides__title">Storlien</h5>
                    <p class="guides__body">
                        <raw content={ getText('guides_body-storlien') }/>
                        <a href="#guide/storlien" if={ language == 'se' }><raw content={ getText('read-more') }/></a>
                    </p>
                </div>
                <div class="one-half column guides__brief">
                    <h5 class="guides__title">Ånn</h5>
                    <p class="guides__body">
                        <raw content={ getText('guides_body-ann') }/>
                        <a href="#guide/ann" if={ language == 'se' }><raw content={ getText('read-more') }/></a>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class={ location() }>
        <div class="container">
            <div class="row">
                <div class="one-half column">
                    <div class={ location('map') }>
                        <google-map />
                    </div>
                </div>
                <div class="one-half column">
                    <h5 class={ location('title') }>{ getText('map_title') }</h5>
                    <p class={ location('body') }>{ getText('map_body') }<a href="#faq">FAQ</a>.<span class={ location('link') }>{ getText('map_link') }<a href="https://www.google.se/maps/place/63%C2%B015'30.5%22N+12%C2%B026'51.0%22E/@60.3825553,1.0879701,4.66z/data=!4m2!3m1!1s0x0:0x0" target="_blank">Google Maps</a></span></p>
                </div>
            </div>
        </div>
    </section>
    

    <script>
        this.projects = purebem.of('projects')
        this.location = purebem.of('location')
        this.language = Cookies.get('language')

        this.getText = function(key) { return key }

        this.on('mount', function() {
            this.getText = mygettext
        })

        this.on('update', function() {
            this.language = Cookies.get('language')
        })
    </script>
</layout-index>
