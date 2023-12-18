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
  Link as MuiLink,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import PetsIcon from '@mui/icons-material/Pets'

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
            sx={{ marginRight: 2 }}
          >
            <PetsIcon />
          </IconButton>
          <Typography
            variant='h6'
            component={Link}
            to='/'
            sx={{ flexGrow: 1, color: 'white' }}
          >
            PetMed
          </Typography>
          <Button
            component={Link}
            to='/mascotas'
            sx={{
              marginRight: '90rem',
              backgroundColor: 'transparent',
              color: 'white',
              border: '1px solid white',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
              },
            }}
          >
            Mascota
          </Button>
          {isAuthenticated ? (
            <Button
              onClick={handleLogout}
              sx={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid white',
                marginRight: '4rem',
                borderRadius: '4px',
                '&:hover': {
                  backgroundColor: 'white',
                  color: 'black',
                },
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                component={Link}
                to='/login'
                sx={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '4px',
                  marginRight: '1rem',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                  },
                }}
              >
                Login
              </Button>
              <Button
                component={Link}
                to='/signup'
                sx={{
                  backgroundColor: 'transparent',
                  color: 'white',
                  border: '1px solid white',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                  },
                }}
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
