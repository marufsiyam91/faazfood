import Logo from "../Components/Logo";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-[#212121]">
      <footer className="max-w-screen-2xl items-start mx-auto flex justify-between px-6 py-24 text-white">

        <div>
          <Logo />
          <div className="py-8">
            <h3 className="text-md font-light">2972 Westheimer Rd. Santa Ana,</h3>
            <h3 className="text-md font-light">Illinois 85486</h3>
          </div>

          <div>
            <h3 className="text-md font-light">support@example.com </h3>
            <h3 className="text-red-700">+(880) 456-0789</h3>
          </div>
        </div>

        <div className="flex items-center gap-16">
          <div>
            <h2 className="text-xl font-semibold mb-8">PRODUCTS</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-sm font-normal hover:text-red-600 cursor-pointer">BURGERS</li>
              <li className="text-sm font-normal hover:text-red-600 cursor-pointer">KING DELIGHT PRODUCTS</li>
              <li className="text-sm font-normal hover:text-red-600 cursor-pointer">CRISPY FLAVOURS</li>
              <li className="text-sm font-normal hover:text-red-600 cursor-pointer">BREAKFAST PRODUCTS</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-8">MENUES</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-sm font-normal hover:text-red-600 cursor-pointer">KIDS MENUES</li>
              <li className="text-sm font-normal hover:text-red-600 cursor-pointer">DESSERTS</li>
              <li className="text-sm font-normal hover:text-red-600 cursor-pointer">BEVERAGES</li>
              <li className="text-sm font-normal hover:text-red-600 cursor-pointer">SAUCES</li>
            </ul>
          </div>
          <div className="ml-16">
            <h2 className="text-xl font-semibold mb-8">QUICK LINKS</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-sm font-normal hover:text-red-600 cursor-pointer">HOME</li>
              <li className="text-sm font-normal hover:text-red-600 cursor-pointer">SHOP</li>
              <li className="text-sm font-normal hover:text-red-600 cursor-pointer">ABOUT US</li>
              <li className="text-sm font-normal hover:text-red-600 cursor-pointer">CONTACTS</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">OPENING HOURS</h2>

          <div className="flex flex-col py-8">
            <p className="font-light text-md">Monday – Friday: <span className="text-red-600">8am – 4pm</span></p>
            <p className="font-light text-md">Saturday: <span className="text-red-600">8am – 12am</span></p>
          </div>

          <div className="flex gap-2">
            <div className="p-2 rounded-full border-gray-400 border">
              <FaFacebookF />
            </div>
            <div className="p-2 rounded-full border-gray-400 border">
              <FaTwitter />
            </div>
            <div className="p-2 rounded-full border-gray-400 border">
              <FaInstagram />
            </div>
            <div className="p-2 rounded-full border-gray-400 border">
              <FaPinterest />
            </div>
          </div>
        </div>
      </footer>
      <div className="border-t border-gray-200">
        <h3 className="text-white font-light text-center py-8">Copyright © 2023 <span className="text-red-600">Fazfood</span>. All rights reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
