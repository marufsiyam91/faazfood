import { NavLink } from "react-router-dom";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../Components/Logo";
import { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";

const Navbar = () => {
  const [isShowNav, setIsShowNav] = useState(false);

  return (
    <nav className="max-w-screen-4xl mx-auto flex items-center justify-between px-4 md:px-12 h-[100px]">
      <div className="flex lg:hidden text-3xl">
        <button onClick={() => setIsShowNav(true)}>
          <BiMenuAltLeft />
        </button>
      </div>

      <div
        className={`${
          isShowNav
            ? "left-0 opacity-100"
            : "left-[-200%] opacity-0 "
        } transition-all duration-500 fixed top-0 shadow-xl z-10  w-[370px] h-[100vh] bg-white pl-8 pt-16 lg:hidden block`}
      >
        <div className="absolute text-2xl top-6 right-6 block lg:hidden">
          <button onClick={() => setIsShowNav(false)}>
            <IoMdClose />
          </button>
        </div>
        <div className="block lg:hidden mb-10">
          <Logo />
        </div>
        <ul className="flex flex-col lg:flex-row lg:items-center gap-6">
          <li className="text-md font-semibold text-slate-600 hover:text-red-700 transition duration-300">
            <NavLink to={'/'}>HOME</NavLink>
          </li>
          <li className="text-md font-semibold text-slate-600 hover:text-red-700 transition duration-300">
            <NavLink to={'/shop'}>SHOP</NavLink>
          </li>
          <li className="text-md font-semibold text-slate-600 hover:text-red-700 transition duration-300">
            <NavLink to={'/about'}>ABOUT US</NavLink>
          </li>
          <li className="text-md font-semibold text-slate-600 hover:text-red-700 transition duration-300">
            <NavLink to={'/contact'}>CONTACT</NavLink>
          </li>
        </ul>
      </div>

      <div
        className={`${
          isShowNav
            ? "bg-black bg-opacity-70 left-0 delay-0"
            : "left-[-200%] bg-opacity-30 delay-200"
        } transition-all fixed block lg:hidden top-0 w-full h-[100vh] duration-600`}
      ></div>


          <ul className="hidden lg:flex flex-1 lg:items-center gap-6">
              <li className="text-md font-semibold text-slate-600 hover:text-red-700 transition duration-300">
                <NavLink to={'/'}>HOME</NavLink>
              </li>
              <li className="text-md font-semibold text-slate-600 hover:text-red-700 transition duration-300">
                <NavLink to={'/shop'}>SHOP</NavLink>
              </li>
              <li className="text-md font-semibold text-slate-600 hover:text-red-700 transition duration-300">
                <NavLink to={'/about'}>ABOUT US</NavLink>
              </li>
              <li className="text-md font-semibold text-slate-600 hover:text-red-700 transition duration-300">
                <NavLink to={'/contact'}>CONTACT</NavLink>
              </li>
          </ul>

      <NavLink to={'/'}><Logo /></NavLink>

      <div className="flex items-center lg:flex-1 justify-end gap-4">
        <div className="hidden md:flex items-center text-sm gap-1 cursor-pointer hover:text-red-700">
          <span className="text-xl">
            <IoIosSearch />
          </span>{" "}
          Search
        </div>
        <button className="hidden md:flex items-center gap-2 p-4 bg-red-700 rounded-xl text-white ml-4">
          <span className="text-2xl">
            <MdDeliveryDining />
          </span>{" "}
          ORDER NOW
        </button>
        <button className="p-4 bg-green-700 text-white rounded-xl text-xl">
          <FaCartShopping />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
