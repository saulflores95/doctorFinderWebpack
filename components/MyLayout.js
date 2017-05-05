import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '4px solid #7FDBFF',
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
