import React from 'react'
import { Switch, Route } from 'react-router-dom'

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
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/submit" component={SubmitView} />
      <Route exact path="/:category" component={CategoryView} />
      <Route exact path="/:category/:id" component={PostView} />
      <Route exact path="/:category/:id/edit" component={PostEditView} />
    </Switch>
  </div>
)

export default App
