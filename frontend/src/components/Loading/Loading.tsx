import styled from 'styled-components'

const Loading: React.FC = () => {
  return (
    <LoadingStyles>
      <h1>Loading...</h1>
    </LoadingStyles>
  )
}

export default Loading

const LoadingStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
