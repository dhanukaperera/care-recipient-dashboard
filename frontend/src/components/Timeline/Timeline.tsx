import React from 'react'
import styled from 'styled-components'
import CareRecipient from '../../models/CareRecipient'
import { extractTime } from '../../utils/datetime.utils'

interface Props {
  data: CareRecipient[]
}

const Timeline: React.FC<Props> = ({ data }) => {
  const displayPayload = (payload: string) => {
    const payloadObj = JSON.parse(payload)

    const NO_RECORD = 'No record'

    const eventType = payloadObj.event_type

    if (!eventType) return

    switch (eventType) {
      case 'alert_qualified':
        return (
          <React.Fragment>
            <p>
              {' '}
              <TextHighLight>Alert Severity </TextHighLight> :{' '}
              {payloadObj?.alert_severity}{' '}
            </p>
          </React.Fragment>
        )

      case 'catheter_observation':
        return (
          <React.Fragment>
            <p>
              <TextHighLight>Volume(ml)</TextHighLight>:{' '}
              {payloadObj?.volume_ml ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'concern_raised':
        return (
          <React.Fragment>
            <p>
              {' '}
              <TextHighLight>Note</TextHighLight> :{' '}
              {payloadObj?.note ?? NO_RECORD}{' '}
            </p>
            <p>
              <TextHighLight>Severity</TextHighLight> :{' '}
              {payloadObj?.severity ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'fluid_intake_observation':
        return (
          <React.Fragment>
            <p>
              {' '}
              <TextHighLight>Fluid</TextHighLight> :{' '}
              {payloadObj?.fluid ?? NO_RECORD}{' '}
            </p>
            <p>
              {' '}
              <TextHighLight>Observed</TextHighLight> :{' '}
              {payloadObj?.observed ? 'Yes' : 'No'}{' '}
            </p>
            <p>
              <TextHighLight>Consumed Volume(ml)</TextHighLight>:{' '}
              {payloadObj?.consumed_volume_ml ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'general_observation':
        return (
          <React.Fragment>
            <p>
              {' '}
              <TextHighLight>Note</TextHighLight> :{' '}
              {payloadObj?.note ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'incontinence_pad_observation':
        return (
          <React.Fragment>
            <p>
              <TextHighLight>Pad condition</TextHighLight>:{' '}
              {payloadObj?.pad_condition ?? NO_RECORD}{' '}
            </p>
            <p>
              <TextHighLight>Note</TextHighLight> :{' '}
              {payloadObj?.note ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'medication_schedule_created':
        return (
          <React.Fragment>
            <p>
              <TextHighLight>Type</TextHighLight>:{' '}
              {payloadObj?.type ?? NO_RECORD}{' '}
            </p>
            <p>
              {' '}
              <TextHighLight>Note</TextHighLight> :{' '}
              {payloadObj?.note ?? NO_RECORD}{' '}
            </p>
            <p>
              {' '}
              <TextHighLight>Dose Size</TextHighLight> :{' '}
              {payloadObj?.dose_size ?? NO_RECORD}{' '}
            </p>
            <p>
              <TextHighLight>Medical Product Id</TextHighLight>:{' '}
              {payloadObj?.medical_product_id ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'medication_schedule_updated':
        return (
          <React.Fragment>
            <p>
              <TextHighLight>Type</TextHighLight>: {payloadObj?.type}{' '}
            </p>
            <p>
              {' '}
              <TextHighLight>Note</TextHighLight> :{' '}
              {payloadObj?.note ?? NO_RECORD}{' '}
            </p>
            <p>
              <TextHighLight>Dose Size</TextHighLight>:{' '}
              {payloadObj?.dose_size ?? NO_RECORD}{' '}
            </p>
            <p>
              <TextHighLight>Medical Product Id</TextHighLight>:{' '}
              {payloadObj?.medical_product_id ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'mental_health_observation':
        return (
          <React.Fragment>
            <p>
              <TextHighLight>Note</TextHighLight>:{' '}
              {payloadObj?.note ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'mood_observation':
        return (
          <React.Fragment>
            <p>
              <TextHighLight>Mood</TextHighLight> :{' '}
              {payloadObj?.mood ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'no_medication_observation_received':
        return (
          <React.Fragment>
            <p>
              <TextHighLight>Medication Type</TextHighLight>:{' '}
              {payloadObj.medication_type ?? NO_RECORD}
            </p>
          </React.Fragment>
        )

      case 'physical_health_observation':
        return (
          <React.Fragment>
            <p>
              <TextHighLight>Note</TextHighLight>:{' '}
              {payloadObj?.note ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'regular_medication_maybe_taken':
        return (
          <React.Fragment>
            <p>
              <TextHighLight>Medication Failure Reason</TextHighLight>:{' '}
              {payloadObj?.medication_failure_reason ?? NO_RECORD}
            </p>
          </React.Fragment>
        )

      case 'regular_medication_partially_taken':
        return (
          <React.Fragment>
            <p>
              <TextHighLight>Note</TextHighLight>:{' '}
              {payloadObj?.note ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'regular_medication_not_taken':
        return (
          <React.Fragment>
            <p>
              <TextHighLight>Note</TextHighLight>:{' '}
              {payloadObj?.note ?? NO_RECORD}{' '}
            </p>
            <p>
              <TextHighLight>Medication Type</TextHighLight>:{' '}
              {payloadObj?.medication_type ?? NO_RECORD}{' '}
            </p>
            <p>
              <TextHighLight>Medication Failure Reason</TextHighLight>:{' '}
              {payloadObj?.medication_failure_reason ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'regular_medication_taken':
        return (
          <React.Fragment>
            <p>
              {' '}
              <TextHighLight>Medication Type</TextHighLight> :{' '}
              {payloadObj?.medication_type ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'task_completed':
        return (
          <React.Fragment>
            <p>
              <TextHighLight>Task Schedule Note</TextHighLight>:{' '}
              {payloadObj?.task_schedule_note ?? NO_RECORD}{' '}
            </p>
            <p>
              <TextHighLight>Task Definition Description</TextHighLight>:{' '}
              {payloadObj?.task_definition_description ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'task_completion_reverted':
        return (
          <React.Fragment>
            <p>
              <TextHighLight>Task Schedule Note</TextHighLight>:{' '}
              {payloadObj?.task_schedule_note ?? NO_RECORD}{' '}
            </p>
            <p>
              <TextHighLight>Task Definition Description</TextHighLight>:{' '}
              {payloadObj?.task_definition_description ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'task_schedule_created':
        return (
          <React.Fragment>
            <p>Note : {payloadObj?.note ?? NO_RECORD} </p>
          </React.Fragment>
        )

      case 'toilet_visit_recorded':
        return (
          <React.Fragment>
            <p>
              {' '}
              <TextHighLight>Note</TextHighLight> Note :{' '}
              {payloadObj?.note ?? NO_RECORD}{' '}
            </p>
            <p>
              <TextHighLight>Observed</TextHighLight> :{' '}
              {payloadObj?.observed ? 'Yes' : 'No'}{' '}
            </p>
          </React.Fragment>
        )

      case 'food_intake_observation':
        return (
          <React.Fragment>
            <p>
              {' '}
              <TextHighLight>Meal</TextHighLight> :{' '}
              {payloadObj?.meal ?? NO_RECORD}{' '}
            </p>
            <p>
              {' '}
              <TextHighLight>Note</TextHighLight> :{' '}
              {payloadObj?.note ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'visit_completed':
      case 'visit_cancelled':
      case 'check_in':
      case 'check_out':
      case 'alert_raised':
        return (
          <React.Fragment>
            <p>No additional notes</p>
          </React.Fragment>
        )
    }
  }

  const formatEventType = (name: string) => {
    return name.replace(/_/g, ' ')
  }

  return (
    <TimelineStyles>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Time</th>
            <th>Event Type</th>
            <th>Additional Notes</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index}</td>
                <td> {extractTime(item.timestamp)}</td>
                <EventTypeStyes type={item.event_type}>
                  {formatEventType(item.event_type)}
                </EventTypeStyes>
                <td> {displayPayload(item.payload || '{}')} </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </TimelineStyles>
  )
}

export default Timeline

interface EventTypeStyesProps {
  type: string
}

const handleColorType = (type: string) => {
  switch (type) {
    case 'alert_qualified':
      return 'background-color: #F2A391 '
    case 'catheter_observation':
      return 'background-color: #025928'
    case 'concern_raised':
      return 'background-color: #BF6341'
    case 'general_observation':
      return 'background-color: #8CBEC7'
    case 'incontinence_pad_observation':
      return 'background-color: #F2CEDF'
    case 'medication_schedule_created':
      return 'background-color: #F2CEDF'
    case 'medication_schedule_updated':
      return 'background-color: #3FA3BA'
    case 'mental_health_observation':
      return 'background-color:#F2E3B6 '
    case 'mood_observation':
      return 'background-color: #ACC2C2 '
    case 'physical_health_observation':
      return 'background-color: #ACC2C2'
    case 'regular_medication_maybe_taken':
      return 'background-color: #ACC2C2'
    case 'regular_medication_partially_taken':
      return 'background-color: #ACC2C2'
    case 'regular_medication_not_taken':
      return 'background-color: #ACC2C2'
    case 'regular_medication_taken':
      return 'background-color: #F0B5B2'
    case 'task_completed':
      return 'background-color: #7FBD8A '
    case 'task_completion_reverted':
      return 'background-color: #FFF6BB'
    case 'task_schedule_created':
      return 'background-color:#5A8C87 '
    case 'toilet_visit_recorded':
      return 'background-color: #5A8C87'
    case 'visit_completed':
      return 'background-color: #F5D1C3'
    case 'visit_cancelled':
      return 'background-color: #F5D1C3'
    case 'check_in':
      return 'background-color: #F2AB9B '
    case 'check_out':
      return 'background-color: #AAB8BB'
    case 'alert_raised':
      return 'background-color: #E46764'
    case 'fluid_intake_observation':
      return 'background-color: #88EAFF'
    case 'food_intake_observation':
      return 'background-color: #FFE548'
    case 'no_medication_observation_received':
      return 'background-color: #D97059'
  }
}

const TimelineStyles = styled.div`
  border-radius: 1rem;
  /*  margin: 2rem; */

  padding: 1rem 0;

  background-color: #030724;
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
  }

  th {
    font-size: 1.2rem;
    font-weight: 800;
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
  }

  td:nth-child(2) {
    text-align: center;
    min-width: 6rem;
  }

  td:nth-child(3) {
    min-width: 14rem;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:nth-child(odd) {
    background-color: #fff;
  }

  th {
    background-color: #030724;
    color: white;
  }
`
const EventTypeStyes = styled.td<EventTypeStyesProps>`
  ${({ type }) => handleColorType(type)};
  text-transform: capitalize;
`

const TextHighLight = styled.span`
  font-weight: 800;
  color: #030724;
`
