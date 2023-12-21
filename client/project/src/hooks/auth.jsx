import { createContext, useContext, useReducer } from 'react'

import { getCurrentUser } from 'services/auth-service'

const user = getCurrentUser()

const initialValues = !user
  ? { auth: false }
  : user.isAdmin
  ? { auth: true, admin: true, name: user.name }
  : { auth: true, name: user.name }

const AuthContext = createContext(initialValues)
AuthContext.displayName = 'AuthContext'

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { auth: true, name: action.name }

    case 'admin':
      return { auth: true, admin: true, name: action.name }

    case 'logout':
      return { auth: false }

    default:
      throw Error('Unknown action.')
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
