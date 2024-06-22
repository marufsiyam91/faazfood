import AboutFood from "../Components/AboutComponents/AboutFood"
import FoodPromiseCard from "../Components/AboutComponents/FoodPromiseCard"
import NewTest from "../Components/AboutComponents/NewTest/NewTest"
import Subscribe from "../Components/HomeComponets/Subscribe"
import PageTop from "../Components/PageTop"


const About = () => {
  return (
      <div className="bg-[#F4F1EA]">
      <PageTop pageName={'ABOUT US'} />
      <AboutFood />
      <FoodPromiseCard />
      <NewTest/>
      <Subscribe/>
    </div>
  )
}

export default About