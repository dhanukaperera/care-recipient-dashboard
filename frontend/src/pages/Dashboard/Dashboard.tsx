import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import axios from 'axios'
import Loading from '../../components/Loading/Loading'
import CareRecipient from '../../models/CareRecipient'
import Timeline from '../../components/Timeline/Timeline'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'

const Dashboard: React.FC = () => {
  const [data, setData] = useState<CareRecipient[]>([])
  const [loading, setLoading] = useState(true)

  const [value, onChange] = useState(new Date('2019-04-23'))

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const d = moment(value).format('YYYY-MM-DD')
    getData()
  }, [value])

  const getData = async () => {
    const formatDate = moment(value).format('YYYY-MM-DD')

    try {
      setLoading(true)
      const res = await axios.request({
        method: 'GET',
        url: `http://localhost:8000/getCareRecipientById`,
        headers: { 'Content-Type': 'application/json' },
        params: {
          id: 'df50cac5-293c-490d-a06c-ee26796f850d',
          date: formatDate,
        },
      })

      if (res) {
        setData(res.data.results)
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <DashboardStyles>
      <TimelinePanel>
        {loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <h2>
              Timeline for the date : {moment(value).format('YYYY-MM-DD')}
            </h2>
            {data.length == 0 ? (
              <ImageCardStyles>
                <img src={require('../../assets/no-data.svg').default} />
                <h1>No Records Found!</h1>
              </ImageCardStyles>
            ) : (
              <Timeline data={data} />
            )}
          </React.Fragment>
        )}
      </TimelinePanel>

      <SidePanel>
        <h2>Select Date</h2>
        <Calendar onChange={onChange} value={value} />
      </SidePanel>
    </DashboardStyles>
  )
}
export default Dashboard

const DashboardStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow: auto;

  h2 {
    margin: 1rem;
  }

  margin-bottom: 2rem;
`

const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .react-calendar__tile--active {
    background-color: #030724;
  }
`

const TimelinePanel = styled.div`
  width: 100%;
  padding: 0 2rem;
`

const ImageCardStyles = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    height: 60vh;
  }
  h1 {
    padding-top: 4rem;
    text-align: center;
  }
`
