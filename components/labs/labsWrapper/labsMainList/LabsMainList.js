import React from 'react'
import {Col} from 'react-grid-system'
import Link from 'next/link'

const imageChooser = (props) => {
  if (props === 'Certus') {
    return 'https://www.ifbcertus.edu.pe/blog/wp-content/uploads/2016/09/blog_cover_certus.png'
  }
  if (props === 'Gamboa') {
    return 'https://pbs.twimg.com/profile_images/705493262472056832/i_GpO3EZ.jpg'
  }
  if (props === 'Roma') {
    return 'https://s3-us-west-1.amazonaws.com/healthcarebaja/roma.jpg'
  } else {
    console.log('No tag fits the choosen image')
  }
}

const LabsMainList = ({lab}) => (
  <Col xs={12} sm={12} md={12} lg={4}>
    <div className='back'>
      <h1 className='h1'>
        <Link href={`/laboratories-map?id=${lab}`} as={`/laboratories-map/${lab}`}>
          <div className='link'>{lab}</div>
        </Link>
      </h1>
      <Link href={`/laboratories-map?id=${lab}`} as={`/laboratories-map/${lab}`}>
        <img
          className='img'
          src={imageChooser(lab)}
        />
      </Link>
    </div>
    <style jsx>{`
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

    `}</style>
  </Col>
)

export default LabsMainList
