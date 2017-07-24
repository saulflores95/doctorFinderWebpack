import React from 'react'
import App from '../components/App/App'
import LabsGeneralMap from '../components/labs/labsMap/LabsGeneralMap'
import NoSSR from 'react-no-ssr'
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
    const lab = labs.labs.filter(lab => this.props.id === lab.tag)
    return (
      <div className='container'>
        <App className='container'>
          <div className='container'>
            <NoSSR onSSR={<div>'Hi Human, I am working to bring the data...'</div>}>
              <LabsGeneralMap labs={lab} />
            </NoSSR>
          </div>
        </App>
        <style jsx>
          {`
          .container {
            height: 100%;
          }
          `}
        </style>
      </div>
    )
  }
}
