import { NavLink } from "react-router-dom"
import ShopCategory from "../Components/ShopComponents/ShopCategory"
import ShopMeals from "../Components/ShopComponents/ShopMeals"


const Shop = () => {
  return (
    <div className="bg-[#F4F1EA]">
        <div className="bg-[url('https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ct-bc.jpg')] w-full bg-cover h-[300px] flex flex-col justify-center items-center">
            <h2 className="text-6xl font-semibold text-white mb-6">SHOP</h2>
            <NavLink className={`text-white`} to={'/'}>Home page</NavLink>
        </div>

        <div className="max-w-screen-2xl mx-auto flex py-20">
            <div className="hidden lg:block w-[700px] border">
                <ShopCategory/>
            </div>
            <ShopMeals/>
        </div>
    </div>
  )
}

export default Shop