import React from 'react'
import styles from './DoctorWrapper.css'
import DocCatList from './docCatList/DocCatList'
import LoadingComponent from '../../MainLayout/loadingComponent/LoadingComponent'
import { RouteTransition } from 'react-router-transition'

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
      atEnter={{ translateX: 35, opacity: 0, 'animation-duration': '10s' }}
      atLeave={{ translateX: -35, opacity: 0, 'animation-duration': '10s' }}
      atActive={{ translateX: 0, opacity: 1, 'animation-duration': '10s' }}
      mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)`, opacity: styles.opacity, 'animation-duration': styles.transition })}
      >
      {doctors.length
      ? doctorCategory(doctors).map(specialty => <DocCatList specialty={specialty} />) : <LoadingComponent />
      }
    </RouteTransition>
  </div>
)

export default DoctorWrapper
