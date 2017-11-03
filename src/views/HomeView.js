import React from 'react'

export default class HomeView extends React.PureComponent {

  render () {
    const routing = this.props.routing
    return (
      <div>
        <h1>Dynamic Routes</h1>
        <p>Current routing params: <span>{JSON.stringify(routing)}</span></p>
        
      </div>
    )
  }
}