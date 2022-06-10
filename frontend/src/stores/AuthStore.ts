import BaseStore from './BaseStore'
import { action, observable, transaction } from 'mobx'

class AuthStore extends BaseStore {
  @observable
  isLoggedIn: boolean = true
}

export default AuthStore
