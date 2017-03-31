import React from 'react'
import App from '../components/App/App'
import HospitalDetail from '../components/hospital/hosDetail/HospitalDetail'
export default class extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    const hospitals = require('../hospitals.json')
    console.log(hospitals);
    const hospitall = hospitals.hospitals.filter(hospital => this.props.id === hospital._id)
    const hospital = hospitall[0]
    console.log('hospital-detail: ', hospital)
    return(
      <div>
        <App>
          <div className='container'>
            <HospitalDetail hospital={hospital}/>
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
