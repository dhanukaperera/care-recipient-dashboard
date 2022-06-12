import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { routes } from '../../configs/constants/routes'

interface Props {
  authenticate: () => void
}

const Login: React.FC<Props> = ({ authenticate }) => {
  const navigate = useNavigate()

  const onClick = () => {
    authenticate()
    localStorage.setItem('user', 'df50cac5-293c-490d-a06c-ee26796f850d')
    navigate(routes.DASHBOARD)
  }

  return (
    <LoginStyles>
      <h1>Login</h1>
      <button onClick={onClick}>Login</button>
    </LoginStyles>
  )
}

export default Login

const LoginStyles = styled.div``
