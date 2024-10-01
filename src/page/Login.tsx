import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginFormData, loginSchema } from '@/validators/validationShema'

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormData) => {
    console.log(data)
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          id='email'
          type='email'
          {...register('email')}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          {...register('password')}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <button type='submit'>Login</button>
    </form>
  )
}

export default LoginForm
