// Archivo: CrearMedicamento.jsx

import { useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box'
import { Form } from 'components'
import axios from 'axios'

const CrearMedicamento = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/api/medicamentos/${id}/medicamentos`,
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
      name: 'frecuencia',
      label: 'Frecuencia',
    },
  ]
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      marginTop='2rem'
    >
      <Form title='Crear Medicamento' onSubmit={onSubmit} fields={fields} />
    </Box>
  )
}

export default CrearMedicamento
