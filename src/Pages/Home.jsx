import Blog from "../Components/HomeComponets/Blog";
import HeroSection from "../Components/HomeComponets/HeroSection";
import MealCard from "../Components/HomeComponets/MealCard";
import Subscribe from "../Components/Subscribe"
import ChooseFaaz from './../Components/HomeComponets/ChooseFaazFood/ChooseFaaz';


const Home = () => {
  return (
    <div className="bg-[#F4F1EA]">
        <HeroSection/>
        <ChooseFaaz/>
        <MealCard/>
        <Blog/>
        <Subscribe/>
    </div>
  )
}

export default Home