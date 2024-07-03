import ShopFilter from "./ShopFilter";
import ShopCategory from "./ShopCategory";
import BestSeller from "./BestSeller";
import BurgerCard from "./BurgerCard";
import { IoMdClose } from "react-icons/io";




const ShopSidebar = ({sidebarStyle, handleSidebarHide}) => {

 

  return (
    <aside className={`w-full esm:w-[350px] bg-[#F4F1EA] fixed lg:relative top-0 lg:top-auto ${sidebarStyle} transition-all duration-500 lg:left-auto p-4 lg:p-0 lg:pl-8 overflow-y-scroll sidebarScroll lg:overflow-y-auto h-full lg:h-auto`}>
      <div className="pb-8 border-b border-stone-300 lg:hidden block">
        <span onClick={handleSidebarHide} className="text-xl absolute right-4"><IoMdClose/></span>
      </div>
      <input className="p-4 w-full rounded-md mt-4 lg:mt-0 mb-4" type="text" placeholder="search for food" />
      <div className="flex flex-col gap-8 max-w-[90%]">
      <ShopCategory />
        <ShopFilter />
        <BestSeller />
        <BurgerCard/>
      </div>
    </aside>
  )
}

export default ShopSidebar


