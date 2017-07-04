import Layout from '../components/MyLayout'

const Index = ({user}) => (
  <Layout>
    <h1>{`Welcome back ${user.username}`}</h1>
    <p>for the pekubianos by the pekubianos</p>
  </Layout>
)

Index.getInitialProps = async ({ req, res }) => {
  if (!req.user) {
    return res.redirect('/login')
  }

  return { user: req.user }
}

export default Index
