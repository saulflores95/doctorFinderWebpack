import React from 'react'
import App from '../components/App/App'
import { Row, Col } from 'react-grid-system'

export default class extends React.Component {
  render () {
    return (
      <div>
        <App>
          <div style={{paddingBottom: 100}}>
            <Row>
              <Col xs={12} sm={12} md={6} lg={4}>
                <p>August</p>
                <iframe style={{width: '100%', height: 480, maxWidth: 400, marginLeft: 'auto', marginRight: 'auto', display: 'block'}} src='//e.issuu.com/embed.html#25782513/52395244' frameborder='0' allowfullscreen />
              </Col>
              <Col xs={12} sm={12} md={6} lg={4}>
                <p>July</p>
                <iframe style={{width: '100%', height: 480, maxWidth: 400, marginLeft: 'auto', marginRight: 'auto', display: 'block'}} src='//e.issuu.com/embed.html#25782513/51560412' frameborder='0' allowfullscreen />
              </Col>
            </Row>
          </div>
        </App>
        <style jsx>
          {`
            p {
              font-size: 22px;
              color: #2d517b !important;
              font-family: 'Montserrat', sans-serif;
              text-align: center;
              font-weight: bold;
            }

          `}
        </style>
      </div>
    )
  }
}
