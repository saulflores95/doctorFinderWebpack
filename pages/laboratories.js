import React from 'react'
import App from '../components/App/App'
import LabsWrapper from '../components/labs/labsWrapper/LabsWrapper'
import fetch from 'isomorphic-unfetch'

const laboratories = ({labs}) => (
  <div>
    <App>
      <div className='container'>
        <LabsWrapper labs={labs} />
      </div>
    </App>
  </div>
)

laboratories.getInitialProps = async ({ req }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const res = await fetch(baseUrl + '/api/labs')
  const json = await res.json()
  return { labs: json.data }
}

export default laboratories
