import React from 'react'
import DocCatList from './docCatList/DocCatList'

let idCounter = 0
const doctorCategory = (props) => {
  var arr = props.map((doctor) => {
    return doctor.specialty
  })
  var uniqueArr = arr.sort().filter(function (elem, index, self) {
    return index === self.indexOf(elem)
  })
  return uniqueArr
}

const DoctorWrapper = (docs) => (
  <div className='wrapper'>
    {docs.docs.length
      ? doctorCategory(docs.docs).map(specialty => <DocCatList specialty={specialty} key={idCounter++} />) : <div>Loading</div>
    }
    <style jsx>
      {`
      .wrapper {
        padding-top: 10px;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
      }
      `}
    </style>
  </div>
)

export default DoctorWrapper
