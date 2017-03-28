import React from 'react'
import { render } from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import { install } from 'offline-plugin/runtime'
import './base.css'
import App from './components/App/App'

render(<AppContainer><App /></AppContainer>, document.getElementById('app'))

if (module.hot) {
  module.hot.accept('./components/App/App', () => { render(App) })
}

if (process.env.NODE_ENV === 'production') {
  install()
}
