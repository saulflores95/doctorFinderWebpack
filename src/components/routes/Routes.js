import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'

import About from '../about/About'
import NotFound from '../notfound/NotFound'
import Home from '../home/Home'
import PostDetail from '../postDetail/PostDetail'
import posts from '../../../blog-posts.json'

import doctors from '../../../static_db/doctors.json'
import DoctorWrapper from '../doctors/docWrapper/DoctorWrapper'
import DoctorDetail from '../doctors/docDetail/DoctorDetail'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={() => <Home posts={posts.posts} />} />
    <Route exact path='/doctors' component={() => <DoctorWrapper doctors={doctors} />} />
    <Route exact path='/doctors/:id' component={props => {
      const doctor = doctors.filter(doctor => props.match.params.id === doctor._id)
      console.log(doctor)
      return <DoctorDetail doctor={doctor[0]} />
    }} />
    <Route exact path='/about' component={About} />
    <Route exact path='/post/:slug' component={props => {
      const post = posts.posts.filter(post => props.match.params.slug === post.slug)
      return <PostDetail post={post[0]} />
    }} />
    <Route component={NotFound} />
  </Switch>
)

export default Routes
