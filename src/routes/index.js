import React from 'react'
import { Route, Switch } from 'react-router'
// routes
// import articles from './_articles'
import HomeView from '../views/HomeView'
import UserView from '../views/UserView'
import ErrorView from '../views/ErrorView'
// const HomeView = () => import('../views/HomeView')

// list all routes here
// export default function () => {
export default class Routes extends React.PureComponent {
  render = () => (
    <Switch>
      <Route exact path='/' component={HomeView} />
      <Route path='/user/:name' component={UserView} />
      <Route component={ErrorView} />
    </Switch>
  )
}
