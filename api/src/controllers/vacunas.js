const { Vacuna } = require('../models/vacunas')
const { Pet } = require('../models/mascotas')
const mongoose = require('mongoose')

const getVacunasByMascota = async (req, res) => {
  try {
    const { mascotaId } = req.params
    const mascota = await Pet.findById(mascotaId).populate({
      path: 'vacunas',
      select: ['nombre', 'fechaVencimiento'],
    })

    if (!mascota) {
      return res.status(404).json({ message: 'Mascota no encontrada' })
    }

    res.json(mascota.vacunas)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createVacuna = async (req, res) => {
  try {
    const { mascotaId } = req.params
    const vacunaData = req.body

    const mascota = await Pet.findById(mascotaId)
    if (!mascota) {
      return res.status(404).json({ message: 'Mascota no encontrada' })
    }

    const newVacuna = new Vacuna({
      ...vacunaData,
      mascota: mascota._id,
    })
    await newVacuna.save()

    mascota.vacunas = mascota.vacunas || []
    mascota.vacunas.push(newVacuna._id)
    await mascota.save()

    res.status(201).json({
      message: 'Vacuna creada con éxito',
      vacuna: { nombre: newVacuna.nombre },
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateVacuna = async (req, res) => {
  try {
    const { mascotaId, vacunaId } = req.params

    if (!mongoose.Types.ObjectId.isValid(vacunaId)) {
      return res.status(400).json({ msg: 'Formato de ID de vacuna no válido' })
    }

    const vacuna = await Vacuna.findById(vacunaId)
    const mascota = await Pet.findById(mascotaId)

    if (!vacuna || !mascota) {
      return res.status(404).json({ msg: 'Vacuna no encontrada' })
    }

    mascota.historialV.push(vacunaId)
    const index = mascota.vacunas.indexOf(vacunaId)
    mascota.vacunas.splice(index, 1)
    await mascota.save()
    res.json({ message: 'Vacuna actualizada con éxito', vacuna })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteVacuna = async (req, res) => {
  try {
    const { mascotaId, vacunaId } = req.params

    if (!mongoose.Types.ObjectId.isValid(vacunaId)) {
      return res.status(400).json({ msg: 'Formato de ID de vacuna no válido' })
    }

    const mascota = await Pet.findById(mascotaId)

    if (!mascota) {
      return res.status(404).json({ message: 'Mascota no encontrada' })
    }

    const vacuna = await Vacuna.findByIdAndDelete(vacunaId)

    if (!vacuna) {
      return res.status(404).json({ msg: 'Vacuna no encontrada' })
    }

    mascota.vacunas = mascota.vacunas.filter(
      (vac) => vac.toString() !== vacunaId
    )

    await mascota.save()

    res.json({ message: 'Vacuna eliminada con éxito', vacuna })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getVacunasByMascota,
  createVacuna,
  updateVacuna,
  deleteVacuna,
}
