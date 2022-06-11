import moment from 'moment'

export const extractTime = (timestamp: string) => {
  return moment(timestamp).format('hh:mm:ss')
}
