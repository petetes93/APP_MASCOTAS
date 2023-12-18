// App.jsx
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import AppRoutes from './Routes'

function App() {
  return (
    <Router>
      <NavBar />
      <AppRoutes />
    </Router>
  )
}

export default App
