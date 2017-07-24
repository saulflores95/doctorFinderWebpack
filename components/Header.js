import {Container, Col} from 'react-grid-system'

const Header = () => (
  <div className='wrapper'>
    <Container>
      <h1>Hello Welcome To HCB DEV interface</h1>
      <Col xs={12} sm={12} md={6} lg={3}>
        <a href='/api/doctors' target='_blank'>
          <div className='enjoy-css'>API</div>
        </a>
      </Col>
      <Col xs={12} sm={12} md={6} lg={3}>
      <a href='/api/doctors' target='_blank'>
          <div className='enjoy-css'>App</div>
        </a>
      </Col>
      <Col xs={12} sm={12} md={6} lg={3}>
        <a href='/doctor-registration' target='_blank'>
            <div className='enjoy-css'>Add Doctors</div>
        </a>
      </Col>
      <Col xs={12} sm={12} md={6} lg={3}>
        <a href='/hospital-registration' target='_blank'>
          <div className='enjoy-css'>Add Hospital</div>
        </a>
      </Col>
      <Col xs={12} sm={12} md={6} lg={3}>
        <a href='/clinic-registration' target='_blank'>
          <div className='enjoy-css'>Add Clinics</div>
        </a>
      </Col>
      <Col xs={12} sm={12} md={6} lg={3}>
        <a href='/lab-registration' target='_blank'>
          <div className='enjoy-css'>Add Labs</div>
        </a>
      </Col>
      <Col xs={12} sm={12} md={6} lg={3}>
        <a href='/pharmacie-registration' target='_blank'>
          <div className='enjoy-css'>Add Pharmacies</div>
        </a>
      </Col>
      <Col xs={12} sm={12} md={6} lg={3}>
        <a href='/api/logout'>
          <div className='enjoy-css'>Logout BYE BYE</div>
        </a>
      </Col>
      <Col xs={12} sm={12} md={6} lg={3}>
        <div className='enjoy-css'><a href='https://a2plcpnl0950.prod.iad2.secureserver.net:2096' >Webmail</a></div>
      </Col>
    </Container>
    <style jsx>
      {`
       a {
         text-decoration: none;
         color: #2d517b;
        }
       .enjoy-css {
          display: inline-block;
          -webkit-box-sizing: content-box;
          -moz-box-sizing: content-box;
          box-sizing: content-box;
          width: 100%;
          height: 50px;
          cursor: pointer;
          margin-left: auto;
          margin-right: 50px;
          margin-bottom: 20px;
          margin-top: 20px;
          padding: auto;
          border: 2px solid #2d517b;
          -webkit-border-radius: 40px;
          border-radius: 40px;
          font: normal 25px/30px 'Advent Pro', Helvetica, sans-serif;
          color: #2d517b;
          text-align: center;
          -o-text-overflow: clip;
          text-overflow: clip;
          letter-spacing: 1px;
          background: rgba(0,0,0,0);
          -webkit-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
          -moz-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
          -o-transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
          transition: background-color 0.3s cubic-bezier(0, 0, 0, 0), color 0.3s cubic-bezier(0, 0, 0, 0), width 0.3s cubic-bezier(0, 0, 0, 0), border-width 0.3s cubic-bezier(0, 0, 0, 0), border-color 0.3s cubic-bezier(0, 0, 0, 0);
       }
       .enjoy-css:hover {
         color: rgba(255,255,255,1);
         background: #2d517b;
       }
       .enjoy-css:active {
         border: 2px solid #2d517b;
         background: #2d517b;
         -webkit-transition: none;
         -moz-transition: none;
         -o-transition: none;
         transition: none;
       }
     `}
    </style>
  </div>
)

export default Header
