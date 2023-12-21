import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { format } from 'date-fns'

const GestionClinica = () => {
  const { id } = useParams()
  const [pet, setPet] = useState([])
  const [expandedHistorialM, setExpandedHistorialM] = useState(true)
  const [expandedHistorialV, setExpandedHistorialV] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/pets/${id}/`
        )
        setPet(response.data)
      } catch (error) {
        console.error('Error fetching pets:', error)
      }
    }

    fetchData()
  }, [id])

  const handlePutM = async (medicamentoId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/medicamentos/${id}/medicamentos/${medicamentoId}`,
        {
          method: 'PUT',
        }
      )

      if (response.ok) {
        const updatedPet = { ...pet }

        const updatedMedicamentos = updatedPet.medicamentos.filter(
          (medicamento) => medicamento._id !== medicamentoId
        )

        const updatedMedicamento = pet.medicamentos.find(
          (medicamento) => medicamento._id === medicamentoId
        )

        updatedPet.historialM.push(updatedMedicamento)

        updatedPet.medicamentos = updatedMedicamentos
        setPet(updatedPet)
      } else {
        console.error('Error al borrar la mascota:', response.statusText)
      }
    } catch (error) {
      console.error('Error al borrar la mascota:', error)
    }
  }

  const handlePutV = async (vacunaId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/vacunas/${id}/vacunas/${vacunaId}`,
        {
          method: 'PUT',
        }
      )

      if (response.ok) {
        const updatedPet = { ...pet }

        const updatedVacunas = updatedPet.vacunas.filter(
          (vacuna) => vacuna._id !== vacunaId
        )

        const updatedVacuna = pet.vacunas.find(
          (vacuna) => vacuna._id === vacunaId
        )

        updatedPet.historialV.push(updatedVacuna)

        updatedPet.vacunas = updatedVacunas
        setPet(updatedPet)
      } else {
        console.error('Error al borrar la mascota:', response.statusText)
      }
    } catch (error) {
      console.error('Error al borrar la mascota:', error)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return format(date, 'dd/MM/yyyy')
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      padding='16px'
    >
      <Button
        component={Link}
        to={`/perfil-mascota/${id}`}
        variant='outlined'
        color='primary'
        style={{
          alignSelf: 'flex-start',
          marginLeft: '1rem',
          marginTop: '1rem',
          backgroundColor: '#1976D2',
          color: 'white',
        }}
      >
        Volver
      </Button>

      <Typography variant='h4'>Gestión Clínica</Typography>

      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        width='100%'
        mt={4}
      >
        <Box width='80%' mb={4}>
          <Typography variant='h5' gutterBottom>
            Medicamentos
          </Typography>
          {pet && pet.medicamentos && pet.medicamentos.length > 0 ? (
            <Box width='100%'>
              {pet.medicamentos.map((medicamento) => (
                <Card key={medicamento._id} mb={2}>
                  <CardContent>
                    <Typography variant='body1' color='text.secondary'>
                      Nombre: {medicamento.nombre}
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                      Dosis: {medicamento.frecuencia}
                    </Typography>
                    <Button
                      variant='contained'
                      onClick={() => handlePutM(medicamento._id)}
                      mt={1}
                    >
                      Fin
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Box>
          ) : (
            <Typography variant='body1'>
              No hay medicamentos registrados.
            </Typography>
          )}
          <Button
            component={Link}
            to={`/crear-medicamento/${id}`}
            variant='contained'
            color='primary'
            mt={2}
          >
            Crear Nuevo Medicamento
          </Button>
        </Box>

        <Box width='80%'>
          <Typography variant='h5' gutterBottom>
            Historial de Medicamentos
            <Button
              variant='contained'
              color='primary'
              onClick={() => setExpandedHistorialM(!expandedHistorialM)}
              style={{ marginLeft: '2%' }}
            >
              {expandedHistorialM ? '-' : '+'}
            </Button>
          </Typography>
          {expandedHistorialM && (
            <Box width='100%'>
              {pet && pet.historialM && pet.historialM.length > 0 ? (
                <Box width='100%'>
                  {pet.historialM.map((medicamento) => (
                    <Card key={medicamento._id} mb={2}>
                      <CardContent>
                        <Typography variant='body1' color='text.secondary'>
                          Nombre: {medicamento.nombre}
                        </Typography>
                        <Typography variant='body1' color='text.secondary'>
                          Dosis: {medicamento.frecuencia}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              ) : (
                <Typography variant='body1'>
                  No hay medicamentos registrados en el historial.
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        width='100%'
        mt={4}
      >
        <Box width='80%' mb={4}>
          <Typography variant='h5' gutterBottom>
            Vacunas
          </Typography>
          {pet && pet.vacunas && pet.vacunas.length > 0 ? (
            <Box width='100%'>
              {pet.vacunas.map((vacuna) => (
                <Card key={vacuna._id} mb={2}>
                  <CardContent>
                    <Typography variant='body1' color='text.secondary'>
                      Nombre: {vacuna.nombre}
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                      Fecha: {formatDate(vacuna.fechaVencimiento)}
                    </Typography>
                    <Button
                      variant='contained'
                      onClick={() => handlePutV(vacuna._id)}
                      mt={1}
                    >
                      Fin
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Box>
          ) : (
            <Typography variant='body1'>No hay vacunas registradas.</Typography>
          )}
          <Button
            component={Link}
            to={`/crear-vacuna/${id}`}
            variant='contained'
            color='primary'
            mt={2}
          >
            Crear Nueva Vacuna
          </Button>
        </Box>

        <Box width='80%'>
          <Typography variant='h5' gutterBottom>
            Historial de Vacunas
            <Button
              variant='contained'
              color='primary'
              onClick={() => setExpandedHistorialV(!expandedHistorialV)}
              style={{ marginLeft: '2%' }}
            >
              {expandedHistorialV ? '-' : '+'}
            </Button>
          </Typography>
          {expandedHistorialV && (
            <Box width='100%'>
              {pet && pet.historialV && pet.historialV.length > 0 ? (
                <Box width='100%'>
                  {pet.historialV.map((vacuna) => (
                    <Card key={vacuna._id} mb={2}>
                      <CardContent>
                        <Typography variant='body1' color='text.secondary'>
                          Nombre: {vacuna.nombre}
                        </Typography>
                        <Typography variant='body1' color='text.secondary'>
                          Fecha: {formatDate(vacuna.fechaVencimiento)}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              ) : (
                <Typography variant='body1'>
                  No hay vacunas registradas en el historial.
                </Typography>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default GestionClinica
