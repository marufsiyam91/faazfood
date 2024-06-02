import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import CategoryButton from '../ShopComponents/CategoryButton';
import { GiHamburger, GiTacos } from 'react-icons/gi';
import { CiFries } from 'react-icons/ci';
import { LuSalad, LuSandwich } from 'react-icons/lu';
import { FaCartShopping, FaStar } from 'react-icons/fa6';
import { IoIosHeartEmpty } from 'react-icons/io';






const FoodLover = () => {


    const meals = [
        {
          id: 1,
          title: "CHEESEY CROISSAN’WICH",
          description:"Minus eaque omnis aut autem deleniti est. Dolores earum sequi qui...",
          price: 5.6,
          image:
            "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_9-600x600.png",
        },
        {
          id: 2,
          title: "SPICY CHICKEN SANDWICH",
          description: "Neque ut vel suscipit architecto commodi. Quia eligendi earum qui...",
          price: 12.46,
          image:
            "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_17-600x600.png",
        },
        {
          id: 3,
          title: "SUBWAY MELT",
          description: "Quis quam ut commodi. Perspiciatis est illum consequatur. Voluptates",
          price: 6.9,
          image:
            "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_20-600x600.png",
        },
        {
          id: 4,
          title: "CRUNCHWRAP SUPREME",
          description: "Ut quidem est eos placeat. Tempore voluptate autem aspernatur hic sit",
          price: 5.4,
          image:
            "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_24-600x600.png",
        },
        {
          id: 5,
          title: "BEEF ‘N CHEDDAR",
          description: "Ea similique velit hic rerum officiis. Exercitationem quidem dolores null",
          price: 5.99,
          image:
            "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_1-600x600.png",
        },
        {
          id: 6,
          title: "DOUBLE-DOUBLE",
          description: "Velit voluptas consectetur omnis sed nihil aut. A quo officia et alias omni",
          price: 9.35,
          image:
            "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_21-600x600.png",
        },
        {
          id: 7,
          title: "GRILLED CHICKEN WRAP",
          description: "Sunt autem aliquid mollitia et a. Et illum illo hic quisquam voluptate",
          price: 3.39,
          image:
            "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_5-600x600.png",
        },
      ];


  return (
    <section className='w-full h-auto py-20 max-w-screen-2xl mx-auto px-10'>
        <div className='flex flex-col items-center mb-16 gap-6'>
            <h2 className='text-center text-5xl font-bold text-slate-800'>POPULAR DISHES</h2>

            <div className='flex gap-2'>
              <button className='px-6 py-4 rounded-xl bg-white hover:bg-red-700 hover:text-white '><CategoryButton title={'BURGERS'} icon={<GiHamburger />}/></button>
              <button className='px-6 py-4 rounded-xl bg-white hover:bg-red-700 hover:text-white '><CategoryButton title={'TACO'} icon={<GiTacos />}/></button>
              <button className='px-6 py-4 rounded-xl bg-white hover:bg-red-700 hover:text-white '><CategoryButton title={'FRIES'} icon={<CiFries />}/></button>
              <button className='px-6 py-4 rounded-xl bg-white hover:bg-red-700 hover:text-white '><CategoryButton title={'SALADS'} icon={<LuSalad />}/></button>
              <button className='px-6 py-4 rounded-xl bg-white hover:bg-red-700 hover:text-white '><CategoryButton title={'SANDWICH'} icon={<LuSandwich />}/></button>
            </div>
        </div>

        <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
          modules={[ Autoplay, Scrollbar, EffectCoverflow]}
          spaceBetween={50}
          autoplay
          slidesPerView={3}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        className="flex gap-4">
            {
                meals &&
                meals.map(meal => (
                    <SwiperSlide  key={meal.id}>
                        <div className="relative  p-6 rounded-2xl group" key={meal.id}>
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
          </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </section>
  )
}

export default FoodLover