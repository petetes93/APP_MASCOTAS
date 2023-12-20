import { Outlet } from 'react-router-dom'

import { NavBar } from 'components'

function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
export default RootLayout
