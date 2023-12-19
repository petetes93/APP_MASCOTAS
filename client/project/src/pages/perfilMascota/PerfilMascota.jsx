import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const PerfilMascota = () => {
  const { id } = useParams()
  const [mascota, setMascota] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3001/api/pets/${id}`)
      .then((response) => response.json())
      .then((data) => setMascota(data))
      .catch((error) => console.error('Error fetching mascota:', error))
  }, [id])

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      marginTop='2rem'
    >
      {mascota && (
        <Box
          padding='1rem'
          backgroundColor='#c8e6c9'
          border='1px solid #000000'
          marginBottom='2rem'
        >
          <Typography variant='h4'>{mascota.name}</Typography>
        </Box>
      )}
      {mascota && (
        <table
          style={{
            borderCollapse: 'collapse',
            textAlign: 'center',
            width: '80%',
            border: '1px solid #000',
          }}
        >
          <tbody>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                <Typography variant='h6'>Especie:</Typography> {mascota.especie}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                <Typography variant='h6'>Raza:</Typography> {mascota.raza}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                <Typography variant='h6'>Sexo:</Typography> {mascota.sexo}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                <Typography variant='h6'>Fecha de Nacimiento:</Typography>{' '}
                {mascota.fechaNacimiento}
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                <Typography variant='h6'>Color:</Typography> {mascota.color}
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <Box
        display='flex'
        justifyContent='space-around'
        width='50%'
        marginTop='1rem'
      >
        <Button
          component={Link}
          to={`/editar-perfil/${id}`}
          variant='contained'
          color='primary'
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
