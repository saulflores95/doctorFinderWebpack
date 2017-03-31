import React from 'react'
import App from '../components/App/App'
import CatMenu from '../components/categorymenu/CatMenu'
export default class extends React.Component {
  render () {
    return (
      <div>
        <App>
          <CatMenu />
        </App>
      </div>
    )
  }
}
