import { useAuth } from 'hooks'
import { Navigate } from 'react-router-dom'

import { toast } from 'react-toastify'

const ROLES = {
  ADMIN: 'admin',
  AUTHENTICATED: 'auth',
  ANONYMOUS: 'anonymous',
}

function ProtectedRoute({ page: Page, role }) {
  const [{ auth: isAuth, [role]: hasRole }] = useAuth()

  const isAuthorized = hasRole || (!isAuth && role === ROLES.ANONYMOUS)

  if (isAuthorized) return <Page />

  if (role !== ROLES.ANONYMOUS) toast.error('Acceso prohibido')

  const to = isAuth ? '/mascotas' : '/login'

  return <Navigate to={to} replace={true} />
}
export default ProtectedRoute
