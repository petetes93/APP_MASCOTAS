import { useEffect, useState } from 'react'

function useMascota(mascotaId) {
  const [mascota, setMascota] = useState({})
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:3001/api/pets/${mascotaId}`)
      .then((response) => response.json())
      .then((data) => setMascota(data))
      .catch((error) => setError(error))
      .finally(() => setIsFetching(false))
  }, [])

  return { mascota, error, isFetching }
}

export default useMascota
