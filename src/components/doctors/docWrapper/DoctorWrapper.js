import React from 'react'
import styles from './DoctorWrapper.css'
import DocCatList from './docCatList/DocCatList'
import Transition from 'react-motion-ui-pack'
import {spring} from 'react-motion'

const doctorCategory = (props) => {
  var arr = props.map((doctor) => {
    return doctor.specialty
  })
  var uniqueArr = arr.filter(function (elem, index, self) {
    return index === self.indexOf(elem)
  })
  return uniqueArr
}

const DoctorWrapper = ({doctors}) => (
  <Transition
    component={false}
    enter={{
      opacity: 1,
      translateX: spring(0, {stiffness: 200, damping: 25})
    }}
    leave={{
      opacity: 0,
      translateX: 350
    }}
    >
    <div className={styles.wrapper}>
      {doctors.length
      ? doctorCategory(doctors).map(specialty => <DocCatList specialty={specialty} />) : <div>Loading</div> }
    </div>
  </Transition>
)

export default DoctorWrapper
