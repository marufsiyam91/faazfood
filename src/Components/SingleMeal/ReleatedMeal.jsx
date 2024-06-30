import { useEffect, useState } from "react";
import { FaCartShopping, FaStar } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/bundle";
import { NavLink } from "react-router-dom";

const ReleatedMeal = ({ category }) => {
  const [releatedMeal, setReleatedMeal] = useState([]);

  useEffect(() => {
    const fetchReleated = async () => {
      try {
        const response = await fetch("http://localhost:8800/api/v1/foods");

        if (!response.ok) {
          console.log("something went wrong while fetching data");
        }

        const data = await response.json();
        console.log(data);
        const releatedMeal = data.data.filter(
          (item) => item.category === category
        );
        setReleatedMeal(releatedMeal);
      } catch (error) {
        console.log("Error occured can't fetch data");
      }
    };
    fetchReleated();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto py-20">
      <h2 className="text-6xl font-bold text-stone-800 text-center mb-12">
        RELEATED PRODUCTS
      </h2>

      <Swiper
        breakpoints={{
          220: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={4}
        autoplay
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {releatedMeal.map((meal) => (
          <>
            <NavLink to={`/shop/${meal.id}`}>
              <SwiperSlide
                className="relative  p-6 rounded-2xl group"
                key={meal.id}
              >
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
                      <h3 className="text-2xl text-red-600 font-bold">
                        {meal.price}$
                      </h3>
                      <span className="p-3 bg-green-600 rounded-xl text-white">
                        <FaCartShopping />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute w-full h-[70%] group-hover:h-[100%] transition-all duration-500 bottom-0 left-0 bg-white rounded-2xl"></div>
              </SwiperSlide>
            </NavLink>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default ReleatedMeal;
