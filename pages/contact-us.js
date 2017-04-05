import React from 'react'
import App from '../components/App/App'
import ContactForm from '../components/contact/ContactForm'

export default class extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    return (
      <App>
        <ContactForm />
      </App>
    )
  }
}
