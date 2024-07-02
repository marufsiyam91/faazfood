import { useEffect, useState } from "react";
import { FaCartShopping, FaStar } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { NavLink } from "react-router-dom";

const ShopMeals = () => {
  const meals = [
    {
      "id": 1,
      "title": "SAUSAGE, EGG & CHEESE CROISSAN’WICH",
      "description":"Minus eaque omnis aut autem deleniti est. Dolores earum sequi qui...",
      "price": 5.6,
      "category": "Pizza",
      "rating": 4.5,
      "image":
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_9-600x600.png"
    },
    {
      "id": 2,
      "title": "SPICY CHICKEN SANDWICH",
      "description": "Neque ut vel suscipit architecto commodi. Quia eligendi earum",
      "price": 12.46,
      "category": "Sandwich",
      "rating": 4.2,
      "image":
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_17-600x600.png"
    },
    {
      "id": 3,
      "title": "SUBWAY MELT",
      "description": "Quis quam ut commodi. Perspiciatis est illum consequatur. Voluptates",
      "price": 6.9,
      "category": "Biryani",
      "rating": 5,
      "image":
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_20-600x600.png"
    },
    {
      "id": 4,
      "title": "CRUNCHWRAP SUPREME",
      "description": "Ut quidem est eos placeat. Tempore voluptate autem aspernatur hic sit",
      "price": 5.4,
      "category": "Chicken",
      "rating": 4.3,
      "image":
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_24-600x600.png"
    },
    {
      "id": 5,
      "title": "BEEF ‘N CHEDDAR",
      "description": "Ea similique velit hic rerum officiis. Exercitationem quidem dolores null",
      "price": 5.99,
      "category": "Beef",
      "rating": 4.9,
      "image":
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_1-600x600.png"
    },
    {
      "id": 6,
      "title": "DOUBLE-DOUBLE",
      "description": "Velit voluptas consectetur omnis sed nihil aut. A quo officia et alias omni",
      "price": 9.35,
      "category": "Burger",
      "rating": 4.4,
      "image":
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_21-600x600.png"
    },
    {
      "id": 7,
      "title": "GRILLED CHICKEN WRAP",
      "description": "Sunt autem aliquid mollitia et a. Et illum illo hic quisquam voluptate",
      "price": 3.39,
      "category": "Burger",
      "rating": 4.6,
      "image":
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_5-600x600.png"
    },
    {
      "id": 8,
      "title": "SAUSAGE, EGG & CHEESE CROISSAN’WICH",
      "description":"Minus eaque omnis aut autem deleniti est. Dolores earum sequi qui...",
      "price": 5.6,
      "category": "Pizza",
      "rating": 4.5,
      "image":
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_9-600x600.png"
    },
    {
      "id": 9,
      "title": "SPICY CHICKEN SANDWICH",
      "description": "Neque ut vel suscipit architecto commodi. Quia eligendi earum",
      "price": 12.46,
      "category": "Sandwich",
      "rating": 4.2,
      "image":
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_17-600x600.png"
    },
    {
      "id": 10,
      "title": "SUBWAY MELT",
      "description": "Quis quam ut commodi. Perspiciatis est illum consequatur. Voluptates",
      "price": 6.9,
      "category": "Biryani",
      "rating": 5,
      "image":
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_20-600x600.png"
    },
    {
      "id": 11,
      "title": "CRUNCHWRAP SUPREME",
      "description": "Ut quidem est eos placeat. Tempore voluptate autem aspernatur hic sit",
      "price": 5.4,
      "category": "Chicken",
      "rating": 4.3,
      "image":
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_24-600x600.png"
    },
    {
      "id": 12,
      "title": "BEEF ‘N CHEDDAR",
      "description": "Ea similique velit hic rerum officiis. Exercitationem quidem dolores null",
      "price": 5.99,
      "category": "Beef",
      "rating": 4.9,
      "image":
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_1-600x600.png"
    },
    {
      "id": 13,
      "title": "DOUBLE-DOUBLE",
      "description": "Velit voluptas consectetur omnis sed nihil aut. A quo officia et alias omni",
      "price": 9.35,
      "category": "Burger",
      "rating": 4.4,
      "image":
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_21-600x600.png"
    },
    {
      "id": 14,
      "title": "GRILLED CHICKEN WRAP",
      "description": "Sunt autem aliquid mollitia et a. Et illum illo hic quisquam voluptate",
      "price": 3.39,
      "category": "Burger",
      "rating": 4.6,
      "image":
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_5-600x600.png"
    }
  ];

  const [allMeals, setAllMeals] = useState([])

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch('http://localhost:8800/api/v1/foods');
        const data = await response.json();
        // setAllMeals(data.data); 
        setAllMeals(data.data)
        console.log(data.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchMeals();
  }, []); 
  
  


  return (
    <div className="grid esm:grid-cols-2 lmd:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 px-4">
      {
        meals.map((meal) => (
          <>
            <NavLink className="relative  p-6 rounded-2xl group" to={`/shop/${meal._id}`} key={meal._id}>

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <img src={meal.image} alt="" />
              </div>
              <div className=" flex flex-col justify-between">
                <div className="flex justify-between">
                  <h3 className="text-xl text-slate-800 font-semibold">
                    {meal.title}
                  </h3>
                  <span className="text-xl fill-red-500">
                    <IoIosHeartEmpty />
                  </span>
                </div>

                <div className="flex gap-1 items-center py-3">
                  <span className="text-orange-500">
                    <FaStar />
                  </span>
                  <span className="text-orange-500">
                    <FaStar />
                  </span>
                  <span className="text-orange-500">
                    <FaStar />
                  </span>
                  <span className="text-orange-500">
                    <FaStar />
                  </span>
                  <span className="text-white">
                    <FaStar />
                  </span>
                  (4.5)
                </div>

                <p className="text-lg font-light">{meal.description}</p>
                <div className="pt-6 flex justify-between items-center">
                  <h3 className="text-2xl text-red-600 font-bold">{meal.price}$</h3>
                  <span className="p-3 bg-green-600 rounded-xl text-white"><FaCartShopping /></span>
                </div>
              </div>
            </div>

            <div className="absolute w-full h-[70%] group-hover:h-[100%] transition-all duration-500 bottom-0 left-0 bg-white rounded-2xl"></div>
              </NavLink>
            </>
        ))}
    </div>
  );
};

export default ShopMeals;



