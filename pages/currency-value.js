import App from '../components/App/App'
import CurrencyValue from '../components/border/CurrencyValue'
import NoSSR from 'react-no-ssr'
import fetch from 'isomorphic-unfetch'

const currencyValue = ({ currency }) => (
  <div>
    <App>
      <NoSSR onSSR={<div>On server</div>}>
        <CurrencyValue currency={currency} />
      </NoSSR>
    </App>
  </div>
)

currencyValue.getInitialProps = async({ req, res }) => {
  const value = await fetch('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fwww.banxico.org.mx%2Frsscb%2Frss%3FBMXC_canal%3Dfix%26BMXC_idioma%3Des')
  const currency = await value.json()
  return {currency: currency.items[0].title}
}

export default currencyValue
