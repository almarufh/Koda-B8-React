import { Outlet } from 'react-router'
import Header from '../../components/main/Header'
import Footer from '../../components/main/Footer'

function MainLayout() {
  return (
    <>
        <Header />
          <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout