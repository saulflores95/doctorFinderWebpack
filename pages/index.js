import Head from 'next/head'

const landing = () => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' />
      <link rel='shortcut icon' type='image/png' href='/static/favicon-16x16.png' />
      <title>Healthcare Baja - Your tour guide to health</title>
      <link href='/static/landing.css' rel='stylesheet' />
      <link href='/static/landingcustom.css' rel='stylesheet' />
      <link href='/static/jquery.bxslider.css' rel='stylesheet' />
      <link href='/static/animate.css' rel='stylesheet' />
      <link rel='stylesheet' href='/static/owl.carousel.min.css' />
      <link rel='stylesheet' href='/static/owl.theme.default.min.css' />
    </Head>
    <div id='site-main'>
      <header id='main-header'>
        <div className='container'>
          <div className='wrapper'>
            <div className='row'>
              <div className='logo-main col-3'>
                <a href='index.html'><img src='/static/healthcarebaja.png' alt='logo' /></a>
              </div>
              <div className='col-9 text-right'>
                <div className='responsive-menu-btn'><i><b /><b /><b /></i>
                  <span />
                </div>
                <nav id='main-menu'>
                  <ul className='main-top-menu'>
                    <li><a href='#about'>Nosotros</a></li>
                    <li><a href='#!'>Revista en Línea</a></li>
                    <li><a href='#features'>Servicios</a></li>
                    <li><a href='/doctors'>Directorio</a></li>
                    <li><a href='#contact'>Contacto</a></li>
                    <li className='download'><a href='/doctors'>Ir a App</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='main'>
        <div className='container above-fold parallax pr'>
          <div className='wrapper pr'>
            <div className='col-7 md-col-10 above-fold-text'>
              <h1 className='small'>Your tour guide<br /> to Health</h1>
              <p>Descarga nuestra App y empieza tu búsqueda ahora</p>
              <div className='btn-box'>
                <a className='red text-uppercase' href='/'>Obtener App</a>
              </div>
            </div>
            <a href='#about' className='go-down' />
          </div>
          <div className='fadeScroll'>
            <img src='/static/landing_hand_bg.png' alt='hand_bg' className='animated hand_bg wow fadeInLeft' data-wow-delay='1s' />
          </div>
        </div>
        <div id='about' className='container about-main'>
          <div className='wrapper'>
            <div className='row'>
              <div className='col-10 offset-1'>
                <div className='row'>
                  <div className='col-2 sd-col-12 md-col-12'>
                    <img src='/static/landing-hcb-icon.png' className='center-block-xs' />
                  </div>
                  <div className='col-10 sd-col-12 md-col-12'>
                    <div className='title-block text-left text-center-xs'>
                      <h2>¿Qué es Healthcare Baja?</h2>
                      <i className='sep-line'>&nbsp;</i>
                      <p>Healthcare Baja es una guía medica orientada a proporcionar información al turismo americano que busca las mejores opciones en el área de salud y bienestar en Baja California México.</p>
                      <p>Por medio de Healthcare Baja podrás lograr que tu negocio ya sea consultorio, hospital, clínica, centro de bienestar y belleza, farmacia o laboratorio, sea conocido y visitado por más turistas norteamericanos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='features' className='container features-main parallax'>
          <div className='wrapper'>
            <div className='title-block'>
              <h2>Nuestros servicios</h2>
              <i className='sep-line'>&nbsp;</i>
            </div>
            <div className='features-box text-center'>
              <div className='features-text text-right wow fadeInLeft' data-wow-delay='0.75s'>
                <div className='features-info md-col-12'>
                  <span className='ficon'>
                    <img src='static/landing-magazine-icon.png' />
                  </span>
                  <div className='info-text'>
                    <h6>Guía impresa</h6>
                    <p>Anuncio impreso en la guía con distribución a domicilio de 10,000 ejemplares en el Sur de California E.U.A.</p>
                    <p className='mt15 text-strong'>Downtown San Diego, Eastlake, National City, Coronado, Bonita, Hillcrest Point Loma, Chula Vista, Imperial Beach & Mission Valley.</p>
                  </div>
                </div>
                <div className='features-info md-col-12'>
                  <span className='ficon'>
                    <img src='/static/landing-share-icon.png' />
                  </span>
                  <div className='info-text'>
                    <h6>Facebook</h6>
                    <p>Campaña en Facebook segmentada a un público previamente filto para aumentar la conversión de prospectos a clientes.</p>
                  </div>
                </div>
              </div>
              <div className='features-img wow fadeIn'>
                <div className='features-mob'><img src='http://placehold.it/278x494/transparent?text=&nbsp;' alt='features-screen' /></div>
              </div>
              <div className='features-text text-left wow fadeInRight' data-wow-delay='0.75s'>
                <div className='features-info md-col-12' >
                  <span className='ficon'>
                    <img src='/static/landing-app-icon.png' />
                  </span>
                  <div className='info-text'>
                    <h6>Aplicación web</h6>
                    <p>Aplicación para que el usuario pueda ubicar y contactar a médicos, hospitales, clínicas, laboratorios, etc.</p>
                  </div>
                </div>
                <div className='features-info md-col-12'>
                  <span className='ficon'>
                    <img src='/static/landing-tel-icon.png' />
                  </span>
                  <div className='info-text'>
                    <h6>Directorio web</h6>
                    <p>Presencia en nuestro directorio web e impreso en la revista.</p>
                  </div>
                </div>
                <div className='features-info md-col-12'>
                  <span className='ficon'>
                    <img src='/static/landing-mail-icon.png' />
                  </span>
                  <div className='info-text'>
                    <h6>Correos masivos</h6>
                    <p>Envío de correo masivo por medio de una plataforma certificada con filtros anti spam a una base de datos de 40,000 correos en Tijuana, Baja California (los correos son filtrados y legítimos).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='benefits' className='container benefits-main'>
          <div className='wrapper'>
            <div className='col-5 md-col-12 benefits-img wow fadeInLeft'>
              <img src='/static/landing-img-410x690.png' alt='IMG' />
            </div>
            <div className='col-6 md-col-12 benefits-text'>
              <div className='title-block small'>
                <h2>Beneficios</h2>
                <span className='sub-title'>Baja California recibe más de 2.4 millones de pacientes
                y sus acompañantes al año</span>
                <i className='sep-line'>&nbsp;</i>
                <p>Baja California se caracteriza por ser una ciudad moderna y dinámica, alberga sitios llenos de historia, museos, hoteles y restaurantes. Además de hospitales de la más alta calidad en cuanto a infraestructura y certificados por autoridades de salud.</p>
                <p>En los últimos años, la calidad de los servicios médicos en Baja California se ha hecho notar, gracias a los médicos y especialistas capacitados y certificados. Así mismo la tecnología con la que cuentan las clínicas y hospitales de la ciudad es de primera.</p>
                <p>El Turismo de Salud y Médico en Baja California ofrece calidad, costo accesible, pero sobre todo un excelente servicio por parte de nuestros médicos especialistas y sub especialistas en las diferentes áreas de la medicina, tanto medica como quirúrgica. El sector Médico y de Salud en Baja California siempre ha estado al pendiente de los miles de pacientes que mes con mes son atendidos con los estándares más altos de calidad y servicio.</p>
              </div>
              <div className='sub-text md-col-9 sd-col-12' />
            </div>
          </div>
        </div>
        <div className='container send-block-main parallax'>
          <div className='topClr' />
          <div className='wrapper'>
            <div className='col-12 text-center title-block mb0'>
              <h2>Encuentra tu médico ahora</h2>
            </div>
            <div className='text-center col-12'>
              <form className='subscribe-form'>
                <input className='email' placeholder='Inicia una búsqueda...' type='text' /><input className='search-btn' type='submit' name='lastname' />
              </form>
            </div>
            <div className='col-12 text-center mt40'><a href='https://healthcarebaja.com/'>Ver directorio</a></div>
          </div>
        </div>
        <div className='container client-block-main hidden' id='testimonials'>
          <div className='wrapper'>
            <div className='title-block'>
              <h2>Clientes agradecidos</h2>
              <i className='sep-line'>&nbsp;</i>
            </div>
            <ul className='client-slider'>
              <li>
                <p>“Curabitur eget lobortis arcu, non venenatis felis. Duis volutpat lorem eros, tempus ornare velit sodales in. Vivamus at risus neque. Duis auctor lorem id ipsum sollicitudin congue.</p>
                <div className='client-info'>
                  <img src='/static/landing-client01.png' alt='client01' />
                  <strong>Tyrion Lannister</strong>
                  <span>Master of Coin</span>
                </div>
              </li>
              <li>
                <p>“Curabitur eget lobortis arcu, non venenatis felis. Duis volutpat lorem eros, tempus ornare velit sodales in. Vivamus at risus neque. Duis auctor lorem id ipsum sollicitudin congue.</p>
                <div className='client-info'>
                  <img src='/static/landing-client01.png' alt='client01' />
                  <strong>Tyrion Lannister</strong>
                  <span>Master of Coin</span>
                </div>
              </li>
              <li>
                <p>“Curabitur eget lobortis arcu, non venenatis felis. Duis volutpat lorem eros, tempus ornare velit sodales in. Vivamus at risus neque. Duis auctor lorem id ipsum sollicitudin congue.</p>
                <div className='client-info'>
                  <img src='/static/landing-client01.png' alt='client01' />
                  <strong>Tyrion Lannister</strong>
                  <span>Master of Coin</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='container count-block-main' id='achievement'>
          <div className='wrapper'>
            <div className='row text-center'>
              <div className='col-3 md-col-6'>
                <span className='icon-ic_download ficon' />
                <span className='count counter'>649</span>
                <em>Downloaded</em>
              </div>
              <div className='col-3 md-col-6'>
                <span className='icon-ic_apple ficon' />
                <span className='count counter'>628</span>
                <em>iOs users</em>
              </div>
              <div className='col-3 md-col-6'>
                <span className='icon-ic_android ficon' />
                <span className='count counter'>247</span>
                <em>Android users</em>
              </div>
              <div className='col-3 md-col-6'>
                <span className='icon-ic_windows ficon' />
                <span className='count counter'>325</span>
                <em>Windows users</em>
              </div>
            </div>
          </div>
        </div>
        <div className='container team-block-main parallax' id='our-team'>
          <div className='wrapper'>
            <div className='title-block'>
              <h2>Categorías</h2>
              <span className='sub-title'>Todo lo que puedes encontrar en Healthcare Baja</span>
              <i className='sep-line'>&nbsp;</i>
            </div>
          </div>
          <div className='team-slider-main text-center'>
            <ul className='team-slider'>
              <li>
                <div className='team-photo'>
                  <img src='/static/landing-DR_ICON.jpg' alt='Category' />
                  <span className='social-links'>
                    <a href='https://healthcarebaja.com'><i className='fa fa-search fa-2x' /></a>
                  </span>
                </div>
                <span className='name'>Doctores</span>
              </li>
              <li>
                <div className='team-photo'>
                  <img src='/static/landing-HOSPITAL_ICON.jpg' alt='Category' />
                  <span className='social-links'>
                    <a href='https://healthcarebaja.com/hospitals'><i className='fa fa-search fa-2x' /></a>
                  </span>
                </div>
                <span className='name'>Hospitales</span>
              </li>
              <li>
                <div className='team-photo'>
                  <img src='/static/landing-CLINIC_ICON.jpg' alt='Category' />
                  <span className='social-links'>
                    <a href='https://healthcarebaja.com/clinics'><i className='fa fa-search fa-2x' /></a>
                  </span>
                </div>
                <span className='name'>Clínicas</span>
              </li>
              <li>
                <div className='team-photo'>
                  <img src='/static/landing-LAB_ICON.jpg' alt='Category' />
                  <span className='social-links'>
                    <a href='https://healthcarebaja.com/labs'><i className='fa fa-search fa-2x' /></a>
                  </span>
                </div>
                <span className='name'>Laboratorios</span>
              </li>
              <li>
                <div className='team-photo'>
                  <img src='/static/landing-PHARMA_ICON.jpg' alt='Category' />
                  <span className='social-links'>
                    <a href='https://healthcarebaja.com/pharmacies'><i className='fa fa-search fa-2x' /></a>
                  </span>
                </div>
                <span className='name'>Farmacias</span>
              </li>
            </ul>
          </div>
        </div>
        <div id='download' className='container downlod-block-main parallax'>
          <div className='topClr' />
          <div className='wrapper'>
            <div className='title-block'>
              <h2>Descarga nuestra App</h2>
              <i className='sep-line'>&nbsp;</i>
            </div>
            <div className='downlod-main'>
              <div className='download-btn text-center mb80'>
                <a href='/' className='btn btn-primary'><i className='fa fa-download' aria-hidden='true' />&nbsp;&nbsp;Obtener App</a>
              </div>
              <div className='title-block mb05'>
                <h3>Suscríbete a nuestro boletín</h3>
              </div>
              <div className='text-center'>
                <form className='subscribe-form'>
                  <input className='email' placeholder='Agrega tu email...' type='text' /><input className='submit-btn' type='submit' name='lastname' />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='container contact-block-main contact-dark' id='contact'>
          <div className='wrapper'>
            <div className='title-block b-b b-danger '>
              <h2>Contáctanos</h2>
              <span className='sub-title mb50'>Favor de llenar la forma siguiente</span>
            </div>
            <div className='row'>
              <div className='md-col-12 ld-col-6 col-5 offset-xld-1'>
                <div className='contact-form-main'>
                  <form className='contact-form'>
                    <div className='form-row'>
                      <div className='col-5'>
                        <input placeholder='Nombre completo' type='text' />
                      </div>
                      <div className='col-5'>
                        <input placeholder='Email' type='text' />
                      </div>
                    </div>
                    <div className='form-row'>
                      <input placeholder='Teléfono' type='text' />
                    </div>
                    <div className='form-row'>
                      <textarea placeholder='Mensaje...' />
                    </div>
                    <div className='form-row'>
                      <div className='col-5'>
                        <img src='/static/landing-reCAPTCHA.png' />
                      </div>
                      <div className='col-5 text-right'>
                        <button className='send-btn'> <span className='icon-ic_send_small' />Enviar</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className='col-6 md-col-12 mt05'>
                <div className='inner-contact b-l b-danger pl50 ml50'>
                  <div className='row'>
                    <div className='col-2'>
                      <img src='/static/landing-contact-icon-pin.png' />
                    </div>
                    <div className='col-10'>
                      <p>Blvd. Las Américas #4460-A <br />
                         Lomas de Agua Caliente<br />
                         Tijuana BC, México
                      </p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-2'>
                      <img src='/static/landing-contact-icon-tel.png' />
                    </div>
                    <div className='col-10'>
                      <p>(664) 208.1720</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-2'>
                      <img src='/static/landing-contact-icon-mobile.png' />
                    </div>
                    <div className='col-10'>
                      <p>(664) 364.5124</p>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-2'>
                      <img src='/static/landing-contact-icon-mail.png' />
                    </div>
                    <div className='col-10'>
                      <p>info@healthcarebaja.com</p>
                    </div>
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

landing.getInitialProps = async ({ req, res }) => {
  var deviceType = req.device.type
  if (deviceType === 'phone') {
    res.redirect('https://healthcarebaja.com/doctors')
  }
  return {deviceType: deviceType}
}

export default landing
