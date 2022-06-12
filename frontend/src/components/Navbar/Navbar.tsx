import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { routes } from '../../configs/constants/routes'

interface Props {
  logout: () => void
}

const Navbar: React.FC<Props> = ({ logout }) => {
  const navigate = useNavigate()

  const onClick = async () => {
    logout()
    await localStorage.clear()
    navigate(routes.LOGIN)
  }

  return (
    <NavbarStyles>
      <h1>Care Recipient Dashboard</h1>
      <button onClick={onClick}>Sign out</button>
    </NavbarStyles>
  )
}

export default Navbar

const NavbarStyles = styled.div`
  background-color: #030724;
  color: #fff;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  button {
    background-color: #fff;
    border: none;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
  }
`
