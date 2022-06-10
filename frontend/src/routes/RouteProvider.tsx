import React from 'react'
import { Route, Routes, Router, Navigate } from 'react-router-dom'
import { routes } from '../configs/constants/routes'
import PageNotFound from '../pages/404/PageNotFound'
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/Login/Login'
import { useStore } from '../stores/StoreContext'

const RouteProvider = () => {
  const { authStore } = useStore()

  return (
    <Routes>
      {!authStore.isLoggedIn && (
        <Route path={routes.LOGIN} element={<Login />} />
      )}

      {authStore.isLoggedIn && (
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
        element={
          <Navigate
            to={authStore.isLoggedIn ? routes.DASHBOARD : routes.LOGIN}
          />
        }
      />
    </Routes>
  )
}

export default RouteProvider
