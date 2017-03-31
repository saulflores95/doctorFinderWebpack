import React from 'react'
import Link from 'next/link'
import {Col, Row} from 'react-grid-system'
const hospitalImg = 'http://wildhunt.org/wp-content/uploads/2016/04/maxresdefault.jpg'
const pharmacieImg = 'http://1.bp.blogspot.com/-ieQbmNVAFIY/UIAz7tNDBJI/AAAAAAAAqNU/MtfSy_q9b4w/s1600/pharmacie.jpg'
const clinicImg = 'http://www.health-local.com/images/businesses/medium_crop/50884.jpg'
const labImg = 'https://www.qualitylaboratory.com/images/slider1.jpg'

const CatMenu = () => (
  <div className='wrapper'>
    <div className='wrapperList'>
      <Row>
        <Col xs={12} sm={12} md={12} lg={4}>
          <div className='back'>
            <h1 className='h1'>
              <Link href='/hospitals'>
                <a className='link'>Hospitals</a>
              </Link>
            </h1>
            <Link href='/hospitals'>
              <img
                className='img'
                src={hospitalImg}
              />
            </Link>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <div className='back'>
            <h1 className='h1'>
              <Link href='/clinics'>
                <a className='link'>Clinics</a>
              </Link>
            </h1>
            <Link href='/clinics'>
              <img
                className='img'
                src={clinicImg}
              />
            </Link>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <div className='back'>
            <h1 className='h1'>
              <Link href='/pharmacies'>
                <a className='link'>Pharmacies</a>
              </Link>
            </h1>
            <Link href='/pharmacies'>
              <img
                className='img'
                src={pharmacieImg}
              />
            </Link>
          </div>
        </Col>
        <Col xs={12} sm={12} md={12} lg={4}>
          <div className='back'>
            <h1 className='h1'>
              <Link href='/laboratories'>
                <a className='link'>Laboratories</a>
              </Link>
            </h1>
            <Link href='/laboratories'>
              <img
                className='img'
                src={labImg}
              />
            </Link>
          </div>
        </Col>
      </Row>
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

        .wrapperList {
          margin-left: 25px;
          margin-right: 25px;
        }

        .wrapper {
          padding-top: 15px;
        }
      `}
    </style>
  </div>
)

export default CatMenu
