import React from 'react'
import PharmacieMainList from './phaMainList/PharmacieMainList'
import styles from './PharmacieWrapper.css'

const pharmaciesList = (props) => {
  console.log(props)
  var arr = props.map((pharmacie) => {
    return pharmacie.tag
  })
  console.log(arr)
  var uniqueArr = arr.filter(function (elem, index, self) {
    return index === self.indexOf(elem)
  })
  console.log(uniqueArr)
  return uniqueArr
}

const PharmacieWrapper = ({pharmacies}) => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperList}>
      {pharmaciesList(pharmacies).map(pharmacie => <PharmacieMainList pharmacie={pharmacie} />)}
    </div>
  </div>
)

export default PharmacieWrapper
