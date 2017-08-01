import React from 'react'
import App from '../components/App/App'
import LabsDetail from '../components/labs/labsDetail/LabsDetail'
import fetch from 'isomorphic-unfetch'
import Ogtags from '../components/MainLayout/OgTags/OgTags.js'

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
    const lab = labs.labs.filter(lab => this.props.id === lab._id)
    return (
      <div>
        <App>
          <Ogtags props={lab[0]} />
          <div className='container'>
            <LabsDetail lab={lab} />
          </div>
        </App>
      </div>
    )
  }
}
