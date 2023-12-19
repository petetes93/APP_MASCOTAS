import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const GestionClinica = () => {
  const { id } = useParams()
  const [pet, setPet] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/pets/${id}/`)
      .then((response) => setPet(response.data))
      .catch((error) => console.error('Error fetching pets:', error))
    // axios
    //   .get(`http://localhost:3001/api/medicamentos/${id}/medicamentos`)
    //   .then((response) => setMedicamentos(response.data))
    //   .catch((error) => console.error('Error fetching medicamentos:', error))

    // axios
    //   .get(`http://localhost:3001/api/vacunas/${id}/vacunas`)
    //   .then((response) => setVacunas(response.data))
    //   .catch((error) => console.error('Error fetching vacunas:', error))
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
  const handlePutV = async (vacunasId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/vacunas/${id}/vacunas/${vacunasId}`,
        {
          method: 'PUT',
        }
      )

      if (response.ok) {
        const updatedPet = { ...pet }

        const updatedVacunas = updatedPet.vacunas.filter(
          (vacuna) => vacuna._id !== vacunasId
        )

        const updatedVacuna = pet.vacunas.find(
          (vacuna) => vacuna._id === vacunasId
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

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      marginTop='2rem'
    >
      <Typography variant='h4'>Gestión Clínica</Typography>

      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-around'
        width='100%'
      >
        <Box>
          <Typography variant='h5' gutterBottom>
            Medicamentos
          </Typography>
          {pet && pet.medicamentos && pet.medicamentos.length > 0 ? (
            pet.medicamentos.map((medicamento) => (
              <Card key={medicamento._id} style={{ marginBottom: '1rem' }}>
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
                    sx={{ margin: 1 }}
                  >
                    Fin
                  </Button>
                </CardContent>
              </Card>
            ))
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
            style={{ marginTop: '1rem' }}
          >
            Crear Nuevo Medicamento
          </Button>
        </Box>

        <Box>
          <Typography variant='h5' gutterBottom>
            Vacunas
          </Typography>
          {pet && pet.vacunas && pet.vacunas.length > 0 ? (
            pet.vacunas.map((vacuna) => (
              <Card key={vacuna._id} style={{ marginBottom: '1rem' }}>
                <CardContent>
                  <Typography variant='body1' color='text.secondary'>
                    Nombre: {vacuna.nombre}
                  </Typography>
                  <Typography variant='body1' color='text.secondary'>
                    Fecha: {vacuna.fechaVencimiento}
                  </Typography>
                  <Button
                    variant='contained'
                    onClick={() => handlePutV(vacuna._id)}
                    sx={{ margin: 1 }}
                  >
                    Fin
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant='body1'>No hay vacunas registradas.</Typography>
          )}
          <Button
            component={Link}
            to={`/crear-vacuna/${id}`}
            variant='contained'
            color='primary'
            style={{ marginTop: '1rem' }}
          >
            Crear Nueva Vacuna
          </Button>
        </Box>
      </Box>
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-around'
        width='100%'
      >
        <Box>
          <Typography variant='h5' gutterBottom>
            Historial de Medicamentos
          </Typography>
          {pet && pet.historialM && pet.historialM.length > 0 ? (
            pet.historialM.map((medicamento) => (
              <Card key={medicamento._id} style={{ marginBottom: '1rem' }}>
                <CardContent>
                  <Typography variant='body1' color='text.secondary'>
                    Nombre: {medicamento.nombre}
                  </Typography>
                  <Typography variant='body1' color='text.secondary'>
                    Dosis: {medicamento.frecuencia}
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant='body1'>
              No hay medicamentos registrados.
            </Typography>
          )}
        </Box>

        <Box>
          <Typography variant='h5' gutterBottom>
            Historial de Vacunas
          </Typography>
          {pet && pet.historialV && pet.historialV.length > 0 ? (
            pet.historialV.map((vacuna) => (
              <Card key={vacuna._id} style={{ marginBottom: '1rem' }}>
                <CardContent>
                  <Typography variant='body1' color='text.secondary'>
                    Nombre: {vacuna.nombre}
                  </Typography>
                  <Typography variant='body1' color='text.secondary'>
                    Fecha: {vacuna.fechaVencimiento}
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant='body1'>No hay vacunas registradas.</Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default GestionClinica
