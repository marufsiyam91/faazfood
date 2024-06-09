import CategoryButton from "./CategoryButton"
import { GiHamburger } from "react-icons/gi";
import { CiFries } from "react-icons/ci";
import { MdCoffee } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { LuSalad } from "react-icons/lu";
import { LuSandwich } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { GiTacos } from "react-icons/gi";









const ShopCategory = () => {
  return (
    <aside>
      <input className="p-4 w-full rounded-md mb-4" type="text" placeholder="search for food"/>
        <h2 className="text-3xl font-semibold text-slate-600 mb-6">Categories</h2>
        <div className="flex flex-col gap-3">
          <span className="hover:text-red-700 transition duration-300"><CategoryButton icon={<GiHamburger />} title={'BURGER'}/></span>
          <span className="hover:text-red-700 transition duration-300"><CategoryButton icon={<CiFries />} title={'FRIES'}/></span>
          <span className="hover:text-red-700 transition duration-300"><CategoryButton icon={<MdCoffee />} title={'HOT DRINKS'}/></span>
          <span className="hover:text-red-700 transition duration-300"><CategoryButton icon={<GiFullPizza />} title={'PIZZA'}/></span>
          <span className="hover:text-red-700 transition duration-300"><CategoryButton icon={<LuSalad />} title={'SALADS'}/></span>
          <span className="hover:text-red-700 transition duration-300"><CategoryButton icon={<LuSandwich />} title={'SANDWICH'}/></span>
          <span className="hover:text-red-700 transition duration-300"><CategoryButton icon={<GiTacos />} title={'TACO'}/></span>
        </div>
    </aside>
  )
}

export default ShopCategory