

const BurgerCard = () => {
  return (
      <div className="flex items-center justify-center relative">
          <img className="rounded-2xl" src={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/11/shop_bn.jpg'} alt="" />
          <p className="absolute top-16 left-16 max-w-36 text-5xl font-bold text-red-700">TASTY <span className="text-white">BURGER</span></p>
          <p className="absolute bottom-12 right-4 text-white max-w-32 text-md font-normal">NEW PHENOMENON BURGER TASTE</p>
    </div>
  )
}

export default BurgerCard