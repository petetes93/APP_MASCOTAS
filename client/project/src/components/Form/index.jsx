import { Typography, Button, TextField } from '@mui/material'

import { useForm } from 'react-hook-form'

function Form({ title, onSubmit, defaultValues, fields }) {
  const { register, handleSubmit } = useForm({
    defaultValues,
  })

  return (
    <>
      <Typography variant='h4'>{title}</Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '300px' }}>
        {fields.map(({ name, ...rest }) => (
          <TextField
            key={name}
            id={name}
            {...register(name)}
            {...rest}
            margin='normal'
            fullWidth
            required
          />
        ))}

        <Button
          type='submit'
          variant='contained'
          color='primary'
          style={{ marginTop: '1rem' }}
        >
          Guardar Cambios
        </Button>
      </form>
    </>
  )
}

export default Form
