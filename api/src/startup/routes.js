const express = require('express')
const app = express()
const { json } = require('express')
const morgan = require('morgan')
const cors = require('cors')

module.exports = function (app) {
  app.use(json())
  app.use(morgan('dev'))
  app.use(cors())

  app.use('/api/users', require('../routes/users'))
  app.use('/api/pets', require('../routes/mascotas'))
  app.use('/api/vacunas', require('../routes/vacunas'))
  app.use('/api/medicamentos', require('../routes/medicamentos'))

  app.get('/ping', (req, res) => {
    res.send({ success: true })
  })

  app.use(require('../middlewares/errors'))
}
