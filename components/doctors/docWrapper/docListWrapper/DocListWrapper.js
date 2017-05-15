import React from 'react'
import SearchNav from '../../../MainLayout/UpperNavigation/searchNav/SearchNav'

const DoctorListWrapper = ({doctor}) => (
  <div className='wrapper'>
    <SearchNav props={doctor} identifier='doctor' />
    <style jsx>
      {`
      .wrapper {
        padding-top: 10px;
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
