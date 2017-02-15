import React from 'react'
import Post from '../post/Post'

const PostDetail = (props) => (
  <div>
    <Post {...props.post} />
  </div>
)

export default PostDetail
