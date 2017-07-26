import React from 'react'
import SearchNav from '../../MainLayout/UpperNavigation/searchNav/SearchNav'

const pharmaciesList = (props) => {
  var arr = props.map((pharmacie) => {
    return pharmacie.tag
  })
  var uniqueArr = arr.filter(function (elem, index, self) {
    return index === self.indexOf(elem)
  })
  return uniqueArr
}

const PharmacieWrapper = ({pharmacies}) => (
  <div className='wrapper'>
    <div className='wrapperList'>
      <SearchNav props={pharmaciesList(pharmacies)} identifier='pharmacie' />
    </div>
    <style jsx>
      {`
        .wrapper {
          padding-bottom: 135px;
          padding-top: 15px;
        }

        .wrapperList {
          margin-right: 25px;
        }
      `}
    </style>
  </div>
)

export default PharmacieWrapper
