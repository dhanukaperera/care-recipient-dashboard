import { RootStore } from './StoreContext'

abstract class BaseStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  get apiStore() {
    return this.rootStore.apiStore
  }
}

export default BaseStore
