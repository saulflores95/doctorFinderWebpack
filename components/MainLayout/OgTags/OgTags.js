import Head from 'next/head'

const OgTags = (props) => (
  <div>
    <Head>
      <title>{props.props.name} - HCB</title>
      <meta property='og:type' content='article' />
      <meta property='og:title' content={props.props.name} />
      <meta property='og:description' content={props.props.description} />
      <meta property='og:image' content={props.props.img}/>
      <meta property="og:image:width" content="640" />
      <meta property="og:image:height" content="442" />
    </Head>
  </div>
)

export default OgTags
