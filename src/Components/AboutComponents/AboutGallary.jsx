import { IoFastFoodOutline } from "react-icons/io5";

const AboutGallary = () => {
  return (
    <div className="relative bg-[url('https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h1_bg1.jpg')] w-full h-[600px] md:h-[700px] xl:h-[800px] mt-20 px-8">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-35"></div>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="relative p-3 border-2 border-white rounded-full">
          <img
            className="relative animate-spin-slow filter-white"
            src="https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/Vector-2.png"
            alt=""
          />
          <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[4rem]">
            <IoFastFoodOutline />
          </span>
        </div>
          <h2 className="text-center text-5xl text-white relative font-bold max-w-[620px] mt-8">MAKE THE THING ANYTHING IS POSSIBLE</h2>
          </div>
    </div>
  );
};

export default AboutGallary;

