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
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import PetsIcon from '@mui/icons-material/Pets'
import MenuIcon from '@mui/icons-material/Menu'
import { useAuth } from 'hooks'

const blackTheme = createTheme()

const NavBar = () => {
  const [user] = useAuth()

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogin = () => {
    setIsAuthenticated(true)
    cerrarMenuMovil()
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    cerrarMenuMovil()
  }

  const handleRegisterClick = () => {
    setShowSignUp(true)
    cerrarMenuMovil()
  }

  const handleSignUpClose = () => {
    setShowSignUp(false)
  }

  const abrirMenuMovil = () => {
    setMobileMenuOpen(true)
  }

  const cerrarMenuMovil = () => {
    setMobileMenuOpen(false)
  }

  let mobileMenuItems = user.auth
    ? [
        { label: 'Mascota', to: '/mascotas' },
        { label: 'Logout', to: '/logout' },
      ]
    : [
        {
          label: 'Login',
          to: '/login',
        },
        {
          label: 'Registro',
          to: '/signup',
        },
      ]

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
          <Hidden mdDown>
            {user.auth && (
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
            )}
          </Hidden>
          <Hidden mdUp>
            <IconButton onClick={abrirMenuMovil} color='inherit'>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='right'
              open={mobileMenuOpen}
              onClose={cerrarMenuMovil}
            >
              <List>
                {mobileMenuItems
                  .filter(
                    (item) =>
                      !(item.hideWhenAuthenticated && isAuthenticated) &&
                      !(item.hideWhenNotAuthenticated && !isAuthenticated)
                  )
                  .map((item) => (
                    <ListItem
                      button
                      component={Link}
                      to={item.to}
                      key={item.label}
                      onClick={item.onClick}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
              </List>
            </Drawer>
          </Hidden>
          {user.auth ? (
            <Button
              component={Link}
              to='/logout'
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
              <Hidden smDown>
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
              </Hidden>
              <Hidden smDown>
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
              </Hidden>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default NavBar
