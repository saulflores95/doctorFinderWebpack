import React from 'react'
import DocCatList from './docCatList/DocCatList'
let doctors = require('../../../doctors.json')

const doctorCategory = (props) => {
  var arr = props.map((doctor) => {
    return doctor.specialty
  })
  var uniqueArr = arr.filter(function (elem, index, self) {
    return index === self.indexOf(elem)
  })
  return uniqueArr
}

const DoctorWrapper = (doctorProp) => (
  <div className='wrapper'>
      {console.log('Doctors PROP', doctorProp)}
      {doctors.doctors.length
      ? doctorCategory(doctors.doctors).map(specialty => <DocCatList specialty={specialty} />) : <div>Loading</div>
      }
    <style jsx>
      {`
      .wrapper {
        padding-top: 10px;
        width: 100%;
        height: 100%;
        overflow-y: hidden;
      }
      `}
    </style>
  </div>
)

export default DoctorWrapper
