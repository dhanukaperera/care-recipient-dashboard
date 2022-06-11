import { action, observable } from 'mobx'
import CareRecipient from '../models/CareRecipient'
import BaseStore from './BaseStore'
const axios = require('axios').default

class CareRecipientStore extends BaseStore {
  @observable
  isLoading: boolean = false

  @observable
  careRecipientList: CareRecipient[] = []

  @action
  async getCareRecipientById() {
    try {
      this.isLoading = true

      const res = await axios.request({
        method: 'GET',
        url: `http://localhost:8000/getCareRecipientById`,
        headers: { 'Content-Type': 'application/json' },
        params: {
          id: 'df50cac5-293c-490d-a06c-ee26796f850d',
          date: '2019-04-25',
        },
      })

      this.careRecipientList = res.data.results

      console.log(this.careRecipientList)
    } catch (error) {
      console.error(error)
    } finally {
      this.isLoading = false
    }
  }
}

export default CareRecipientStore
