// LogIn.jsx
import { Box } from '@mui/material'
import { Form } from 'components'

function LogIn() {
  const onSubmit = (data) => {
    console.log(data)
  }

  const fields = [
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

export default LogIn
