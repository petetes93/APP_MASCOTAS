import {
  createBrowserRouter,
  RouterProvider as RouterProviderRRD,
} from 'react-router-dom'

import { RootLayout } from 'layouts'

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
        element: <SignUp />,
      },
      {
        path: '/login',
        element: <LogIn onLogin={() => {}} isAuthenticated={false} />,
      },
      {
        path: '/mascotas',
        element: <Mascota />,
      },
      {
        path: '/perfil-mascota/:id',
        element: <PerfilMascota />,
      },
      {
        path: '/crear-mascota',
        element: <CrearMascota />,
      },
      {
        path: '/editar-perfil/:id',
        element: <EditarPerfil />,
      },
      {
        path: '/gestion-clinica/:id',
        element: <GestionClinica />,
      },
      {
        path: '/crear-medicamento/:id',
        element: <CrearMedicamento />,
      },
      {
        path: '/crear-vacuna/:id',
        element: <CrearVacuna />,
      },
    ],
  },
])

const RouterProvider = () => <RouterProviderRRD router={router} />

export default RouterProvider
