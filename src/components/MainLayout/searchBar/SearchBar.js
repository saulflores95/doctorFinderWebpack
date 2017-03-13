import React, {Component} from 'react'
import DoctorList from '../../doctors/docWrapper/docListWrapper/docList/DoctorList'
import LabsMainList from '../../labs/labsWrapper/labsMainList/LabsMainList'

export default class SearchBar extends Component {
  constructor () {
    super()
    this.state = {
      search: ''
    }
  }

  updateSearch (event) {
    this.setState({search: event.target.value.substr(0, 20)})
  }

  updateProp (props, identifier) {
    //  console.log(identifier)
    switch (identifier) {
      case 'doctor':
        return <DoctorList doctor={props} />
      case 'lab':
        return <LabsMainList lab={props} />
      default:
        null
    }
  }

  updateFilter (props, identifier) {
    //  console.log(identifier)
    switch (identifier) {
      case 'doctor':
        return this.props.props.filter(
         (props) => {
           return props.name.indexOf(this.state.search) !== -1
         }
        )
      case 'lab':
        return this.props.props.filter(
         (props) => {
           return props.indexOf(this.state.search) !== -1
         }
        )
      default:
        null
    }
  }

  render () {
    let identifier = this.props.identifier
    let props = this.props.props
    let filterArregelo = this.updateFilter(props, identifier)
    console.log(this.props.props)
    return (
      <div>
        <input type='text'
          value={this.state.search}
          onChange={this.updateSearch.bind(this)} />
        <ul>
          {filterArregelo.map((props) => {
            return this.updateProp(props, identifier)
          })}
        </ul>
      </div>
    )
  }
}
