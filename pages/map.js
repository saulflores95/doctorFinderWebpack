import GeneralMap from '../components/map/GeneralMap'
import App from '../components/App/App'
import NoSSR from 'react-no-ssr'
const hospitals = require('../hospitals')
const doctors = require('../doctors')
const pharmacies = require('../pharmacies.json')
const labs = require('../labs.json')
const clinics = require('../clinics.json')

const map = () => (
  <div className='container'>
    <App>
      <div className='container'>
        <NoSSR onSSR={<div>On server</div>}>
          <div className='container'>
            <GeneralMap doctors={doctors.doctors} hospitals={hospitals.hospitals} clinics={clinics.clinics} pharmacies={pharmacies.pharmacies} labs={labs.labs} />
          </div>
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

export default map
