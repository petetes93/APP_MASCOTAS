import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import { Form } from 'components'
import axios from 'axios'

const CrearMascota = () => {
  const navigate = useNavigate()

  const onSubmit = async (formData) => {
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

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      marginTop='2rem'
    >
      <Form title='Crear Mascota' onSubmit={onSubmit} fields={fields} />
    </Box>
  )
}

export default CrearMascota
