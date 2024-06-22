import { HiOutlineArrowRight } from "react-icons/hi";
import { IoFastFoodOutline } from "react-icons/io5";

const AboutFood = () => {
  return (
    <div className="relative">
      <div className="pxl:block hidden absolute top-28 right-[8%] xl:right-[10%] p-3 border-2 border-orange-700 rounded-full">
        <img className="relative animate-spin-slow" src={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/Vector-2.png'} alt="" />
        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-orange-700 text-[4rem]"><IoFastFoodOutline/></span>
      </div>
      <div className="relative z-10 max-w-screen-xl mx-auto text-center py-20 flex flex-col items-center px-4">
        <p className="text-lg text-red-600 font-medium">ABOUT OUR FOOD</p>
        <h2 className="my-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[3.2rem] lg:leading-[4.5rem] font-bold max-w-[650px] text-stone-800">
          BEST BURGER IDEAS & TRADITIONS FROM THE WHOLE WORLD
        </h2>
        <p className="text-lg font-light text-stone-400 max-w-[540px]">
          The mouth-watering aroma of sizzling burgers now fills the streets of
          Birmingham thanks to the passionate pursuit of three brothers, the
          British founders of Faz food. After over 50 years of experience in the
          culinary industry between them, they set out on a journey to discover
          the ultimate burger.
        </p>
        <button className="p-4 rounded-xl bg-green-600 text-white mt-12 relative group/btn overflow-hidden font-medium">
          <div className="w-full h-full bg-red-700 absolute -left-[100%] top-0 transition-all duration-300 group-hover/btn:left-0"></div>
          <div className="relative flex items-center gap-3">
            ABOUT OUR FOOD{" "}
            <span>
              <HiOutlineArrowRight />
            </span>
          </div>
        </button>
      </div>

      <div className="absolute lg:block hidden lg:max-w-[35%] 2xl:max-w-[50%] -bottom-20 left-0">
        <img className=""  src={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h1_img3.png'} alt="" />
      </div>
    </div>
  );
};

export default AboutFood;
