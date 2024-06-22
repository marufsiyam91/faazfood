

const FoodPromiseCard = () => {
  return (
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-20 flex md:flex-row flex-col items-center md:gap-0 gap-12">
          <div className="w-full md:w-[55%] relative flex items-center">
              <div className="absolute top-[24%] md:top-[10%] xl:top-[20%] left-[5%] xl:left-0 rotate-[-24deg] hidden esm:flex flex-col gap-4 xl:gap-6 opacity-40">
                  <span className=" font-bold text-opacity-20 text-slate-400 text-4xl  esm:text-5xl  sm:text-6xl xl:text-[5rem] leading-[4rem]">FOOD PROMISE</span>
                  <span className=" font-bold text-opacity-20 text-slate-400 text-4xl  esm:text-5xl  sm:text-6xl xl:text-[5rem] leading-[4rem]">FOOD PROMISE</span>
                  <span className=" font-bold text-opacity-20 text-slate-400 text-4xl  esm:text-5xl  sm:text-6xl xl:text-[5rem] leading-[4rem]">FOOD PROMISE</span>
                  <span className=" font-bold text-opacity-20 text-slate-400 text-4xl  esm:text-5xl  sm:text-6xl xl:text-[5rem] leading-[4rem]">FOOD PROMISE</span>
                  <span className=" font-bold text-opacity-20 text-slate-400 text-4xl  esm:text-5xl  sm:text-6xl xl:text-[5rem] leading-[4rem]">FOOD PROMISE</span>
                  <span className=" font-bold text-opacity-20 text-slate-400 text-4xl  esm:text-5xl  sm:text-6xl xl:text-[5rem] leading-[4rem]">FOOD PROMISE</span>
              </div>
            <img className="relative hover:scale-110 transition duration-300" src={' https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h3_img1.png'} alt="" />
          </div>
          <div className="w-full md:w-[45%] flex flex-col md:items-start items-center">
              <p className="text-lg text-red-600 font-medium">OUR FOOD PROMISE</p>
              <h2 className="md:text-start text-center text-4xl sm:text-5xl lg:text-6xl text-stone-800 font-bold mt-4 max-w-[450px] leading-[3.5rem] sm:leading-[4.5rem]">MADE RIGHT. MADE ESPECIALLY FOR YOU.</h2>
              <p className="md:text-start text-center text-lg font-light max-w-[320px] text-stone-500 my-8">Bold fiery flavours are our style. We’re here to bring a new sizzle to the face of fast-casual dining.</p>
              <div className="flex gap-16 mt-4">
                  <div className="flex flex-col gap-2">
                      <h3 className="text-5xl text-red-700 font-bold">23+</h3>
                      <p className="text-sm font-medium text-slate-800">YEARS EXPERIENCE</p>
                  </div>
                  <div className="flex flex-col gap-2">
                      <h3 className="text-5xl text-red-700 font-bold">580+</h3>
                      <p className="text-sm font-medium text-slate-800">DIFFERENT BURGERS</p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default FoodPromiseCard