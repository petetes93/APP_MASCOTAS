// NavBar.jsx
import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

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
          <Typography
            variant='h6'
            component='div'
            sx={{ flexGrow: 1, color: 'white' }}
          >
            Mi Aplicación
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
