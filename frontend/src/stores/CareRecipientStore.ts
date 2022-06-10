import BaseStore from './BaseStore'
const axios = require('axios').default

class CareRecipientStore extends BaseStore {
  async getCareRecipientById() {
    try {
      const r = await axios.request({
        method: 'GET',
        url: `http://localhost:8000/getCareRecipientById`,
        headers: { 'Content-Type': 'application/json' },
        params: {
          id: 'df50cac5-293c-490d-a06c-ee26796f850d',
          date: '2019-04-25',
        },
      })

      console.log(r)
    } catch (error) {
      console.error(error)
    }
  }
}

export default CareRecipientStore
