import React from 'react'
import PharmacieMainList from './phaMainList/PharmacieMainList'

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
  <div>
    {pharmaciesList(pharmacies).map(pharmacie => <PharmacieMainList pharmacie={pharmacie} />)}
  </div>
)

export default PharmacieWrapper
