const { Pet } = require('../models/mascotas')
const mongoose = require('mongoose')

const create = async (req, res) => {
  try {
    const newPet = await Pet.create(req.body)
    res.json(newPet)
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Error al crear la mascota', error: error.message })
  }
}

const getAll = async (req, res) => {
  try {
    console.log('¿Esto funciona?')
    const pets = await Pet.find()
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

    const mascota = await Pet.findById(mascotaId)

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
    const pet = await Pet.findByIdAndUpdate(req.params.mascotaId, req.body, {
      new: true,
    })
    res.json(pet)
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Error al actualizar la mascota', error: error.message })
  }
}

const remove = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.mascotaId)

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
