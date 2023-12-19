import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'

const CrearMascota = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    especie: '',
    raza: '',
    sexo: '',
    fechaNacimiento: '',
    color: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:3001/api/pets',
        formData
      )

      console.log('Respuesta del servidor:', response.data)

      navigate('/mascotas')
    } catch (error) {
      console.error(
        'Error al crear la mascota:',
        error.response?.data || error.message
      )
    }
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      marginTop='2rem'
      marginLeft='2rem'
    >
      <Typography variant='h4'>Crear Nueva Mascota</Typography>
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <TextField
          label='Nombre'
          name='name'
          value={formData.name}
          onChange={handleChange}
          margin='normal'
          fullWidth
          required
        />
        <TextField
          label='Especie'
          name='especie'
          value={formData.especie}
          onChange={handleChange}
          margin='normal'
          fullWidth
          required
        />
        <TextField
          label='Raza'
          name='raza'
          value={formData.raza}
          onChange={handleChange}
          margin='normal'
          fullWidth
          required
        />
        <TextField
          label='Sexo'
          name='sexo'
          value={formData.sexo}
          onChange={handleChange}
          margin='normal'
          fullWidth
          required
        />
        <TextField
          label='Fecha de Nacimiento'
          name='fechaNacimiento'
          value={formData.fechaNacimiento}
          onChange={handleChange}
          margin='normal'
          fullWidth
          required
        />
        <TextField
          label='Color'
          name='color'
          value={formData.color}
          onChange={handleChange}
          margin='normal'
          fullWidth
          required
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          style={{ marginTop: '1rem' }}
        >
          Crear Mascota
        </Button>
      </form>
    </Box>
  )
}

export default CrearMascota
