import React from 'react'
import SearchNav from '../../../MainLayout/UpperNavigation/searchNav/SearchNav'

const DoctorListWrapper = ({doctors}) => (
  <div className='wrapper'>
    <SearchNav props={doctors} identifier='doctor' />
    <style jsx>
      {`
      .wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: white;
      }
      `}
    </style>
  </div>

)

export default DoctorListWrapper
