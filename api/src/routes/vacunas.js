const express = require('express')
const router = express.Router()
const vacunaController = require('../controllers/vacunas')

const auth = require('../middlewares/auth')
const validate = require('../middlewares/validate')
const mongoIdFromParamValidation = require('../middlewares/mongoIdFromParam')

const { body } = require('express-validator')

// Endpoint para obtener todas las vacunas
router.get('/:mascotaId/vacunas', vacunaController.getVacunasByMascota)

// Endpoint para crear una nueva vacuna
router.post(
  '/:mascotaId/vacunas',
  auth,
  mongoIdFromParamValidation('mascotaId'),
  [
    body('nombre').notEmpty(),
    body('fechaVencimiento').isISO8601().toDate(),
    // Agrega más validaciones según sea necesario
  ],
  validate,
  vacunaController.createVacuna
)

// Endpoint para actualizar una vacuna existente
router.put(
  '/:mascotaId/vacunas/:vacunaId',
  auth,
  mongoIdFromParamValidation('mascotaId'),
  mongoIdFromParamValidation('vacunaId'),
  [
    body('nombre').notEmpty(),
    body('fechaVencimiento').isISO8601().toDate(),
    // Agrega más validaciones según sea necesario
  ],
  validate,
  vacunaController.updateVacuna
)

// Endpoint para eliminar una vacuna
router.delete(
  '/:mascotaId/vacunas/:vacunaId',
  auth,
  mongoIdFromParamValidation('mascotaId'),
  mongoIdFromParamValidation('vacunaId'),
  vacunaController.deleteVacuna
)

module.exports = router
