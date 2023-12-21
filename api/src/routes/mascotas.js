const { petValidation } = require('../models/mascotas')
const petController = require('../controllers/mascotas')
const mongoIdFromParamValidation = require('../middlewares/mongoIdFromParam')

const auth = require('../middlewares/auth')
const admin = require('../middlewares/admin')

const validate = require('../middlewares/validate')

const { Router } = require('express')
const router = Router()

const { query } = require('express-validator')

router.get('/', auth, validate, petController.getAll)

router.get(
  '/:mascotaId',
  auth,
  mongoIdFromParamValidation('mascotaId'),
  petController.getById
)

router.post('/', auth, petValidation, validate, petController.create) // falta auth

router.put(
  '/:mascotaId',
  auth,
  mongoIdFromParamValidation('mascotaId'),
  petValidation,
  validate,
  petController.update
)

router.delete(
  '/:mascotaId',
  auth,
  mongoIdFromParamValidation('mascotaId'),
  petController.remove
)

module.exports = router
