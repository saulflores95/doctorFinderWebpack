import React, { Component } from 'react'

export default class CurrencyValue extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    let currency = this.props.currency
    //  Regex para numeros decimales
    let patt = /[+-]?\d+(\.\d+)?/g
    let result = currency.match(patt)
    let pesos = result[0]
    //  let year = result[2]
    //  let month = result[3].replace('-', ' ')
    //  let day = result[4].replace('-', ' ')
    return (
      <div className='currency'>
        <h3>Currency Exchange</h3>
        <p>1 DLLS : {pesos} MXN</p>
        <style jsx>{`
          .currency {
            text-align: center;
          }
          p {
            color: #2d517b !important;
            font-family: 'Montserrat', sans-serif;
          }
          h3 {
            color: #2d517b !important;
            font-family: 'Montserrat', sans-serif;
          }
        `}</style>
      </div>
    )
  }
}
