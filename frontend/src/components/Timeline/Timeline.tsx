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
            <p>Alert Severity : {payloadObj?.alert_severity} </p>
          </React.Fragment>
        )

      case 'catheter_observation':
        return (
          <React.Fragment>
            <p>Volume(ml) : {payloadObj?.volume_ml ?? NO_RECORD} </p>
          </React.Fragment>
        )

      case 'concern_raised':
        return (
          <React.Fragment>
            <p>Note : {payloadObj?.note ?? NO_RECORD} </p>
            <p>Severity : {payloadObj?.severity ?? NO_RECORD} </p>
          </React.Fragment>
        )

      case 'fluid_intake_observation':
        return (
          <React.Fragment>
            <p>Fluid : {payloadObj?.fluid ?? NO_RECORD} </p>
            <p>Observed : {payloadObj?.observed ? 'Yes' : 'No'} </p>
            <p>
              Consumed Volume(ml): {payloadObj?.consumed_volume_ml ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'general_observation':
        return (
          <React.Fragment>
            <p>Note : {payloadObj?.note ?? NO_RECORD} </p>
          </React.Fragment>
        )

      case 'incontinence_pad_observation':
        return (
          <React.Fragment>
            <p>Pad condition : {payloadObj?.pad_condition ?? NO_RECORD} </p>
            <p>Note : {payloadObj?.note ?? NO_RECORD} </p>
          </React.Fragment>
        )

      case 'medication_schedule_created':
        return (
          <React.Fragment>
            <p>Type: {payloadObj?.type ?? NO_RECORD} </p>
            <p>Note : {payloadObj?.note ?? NO_RECORD} </p>
            <p>Dose Size: {payloadObj?.dose_size ?? NO_RECORD} </p>
            <p>
              Medical Product Id: {payloadObj?.medical_product_id ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'medication_schedule_updated':
        return (
          <React.Fragment>
            <p>Type: {payloadObj?.type} </p>
            <p>Note : {payloadObj?.note ?? NO_RECORD} </p>
            <p>Dose Size: {payloadObj?.dose_size ?? NO_RECORD} </p>
            <p>
              Medical Product Id: {payloadObj?.medical_product_id ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'mental_health_observation':
        return (
          <React.Fragment>
            <p>Note : {payloadObj?.note ?? NO_RECORD} </p>
          </React.Fragment>
        )

      case 'mood_observation':
        return (
          <React.Fragment>
            <p>Mood : {payloadObj?.mood ?? NO_RECORD} </p>
          </React.Fragment>
        )

      case 'no_medication_observation_received':
        return (
          <React.Fragment>
            <p>Medication Type : {payloadObj.medication_type ?? NO_RECORD}</p>
          </React.Fragment>
        )

      case 'physical_health_observation':
        return (
          <React.Fragment>
            <p>Note : {payloadObj?.note ?? NO_RECORD} </p>
          </React.Fragment>
        )

      case 'regular_medication_maybe_taken':
        return (
          <React.Fragment>
            <p>
              Medication Failure Reason :{' '}
              {payloadObj?.medication_failure_reason ?? NO_RECORD}
            </p>
          </React.Fragment>
        )

      case 'regular_medication_partially_taken':
        return (
          <React.Fragment>
            <p>Note : {payloadObj?.note ?? NO_RECORD} </p>
          </React.Fragment>
        )

      case 'regular_medication_not_taken':
        return (
          <React.Fragment>
            <p>Note : {payloadObj?.note ?? NO_RECORD} </p>
            <p>Medication Type : {payloadObj?.medication_type ?? NO_RECORD} </p>
            <p>
              Medication Failure Reason :{' '}
              {payloadObj?.medication_failure_reason ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'regular_medication_partially_taken':
        return (
          <React.Fragment>
            <p>Note : {payloadObj?.note ?? NO_RECORD} </p>
            <p>Medication Type : {payloadObj?.medication_type ?? NO_RECORD} </p>
          </React.Fragment>
        )

      case 'regular_medication_taken':
        return (
          <React.Fragment>
            <p>Medication Type : {payloadObj?.medication_type ?? NO_RECORD} </p>
          </React.Fragment>
        )

      case 'task_completed':
        return (
          <React.Fragment>
            <p>
              Task Schedule Note : {payloadObj?.task_schedule_note ?? NO_RECORD}{' '}
            </p>
            <p>
              Task Definition Description :{' '}
              {payloadObj?.task_definition_description ?? NO_RECORD}{' '}
            </p>
          </React.Fragment>
        )

      case 'task_completion_reverted':
        return (
          <React.Fragment>
            <p>
              Task Schedule Note : {payloadObj?.task_schedule_note ?? NO_RECORD}{' '}
            </p>
            <p>
              Task Definition Description :{' '}
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
            <p>Note : {payloadObj?.note ?? NO_RECORD} </p>
            <p>Observed : {payloadObj?.observed ? 'Yes' : 'No'} </p>
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

  return (
    <TimelineStyles>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Time</th>
            <th>Event Type</th>
            <th>Notes</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td> {extractTime(item.timestamp)}</td>
                <td> {item.event_type}</td>
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

const TimelineStyles = styled.div`
  table {
    border: 1;
  }
`
