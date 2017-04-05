import React from 'react'
import {Col} from 'react-grid-system'
import Link from 'next/link'

const ClinicList = ({clinic}) => (
  <div>
    <Col xs={12} sm={12} md={12} lg={4}>
      <div className='back'>
        <h1 className='h1'>
          <Link href={`/clinic-detail?id=${clinic._id}`} as={`/clinic-detail/${clinic._id}`}>
            <div className='link'>{clinic.name}</div>
          </Link>
        </h1>
        <Link to={`/clinics/${clinic._id}`}>
          <img
            className='img'
            src={clinic.img}
          />
        </Link>
      </div>
    </Col>
    <style jsx>
      {`
        .img {
          width: 100%;
          height: 250px;
          filter: brightness(40%);
          transition: 0.2s;
        }

        .img:hover {
          border-radius: 50%;
          transition: 0.2s;
        }
        .h1 {
          position: absolute;
          width: 100%;
          z-index: 1;
          text-align: center;
          margin-top: 20%;
        }
        .back {
          position: relative;
          height: 250px;
          width: 100%;
          margin-bottom: 30px;
        }
        .link {
          color: white;
          font-size: 30px;
        }

      `}
    </style>
  </div>
)

export default ClinicList
