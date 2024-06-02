import { NavLink } from 'react-router-dom'
import FoodImage from '../../assets/images/pizza image.png'
import { HiOutlineArrowRight } from 'react-icons/hi'


const HeroSection = () => {
  return (
    <div className="relative overflow-x-hidden flex  items-center w-full h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1690983321815-6438f4850ca3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        <div className='absolute w-full h-full bg-red-800 bg-opacity-50 '>

        </div>
        <div className='relative max-w-screen-2xl  mx-auto h-full flex gap-4 md:flex-row flex-col items-center justify between py-32 md:py-40 px-4 md:px-8'>
            <div className='text-center w-full flex flex-col items-center'>
                <h3 className='text-yellow-500 text-2xl font-semibold'>SUPER DELICIONG</h3>
                <h1 className='text-4xl esm:text-6xl lg:text-7xl 2xl:text-8xl font-bold text-white my-4'>CHEESE <br /> PIZZA LIMITED</h1>
                <p className='max-w-[480px] text-lg font-normal text-white'>Extra virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives, fresh tomatos</p>
                <NavLink className="text-white py-4 px-6 rounded-xl bg-green-600 flex gap-2 items-center mt-6" to={'/shop'}>SHOP NOW <span><HiOutlineArrowRight/></span></NavLink>
            </div>

            <div className='w-full'>
                <img className='w-[650px] lg:w-[800px]' src={FoodImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection