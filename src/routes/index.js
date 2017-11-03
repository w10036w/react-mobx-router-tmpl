import React from 'react'
import { Router, Route } from 'react-router'

// routes
// import articles from './_articles'
// import home from './_home'
const home = () => import('../views/HomeView')

const routes = [home]

const history = createBrowserHistory()

export default () => (
  <Router history={history}>
    <div id='router'>
      <Route path='/home/:name' component={home} />
    </div>
  </Router>
)