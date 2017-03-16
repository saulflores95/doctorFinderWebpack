import React from 'react'
import NewUpperNavigation from './newUpperNavigation/NewUpperNavigation'
import doctors from '../../../../static_db/doctors.json'

const UpperNavigationFilter = () => {
  var doctorString = '/doctors/'
  var path = location.pathname
  console.log(path)
  console.log(doctorString)
  if (location.pathname === '/laboratories') {
    return null
  }
  else if (path.indexOf( doctorString ) > -1 ) {
    return null
  }
  else {
    return <NewUpperNavigation />
  }
}

export default UpperNavigationFilter
