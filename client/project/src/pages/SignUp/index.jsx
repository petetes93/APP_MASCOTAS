import { Box, Button } from '@mui/material'
import { Form } from 'components'
import { Link, useNavigate } from 'react-router-dom'
import { register } from 'services/auth-service'

import { useAuth } from 'hooks/auth'

function SignUp() {
  const [, dispatch] = useAuth()
  const navigate = useNavigate()

  const onSubmit = async (formData) => {
    console.log(formData)

    try {
      const decodedJWT = await register(formData)

      const { name, isAdmin } = decodedJWT

      const type = isAdmin ? 'admin' : 'login'

      dispatch({ type, name })

      navigate('/mascotas')
    } catch (err) {
      console.log(err, 'error en el registro')
    }
  }

  const fields = [
    // {
    //   name: 'firstName',
    //   label: 'First Name',
    // },
    // {
    //   name: 'lastName',
    //   label: 'Last Name',
    // },
    {
      name: 'username',
      label: 'Nombre de usuario',
    },
    {
      name: 'email',
      label: 'Email',
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
      <Form
        title='Registro'
        submitButton='registrar'
        onSubmit={onSubmit}
        fields={fields}
      />
      <Button
        component={Link}
        to='/login'
        variant='text'
        sx={{ textTransform: 'none' }}
      >
        Already have an account? Sign in
      </Button>
    </Box>
  )
}
export default SignUp
