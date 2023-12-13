const { FichaClinica } = require('../models/fichaClinica')
const { Vacuna } = require('../models/vacunas')
const { Medicamento } = require('../models/medicamentos')
const mongoose = require('mongoose')

const getFichaClinica = async (req, res) => {
  const { mascotaId } = req.params

  try {
    if (!mongoose.Types.ObjectId.isValid(mascotaId)) {
      return res.status(400).json({ msg: 'Formato de ID no válido' })
    }

    const fichaClinica = await FichaClinica.findOne({ mascota: mascotaId })
      .populate({
        path: 'vacunasVencidas',
        populate: { path: 'vacuna' },
      })
      .populate('medicamentos')

    if (!fichaClinica) {
      return res.status(404).json({ msg: 'Ficha clínica no encontrada' })
    }

    res.json(fichaClinica)
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Error al obtener la ficha clínica', error: error.message })
  }
}

module.exports = {
  getFichaClinica,
}
