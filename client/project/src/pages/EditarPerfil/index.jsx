import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'

const EditarPerfil = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    especie: '',
    raza: '',
    sexo: '',
    fechaNacimiento: '',
    color: '',
  })

  useEffect(() => {
    fetch(`http://localhost:3001/api/pets/${id}`)
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error('Error fetching mascota:', error))
  }, [id])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.put(
        `http://localhost:3001/api/pets/${id}`,
        formData
      )

      console.log('Respuesta del servidor:', response.data)

      navigate(`/perfil-mascota/${id}`)
    } catch (error) {
      console.error('Error al actualizar la mascota:', error)
    }
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      marginTop='2rem'
    >
      <Typography variant='h4'>Editar Perfil</Typography>
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
          Guardar Cambios
        </Button>
      </form>
    </Box>
  )
}

export default EditarPerfil
