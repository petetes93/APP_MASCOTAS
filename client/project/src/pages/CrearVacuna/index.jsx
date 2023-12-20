// Archivo: CrearMedicamento.jsx
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import { Form } from 'components'
import axios from 'axios'

const CrearVacuna = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/api/vacunas/${id}/vacunas`,
        formData
      )
      console.log('Respuesta del servidor:', response.data)

      navigate(`/gestion-clinica/${id}`)
    } catch (error) {
      console.error('Error al crear el medicamento:', error)
    }
  }

  const fields = [
    {
      name: 'nombre',
      label: 'Nombre',
    },
    {
      name: 'fechaVencimiento',
      label: 'Fecha de Vencimiento',
    },
  ]
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      marginTop='2rem'
    >
      <Form title='Crear Vacuna' onSubmit={onSubmit} fields={fields} />
    </Box>
  )
}

export default CrearVacuna
