const { Medicamento } = require('../models/medicamentos')
const { Pet } = require('../models/mascotas')
const mongoose = require('mongoose')

const getMedicamentosByMascota = async (req, res) => {
  try {
    const { mascotaId } = req.params
    const mascota = await Pet.findById(mascotaId).populate({
      path: 'medicamentos',
      select: ['nombre', 'frecuencia'],
    })

    if (!mascota) {
      return res.status(404).json({ message: 'Mascota no encontrada' })
    }

    res.json(mascota.medicamentos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createMedicamento = async (req, res) => {
  try {
    const { mascotaId } = req.params
    const medicamentoData = req.body

    const mascota = await Pet.findById(mascotaId)
    if (!mascota) {
      return res.status(404).json({ message: 'Mascota no encontrada' })
    }

    const newMedicamento = new Medicamento({
      ...medicamentoData,
      mascota: mascota._id,
    })

    await newMedicamento.save()

    mascota.medicamentos = mascota.medicamentos || []

    mascota.medicamentos.push(newMedicamento)
    await mascota.save()

    res.status(201).json({
      message: 'Medicamento creado con éxito',
      medicamento: { nombre: newMedicamento.nombre },
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateMedicamento = async (req, res) => {
  try {
    const { mascotaId, medicamentoId } = req.params

    if (!mongoose.Types.ObjectId.isValid(medicamentoId)) {
      return res
        .status(400)
        .json({ msg: 'Formato de ID de medicamento no válido' })
    }

    const medicamento = await Medicamento.findById(medicamentoId)

    const mascota = await Pet.findById(mascotaId).populate(
      'medicamentos vacunas historialV historialM'
    )

    if (!medicamento) {
      return res.status(404).json({ msg: 'Medicamento no encontrado' })
    }

    mascota.historialM.push(medicamentoId)
    const index = mascota.medicamentos.indexOf(medicamentoId)
    mascota.medicamentos.splice(index, 1)

    await mascota.save()

    const objeto = await Pet.findById(mascotaId).populate(
      'medicamentos vacunas historialV historialM'
    )

    res.json({
      message: 'Medicamento actualizado con éxito',
      objeto,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteMedicamento = async (req, res) => {
  try {
    const { mascotaId, medicamentoId } = req.params

    if (!mongoose.Types.ObjectId.isValid(medicamentoId)) {
      return res
        .status(400)
        .json({ msg: 'Formato de ID de medicamento no válido' })
    }

    const mascota = await Pet.findById(mascotaId)
    if (!mascota) {
      return res.status(404).json({ message: 'Mascota no encontrada' })
    }

    const medicamento = await Medicamento.findByIdAndDelete(medicamentoId)

    if (!medicamento) {
      return res.status(404).json({ msg: 'Medicamento no encontrado' })
    }

    mascota.medicamentos = mascota.medicamentos.filter(
      (med) => med.toString() !== medicamentoId
    )
    await mascota.save()

    res.json({ message: 'Medicamento eliminado con éxito', medicamento })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getMedicamentosByMascota,
  createMedicamento,
  updateMedicamento,
  deleteMedicamento,
}
