import Subscribe from "../Components/Subscribe";
import PageTop from "../Components/PageTop";
import ShopMeals from "../Components/ShopComponents/ShopMeals";
import ShopSidebar from "../Components/ShopComponents/ShopSidebar";
import '../index.css'; // Ensure this path points to your styles
import { useState } from "react";

const Shop = () => {

  const [showSidebar, setShowSidebar] = useState(false)

  const sidebarStyle = showSidebar ? 'left-0 ' : '-left-[300%] ';

  const handleSidebarShow = () => {
    setShowSidebar(true)
  }

  const handleSidebarHide = () => {
    setShowSidebar(false)
  }

  return (
    <div className="bg-[#F4F1EA]">
      <PageTop pageName={'SHOP'} />
      <div className="max-w-screen-2xl mx-auto flex py-20 parent">
        <div className="lg:relative fixed z-40 w-full esm:max-w-[350px]">
          <ShopSidebar handleSidebarHide={handleSidebarHide} sidebarStyle={sidebarStyle} />
        </div>
          <div
        className={`${
          showSidebar
            ? "bg-black bg-opacity-70 left-0 delay-0"
            : "left-[-200%] bg-opacity-30 delay-200"
        } transition-all fixed z-20 block lg:hidden top-0 w-full h-[100vh] duration-600`}
      ></div>
        <div className="lg:w-auto w-full ">
          <ShopMeals handleSidebarShow={handleSidebarShow}/>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default Shop;
