// AppRoutes.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import LogIn from './pages/login/LogIn'
import SignUp from './pages/register/SignUps'
import Mascota from './pages/mascotaPage/Mascota'
import PerfilMascota from './pages/perfilMascota/PerfilMascota'
import CrearMascota from './pages/crearMascota/CrearMascota'
import EditarPerfil from './pages/editarPerfil/EditarPerfil'
import GestionClinica from './pages/GestionClinica/GestionClinica'
import CrearMedicamento from './pages/CrearMedicamento/CrearMedicamento'
import CrearVacuna from './pages/CrearVacuna/CrearVacuna'

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
      <Route path='/crear-mascota' element={<CrearMascota />} />
      <Route path='/editar-perfil/:id' element={<EditarPerfil />} />
      <Route path='/gestion-clinica/:id' element={<GestionClinica />} />
      <Route path='/crear-medicamento/:id' element={<CrearMedicamento />} />
      <Route path='/crear-vacuna/:id' element={<CrearVacuna />} />
    </Routes>
  )
}

export default AppRoutes
