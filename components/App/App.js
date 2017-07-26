import React from 'react'
import UpperNavigationFilter from '../MainLayout/UpperNavigation/UpperNavigationFilter'
import BottomNavigationComponent from '../MainLayout/BottomNavigation/BottomNavigation'
import Head from 'next/head'

const App = (props) => (
  <div className='wrapperHeight'>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width maximum-scale=1.0, user-scalable=no' />
      <link rel='apple-touch-icon' sizes='120x120' href='/static/icon-apple-120.png' />
      <link rel='apple-touch-icon' sizes='144x144' href='/static/icon-apple-144.png' />
      <link rel='apple-touch-icon' sizes='152x152' href='/static/icon-apple-152.png' />
      <link rel='apple-touch-icon' sizes='167x167' href='/static/icon-apple-167.png' />
      <link rel='apple-touch-icon' sizes='180x180' href='/static/icon-apple-180.png' />
      <meta name='apple-mobile-web-app-title' content='HCB' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='blue' />
      <script src='/sw-installer.js' />
      <meta name='theme-color' content='white' />
      <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
      <link rel='manifest' href='/static/manifest.json' />
      <link rel='shortcut icon' type='image/png' href='/static/favicon-16x16.png' />
      <link rel='stylesheet' href='https://unpkg.com/leaflet@1.0.3/dist/leaflet.css' />
      <style>
        {`.leaflet-container {
          height: 100%;
          width: 100%;
        }
        .leaflet-container a {
          color: #2d517b;
          text-decoration: none;
          font-size: 15px;
          font-family: 'Montserrat', sans-serif;
        }
        .leaflet-control-attribution a {
          display:none;
        }
        body{
          background-color: white;
          width: 100%;
          height: 100%;
          margin: 0;
          top: 0;
          overflow-x: hidden;
          overflow-y: hidden;
          background-color: white;
          font-family: 'Montserrat', sans-serif;
        }
        html {
          height: 100%;
          width: 100%;
          margin: 0;
          top: 0;
          box-sizing: border-box;
          overflow-y: hidden;
          font-family: 'Montserrat', sans-serif;
        }
        #__next {
          height: 100%;
        }
        `}
      </style>
    </Head>
    <div className='container'>
      <div>
        <header id='header'>
          <UpperNavigationFilter />
        </header>
        <div className='content'>
          {props.children}
        </div>
      </div>
      <footer className='footerF'>
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
          height: 100%;
          position: fixed;
          width: 100%;
        }

        .footerF {
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

        .content {
          flex: 1;
          position: absolute;
          top: 69px;
          width: 100%;
          bottom: 0;
          padding-bottom: 56px;
          overflow-x: hidden;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
          height:calc(100% - 1px);
        }

        #header {
          height: 69px;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 999;
        }

        .leaflet-popup-content a {
          font-size: 16px !important;
        }

        .leaflet-popup-content-wrapper {
          background: red !important;
        }
        .leaflet-popup-content-wrapper, .leaflet-popup-tip {
          background: red !important;
        }
      `}
    </style>
  </div>
)

export default App
