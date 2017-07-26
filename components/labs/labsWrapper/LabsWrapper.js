import SearchNav from '../../MainLayout/UpperNavigation/searchNav/SearchNav'
import React from 'react'

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
  <div className='wrapper'>
    <div className='wrapperList'>
      <SearchNav props={labsList(labs)} identifier='lab' />
    </div>
    <style jsx>
      {`
        .wrapper {
          padding-top: 15px;
          padding-bottom: 135px;
        }

        .wrapperList {
          margin-right: 25px;
        }
      `}
    </style>
  </div>
)

export default LabsWrapper
