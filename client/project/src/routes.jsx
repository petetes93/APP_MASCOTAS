import {
  createBrowserRouter,
  RouterProvider as RouterProviderRRD,
} from 'react-router-dom'

import { RootLayout } from 'layouts'
import ProtectedRoute from 'src/utils/ProtectedRoute'

import {
  Home,
  ErrorPage,
  SignUp,
  LogIn,
  Mascota,
  PerfilMascota,
  CrearMascota,
  EditarPerfil,
  GestionClinica,
  CrearMedicamento,
  CrearVacuna,
  LogoutPage,
} from 'pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signup',
        element: <ProtectedRoute page={SignUp} role='anonymous' />,
      },
      {
        path: '/login',
        element: <ProtectedRoute page={LogIn} role='anonymous' />,
      },
      {
        path: '/logout',
        element: <ProtectedRoute page={LogoutPage} role='auth' />,
      },
      {
        path: '/mascotas',
        element: <ProtectedRoute page={Mascota} role='auth' />,
      },
      {
        path: '/perfil-mascota/:id',
        element: <ProtectedRoute page={PerfilMascota} role='auth' />,
      },
      {
        path: '/crear-mascota',
        element: <ProtectedRoute page={CrearMascota} role='auth' />,
      },
      {
        path: '/editar-perfil/:id',
        element: <ProtectedRoute page={EditarPerfil} role='auth' />,
      },
      {
        path: '/gestion-clinica/:id',
        element: <ProtectedRoute page={GestionClinica} role='auth' />,
      },
      {
        path: '/crear-medicamento/:id',
        element: <ProtectedRoute page={CrearMedicamento} role='auth' />,
      },
      {
        path: '/crear-vacuna/:id',
        element: <ProtectedRoute page={CrearVacuna} role='auth' />,
      },
    ],
  },
])

const RouterProvider = () => <RouterProviderRRD router={router} />

export default RouterProvider
