import SearchNav from '../../MainLayout/UpperNavigation/searchNav/SearchNav'
import React from 'react'
import styles from './LabsWrapper.css'

const labsList = (props) => {
  var arr = props.map((lab) => {
    return lab.tag
  })
  var uniqueArr = arr.filter(function (elem, index, self) {
    return index === self.indexOf(elem)
  })
  return uniqueArr
}

const LabsWrapper = ({labs}) => (
  <div className={styles.wrapper}>
    <div className={styles.wrapperList}>
      <SearchNav props={labsList(labs)} identifier='lab' />
    </div>
  </div>
)

export default LabsWrapper
