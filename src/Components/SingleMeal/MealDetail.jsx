import { FaCartShopping, FaHeart } from "react-icons/fa6";
import ReleatedMeal from "./ReleatedMeal";

const MealDetail = ({description, image, category, title, price, rating}) => {
  return (
      <div>
          <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-center">
          <img src={image} alt="" />
          <div>
            <h2 className="text-5xl font-bold max-w-[600px] text-stone-800">
              {title}
            </h2>
            <p className="text-lg font-normal my-3 text-stone-600">
              The product have{" "}
              <span className="text-red-600 font-medium">( {rating} star)</span>{" "}
              rating
            </p>
            <hr />
            <p className="text-lg text-stone-600 my-4">{description}</p>
            <span className="text-5xl font-bold text-stone-800">
              {" "}
              ONLY: <span className="text-red-600">{price}$</span>
            </span>
            <div className="my-4">
              <li>Free global shipping on all orders1</li>
              <li>30 days easy returns if you change your mind</li>
              <li>Order before noon for same day dispatch</li>
            </div>

            <hr />

            <div className="my-6 flex gap-6 "> 
              <div className="text-2xl font-semibold text-stone-700 flex items-center gap-2">
                Quantity:
                <div className="flex gap-6 items-center px-4 py-2 border-2 border-stone-300 rounded-lg ">
                  <button> - </button>
                  <span>1</span>
                  <button> + </button>
                </div>
              </div>

              <button className="flex-1 flex items-center gap-2 text-2xl font-semibold p-4 bg-green-700 text-white justify-center rounded-xl">
                <span>
                  <FaCartShopping />
                </span>{" "}
                ADD TO CART
              </button>

              <button className="text-2xl p-4 border-2 border-stone-200 rounded-xl"><FaHeart/></button>
            </div>
          </div>
        </div>
          </div>
          
          <ReleatedMeal category={category}/>
    </div>
  )
}

export default MealDetail