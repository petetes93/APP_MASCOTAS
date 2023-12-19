const express = require('express')
const router = express.Router()
const medicamentoController = require('../controllers/medicamentos')

const auth = require('../middlewares/auth')
const validate = require('../middlewares/validate')
const mongoIdFromParamValidation = require('../middlewares/mongoIdFromParam')

const { body } = require('express-validator')

router.get(
  '/:mascotaId/medicamentos',
  medicamentoController.getMedicamentosByMascota
)

router.post(
  '/:mascotaId/medicamentos',
  // auth,
  mongoIdFromParamValidation('mascotaId'),
  [body('nombre').notEmpty(), body('frecuencia').notEmpty()],
  validate,
  medicamentoController.createMedicamento
)

router.put(
  '/:mascotaId/medicamentos/:medicamentoId',
  // auth,
  mongoIdFromParamValidation('mascotaId'),
  mongoIdFromParamValidation('medicamentoId'),
  [
    body('nombre').notEmpty(),
    // body('dosis').notEmpty(),
    body('frecuencia').notEmpty(),
  ],
  validate,
  medicamentoController.updateMedicamento
)

router.delete(
  '/:mascotaId/medicamentos/:medicamentoId',
  // auth,
  mongoIdFromParamValidation('mascotaId'),
  mongoIdFromParamValidation('medicamentoId'),
  medicamentoController.deleteMedicamento
)

module.exports = router
