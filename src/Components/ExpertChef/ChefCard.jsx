import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";

const ChefCard = ({ img, name, position, description }) => {
  return (
    <div>
      <div className=" rounded-[1.8rem] overflow-hidden relative group/card">
        <div className="w-full h-full bg-stone-800 bg-opacity-70 top-0 left-0 absolute opacity-0 group-hover/card:opacity-100 transition-all duration-300">
          <div className="flex gap-3 justify-center items-center w-full h-full">
            <div className="p-2 rounded-full text-white text-2xl">
              <FaFacebookF />
            </div>
            <div className="p-2 rounded-full text-white text-2xl">
              <FaTwitter />
            </div>
            <div className="p-2 rounded-full text-white text-2xl">
              <FaInstagram />
            </div>
            <div className="p-2 rounded-full text-white text-2xl">
              <FaPinterest />
            </div>
          </div>
        </div>
        <img className="w-full" src={img} alt="" />
      </div>
      <div className="flex flex-col items-center text-center">
        <h3 className="text-3xl font-bold text-stone-700 mt-4 ">{name}</h3>
        <span className="py-1 px-3 my-2 bg-green-700 text-white font-medium">
          {position}
        </span>
        <p className="text-lg font-normal text-stone-500 max-w-[320px] leading-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ChefCard;
