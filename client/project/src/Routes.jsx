// AppRoutes.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import LogIn from './pages/login/LogIn'
import SignUp from './pages/register/SignUps'
import Mascota from './pages/mascotaPage/Mascota'
import PerfilMascota from './pages/perfilMascota/PerfilMascota'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/signup'
        element={<SignUp onClose={() => {}} onRegister={() => {}} />}
      />
      <Route
        path='/login'
        element={<LogIn onLogin={() => {}} isAuthenticated={false} />}
      />
      <Route path='/mascotas' element={<Mascota />} />
      <Route path='/perfil-mascota/:id' element={<PerfilMascota />} />
    </Routes>
  )
}

export default AppRoutes
