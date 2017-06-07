import React from 'react'
import NewUpperNavigation from './newUpperNavigation/NewUpperNavigation'

const UpperNavigationFilter = () => {
  var doctorString = '/doctors/'
//  var path = location.pathname
  var path = '/doctors'
  if (path === '/laboratories' || path === '/pharmacies') {
    return null
  } else if (path.indexOf(doctorString) > -1) {
    return null
  } else {
    return <NewUpperNavigation />
  }
}

export default UpperNavigationFilter
