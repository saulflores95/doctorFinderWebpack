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
    let year = result[2]
    let month = result[3].replace('-', ' ')
    let day = result[4].replace('-', ' ')
    console.log(pesos, year, month, day)
    return (
      <div className='currency'>
        <h1>1 DLLS : {pesos} MXN</h1>
        <h3>fecha : {year}/{month}/{day}</h3>
        <style jsx>{`
          .currency {
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}
