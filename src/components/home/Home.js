import React from 'react'
import Post from '../post/Post'

const Home = ({posts}) => (
  <div>
    {posts.length
    ? posts.map(post => <Post key={post.slug} {...post} titleLink />) : <p>Awaiting Post </p>
    }
  </div>
)

export default Home
