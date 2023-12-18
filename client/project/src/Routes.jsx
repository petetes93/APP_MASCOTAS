// AppRoutes.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LogIn from './pages/login/LogIn'
import SignUp from './pages/register/SignUps'

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<LogIn onLogin={() => {}} isAuthenticated={false} />}
      />
      <Route
        path='/signup'
        element={<SignUp onClose={() => {}} onRegister={() => {}} />}
      />
      <Route
        path='/login'
        element={<LogIn onLogin={() => {}} isAuthenticated={false} />}
      />
    </Routes>
  )
}

export default AppRoutes
