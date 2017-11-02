import React from 'react';
import ReactDOM from 'react-dom'

import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'mobx-react'
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import { Router, Route } from 'react-router'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const store = {
  routing: routingStore
}
const history = syncHistoryWithStore(browserHistory, routingStore)

ReactDOM.render(
  <Provider {...store}>
    <Router history={history}>
      <div>
        <Route path='/' component={App} />
        <Route path='/test' component={()=> (<div>test</div>)} />
      </div>
    </Router>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
