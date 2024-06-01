import { FaArrowRightLong } from "react-icons/fa6"


const Subscribe = () => {
  return (
    <div className="w-full relative overflow-hidden">
        <div className="hidden xl:block">
            <img className="absolute -left-2 2xl:left-16 bottom-12" src={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/global-ft-pic1.png'} alt="" />
            <img className="absolute -right-4 2xl:right-16 bottom-12" src={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/global-ft-pic2.png'} alt="" />
            <img className="absolute -bottom-28 left-40" src={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ft_vector1.png'} alt="" />
            <img className="absolute top-8 left-6" src={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ft_vector2.png'} alt="" />
        </div>


        <div className="relative z-10 max-w-screen-xl mx-auto py-24">
            <div className="max-w-[624px] relative mx-auto flex flex-col items-center text-center">
                <img className="absolute -right-4 rotate-180 -top-6" src={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ft_vector3.png'} alt="" />
                <img className="absolute -left-4 bottom-6" src={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ft_vector3.png'} alt="" />
                <h1 className="text-6xl font-semibold text-slate-800">JOIN FOR HOT OFFERS</h1>
                <p className="text-slate-800 mt-8">If we go all out… We do it well! Subscribe to the newsletter <br /> to get the most exclusive promos.</p>
            </div>
            <div className="flex flex-col mt-12 max-w-[624px] mx-auto">
                <div className="w-full flex justify-center gap-4">   
                    <input className="p-4 rounded-xl w-full bg-white" type="text" placeholder="Email address"/>
                    <button className="flex items-center gap-2 p-4 bg-green-600 text-white rounded-xl">SUBSCRIBE <FaArrowRightLong /></button>
                </div>
                <label className="text-sm flex gap-2 text-slate-700 mt-6">
                    <input type="checkbox" name="" id="" />
                    By signing up you agree to our Privacy Policy
                </label>
            </div>
        </div>
    </div>
  )
}

export default Subscribe