import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

const Mascota = () => {
  const [pet, setPet] = useState(null)
  const [userName, setUserName] = useState('John Doe')

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
    <Box display='flex' alignItems='center'>
      <Card
        sx={{
          width: 200,
          marginLeft: 2,
          backgroundColor: '#c8e6c9',
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 30 }}>{userName}</Typography>
        </CardContent>
      </Card>
      <Box
        flexGrow={1}
        display='flex'
        justifyContent='center'
        flexDirection='column'
        alignItems='center'
      >
        {pet && (
          <Card sx={{ width: 400, margin: 2 }}>
            <CardContent>
              <Typography sx={{ fontSize: 25 }} color='black' gutterBottom>
                {pet.name}
              </Typography>
              <Typography variant='h5' component='div'>
                {pet.breed}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                {pet.type}
              </Typography>
              <Typography variant='body2'>
                {pet.description}
                <br />
                {'Buen perro'}
              </Typography>
            </CardContent>
            <Button variant='contained' sx={{ margin: 2 }}>
              Perfil
            </Button>
          </Card>
        )}
      </Box>
    </Box>
  )
}

export default Mascota
