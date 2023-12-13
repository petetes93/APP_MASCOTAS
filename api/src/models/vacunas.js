const mongoose = require('mongoose')

const vacunaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fechaVencimiento: { type: Date, required: true },
  mascota: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
})

const Vacuna = mongoose.model('Vacuna', vacunaSchema)

module.exports = {
  Vacuna,
}
