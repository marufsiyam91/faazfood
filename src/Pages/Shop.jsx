import Subscribe from "../Components/Subscribe"
import PageTop from "../Components/PageTop"
import ShopCategory from "../Components/ShopComponents/ShopCategory"
import ShopMeals from "../Components/ShopComponents/ShopMeals"


const Shop = () => {
  return (
    <div className="bg-[#F4F1EA]">

      <PageTop pageName={'SHOP'}/>

        <div className="max-w-screen-2xl mx-auto flex py-20">
            <div className="hidden lg:block w-[700px]">
                <ShopCategory/>
            </div>
            <ShopMeals/>
      </div>
      
      <Subscribe/>
    </div>
  )
}

export default Shop