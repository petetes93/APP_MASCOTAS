// NavBar.jsx
import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
  IconButton,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import PetsIcon from '@mui/icons-material/Pets' // Importa el icono Pets

const blackTheme = createTheme()

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  const handleRegisterClick = () => {
    setShowSignUp(true)
  }

  const handleSignUpClose = () => {
    setShowSignUp(false)
  }

  return (
    <ThemeProvider theme={blackTheme}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            component={Link}
            to='/'
            color='inherit'
            edge='start'
            sx={{ mr: 2 }}
          >
            <PetsIcon /> {/* Icono Pets */}
          </IconButton>
          <Typography
            variant='h6'
            component={Link}
            to='/'
            sx={{ flexGrow: 1, color: 'white' }}
          >
            PetMed
          </Typography>
          {isAuthenticated ? (
            <Button
              onClick={handleLogout}
              sx={{ backgroundColor: '#000000', color: '#ffffff' }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                component={Link}
                to='/login'
                sx={{ backgroundColor: '#000000', color: '#ffffff' }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to='/signup'
                sx={{ backgroundColor: '#000000', color: '#ffffff' }}
              >
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default NavBar
