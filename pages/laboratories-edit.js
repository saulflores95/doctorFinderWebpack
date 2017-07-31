import React from 'react'
import App from '../components/App/App'
import LabEditForm from '../components/edit/labEditForm'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps ({ req, query: { id } }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
    const res = await fetch(baseUrl + '/api/labs')
    const json = await res.json()
    return {
      id,
      labs: json.data
    }
  }
  render () {
    let labs = []
    labs.labs = this.props.labs
    let lab = labs.labs.filter(lab => this.props.id === lab._id)
    lab = lab[0]
    return (
      <div>
        <App>
          <div className='container' style={{paddingBottom: 135}}>
            <LabEditForm lab={lab} />
          </div>
        </App>
      </div>
    )
  }
}
