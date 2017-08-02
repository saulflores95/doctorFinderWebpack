import React from 'react'
import App from '../components/App/App'
import LabsListWrapper from '../components/labs/labsListWrapper/LabsListWrapper'
import NoSSR from 'react-no-ssr'
import fetch from 'isomorphic-unfetch'
import Transition from 'react-motion-ui-pack'
import {spring} from 'react-motion'

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
          <Transition
            component={false}
            enter={{
              translateX: spring(0, {stiffness: 400, damping: 25}),
              opacity: 1
            }}
            leave={{
              translateX: 350,
              opacity: 0
            }}
            >
            <div className='container'>
              <NoSSR onSSR={<div>'Hi Human, I am working to bring the data...'</div>}>
                <LabsListWrapper labs={lab} />
              </NoSSR>
            </div>
          </Transition>
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
