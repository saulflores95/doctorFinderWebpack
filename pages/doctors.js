import Layout from '../components/MyLayout'
import DoctorWrapper from  '../components/doctors/docWrapper/DoctorWrapper'
import App from '../components/App/App'
const doctors = () => (
  <div className='container'>
    <App>
      <div>
        <DoctorWrapper />
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
