import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { routes } from './configs/constants/routes'
import PageNotFound from './pages/404/PageNotFound'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import GlobalStyles from './theme/GlobalStyles'
import { appTheme } from './theme/theme'

export const UserContext = React.createContext(false)

const App: React.FC = () => {
  const [auth, setAuth] = useState<boolean>()

  useEffect(() => {
    let user = localStorage.getItem('user')
    user ? setAuth(true) : setAuth(false)
  }, [])

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />

      <Router>
        {auth && <Navbar logout={() => setAuth(false)} />}
        <Routes>
          {!auth && (
            <Route
              path={routes.LOGIN}
              element={<Login authenticate={() => setAuth(true)} />}
            />
          )}

          {auth && (
            <React.Fragment>
              <Route path={routes.DASHBOARD} element={<Dashboard />} />
              <Route
                path={routes.LOGIN}
                element={<Navigate to={routes.DASHBOARD} />}
              />
              <Route path="*" element={<PageNotFound />} />
            </React.Fragment>
          )}

          <Route
            path={routes.NOT_FOUND}
            element={<Navigate to={auth ? routes.DASHBOARD : routes.LOGIN} />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
