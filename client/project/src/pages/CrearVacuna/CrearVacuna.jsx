// Archivo: CrearMedicamento.jsx
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'

const CrearVacuna = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [formData, setFormData] = useState({
    nombre: '',
    fechaVencimiento: '',
    mascota: id,
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
      await axios.post(
        `http://localhost:3001/api/vacunas/${id}/vacunas`,
        formData
      )

      navigate(`/gestion-clinica/${id}`)
    } catch (error) {
      console.error('Error al crear el medicamento:', error)
    }
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      marginTop='2rem'
    >
      <Typography variant='h4'>Crear Nuevo Medicamento</Typography>
      <form onSubmit={handleSubmit} style={{ width: '300px' }}>
        <TextField
          label='Nombre'
          name='nombre'
          value={formData.nombre}
          onChange={handleChange}
          margin='normal'
          fullWidth
          required
        />
        <TextField
          label='FechaVencimiento'
          name='fechaVencimiento'
          value={formData.fechaVencimiento}
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
          Crear Vacuna
        </Button>
      </form>
    </Box>
  )
}

export default CrearVacuna
