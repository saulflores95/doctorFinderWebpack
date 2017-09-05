import React from 'react'
import App from '../components/App/App'
import ContactForm from '../components/contact/ContactForm'
import BorderWaitTime from '../components/border/borderWaitTime'
import fetch from 'isomorphic-unfetch'
import CurrencyValue from '../components/border/CurrencyValue'
import { Col, Row } from 'react-grid-system'

const contact = ({ borderWaitTimeJSON, currency }) => (
  <div>
    <App>
      <Row>
        <Col md={12} lg={12} xl={12} style={{marginTop: 15}}>
          <div className='img-container'>
            <img className='img' src='../static/contactUs.png' />
          </div>
          <div className='text-container'>
            <h2 className='text'>Contact us</h2>
          </div>
          <ContactForm />
        </Col>
        <Col md={12} lg={12} xl={12} style={{marginTop: 30}}>
          <div className='img-container'>
            <img className='img' src='../static/currency.png' />
          </div>
          <CurrencyValue currency={currency} />
        </Col>
        <Col md={12} lg={12} xl={12} style={{marginTop: 17}}>
          <div className='img-container'>
            <img className='img' src='../static/border.png' />
          </div>
          <BorderWaitTime times={borderWaitTimeJSON} />
        </Col>
        <Col md={12} lg={12} xl={12} style={{marginTop: 17, marginBottom: 150}}>
          <a href='https://www.facebook.com/healthcarebaja/' target='_blank'>
            <div style={{textAlign: 'center'}}>
              <img src='../../static/facebook.png' alt='facebook' height='30' width='30' style={{marginTop: 5}} />
            </div>
          </a>
        </Col>
      </Row>
    </App>
    <style jsx>{`

      .img-container {
        margin-right: auto;
        display: block;
        width: 100px;
        height: 100px;
        margin-left: auto;
      }

      .text{
        text-align: center;
        color: #2d517b;
        font-size: 16px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        font-family: 'Montserrat', sans-serif;
      }

      .text-container {
        margin-left: auto;
        margin-right: auto;
        display: block;
      }

      .img {
        margin-left: auto;
        margin-right: auto;
        display: bock;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
)

contact.getInitialProps = async ({ req }) => {
  const borderWaitTimeResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fapps.cbp.gov%2Fbwt%2Fcustomize_rss.asp%3FportList%3D250601%2C250603%2C250401%2C250407%26lane%3Dall%26action%3Drss%26f%3Dhtml')
  const borderWaitTimeJSON = await borderWaitTimeResponse.json()
  const currencyValue = await fetch('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.banxico.org.mx%2Frsscb%2Frss%3FBMXC_canal%3Dfix%26BMXC_idioma%3Des')
  const currency = await currencyValue.json()

  return { borderWaitTimeJSON: borderWaitTimeJSON.items, currency: currency.items[0].title }
}

export default contact
