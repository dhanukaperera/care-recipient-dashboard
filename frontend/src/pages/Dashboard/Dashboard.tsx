import { useEffect, useState } from 'react'
import styled from 'styled-components'

import axios from 'axios'
import Loading from '../../components/Loading/Loading'
import CareRecipient from '../../models/CareRecipient'
import EventInfoCard from '../../components/EventInfoCard/EventInfoCard'
import Timeline from '../../components/Timeline/Timeline'

const Dashboard: React.FC = () => {
  const [data, setData] = useState<CareRecipient[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const res = await axios.request({
        method: 'GET',
        url: `http://localhost:8000/getCareRecipientById`,
        headers: { 'Content-Type': 'application/json' },
        params: {
          id: 'df50cac5-293c-490d-a06c-ee26796f850d',
          date: '2019-04-26',
        },
      })

      if (res) {
        setData(res.data.results)
        setLoading(false)
      }

      /*  await axios('http://localhost:8000/getCareRecipientById' ).then(
        (res) => {
          setData(res.data)
          setLoading(false)
        },
        (error) => {
          console.error('Error fetching data: ', error)
          setError(error)
        }
      ) */
    } catch (e) {
      console.log(e)
    }
  }

  if (loading) return <Loading />

  return (
    <DashboardStyles>
      <Timeline data={data} />
      {/*   {data.map((item) => (
        <EventInfoCard key={item.id} {...item} />
      ))} */}
    </DashboardStyles>
  )
}
export default Dashboard

const DashboardStyles = styled.div``
