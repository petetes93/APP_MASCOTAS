const mongoose = require('mongoose')

const medicamentoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  dosis: { type: String, required: true },
  frecuencia: { type: String, required: true },
  mascota: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
})

const Medicamento = mongoose.model('Medicamento', medicamentoSchema)

module.exports = {
  Medicamento,
}
