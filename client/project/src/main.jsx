import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import 'react-toastify/dist/ReactToastify.css'
import 'normalize.css'

import { AuthProvider } from 'hooks/auth'
import RouterProvider from 'src/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider />
  </AuthProvider>
)
