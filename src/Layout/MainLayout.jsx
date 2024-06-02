import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"


const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <div className="min-h-[100vh]">
          <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default MainLayout