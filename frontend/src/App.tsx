import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './App.css'
import RouteProvider from './routes/RouteProvider'
import GlobalStyles from './theme/GlobalStyles'
import { appTheme } from './theme/theme'
import { observer } from 'mobx-react-lite'

const App: React.FC = observer(() => {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <Router>
        <RouteProvider />
      </Router>
    </ThemeProvider>
  )
})

export default App
