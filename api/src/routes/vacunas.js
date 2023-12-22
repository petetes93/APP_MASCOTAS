const express = require('express')
const router = express.Router()
const vacunaController = require('../controllers/vacunas')

const auth = require('../middlewares/auth')
const validate = require('../middlewares/validate')
const mongoIdFromParamValidation = require('../middlewares/mongoIdFromParam')

const { body } = require('express-validator')

router.get('/', auth, vacunaController.getVacunasByMascota)

router.post(
  '/:mascotaId/vacunas',
  auth,
  mongoIdFromParamValidation('mascotaId'),
  [body('nombre').notEmpty(), body('fechaVencimiento').isISO8601().toDate()],
  validate,
  vacunaController.createVacuna
)

router.put(
  '/:mascotaId/vacunas/:vacunaId',
  auth,
  mongoIdFromParamValidation('mascotaId'),
  mongoIdFromParamValidation('vacunaId'),
  [body('nombre').notEmpty(), body('fechaVencimiento').isISO8601().toDate()],
  validate,
  vacunaController.updateVacuna
)

router.delete(
  '/:mascotaId/vacunas/:vacunaId',
  auth,
  mongoIdFromParamValidation('mascotaId'),
  mongoIdFromParamValidation('vacunaId'),
  vacunaController.deleteVacuna
)

module.exports = router
