import React from 'react'
import App from '../components/App/App'
import PharmacieGeneralMap from '../components/pharmacies/phaMap/PharmacieGeneralMap'
import NoSSR from 'react-no-ssr'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {

  static async getInitialProps  ({ query: { id } }) {
    const res = await fetch('https://healthcarebaja.com/api/pharmacies')
    const json = await res.json()
    return {
      id,
      pharmacies: json.data
     }
  }

  render () {
    let pharmacies = []
    pharmacies.pharmacies = this.props.pharmacies
    const pharmacie = pharmacies.pharmacies.filter(pharmacie => this.props.id === pharmacie.tag)
    console.log('Pharmacie map', pharmacie);
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
