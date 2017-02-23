import React from 'react'
import LabsMainList from './labsMainList/LabsMainList'
import styles from './LabsWrapper.css'

const labsList = (props) => {
  console.log(props)
  var arr = props.map((lab) => {
    return lab.tag
  })
  console.log(arr)
  var uniqueArr = arr.filter(function (elem, index, self) {
    return index === self.indexOf(elem)
  })
  console.log(uniqueArr)
  return uniqueArr
}

const LabsWrapper = ({labs}) => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperList}>
      {labsList(labs).map(lab => <LabsMainList lab={lab} />)}
    </div>
  </div>
)

export default LabsWrapper
