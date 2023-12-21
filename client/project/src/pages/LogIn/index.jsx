// LogIn.jsx
import { Box, Button } from '@mui/material'
import { Form } from 'components'
import { Link, useNavigate } from 'react-router-dom'
import { login } from 'services/auth-service'

import { useAuth } from 'hooks/auth'

function LogIn() {
  const [, dispatch] = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (formData) => {
    console.log(formData)

    try {
      const decodedJWT = await login(formData)

      const { name, isAdmin } = decodedJWT

      const type = isAdmin ? 'admin' : 'login'

      dispatch({ type, name })

      navigate('/mascotas')
    } catch (err) {
      console.log(err, 'error en el registro')
    }
  }

  const fields = [
    {
      name: 'username',
      label: 'Nombre de usuario',
    },
    {
      name: 'password',
      label: 'Contraseña',
      type: 'password',
    },
  ]

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      marginTop='2rem'
    >
      <Form title='Acceso usuarios' onSubmit={onSubmit} fields={fields} />
      <Button
        component={Link}
        href='/SignUp'
        variant='text'
        sx={{ textTransform: 'none' }}
      >
        Dont have an account? Register
      </Button>
    </Box>
  )
}

export default LogIn
