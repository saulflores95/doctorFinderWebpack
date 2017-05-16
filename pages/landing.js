import Head from 'next/head'

export default () => (
  <div>
     <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="shortcut icon" type="image/png" href="/static/favicon-16x16.png" />
        <title>Healthcare Baja - Your tour guide to health</title>
        <link href="/static/landing.css" rel="stylesheet" />
        <link href="/static/landingcustom.css" rel="stylesheet" />
        <link href="/static/jquery.bxslider.css" rel="stylesheet" />
        <link href="/static/animate.css" rel="stylesheet" />
        <link rel="stylesheet" href="/static/owl.carousel.min.css" />
        <link rel="stylesheet" href="/static/owl.theme.default.min.css" />
     </Head>

     <div id="site-main">

        <header id="main-header">
           <div className="container">
              <div className="wrapper">
                 <div className="row">
                    <div className="logo-main col-3">
                       <a href="index.html"><img src="/static/healthcarebaja.png" alt="logo" /></a>
                    </div>
                    <div className="col-9 text-right">
                       <div className="responsive-menu-btn"><i><b></b><b></b><b></b></i><span></span></div>
                       <nav id="main-menu">
                          <ul className="main-top-menu">
                             <li><a href="#about">Nosotros</a></li>
                             <li><a href="#!">Revista en Línea</a></li>
                             <li><a href="#features">Servicios</a></li>
                             <li><a href="#our-team">Directorio</a></li>
                             <li><a href="#contact">Contacto</a></li>
                             <li className="download"><a href="#download">Descargar App</a></li>
                          </ul>
                       </nav>
                    </div>
                 </div>
              </div>
           </div>
        </header>

        <div className="main">
           <div className="container above-fold parallax pr">
              <div className="wrapper pr">
                 <div className="col-7 md-col-10 above-fold-text">
                    <h1 className="small">Your tour guide<br /> to Health</h1>
                    <p>Descarga nuestra App y empieza tu búsqueda ahora</p>
                    <div className="btn-box">
                       <a className="red text-uppercase" href="#download">Obtener App</a>
                    </div>
                 </div>
                 <a href="#about" className="go-down"></a>
              </div>
              <div className="fadeScroll">
                 <img src="static/landing_hand_bg.png" alt="hand_bg" className="animated hand_bg wow fadeInLeft" data-wow-delay="1s" />
              </div>
           </div>
        </div>

        <div id="about" className="container about-main">
           <div className="wrapper">
              <div className="row">
                 <div className="col-10 offset-1">
                    <div className="row">
                       <div className="col-2 sd-col-12 md-col-12">
                          <img src="/static/landing-hcb-icon.png" className="center-block-xs" />
                       </div>
                       <div className="col-10 sd-col-12 md-col-12">
                          <div className="title-block text-left text-center-xs">
                             <h2>¿Qué es Healthcare Baja?</h2>
                             <i className="sep-line">&nbsp;</i>
                             <p>Healthcare Baja es una guía medica orientada a proporcionar información al turismo americano que busca las mejores opciones en el área de salud y bienestar en Baja California México.</p>
                             <p>Por medio de Healthcare Baja podrás lograr que tu negocio ya sea consultorio, hospital, clínica, centro de bienestar y belleza, farmacia o laboratorio, sea conocido y visitado por más turistas norteamericanos.</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
        </div>

     </div>

  </div>
)
