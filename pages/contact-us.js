import React from 'react'
import App from '../components/App/App'
import ContactForm from '../components/contact/ContactForm'
import BorderWaitTime from '../components/border/borderWaitTime'
import fetch from 'isomorphic-unfetch'

const contact = ({ borderWaitTimeJSON }) => (
  <div>
    <App>
      <ContactForm />
      <BorderWaitTime times={ borderWaitTimeJSON }/>
    </App>
  </div>
)

contact.getInitialProps = async ({ req }) => {
  const borderWaitTimeResponse = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fapps.cbp.gov%2Fbwt%2Fcustomize_rss.asp%3FportList%3D250601%2C250603%2C250401%2C250407%26lane%3Dall%26action%3Drss%26f%3Dhtml')
  const borderWaitTimeJSON = await borderWaitTimeResponse.json()
  return { borderWaitTimeJSON: borderWaitTimeJSON.items}
}


 export default contact
