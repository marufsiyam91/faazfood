import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../Components/Logo";



const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 h-[100px]">
      <ul className="flex items-center gap-6 flex-1">
        <li className="text-md font-semibold text-slate-600 hover:text-red-700"><NavLink>HOME</NavLink></li>
        <li className="text-md font-semibold text-slate-600 hover:text-red-700"><NavLink>SHOP</NavLink></li>
        <li className="text-md font-semibold text-slate-600 hover:text-red-700"><NavLink>ABOUT US</NavLink></li>
        <li className="text-md font-semibold text-slate-600 hover:text-red-700"><NavLink>CONTACT</NavLink></li>
      </ul>


      <Logo/>


        <div className="flex items-center flex-1 justify-end gap-4">
          <div className="flex items-center text-sm gap-1 cursor-pointer hover:text-red-700">
            <span className="text-xl"><IoIosSearch /></span> Search
          </div>
          <button className="flex items-center gap-2 p-4 bg-red-700 rounded-xl text-white ml-4">
            <span className="text-2xl"><MdDeliveryDining /></span> ORDER NOW
          </button>
          <button className="p-4 bg-green-700 text-white rounded-xl text-xl">
          <FaCartShopping />
          </button>
        </div>
    </nav>
  )
}

export default Navbar