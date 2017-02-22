import React from 'react'
import styles from './DoctorWrapper.css'
import DocCatList from './docCatList/DocCatList'

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
  <div className={styles.doctorContainer}>
    {doctors.length
    ? doctorCategory(doctors).map(specialty => <DocCatList specialty={specialty} />) : <p>Awaiting Doctors</p>
    }
  </div>
)

export default DoctorWrapper
