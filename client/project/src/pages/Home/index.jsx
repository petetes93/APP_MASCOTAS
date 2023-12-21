// Home.jsx
import React from 'react'
import { Typography, Container, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const styles = {
  container: {
    // backgroundColor: '#87CEEB',
    padding: '20px',
    borderRadius: '10px',
    marginTop: '20px',
  },
  welcomeText: {
    color: '#8B4513',
    marginBottom: '20px',
  },
  bodyText: {
    color: '#2E8B57',
    marginBottom: '20px',
  },
  signUpButton: {
    backgroundColor: '#FF6347',
    color: '#fff',
  },
}

const PetMed = () => {
  return (
    <Container style={styles.container}>
      <Typography variant='h4' component='h1' style={styles.welcomeText}>
        ¡Bienvenido a PetMed!
      </Typography>
      <Typography variant='body1' paragraph style={styles.bodyText}>
        En PetMed, nos preocupamos por la salud y el bienestar de tus mascotas.
        Explora nuestros servicios y descubre cómo podemos ayudarte a cuidar de
        tus amigos peludos.
      </Typography>
      <Button
        component={Link}
        to='/signup'
        variant='contained'
        style={styles.signUpButton}
      >
        Regístrate
      </Button>
    </Container>
  )
}

export default PetMed
