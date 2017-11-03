import { RouterStore, syncHistoryWithStore } from 'mobx-react-router'
import createBrowserHistory from 'history/createBrowserHistory'
// import other stores below
// import article from './_article'

// init routing store and bind
const routing = new RouterStore();

const browserHistory = createBrowserHistory();
export const history = syncHistoryWithStore(browserHistory, routing)

export default { 
  routing,
  // patch all stores
  user: 'w10036w',
  // article,

}