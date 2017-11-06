import React from 'react'

import { observer, inject } from 'mobx-react'

@inject(({ session }) => ({
  session
}))
@observer
export default class UserView extends React.Component {

  render () {
    const { name } = this.props.match.params
    const username = this.props.session.username
    return (
      <div>
        <h1>User View</h1>
        <p>Current user name: {name}</p>
        <p>Is this current user ? {user===name ? 'Yes':'No'}</p>
        <input type='text' onChange={changeCurrentUser}
          placeholder='change current user name here' />
      </div>
    )
  }
}