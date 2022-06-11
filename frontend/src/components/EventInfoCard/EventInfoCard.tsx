import styled from 'styled-components'
import CareRecipient from '../../models/CareRecipient'
import { extractTime } from '../../utils/datetime.utils'

const EventInfoCard: React.FC<CareRecipient> = ({
  id,
  timestamp,
  event_type,
  payload,
}) => {
  return (
    <EventInfoCardStyles>
      {/*   <p>{id}</p> */}
      <p> {extractTime(timestamp)} </p>
      <p>{event_type}</p>
      <p>{payload}</p>
    </EventInfoCardStyles>
  )
}

export default EventInfoCard

const EventInfoCardStyles = styled.div`
  margin-bottom: 1rem;
`
