import Layout from '../components/MyLayout'
import DoctorWrapper from  '../components/doctors/docWrapper/DoctorWrapper'
import App from '../components/App/App'
const doctors = () => (
  <div>
    <App>
      <div className='container'>
        <DoctorWrapper />
      </div>
    </App>
  </div>
)

export default doctors
