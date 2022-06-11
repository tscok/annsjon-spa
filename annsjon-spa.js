// Styling
import './assets/less/main.less'

// RiotControl Stores
// import './assets/js/stores/stores'

// RiotJS tag(s)
// import './assets/js/tags/site-app'

// RiotJS routing
// import Router from './assets/js/router'

import React from 'react'
import { render } from 'react-dom'

import App from './app/App'

const spaRoot = document.getElementById('spa-root')

if (spaRoot) {
  render(<App />, spaRoot)
}

// riot.mount('*')
// Router()
