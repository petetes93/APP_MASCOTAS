import { Box } from '@mui/material'
import { Form } from 'components'

function SignUp() {
  const onSubmit = async (formData) => {
    console.log(formData)
  }

  const fields = [
    {
      name: 'firstName',
      label: 'First Name',
    },
    {
      name: 'lastName',
      label: 'Last Name',
    },
    {
      name: 'email',
      label: 'Email',
    },
    {
      name: 'password',
      label: 'Contraseña',
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
    </Box>
  )
}
export default SignUp
