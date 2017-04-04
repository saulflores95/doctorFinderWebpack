import React from 'react'
import LabsListItem from './labsListItem/LabsListItem'

const LabsListWrapper = ({labs}) => (
  <div>
    {labs.length
    ? labs.map(lab => <LabsListItem key={lab._id} {...lab} />) : <p>Awaiting laboratories</p>
    }
  </div>
)

export default LabsListWrapper
