const mongoose = require('mongoose')

const fichaClinicaSchema = new mongoose.Schema({
  mascota: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  vacunasVencidas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Vacuna' }],
  medicamentos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Medicamento' }],
})

const FichaClinica = mongoose.model('FichaClinica', fichaClinicaSchema)

module.exports = {
  FichaClinica,
}
