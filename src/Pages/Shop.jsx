import Subscribe from "../Components/Subscribe"
import PageTop from "../Components/PageTop"
import ShopMeals from "../Components/ShopComponents/ShopMeals"
import ShopSidebar from "../Components/ShopComponents/ShopSidebar"


const Shop = () => {
  return (
    <div className="bg-[#F4F1EA]">

      <PageTop pageName={'SHOP'}/>

        <div className="max-w-screen-2xl mx-auto flex py-20 ">
            <div className="hidden lg:block min-w-[350px] ">
                <ShopSidebar/>
            </div>
            <ShopMeals/>
      </div>
      
      <Subscribe/>
    </div>
  )
}

export default Shop