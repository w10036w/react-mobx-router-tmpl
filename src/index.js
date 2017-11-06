import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import { RouterStore } from 'mobx-react-router'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory';
import { syncHistoryWithStore } from 'mobx-react-router'
// styles
import './styles/index.styl'
// service-worker
import registerServiceWorker from './registerServiceWorker'
// routes & store
import Routes from './routes'
import store from './store'

// sync route & store
const routing = new RouterStore()
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routing)

render(
  <Provider routing={routing} {...store}>
    <Router history={history}><Routes /></Router>
  </Provider>, 
  document.getElementById('root'));

registerServiceWorker();
