import { HiOutlineArrowRight } from "react-icons/hi"


const MealCard = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex md:flex-row flex-col items-center gap-2 justify-between px-4 md:px-10">
        <div className="overflow-hidden w-full md:w-1/2 flex justify-between bg-cover rounded-2xl bg-[url('https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h2_bn-1.jpg')]">
            <div className="relative z-10 py-8 sm:py-16 md:py-8 lg:py-16 pl-6 sm:pl-8 md:pl-6 lg:pl-12 w-full">
                <h2 className="text-white text-6xl font-semibold">FRIED</h2>
                <h2 className="text-white text-6xl font-semibold mt-4">CHICKEN</h2>
                <p className="text-white text-xl font-medium my-4 ">NEW PHENOMENON <br /> BURGER TASTE</p>
                <p className="text-4xl font-semibold text-yellow-400">$59.00</p>
                <button className="mt-6 py-4 px-6 bg-white flex gap-2 items-center rounded-xl font-semibold">ORDER NOW <HiOutlineArrowRight/></button>
            </div>
            <div className="flex items-center">
                <img className="min-w-[200px] scale-150 hover:scale-[1.8] transition duration-300" src={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h2_img-2.png'} alt="" />
            </div>
        </div>



        <div className="overflow-hidden w-full md:w-1/2 flex justify-between bg-cover rounded-2xl bg-[url('https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h2_bn-2.jpg')]">
            <div className="relative z-10 py-8 sm:py-16 md:py-8 lg:py-16 pl-6 sm:pl-8 md:pl-6 lg:pl-12 w-full">
                <h2 className="text-white text-6xl font-semibold">BEEF</h2>
                <h2 className="text-white text-6xl font-semibold mt-4">BURGER</h2>
                <p className="text-white text-xl font-medium my-4 ">NEW PHENOMENON <br /> BURGER TASTE</p>
                <p className="text-4xl font-semibold text-yellow-400">$59.00</p>
                <button className="mt-6 py-4 px-6 bg-white flex gap-2 items-center rounded-xl font-semibold">ORDER NOW <HiOutlineArrowRight/></button>
            </div>
            <div className="flex items-center">
                <img className="min-w-[150px] scale-150 hover:scale-[1.8] transition duration-300" src={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h2_img-3.png'} alt="" />
            </div>
        </div>
    </div>
  )
}

export default MealCard