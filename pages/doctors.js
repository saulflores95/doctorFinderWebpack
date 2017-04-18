import Layout from '../components/MyLayout'
import DoctorWrapper from  '../components/doctors/docWrapper/DoctorWrapper'
import App from '../components/App/App'
import axios from 'axios'

let doctorsFetched = []

let doctorFetch = axios.get('/api/doctors')
  .then(function (response) {
    console.log('response: ', response)
    doctorFetch.doctors = response.data
    console.log('Doctors: ', doctorFetch)
    return doctorFetch
  })
  .catch(function (error) {
    console.log(error);
  });

const doctors = () => (
  <div className='container'>
    <App>
      <div>
        <DoctorWrapper doctorProp={doctorFetch}/>
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

export default doctors
