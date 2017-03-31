import React from 'react'
import UpperNavigationFilter from '../MainLayout/UpperNavigation/UpperNavigationFilter'
import BottomNavigationComponent from '../MainLayout/BottomNavigation/BottomNavigation'
import Head from 'next/head'

const App = (props) => (
  <div className='wrapperHeight'>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
        <style>
          {`.leaflet-container {
            height: 100%;
            width: 100%;
          }

          body{
            background-color: rgb(0, 188, 212);
          }
          `}
        </style>
      </Head>
      <div className='container'>
        <header>
          <UpperNavigationFilter />
        </header>
        <div className='wrapperHeight2'>
          {props.children}
        </div>
        <footer className='footer'>
          <BottomNavigationComponent />
        </footer>
      </div>
    <style jsx>
      {`

        .container {
          max-width: var(--site-width);
          margin:0 auto;
          overflow-y: hidden;
          overflow-x: hidden;
          padding-bottom: 56px;
          height: 100%;
        }

        .footer {
          height: 56px;
          width: 100%;
          bottom: 0px;
          left: 0px;
          position: fixed;
          z-index: 10000;
          margin-top: -56px;
        }

        .wrapperHeight {
          height: 100%;
        }

        .wrapperHeight2 {
          height: 100%;
          overflow-x: hidden;
          overflow-y: auto;
        }

      `}
    </style>
  </div>
)

export default App
