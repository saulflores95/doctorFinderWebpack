import React from 'react'
import App from '../components/App/App'
import PharmacieGeneralMap from '../components/pharmacies/phaMap/PharmacieGeneralMap'
import NoSSR from 'react-no-ssr'
export default class extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    const pharmacies = require('../pharmacies.json')
    const pharmacie = pharmacies.pharmacies.filter(pharmacie => this.props.id === pharmacie.tag)
    console.log(pharmacie);
    return(
      <div className='container'>
        <App className='container'>
          <div className='container'>
            <NoSSR onSSR={<div>'Hi Human, I am working to bring the data...'</div>}>
              <PharmacieGeneralMap pharmacies={pharmacie} />
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
