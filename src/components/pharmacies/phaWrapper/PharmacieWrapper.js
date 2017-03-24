import React from 'react'
import styles from './PharmacieWrapper.css'
import SearchNav from '../../MainLayout/UpperNavigation/searchNav/SearchNav'

const pharmaciesList = (props) => {
  console.log(props)
  var arr = props.map((pharmacie) => {
    return pharmacie.tag
  })
  var uniqueArr = arr.filter(function (elem, index, self) {
    return index === self.indexOf(elem)
  })
  return uniqueArr
}

const PharmacieWrapper = ({pharmacies}) => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperList}>
      <SearchNav props={pharmaciesList(pharmacies)} identifier='pharmacie' />
    </div>
  </div>
)

export default PharmacieWrapper
