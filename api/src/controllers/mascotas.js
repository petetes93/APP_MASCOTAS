const { Pet } = require('../models/mascotas')
const mongoose = require('mongoose')

const create = async (req, res) => {
  try {
    const owner = req.user.id

    const newPet = await Pet.create({ ...req.body, owner })

    res.json(newPet)
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Error al crear la mascota', error: error.message })
  }
}

const getAll = async (req, res) => {
  try {
    const pets = await Pet.find({ owner: req.user.id })

    res.json(pets)
  } catch (error) {
    res.status(500).json({
      msg: 'Error al obtener todas las mascotas',
      error: error.message,
    })
  }
}

const getById = async (req, res) => {
  const { mascotaId } = req.params

  try {
    if (!mongoose.Types.ObjectId.isValid(mascotaId)) {
      return res.status(400).json({ msg: 'Formato de ID no válido' })
    }

    const mascota = await Pet.findOne({ _id: mascotaId, owner: req.user.id })
      .populate({
        path: 'medicamentos',
      })
      .populate({
        path: 'vacunas',
      })
      .populate({
        path: 'historialV',
      })
      .populate({
        path: 'historialM',
      })

    if (!mascota) {
      return res.status(404).json({ msg: 'Mascota no encontrada' })
    }

    res.json(mascota)
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Error al obtener la mascota por ID', error: error.message })
  }
}

const update = async (req, res) => {
  try {
    const pet = await Pet.findOneAndUpdate(
      { _id: req.params.mascotaId, owner: req.user.id },
      req.body,
      {
        new: true,
      }
    )

    if (!pet) {
      return res.status(404).json({ msg: 'Mascota no encontrada' })
    }

    res.json(pet)
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Error al actualizar la mascota', error: error.message })
  }
}

const updateVacuna = async (req, res) => {
  try {
  } catch (error) {}
}
const remove = async (req, res) => {
  try {
    const pet = await Pet.findOneAndDelete({
      _id: req.params.mascotaId,
      owner: req.user.id,
    })

    if (!pet) {
      return res.status(404).json({ msg: 'Esta mascota no existe' })
    }

    res.json(pet)
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Error al eliminar la mascota', error: error.message })
  }
}

module.exports = {
  getById,
  create,
  getAll,
  update,
  remove,
}
