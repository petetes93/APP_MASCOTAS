const mongoose = require('mongoose')
const { body } = require('express-validator')

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  especie: { type: String, required: true },
  raza: { type: String, required: true },
  sexo: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  color: { type: String, required: true },
  // Agrega el campo medicamentos
  medicamentos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Medicamento', // Asegúrate de que 'Medicamento' coincida con el nombre de tu modelo de medicamento
    },
  ],
})
const Pet = mongoose.model('Pet', petSchema)

const petValidation = [
  body('name').notEmpty(),
  body('especie').notEmpty(),
  body('raza').notEmpty(),
  body('sexo').notEmpty(),
  body('fechaNacimiento').notEmpty(),
  body('color').notEmpty(),
]

module.exports = {
  Pet: Pet,
  petValidation: petValidation,
}
