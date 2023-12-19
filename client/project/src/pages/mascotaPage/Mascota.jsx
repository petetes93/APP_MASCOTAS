// Mascota.jsx
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const Mascota = () => {
  const [pet, setPet] = useState(null)
  const [userName, setUserName] = useState('Alejandro')

  useEffect(() => {
    fetch('http://localhost:3001/api/pets')
      .then((response) => response.json())
      .then((data) => {
        const firstPet = data[0]
        setPet(firstPet)
      })
      .catch((error) => console.error('Error fetching pets:', error))
  }, [])

  return (
    <Grid>
      <Box display='flex' alignItems='center'>
        <Card
          sx={{
            width: 200,
            marginLeft: 4,
            marginTop: 4,
            backgroundColor: '#c8e6c9',
            textAlign: 'center',
            border: '2px solid #424242',
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 30 }}>{userName}</Typography>
          </CardContent>
        </Card>
      </Box>
      <Box display='flex'>
        {pet && (
          <Card
            style={{
              width: 400,
              margin: 2,
              marginTop: '2rem',
              marginLeft: '2rem',
              border: '2px solid #424242',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'nowrap',
              }}
            >
              <Typography sx={{ fontSize: 25 }} color='black' gutterBottom>
                {pet.name}
              </Typography>
              <Typography variant='h5' component='div' sx={{ marginLeft: 2 }}>
                {pet.breed}
              </Typography>
              <Typography
                sx={{ mb: 1.5, marginLeft: 2 }}
                color='text.secondary'
              >
                {pet.type}
              </Typography>
            </CardContent>
            <Button variant='contained' component={Link} sx={{ margin: 1 }}>
              borrar
            </Button>
            <Button
              variant='contained'
              component={Link}
              to={`/perfil-mascota/${pet._id}`}
              sx={{ margin: 1 }}
            >
              Perfil
            </Button>
          </Card>
        )}
      </Box>
    </Grid>
  )
}

export default Mascota