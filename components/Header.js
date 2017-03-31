import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <h1>Hello Welcome To HBC DEV interface</h1>
        <Link href="/api/doctors">
          <a style={linkStyle}>API</a>
        </Link>
        <Link href="/doctors">
          <a style={linkStyle}>App</a>
        </Link>
    </div>
)

export default Header
