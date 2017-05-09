import React from 'react'
import App from '../components/App/App'
import LabsDetail from '../components/labs/labsDetail/LabsDetail'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps  ({ query: { id } }) {
    const res = await fetch('https://healthcarebaja.com/api/labs')
    const json = await res.json()
    return {
      id,
      labs: json.data
     }
  }
  render () {
    let labs = []
    labs.labs = this.props.labs
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
