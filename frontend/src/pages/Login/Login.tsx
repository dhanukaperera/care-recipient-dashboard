import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { routes } from '../../configs/constants/routes'
import img from '../../assets/bg.svg'
import { useState } from 'react'

interface Props {
  authenticate: () => void
}

/*
Sample IDs
df50cac5-293c-490d-a06c-ee26796f850d
ad3512a6-91b1-4d7d-a005-6f8764dd0111
e3e2bff8-d318-4760-beea-841a75f00227
*/

const Login: React.FC<Props> = ({ authenticate }) => {
  const navigate = useNavigate()

  const [careRecipientId, setCareRecipientId] = useState<string>('')

  const onClick = () => {
    authenticate()
    localStorage.setItem('user', 'df50cac5-293c-490d-a06c-ee26796f850d')
    navigate(routes.DASHBOARD)
  }

  const login = async () => {
    if (careRecipientId.trim().length === 36) {
      authenticate()
      localStorage.setItem('user', careRecipientId)
      navigate(routes.DASHBOARD)
    } else {
      alert('Care Recipient Id Not Valid!( Hint: Try Auto Login)')
    }
  }

  return (
    <LoginStyles>
      <LoginFormStyles>
        <h1>Login</h1>
        <p>Care Recipient Id :</p>
        <input
          type="text"
          name="careRecipientId"
          value={careRecipientId}
          onChange={(e) => setCareRecipientId(e.target.value)}
          placeholder="df50cac5-293c-490d-a06c-ee26796f850d"
        />
        <button onClick={() => login()}>Login</button>
        <button onClick={onClick}>Auto Login</button>
      </LoginFormStyles>
    </LoginStyles>
  )
}

export default Login

const LoginStyles = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;

  background-position: bottom right;
  height: 100vh;
  width: 100vw;

  overflow: hidden;
`

const LoginFormStyles = styled.div`
  display: flex;
  flex-direction: column;

  width: 32%;

  padding: 4rem;
  border: 1px solid;
  h1,
  p {
    color: #fff;
    margin-bottom: 0.5rem;
  }

  h1 {
    margin-bottom: 2rem;
  }

  background-color: #3f3d56;

  border-radius: 1rem;
  margin: 5rem;

  input[type='text'] {
    width: 100%;
    border: 2px solid #aaa;
    border-radius: 4px;
    margin: 8px 0;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  input[type='text']:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }

  button {
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: #3f3d56;
    margin-bottom: 1rem;
  }
`
