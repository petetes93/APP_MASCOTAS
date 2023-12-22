import { Typography, Button, TextField } from '@mui/material'

import { useForm } from 'react-hook-form'

function Form({
  title,
  onSubmit,
  defaultValues,
  fields,
  submitButton = 'enviar',
}) {
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
          {submitButton}
        </Button>
      </form>
    </>
  )
}

export default Form
