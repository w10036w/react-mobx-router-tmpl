import { observable, action, computed, runInAction } from 'mobx'

const keys = ['token', '_id', 'username', 'role']

class Session {
  @observable token
  @observable _id
  @observable username
  @observable role

  constructor (obj) {
    this.init(obj)
  }

  @action.bound
  init ({ token, _id, username, role }) {
    this.token = token
    this._id = _id
    this.username = username
    this.role = role
  }

  @computed get bAdmin () {
    return this.role === 'admin'
  }

  @action.bound
  async login () {

  }
}