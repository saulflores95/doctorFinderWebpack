import React from 'react'
import App from '../components/App/App'
import LabsGeneralMap from '../components/labs/labsMap/LabsGeneralMap'
import NoSSR from 'react-no-ssr'
export default class extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    const labs = require('../labs.json')
    const lab = labs.labs.filter(lab => this.props.id === lab.tag)
    console.log(pharmacie);
    return(
      <div>
        <App>
          <div className='container'>
            <NoSSR onSSR={<div>'Hi Human, I am working to bring the data...</div>}>
              <LabsGeneralMap labs={labs} />
            </NoSSR>
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
