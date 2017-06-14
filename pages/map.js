import GeneralMap from '../components/map/GeneralMap'
import App from '../components/App/App'
import NoSSR from 'react-no-ssr'
import fetch from 'isomorphic-unfetch'

const map = ({ doctors, hospitals, pharmacies, labs, clinics }) => (
  <div className='container'>
    <App>
      <div className='container'>
        <NoSSR onSSR={<div>On server</div>}>
          <div className='container'>
            <GeneralMap doctors={doctors} hospitals={hospitals} clinics={clinics} pharmacies={pharmacies} labs={labs} />
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

map.getInitialProps = async({ req, res }) => {
  const docs = await fetch('https://healthcarebaja.com/api/doctors')
  const hos = await fetch('https://healthcarebaja.com/api/hospitals')
  const pharma = await fetch('https://healthcarebaja.com/api/pharmacies')
  const labsNotJson = await fetch('https://healthcarebaja.com/api/labs')
  const clinicNotJson = await fetch('https://healthcarebaja.com/api/pharmacies')

  const pharmacies = await pharma.json()
  const hospitals = await hos.json()
  const doctors = await docs.json()
  const labs = await labsNotJson.json()
  const clinics = await clinicNotJson.json()
  return { doctors: doctors.data, hospitals: hospitals.data, pharmacies: pharmacies.data, labs: labs.data, clinics: clinics.data }
}

export default map
