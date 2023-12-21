import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { format, parseISO } from 'date-fns'
import { usePet } from '../../hooks'

const PerfilMascota = () => {
  const { id } = useParams()

  const { pet: mascota } = usePet(id)

  const formatDate = (dateString) => {
    // const date = parseISO(dateString)
    // return format('COMENTADO', 'dd/MM/yyyy', { timeZone: 'Europe/Madrid' })
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      marginTop='2rem'
    >
      {mascota && (
        <Box
          border='1px solid #000'
          borderRadius='8px'
          width='90%'
          maxWidth='600px'
          padding='1rem'
          marginBottom='2rem'
        >
          <Typography variant='h4'>
            <u>{mascota.name}</u>
          </Typography>

          <Box
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            marginTop='1rem'
          >
            <Box display='flex' justifyContent='space-between' width='100%'>
              <Typography variant='h6'>Especie:</Typography>
              <Typography>{mascota.especie}</Typography>
            </Box>
            <Box display='flex' justifyContent='space-between' width='100%'>
              <Typography variant='h6'>Raza:</Typography>
              <Typography>{mascota.raza}</Typography>
            </Box>
            <Box
              display='flex'
              justifyContent='space-between'
              width='100%'
              textAlign='left'
              alignItems='center'
            >
              <Typography variant='h6'>Sexo:</Typography>
              <Typography>{mascota.sexo}</Typography>
            </Box>
            <Box display='flex' justifyContent='space-between' width='100%'>
              <Typography variant='h6'>Fecha de Nacimiento:</Typography>
              <Typography>{mascota.fechaNacimiento}</Typography>
            </Box>
            <Box display='flex' justifyContent='space-between' width='100%'>
              <Typography variant='h6'>Color:</Typography>
              <Typography>{mascota.color}</Typography>
            </Box>
          </Box>
        </Box>
      )}

      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        width='90%'
        marginX='auto'
      >
        <Button
          component={Link}
          to={`/editar-perfil/${id}`}
          variant='contained'
          color='primary'
          style={{ marginBottom: '1rem' }}
        >
          Editar Perfil
        </Button>

        <Button
          component={Link}
          to={`/gestion-clinica/${id}`}
          variant='contained'
          color='secondary'
        >
          Gestión Clínica
        </Button>
      </Box>
    </Box>
  )
}

export default PerfilMascota
