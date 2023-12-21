import { logout } from 'services/auth-service'

import { useAuth } from 'hooks'
import { useNavigate } from 'react-router-dom'

function LogoutPage() {
  const navigate = useNavigate()
  const [, dispatch] = useAuth()

  logout()
  dispatch({ type: 'logout' })
  navigate('/login')

  return false
}
export default LogoutPage
