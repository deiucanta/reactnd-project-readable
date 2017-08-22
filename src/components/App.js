import React from 'react'
import { Route } from 'react-router-dom'

import HomeView from './HomeView'
import SubmitView from './SubmitView'
import PostView from './PostView'
import PostEditView from './PostEditView'
import CategoryView from './CategoryView'

import Navigation from './Navigation'

const App = () => (
  <div>
    <Navigation />
    <hr />
    <Route exact path="/" component={HomeView} />
    <Route exact path="/submit" component={SubmitView} />
    <Route exact path="/posts/:id" component={PostView} />
    <Route exact path="/posts/:id/edit" component={PostEditView} />
    <Route exact path="/categories/:category" component={CategoryView} />
  </div>
)

export default App
