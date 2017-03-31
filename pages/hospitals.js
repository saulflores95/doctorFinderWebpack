import Layout from '../components/MyLayout'
import HospitalWrapper from  '../components/hospital/hosWrapper/HospitalWrapper'
import App from '../components/App/App'
const hospitals = () => (
  <div>
    <App>
      <div className='container'>
        <HospitalWrapper />
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

export default hospitals
