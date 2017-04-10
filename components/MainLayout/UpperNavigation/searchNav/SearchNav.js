import React, {Component} from 'react'
import DoctorList from '../../../doctors/docWrapper/docListWrapper/docList/DoctorList'
import LabsMainList from '../../../labs/labsWrapper/labsMainList/LabsMainList'
import PharmacieMainList from '../../../pharmacies/phaWrapper/phaMainList/PharmacieMainList'
import Link from 'next/link'
import Transition from 'react-motion-ui-pack'
import {spring} from 'react-motion'

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
    switch (identifier) {
      case 'doctor':
        return <DoctorList doctor={props} />
      case 'lab':
        return <LabsMainList lab={props} />
      case 'pharmacie':
        return <PharmacieMainList pharmacie={props} />
      default:
        null
    }
  }

  updateFilter (props, identifier) {
    switch (identifier) {
      case 'doctor':
        return this.props.props.filter(
         (props) => {
           return props.name.toLowerCase().indexOf(this.state.search) !== -1
         }
        )
      case 'lab':
      case 'pharmacie':
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
    console.log('Search nav identifier', identifier)
    let filterArregelo = this.updateFilter(props, identifier)
    return (
      <div>
        <div>
          <ul className='ul'>
            <li className='li'><Link href='/'><img alt='Healthcare Baja' src={imgUrl} /></Link></li>
            <li className='liRight'>
              <div className='wrap'>
                <form action=''>
                  <label className='labelSearch' htmlFor='search'>Search</label>
                  <input
                    className='search'
                    name='search'
                    type='text'
                    placeholder='Search...'
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)} />
                  <label className='labelSearch' htmlFor='search'>Rechercher</label>
                  <input className='search_submit' name='searcht' value='Rechercher' type='submit' />
                </form>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <Transition
            component={false}
            enter={{
              translateX: spring(0, {stiffness: 400, damping: 25}),
              opacity: 1
            }}
            leave={{
              translateX: 350,
              opacity: 0
            }}
            >
            <div className='wrapper'>
              {filterArregelo.map((props) => {
                return this.updateProp(props, identifier)
              })}
            </div>
          </Transition>
        </div>
        <style jsx>
          {`
            .search {
              text-transform: lowercase;
            }

            .labelSearch {
                display: none;
            }

            .ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                overflow: hidden;
                background-color: white;
                position: fixed;
                top: 0;
                width: 100%;
                padding-bottom: 10px;
                padding-top: 10px;
                z-index: 9999;
            }

            .li {
                float: left;
            }

            .li a {
                display: block;
                color: white;
                text-align: center;
                text-decoration: none;
            }

            .liRight {
                float: right;
            }

            .liRight a {
                display: block;
                color: gray;
                text-align: center;
                padding: 14px 16px;
                text-decoration: none;
            }

            .liRight a:hover:not(.active) {
                background-color: #131;
            }
            .active {
                background-color: #4CAF50;
            }

            .wrap {
              margin: 0px;
              display: inline-block;
              position: relative;
              height: 25px;
              float: right;
              padding: 0;
              position: relative;
            }

            .searchBar {
              background-image: url(https://cdn0.iconfinder.com/data/icons/octicons/1024/search-128.png) !important;
              background-repeat: no-repeat !important;
              background-size: 50px 50px !important;
            }

            input[type="text"] {
              height: 25px;
              font-size: 20px;
              display: inline-block;
              font-family: "Montserrat";
              font-weight: 100;
              border: none;
              outline: none;
              color: #555;
              padding: 30px;
              padding-right: 25px;
              padding-left: 60px;
              width: 0px;
              position: absolute;
              top: 0;
              right: 0;
              background: none;
              z-index: 3;
              transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);
              cursor: pointer;
            }

            input[type="text"]:focus:hover {
              border-bottom: 1px solid #BBB;
            }

            input[type="text"]:focus {
              width: 50vw;
              z-index: 1;
              border-bottom: 1px solid #BBB;
              cursor: text;
            }

            input[type="submit"] {
              height: 50px;
              width: 63px;
              display: inline-block;
              color:red;
              float: right;
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFU1NT9fX1lJSUXl5e1dXVfn5+c3Nz6urqv7+/tLS0iYmJqampn5+fysrK39/faWlp////Vi4ZywAAABF0Uk5T/////////////////////wAlrZliAAABLklEQVR42rSWWRbDIAhFHeOUtN3/ags1zaA4cHrKZ8JFRHwoXkwTvwGP1Qo0bYObAPwiLmbNAHBWFBZlD9j0JxflDViIObNHG/Do8PRHTJk0TezAhv7qloK0JJEBh+F8+U/hopIELOWfiZUCDOZD1RADOQKA75oq4cvVkcT+OdHnqqpQCITWAjnWVgGQUWz12lJuGwGoaWgBKzRVBcCypgUkOAoWgBX/L0CmxN40u6xwcIJ1cOzWYDffp3axsQOyvdkXiH9FKRFwPRHYZUaXMgPLeiW7QhbDRciyLXJaKheCuLbiVoqx1DVRyH26yb0hsuoOFEPsoz+BVE0MRlZNjGZcRQyHYkmMp2hBTIzdkzCTc/pLqOnBrk7/yZdAOq/q5NPBH1f7x7fGP4C3AAMAQrhzX9zhcGsAAAAASUVORK5CYII=) center center no-repeat;
              text-indent: -10000px;
              border: none;
              position: absolute;
              top: 0;
              right: 0;
              z-index: 2;
              cursor: pointer;
              opacity: 0.4;
              cursor: pointer;
              transition: opacity .4s ease;
            }

            input[type="submit"]:hover {
              opacity: 0.8;
            }

            img{
              width: 100%;
              height: 100%;
            }

            .list {
              padding-left: 0px !important;
            }

            .wrapper {
              margin-left: 0px;
            }

          `}
        </style>
      </div>
    )
  }
}
