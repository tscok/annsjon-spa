import React from 'react'
import { render } from 'react-dom'

import App from './app/App'

const spaRoot = document.getElementById('spa-root')

if (spaRoot) {
  render(<App />, spaRoot)
}
