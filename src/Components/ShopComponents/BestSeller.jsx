import { FaStar } from "react-icons/fa6";

const BestSeller = () => {
  const meals = [
    {
      id: 1,
      title: "SAUSAGE, EGG & CHEESE CROISSAN’WICH",
      description:
        "Minus eaque omnis aut autem deleniti est. Dolores earum sequi qui...",
      price: 5.6,
      category: "Pizza",
      rating: 4.5,
      image:
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_9-600x600.png",
    },
    {
      id: 2,
      title: "SPICY CHICKEN SANDWICH",
      description:
        "Neque ut vel suscipit architecto commodi. Quia eligendi earum",
      price: 12.46,
      category: "Sandwich",
      rating: 4.2,
      image:
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_17-600x600.png",
    },
    {
      id: 3,
      title: "SUBWAY MELT",
      description:
        "Quis quam ut commodi. Perspiciatis est illum consequatur. Voluptates",
      price: 6.9,
      category: "Biryani",
      rating: 5,
      image:
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_20-600x600.png",
    },
    {
      id: 4,
      title: "CRUNCHWRAP SUPREME",
      description:
        "Ut quidem est eos placeat. Tempore voluptate autem aspernatur hic sit",
      price: 5.4,
      category: "Chicken",
      rating: 4.3,
      bestSeller: true,
      image:
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_24-600x600.png",
    },
    {
      id: 5,
      title: "BEEF ‘N CHEDDAR",
      description:
        "Ea similique velit hic rerum officiis. Exercitationem quidem dolores null",
      price: 5.99,
      category: "Beef",
      rating: 4.9,
      image:
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_1-600x600.png",
    },
    {
      id: 6,
      title: "DOUBLE-DOUBLE",
      description:
        "Velit voluptas consectetur omnis sed nihil aut. A quo officia et alias omni",
      price: 9.35,
      category: "Burger",
      rating: 4.4,
      image:
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_21-600x600.png",
    },
    {
      id: 7,
      title: "GRILLED CHICKEN WRAP",
      description:
        "Sunt autem aliquid mollitia et a. Et illum illo hic quisquam voluptate",
      price: 3.39,
      category: "Burger",
      rating: 4.6,
      bestSeller: true,
      image:
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_5-600x600.png",
    },
    {
      id: 8,
      title: "SAUSAGE, EGG & CHEESE CROISSAN’WICH",
      description:
        "Minus eaque omnis aut autem deleniti est. Dolores earum sequi qui...",
      price: 5.6,
      category: "Pizza",
      rating: 4.5,
      image:
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_9-600x600.png",
    },
    {
      id: 9,
      title: "SPICY CHICKEN SANDWICH",
      description:
        "Neque ut vel suscipit architecto commodi. Quia eligendi earum",
      price: 12.46,
      category: "Sandwich",
      rating: 4.2,
      bestSeller: true,
      image:
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_17-600x600.png",
    },
    {
      id: 10,
      title: "SUBWAY MELT",
      description:
        "Quis quam ut commodi. Perspiciatis est illum consequatur. Voluptates",
      price: 6.9,
      category: "Biryani",
      rating: 5,
      image:
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_20-600x600.png",
    },
    {
      id: 11,
      title: "CRUNCHWRAP SUPREME",
      description:
        "Ut quidem est eos placeat. Tempore voluptate autem aspernatur hic sit",
      price: 5.4,
      category: "Chicken",
      rating: 4.3,
      image:
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_24-600x600.png",
    },
    {
      id: 12,
      title: "BEEF ‘N CHEDDAR",
      description:
        "Ea similique velit hic rerum officiis. Exercitationem quidem dolores null",
      price: 5.99,
      category: "Beef",
      rating: 4.9,
      bestSeller: true,
      image:
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_1-600x600.png",
    },
    {
      id: 13,
      title: "DOUBLE-DOUBLE",
      description:
        "Velit voluptas consectetur omnis sed nihil aut. A quo officia et alias omni",
      price: 9.35,
      category: "Burger",
      rating: 4.4,
      image:
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_21-600x600.png",
    },
    {
      id: 14,
      title: "GRILLED CHICKEN WRAP",
      description:
        "Sunt autem aliquid mollitia et a. Et illum illo hic quisquam voluptate",
      price: 3.39,
      category: "Burger",
      rating: 4.6,
      image:
        "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_5-600x600.png",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold text-slate-600 pb-4 mb-4 border-b border-stone-300">
        BESTSELLER
      </h2>
      {meals.map(
        (meal) =>
          meal.bestSeller && (
            <div className="flex items-center gap-2 max-w-full mb-2 rounded-2xl p-4 hover:shadow-sm hover:bg-white transition-all " key={meal.id}>
              <img className="w-1/3" src={meal.image} alt="" />
              <div>
                <p className="text-lg text-stone-800 font-bold">{meal.title}</p>
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
                          <p className="text-lg text-red-600 font-bold">{meal.price}$</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default BestSeller;
