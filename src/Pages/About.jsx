import AboutFood from "../Components/AboutComponents/AboutFood"
import FoodPromiseCard from "../Components/AboutComponents/FoodPromiseCard"
import Subscribe from "../Components/HomeComponets/Subscribe"
import PageTop from "../Components/PageTop"


const About = () => {
  return (
      <div className="bg-[#F4F1EA]">
      <PageTop pageName={'ABOUT US'} />
      <AboutFood />
      <FoodPromiseCard />
      <Subscribe/>
    </div>
  )
}

export default About