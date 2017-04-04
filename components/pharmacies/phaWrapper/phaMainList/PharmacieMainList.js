import React from 'react'
import {Col} from 'react-grid-system'
import Link from 'next/link'

const imageChooser = (props) => {
  if (props === 'Roma') {
    return 'http://www.lacronica.com/Edicionenlinea/Fotos/Noticias/1138343-N.JPG'
  }
  if (props === 'farmacia') {
    return 'http://toma-control.com/wp-content/themes/cronadyn/images/puntos-de-venta/benavides.png'
  } else {
    console.log('No tag fits the choosen image')
  }
}

const PharmacieMainList = ({pharmacie}) => (
  <Col xs={12} sm={12} md={12} lg={4}>
    <div className='back'>
      <h1 className='h1'>
        <Link href={`/pharmacie-map?id=${pharmacie}`} as={`/pharmacie-map/${pharmacie}`}>
          <div className='link'>
            {pharmacie}
          </div>
        </Link>
      </h1>
      <Link href={`/pharmacie-map?id=${pharmacie}`} as={`/pharmacie-map/${pharmacie}`}>
        <img
          className='img'
          src={imageChooser(pharmacie)}
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

export default PharmacieMainList
