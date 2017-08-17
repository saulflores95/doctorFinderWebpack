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
      <div className='img-container'>
        <img className='img' src='https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/splashscreen.png' />
      </div>
      <div className='text-container'>
        <h2 className='text'>Services</h2>
      </div>
      <Row>
        <Col md={6} lg={6} xl={6}>
          <ContactForm />
        </Col>
        <Col md={6} lg={6} xl={6}>
          <CurrencyValue currency={currency} />
          <BorderWaitTime times={borderWaitTimeJSON} />
        </Col>
      </Row>
    </App>
    <style jsx>{`

      .img-container {
        margin-right: auto;
        display: block;
        width: 128px;
        height: 128px;
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
