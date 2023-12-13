const express = require('express')
const router = express.Router()
const medicamentoController = require('../controllers/medicamentos')

const auth = require('../middlewares/auth')
const validate = require('../middlewares/validate')
const mongoIdFromParamValidation = require('../middlewares/mongoIdFromParam')

const { body } = require('express-validator')

// Endpoint para obtener todos los medicamentos de una mascota
router.get(
  '/:mascotaId/medicamentos',
  medicamentoController.getMedicamentosByMascota
)

// Endpoint para crear un nuevo medicamento para una mascota
router.post(
  '/:mascotaId/medicamentos',
  auth,
  mongoIdFromParamValidation('mascotaId'),
  [
    body('nombre').notEmpty(),
    body('dosis').notEmpty(),
    body('frecuencia').notEmpty(),
    // Agrega más validaciones según sea necesario
  ],
  validate,
  medicamentoController.createMedicamento
)

// Endpoint para actualizar un medicamento existente
router.put(
  '/:mascotaId/medicamentos/:medicamentoId',
  auth,
  mongoIdFromParamValidation('mascotaId'),
  mongoIdFromParamValidation('medicamentoId'),
  [
    body('nombre').notEmpty(),
    body('dosis').notEmpty(),
    body('frecuencia').notEmpty(),
    // Agrega más validaciones según sea necesario
  ],
  validate,
  medicamentoController.updateMedicamento
)

// Endpoint para eliminar un medicamento
router.delete(
  '/:mascotaId/medicamentos/:medicamentoId',
  auth,
  mongoIdFromParamValidation('mascotaId'),
  mongoIdFromParamValidation('medicamentoId'),
  medicamentoController.deleteMedicamento
)

module.exports = router
