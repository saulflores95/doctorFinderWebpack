import Link from 'next/link'

const linkStyle = {
  margin: '15px',
  border: 'solid 1px',
  width: '20%',
  display: 'inline-block',
  height: '50px',
  textAlign: 'center',
  borderRadius: '35%',
  cursor:'pointer'
}

const Header = () => (
    <div>
        <h1>Hello Welcome To HCB DEV interface</h1>
        <Link href="/api/doctors">
          <div style={linkStyle}>API</div>
        </Link>
        <Link href="/">
          <div style={linkStyle}>App</div>
        </Link>
        <Link href="/doctor-registration">
          <div style={linkStyle}>Add Doctors</div>
        </Link>
        <Link href="/hospital-registration">
          <div style={linkStyle}>Add Hospital</div>
        </Link>
        <Link href="/clinic-registration">
          <div style={linkStyle}>Add Clinics</div>
        </Link>
        <Link href="/lab-registration">
          <div style={linkStyle}>Add Labs</div>
        </Link>
        <Link href="/pharmacie-registration">
          <div style={linkStyle}>Add Pharmacies</div>
        </Link>
        <div style={linkStyle}><a href="http://healthcarebaja.com/webmail" target="_blank">Webmail</a></div>

    </div>
)

export default Header
