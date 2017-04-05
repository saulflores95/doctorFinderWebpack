import Layout from '../components/MyLayout'
import ClinicWrapper from  '../components/clinics/cliWrapper/ClinicWrapper'
import App from '../components/App/App'
const clinics = () => (
  <div>
    <App>
      <div className='container'>
        <ClinicWrapper />
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

export default clinics
