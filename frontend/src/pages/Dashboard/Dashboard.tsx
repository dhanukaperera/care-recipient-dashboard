import { useEffect } from 'react'
import { useStore } from '../../stores/StoreContext'

const Dashboard: React.FC = () => {
  const { careRecipientStore } = useStore()

  useEffect(() => {
    careRecipientStore.getCareRecipientById()
  }, [])

  return <h1>Dashboard</h1>
}

export default Dashboard
