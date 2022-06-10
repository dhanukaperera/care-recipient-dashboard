import React from 'react'

import ApiStore from './ApiStore'
import AuthStore from './AuthStore'
import CareRecipientStore from './CareRecipientStore'

export class RootStore {
  apiStore = new ApiStore(this)
  authStore = new AuthStore(this)
  careRecipientStore = new CareRecipientStore(this)
}

export const rootStore = new RootStore()

const StoreContext = React.createContext(rootStore)

export const useStore = () => React.useContext(StoreContext)
