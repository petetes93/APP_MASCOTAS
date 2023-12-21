import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

import petService from 'services/pet-service'
import { usePets, useAuth } from 'hooks'

const Mascota = () => {
  const [user] = useAuth()

  const { pets, setPets } = usePets()
  console.log(pets)
  const handleDelete = async (petId) => {
    try {
      const { data: deletedPet } = await petService.delete(petId)

      setPets(pets.filter((pet) => pet._id !== deletedPet._id))
    } catch (error) {
      console.error('Error al borrar la mascota:', error)
    }
  }

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
            <Typography sx={{ fontSize: 30 }}>{user.name}</Typography>
          </CardContent>
        </Card>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Button
          variant='contained'
          component={Link}
          to='/crear-mascota'
          sx={{ margin: 1 }}
        >
          Nueva Mascota
        </Button>
      </Box>
      <Box display='flex' flexDirection='row' flexWrap='wrap'>
        {pets.map((pet) => (
          <Card
            key={pet._id}
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
            <Button
              variant='contained'
              onClick={() => handleDelete(pet._id)}
              sx={{ margin: 1 }}
            >
              Borrar
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
        ))}
      </Box>
    </Grid>
  )
}

export default Mascota
