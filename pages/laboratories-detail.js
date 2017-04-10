import React from 'react'
import App from '../components/App/App'
import LabsDetail from '../components/labs/labsDetail/LabsDetail'
export default class extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    const labs = require('../labs.json')
    const lab = labs.labs.filter(lab => this.props.id === lab._id)
    return(
      <div>
        <App>
          <div className='container'>
            <LabsDetail lab={lab}/>
          </div>
        </App>
      </div>
    )
  }
}
