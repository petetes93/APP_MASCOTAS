import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

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
          }}
        >
          <tbody>
            <tr>
              <td>
                <Typography variant='body1'>
                  <h4>Especie:</h4> {mascota.especie}
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography variant='body1'>
                  <h4>Raza:</h4> {mascota.raza}
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography variant='body1'>
                  <h4>Sexo:</h4> {mascota.sexo}
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography variant='body1'>
                  <h4>Fecha de Nacimiento:</h4> {mascota.fechaNacimiento}
                </Typography>
              </td>
            </tr>
            <tr>
              <td>
                <Typography variant='body1'>
                  <h4>Color:</h4> {mascota.color}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </Box>
  )
}

export default PerfilMascota
