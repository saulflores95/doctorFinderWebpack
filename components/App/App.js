import React from 'react'
import UpperNavigationFilter from '../MainLayout/UpperNavigation/UpperNavigationFilter'
import BottomNavigationComponent from '../MainLayout/BottomNavigation/BottomNavigation'
import Head from 'next/head'

const App = (props) => (
  <div className='wrapperHeight'>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='apple-touch-icon-precomposed' sizes='72x72' href='/static/icon-72x72.png' />
      <link rel='apple-touch-icon-precomposed' sizes='128x128' href='/static/icon-128x128.png' />
      <link rel='apple-touch-icon-precomposed' sizes='114x114' href='/static/icon-144x144.png' />
      <link rel='apple-touch-icon-precomposed' sizes='384x384' href='/static/icon-384x384' />
      <link rel='apple-touch-icon-precomposed' sizes='512x512' href='/static/icon-512x512.png' />
      {// <script src='/sw-installer.js'></script>
      }
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
          overflow-y: auto;
        }

        #header {
          height: 69px;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 999;
        }

      `}
    </style>
  </div>
)

export default App
