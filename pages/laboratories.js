import React from 'react'
import App from '../components/App/App'
import LabsWrapper from '../components/labs/labsWrapper/LabsWrapper'

export default class extends React.Component {

  render () {
    const labs = require('../labs.json')
    return(
      <div>
        <App>
          <div className='container'>
            <LabsWrapper labs={labs.labs}/>
          </div>
        </App>
        <style jsx>
          {`
            .container {
              padding-top:65px;
            }
          `}
        </style>
      </div>
    )
  }
}
