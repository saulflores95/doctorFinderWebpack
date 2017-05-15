import React from 'react'
import Link from 'next/link'
import {Col} from 'react-grid-system'

const HospitalList = ({hospital}) => (
  <Col xs={12} sm={12} md={12} lg={4}>
    <div className='back'>
      <h1 className='h1'>
        <Link href={`/hospital-detail?id=${hospital._id}`} as={`/hospital-detail/${hospital._id}`}>
          <a className='link'>{hospital.name}</a>
        </Link>
      </h1>
      <Link href={`/hospital-detail?id=${hospital._id}`} as={`/hospital-detail/${hospital._id}`}>
        <img
          className='img'
          src={hospital.img}
        />
      </Link>
    </div>
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
          text-decoration:none;
        }

      `}
    </style>
  </Col>
)

export default HospitalList
