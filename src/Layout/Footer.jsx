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
      <footer className="max-w-screen-2xl items-center md:items-start mx-auto flex-col md:flex-row flex flex-wrap justify-between lg:gap-0 px-6 pt-36 pb-24 text-white">

        <div className="order-1 w-1/2 lg:w-auto md:text-start text-center flex flex-col items-center md:items-start">
          <div className="text-center lg:text-start">
            <Logo />
          </div>
          <div className="py-6">
            <h3 className="text-lg font-light">2972 Westheimer Rd. Santa Ana,</h3>
            <h3 className="text-lg font-light">Illinois 85486</h3>
          </div>

          <div>
            <h3 className="text-lg font-light">support@example.com </h3>
            <h3 className="text-red-700">+(880) 456-0789</h3>
          </div>
        </div>

        <div className="lg:w-auto text-center md:text-start flex md:flex-row flex-col items-center gap-16 lg:pt-0 pt-8 px-0 lg:px-10 order-last lg:order-2">
          <div>
            <h2 className="text-xl font-semibold mb-8">PRODUCTS</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-md font-normal hover:text-red-600 cursor-pointer">BURGERS</li>
              <li className="text-md font-normal hover:text-red-600 cursor-pointer">KING DELIGHT PRODUCTS</li>
              <li className="text-md font-normal hover:text-red-600 cursor-pointer">CRISPY FLAVOURS</li>
              <li className="text-md font-normal hover:text-red-600 cursor-pointer">BREAKFAST PRODUCTS</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-8">MENUES</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-md font-normal hover:text-red-600 cursor-pointer">KIDS MENUES</li>
              <li className="text-md font-normal hover:text-red-600 cursor-pointer">DESSERTS</li>
              <li className="text-md font-normal hover:text-red-600 cursor-pointer">BEVERAGES</li>
              <li className="text-md font-normal hover:text-red-600 cursor-pointer">SAUCES</li>
            </ul>
          </div>
          <div className="md:ml-16">
            <h2 className="text-xl font-semibold mb-8">QUICK LINKS</h2>
            <ul className="flex flex-col gap-2">
              <li className="text-md font-normal hover:text-red-600 cursor-pointer">HOME</li>
              <li className="text-md font-normal hover:text-red-600 cursor-pointer">SHOP</li>
              <li className="text-md font-normal hover:text-red-600 cursor-pointer">ABOUT US</li>
              <li className="text-md font-normal hover:text-red-600 cursor-pointer">CONTACTS</li>
            </ul>
          </div>
        </div>

        <div className="lg:w-auto text-center md:text-start w-1/2 border-l-none md:border-l md:pl-8 pb-6 md:mt-0 mt-8 order-2 lg:order-last">
          <h2 className="text-xl font-semibold">OPENING HOURS</h2>

          <div className="flex flex-col py-8">
            <p className="font-light text-lg">Monday – Friday: <span className="text-red-600">8am – 4pm</span></p>
            <p className="font-light text-lg">Saturday: <span className="text-red-600">8am – 12am</span></p>
          </div>

          <div className="flex gap-2 justify-center md:justify-start">
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
      <div className="border-t">
        <h3 className="text-white text-center py-6 text-lg font-normal">Copyright © 2023 <span className="text-red-600">Fazfood</span>. All rights reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
