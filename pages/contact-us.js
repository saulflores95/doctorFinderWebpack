import React from 'react'
import App from '../components/App/App'
import ContactForm from '../components/contact/ContactForm'
import BorderWaitTime from '../components/border/borderWaitTime'
import fetch from 'isomorphic-unfetch'
import CurrencyValue from '../components/border/CurrencyValue'

const contact = ({ borderWaitTimeJSON, currency }) => (
  <div>
    <App>
      <ContactForm />
      <CurrencyValue currency={currency} />
      <BorderWaitTime times={ borderWaitTimeJSON }/>
    </App>
  </div>
)

contact.getInitialProps = async ({ req }) => {
  const borderWaitTimeResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fapps.cbp.gov%2Fbwt%2Fcustomize_rss.asp%3FportList%3D250601%2C250603%2C250401%2C250407%26lane%3Dall%26action%3Drss%26f%3Dhtml')
  const borderWaitTimeJSON = await borderWaitTimeResponse.json()
  const currencyValue = await fetch('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.banxico.org.mx%2Frsscb%2Frss%3FBMXC_canal%3Dfix%26BMXC_idioma%3Des')
  const currency = await currencyValue.json()

  return { borderWaitTimeJSON: borderWaitTimeJSON.items, currency: currency.items[0].title}
}


 export default contact
