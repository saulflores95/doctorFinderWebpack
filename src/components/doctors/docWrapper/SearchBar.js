import React, {Component} from 'react'
import DocCatList from './docCatList/DocCatList'

export default class SearchBar extends Component {
  constructor () {
    super()
    this.state = {
      search: ' '
    }
  }

  updateSearch (event) {
    this.setState({search: event.target.value.substr(0, 20)})
  }

  render () {
    let filterArregelo = this.props.doctors.filter(
      (doctors) => {
        return doctors.specialty.indexOf(this.state.search) !== -1
      }
    )
    console.log(this.state.search)
    console.log(this.props.doctors)
    console.log(filterArregelo)
    return (
      <div>
        <input type='text'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />
        <ul>
          {filterArregelo.map((doctors) => {
            return <DocCatList doctors={doctors}/>
          })}
        </ul>
      </div>
    )
  }
}
