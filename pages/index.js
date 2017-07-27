import Head from 'next/head'
import Link from 'next/link'

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
                <Link href='/doctors'><a><img src='/static/healthcarebaja.png' alt='logo' /></a></Link>
              </div>
              <div className='col-9 text-right'>
                <div className='responsive-menu-btn'><i><b /><b /><b /></i>
                  <span />
                </div>
                <nav id='main-menu'>
                  <ul className='main-top-menu'>
                    <li><a href='#about'>About us</a></li>
                    <li><a href='#!'>Online Magazine</a></li>
                    <li><a href='#features'>Services</a></li>
                    <li><a href='/doctors'>Directory</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li className='download'><a href='/doctors'>Go to app</a></li>
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
                <Link href='/doctors'><a className='red text-uppercase'>Ir a App</a></Link>
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
                      <h2>What is healthcare Baja?</h2>
                      <i className='sep-line'>&nbsp;</i>
                      <p>Healthcare Baja is a medical guide oriented to providing information to American tourism that looks for the best options in the area of health and wellness in Baja California Mexico.</p>
                      <p>By means of low healthcare you will be able to get your business to be an office, hospital, Clinic, wellness and Beauty Center, pharmacy or laboratory, be known and visited by more American tourists.</p>
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
              <h2>Our services</h2>
              <i className='sep-line'>&nbsp;</i>
            </div>
            <div className='features-box text-center'>
              <div className='features-text text-right wow fadeInLeft' data-wow-delay='0.75s'>
                <div className='features-info md-col-12'>
                  <span className='ficon'>
                    <img src='static/landing-magazine-icon.png' />
                  </span>
                  <div className='info-text'>
                    <h6>Printed Guide</h6>
                    <p>Advertisement printed on the guide with home distribution of 10.000 specimens in Southern California E.U.A.</p>
                    <p className='mt15 text-strong'>Downtown San Diego, Eastlake, National City, Coronado, Bonita, Hillcrest Point Loma, Chula Vista, Imperial Beach & Mission Valley.</p>
                  </div>
                </div>
                <div className='features-info md-col-12'>
                  <span className='ficon'>
                    <img src='/static/landing-share-icon.png' />
                  </span>
                  <div className='info-text'>
                    <h6>Facebook</h6>
                    <p>Facebook campaign segmented to a previously filter audience to increase the conversion of prospects to customers.</p>
                  </div>
                </div>
              </div>
              <div className='features-img wow fadeIn'>
                <div className='features-mob'></div>
              </div>
              <div className='features-text text-left wow fadeInRight' data-wow-delay='0.75s'>
                <div className='features-info md-col-12' >
                  <span className='ficon'>
                    <img src='/static/landing-app-icon.png' />
                  </span>
                  <div className='info-text'>
                    <h6>Progressive Web App</h6>
                    <p>Application so that the user can locate and contact doctors, hospitals, clinics, laboratories, etc.</p>
                  </div>
                </div>
                <div className='features-info md-col-12'>
                  <span className='ficon'>
                    <img src='/static/landing-tel-icon.png' />
                  </span>
                  <div className='info-text'>
                    <h6>Web Directory</h6>
                    <p>Presence in our web directory and printed in the magazine.</p>
                  </div>
                </div>
                <div className='features-info md-col-12'>
                  <span className='ficon'>
                    <img src='/static/landing-mail-icon.png' />
                  </span>
                  <div className='info-text'>
                    <h6>Email Blast</h6>
                    <p>Mass mailing by means of a certified platform with anti-spam filters to a database of 40.000 emails in Tijuana, Baja California (emails are filtered and legitimate).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='benefits' className='container benefits-main'>
          <div className='wrapper'>
            <div className='col-5 md-col-12 benefits-img wow fadeInLeft'>
              <img src='/static/landing-img.jpg' alt='landing-img' />
            </div>
            <div className='col-6 md-col-12 benefits-text'>
              <div className='title-block small'>
                <h2>Benefits</h2>
                <span className='sub-title'>Baja California receives more than 2.4 million patients and their
                companions a year</span>
                <i className='sep-line'>&nbsp;</i>
                <p>Baja California is characterized as a modern and dynamic city, houses sites full of history, museums, hotels and restaurants. In addition to hospitals of the highest quality in infrastructure and certified by health authorities.</p>
                <p>In recent years, the quality of medical services in Baja California has been noted, thanks to trained and certified physicians and specialists. Likewise the technology with which the clinics and hospitals of the city count is first.</p>
                <p>Health and medical Tourism in Baja California offers quality, affordable cost, but above all an excellent service by our medical specialists and sub specialists in the different areas of medicine, both medical and surgical. The medical and health sector in Baja California has always been on the lookout for the thousands of patients who month by month are treated with the highest standards of quality and service.</p>
              </div>
              <div className='sub-text md-col-9 sd-col-12' />
            </div>
          </div>
        </div>
        <div className='container send-block-main parallax'>
          <div className='topClr' />
          <div className='wrapper'>
            <div className='col-12 text-center title-block mb0'>
              <h2>Find your doctor now:</h2>
            </div>
            <div className='text-center col-12'>
              <form className='subscribe-form'>
                <input className='email' placeholder='Inicia una búsqueda...' type='text' /><input className='search-btn' type='submit' name='lastname' />
              </form>
            </div>
            <div className='col-12 text-center mt40'><Link href='/doctors'><a>Ver directorio</a></Link></div>
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

        <div className='container team-block-main parallax' id='our-team'>
          <div className='wrapper'>
            <div className='title-block'>
              <h2>Categorías</h2>
              <span className='sub-title'>All you can find at healthcare Baja</span>
              <i className='sep-line'>&nbsp;</i>
            </div>
          </div>
          <div className='team-slider-main text-center'>
            <ul className='team-slider'>
              <li>
                <div className='team-photo'>
                  <img src='/static/landing-DR_ICON.jpg' alt='Category' />
                  <span className='social-links'>
                    <Link href='/doctors'><a><i className='fa fa-search fa-2x' /></a></Link>
                  </span>
                </div>
                <span className='name'>DOCTORS</span>
              </li>
              <li>
                <div className='team-photo'>
                  <img src='/static/landing-HOSPITAL_ICON.jpg' alt='Category' />
                  <span className='social-links'>
                    <Link href='/hospitals'><a><i className='fa fa-search fa-2x' /></a></Link>
                  </span>
                </div>
                <span className='name'>HOSPITALS</span>
              </li>
              <li>
                <div className='team-photo'>
                  <img src='/static/landing-CLINIC_ICON.jpg' alt='Category' />
                  <span className='social-links'>
                    <Link href='/clinics'><a><i className='fa fa-search fa-2x' /></a></Link>
                  </span>
                </div>
                <span className='name'>CLINICS</span>
              </li>
              <li>
                <div className='team-photo'>
                  <img src='/static/landing-LAB_ICON.jpg' alt='Category' />
                  <span className='social-links'>
                    <Link href='/laboratories'><a><i className='fa fa-search fa-2x' /></a></Link>
                  </span>
                </div>
                <span className='name'>LABORATORIES</span>
              </li>
              <li>
                <div className='team-photo'>
                  <img src='/static/landing-PHARMA_ICON.jpg' alt='Category' />
                  <span className='social-links'>
                    <Link href='/pharmacies'><a><i className='fa fa-search fa-2x' /></a></Link>
                  </span>
                </div>
                <span className='name'>PHARMACIES</span>
              </li>
            </ul>
          </div>
        </div>
        <div id='download' className='container downlod-block-main parallax'>
          <div className='topClr' />
          <div className='wrapper'>
            <div className='title-block'>
              <h2>Download our APP</h2>
              <i className='sep-line'>&nbsp;</i>
            </div>
            <div className='downlod-main'>
              <div className='download-btn text-center mb80'>
                <a href='/' className='btn btn-primary'><i className='fa fa-download' aria-hidden='true' />&nbsp;&nbsp;Obtener App</a>
              </div>
              <div className='title-block mb05'>
                <h3>Subscribe to our Newsletter</h3>
              </div>
              <div className='text-center'>
                <form className='subscribe-form'>
                  <input className='email' placeholder='Add your email...' type='text' /><input className='submit-btn' type='submit' name='lastname' />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='container contact-block-main contact-dark' id='contact'>
          <div className='wrapper'>
            <div className='title-block b-b b-danger '>
              <h2>Contact</h2>
              <span className='sub-title mb50'>Please fill out the following form:</span>
            </div>
            <div className='row'>
              <div className='md-col-12 ld-col-6 col-5 offset-xld-1'>
                <div className='contact-form-main'>
                  <form className='contact-form'>
                    <div className='form-row'>
                      <div className='col-5'>
                        <input placeholder='Name' type='text' />
                      </div>
                      <div className='col-5'>
                        <input placeholder='Email' type='text' />
                      </div>
                    </div>
                    <div className='form-row'>
                      <input placeholder='Phone' type='text' />
                    </div>
                    <div className='form-row'>
                      <textarea placeholder='Message...' />
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
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const url = baseUrl + '/doctors'
  if (deviceType === 'phone') {
    res.redirect(url)
  }
  return {deviceType: deviceType}
}

export default landing
