import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './App.css'
import RouteProvider from './routes/RouteProvider'
import { useStore } from './stores/StoreContext'
import GlobalStyles from './theme/GlobalStyles'
import { appTheme } from './theme/theme'

const App: React.FC = () => {
  const { authStore } = useStore()
  //	authStore.initLocalStorage();

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <Router>
        <RouteProvider />
      </Router>
    </ThemeProvider>
  )
}

export default App
