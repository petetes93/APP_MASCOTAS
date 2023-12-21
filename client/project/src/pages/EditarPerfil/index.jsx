import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'

import petService from 'services/pet-service'

import { usePet } from 'hooks'
import { Form } from 'components'
import { CircularProgress } from '@mui/material'

const EditarPerfil = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const { pet: mascota, loading } = usePet(id)

  const onSubmit = async (formData) => {
    try {
      const updatedPet = await petService.update(id, formData)

      navigate(`/perfil-mascota/${id}`)
    } catch (error) {
      console.error('Error al actualizar la mascota:', error)
    }
  }

  const fields = [
    {
      name: 'name',
      label: 'Nombre',
    },
    {
      name: 'especie',
      label: 'Especie',
    },
    {
      name: 'raza',
      label: 'Raza',
    },
    {
      name: 'sexo',
      label: 'Sexo',
    },
    {
      name: 'fechaNacimiento',
      label: 'Fecha de Nacimiento',
    },
    {
      name: 'color',
      label: 'Color',
    },
  ]

  if (loading) return <CircularProgress />

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      marginTop='2rem'
    >
      <Form
        title='Editar Perfil'
        onSubmit={onSubmit}
        defaultValues={mascota}
        fields={fields}
      />
    </Box>
  )
}

export default EditarPerfil
