import AboutFood from "../Components/AboutComponents/AboutFood"
import FoodPromiseCard from "../Components/AboutComponents/FoodPromiseCard"
import NewTest from "../Components/AboutComponents/NewTest/NewTest"
import Subscribe from "../Components/Subscribe"
import PageTop from "../Components/PageTop"
import AboutGallary from "../Components/AboutComponents/AboutGallary"


const About = () => {
  return (
      <div className="bg-[#F4F1EA]">
      <PageTop pageName={'ABOUT US'} />
      <AboutFood />
      <AboutGallary/>
      <FoodPromiseCard />
      <NewTest/>
      <Subscribe/>
    </div>
  )
}

export default About