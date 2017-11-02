import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
//styles
import './styles/css/index.css';
import './styles/css/bootstrap-grid.css';
import './App.styl';

@inject('routing')
@observer
export default class App extends Component {
  
  push = () => {
    const { location, push } = this.props.routing
    if (location.pathname !== '/test')
      push('/test')
  }

  render() {
    const { location, goBack } = this.props.routing
    return (
      <div>
        <span>Current pathname: {location.pathname}</span>
        <button onClick={() => this.push('/test')}>Change url</button>
        <button onClick={() => goBack()}>Go Back</button>
      </div>
    );
  }
}
