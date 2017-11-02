import React from 'react'
import { Router } from 'react-router-dom'

import { Provider } from 'mobx-react'


// routes
import articles from './_articles'


const routes = [articles]

const history = createBrowserHistory()

export default function (props) {
  return <Router history={history} />
}