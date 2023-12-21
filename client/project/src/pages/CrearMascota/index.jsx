import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import { Form } from 'components'
import petService from 'services/pet-service'

const CrearMascota = () => {
  const navigate = useNavigate()

  const onSubmit = async (formData) => {
    try {
      const newPet = await petService.create(formData)

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
