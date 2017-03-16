import React, {Component} from 'react'
import DoctorList from '../../../doctors/docWrapper/docListWrapper/docList/DoctorList'
import LabsMainList from '../../../labs/labsWrapper/labsMainList/LabsMainList'
import styles from './SearchNav.css'
import { Link } from 'react-router-dom'

export default class SearchNav extends Component {
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
           return props.name.toLowerCase().indexOf(this.state.search) !== -1
         }
        )
      case 'lab':
        return this.props.props.filter(
         (props) => {
           return props.toLowerCase().indexOf(this.state.search) !== -1
         }
        )
      default:
        null
    }
  }

  render () {
    const imgUrl = 'https://s30.postimg.org/biuab6sk1/image.jpg'
    let identifier = this.props.identifier
    let props = this.props.props
    let filterArregelo = this.updateFilter(props, identifier)
    return (
      <div>
        <div className={styles.container}>
          <ul className={styles.ul}>
            <li className={styles.li}><Link to='/'><img alt='Healthcare Baja' src={imgUrl} /></Link></li>
            <li className={styles.liRight}>
              <div className={styles.wrap}>
                <form action=''>
                  <label className={styles.labelSearch} htmlFor='search'>Search</label>
                  <input
                    className={styles.search}
                    name='search'
                    type='text'
                    placeholder='Search...'
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)} />
                  <label className={styles.labelSearch} htmlFor='search'>Rechercher</label>
                  <input className={styles.search_submit} name='searcht' value='Rechercher' type='submit' />
                </form>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.list}>
            {filterArregelo.map((props) => {
              return this.updateProp(props, identifier)
            })}
          </ul>
        </div>
      </div>
    )
  }
}
