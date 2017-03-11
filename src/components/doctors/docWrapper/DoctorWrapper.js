import React from 'react'
import styles from './DoctorWrapper.css'
import { RouteTransition } from 'react-router-transition'
import SearchBar from './SearchBar'

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
  <div className={styles.wrapper}>
    <RouteTransition
      pathname={`/doctors`}
      atEnter={{ translateX: 35, opacity: 0 }}
      atLeave={{ translateX: -35, opacity: 0 }}
      atActive={{ translateX: 0, opacity: 1 }}
      mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)`, opacity: styles.opacity })}
    >
      <SearchBar doctors={doctors} />
    </RouteTransition>
  </div>
)

export default DoctorWrapper
