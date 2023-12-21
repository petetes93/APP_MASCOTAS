import { useEffect, useState } from 'react'
import petService from 'services/pet-service'

function usePets() {
  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    petService
      .get()
      .then(({ data }) => setPets(data))
      .catch((errors) => setErrors(errors))
      .finally(() => setLoading(false))
  }, [])

  return { pets, loading, errors, setPets }
}

export default usePets
