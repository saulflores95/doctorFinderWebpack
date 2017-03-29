import React from 'react'
import NewUpperNavigation from './newUpperNavigation/NewUpperNavigation'

const UpperNavigationFilter = () => {
  var path = location.pathname
  if (path === '/laboratories' || path === '/pharmacies' || path === '/doctors/') {
    return null
  } else {
    return <NewUpperNavigation />
  }
}

export default UpperNavigationFilter
