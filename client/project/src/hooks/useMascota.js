import { useEffect, useState } from 'react'
import petService from 'services/pet-service'

function usePet(petId) {
  const [pet, setPet] = useState({})
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    petService
      .getById(petId)
      .then(({ data }) => setPet(data))
      .catch((errors) => setErrors(errors))
      .finally(() => setLoading(false))
  }, [])

  return { pet, loading, errors, setPet }
}

export default usePet
