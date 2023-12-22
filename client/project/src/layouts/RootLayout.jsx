import { Outlet } from 'react-router-dom'

import { NavBar } from 'components'
import { ToastContainer } from 'react-toastify'
function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </>
  )
}
export default RootLayout
