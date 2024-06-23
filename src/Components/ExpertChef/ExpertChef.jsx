import ChefCard from "./ChefCard"


const ExpertChef = () => {
  return (
      <div className="max-w-screen-xl mx-auto py-20 px-4 md:px-8">
          <h2 className="text-6xl font-bold text-center mb-12 text-stone-800">MEET OUR EXPERT CHEFS</h2>
      <div className="flex md:flex-row flex-col gap-12 md:gap-6 lg:gap-8">
      <ChefCard img={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/team-5.jpg'} name={'JACOB HILTON'} position={'EXECUTIVE CHEF'} description={'Indulge in our mouth-watering Signature stacks each layer packed with'}/>
      <ChefCard img={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/team-1.jpg'} name={'JEF RICK'} position={'HEAD CHEF'} description={'Indulge in our mouth-watering Signature stacks each layer packed with'}/>
      <ChefCard img={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/team-3.jpg'} name={'JACOB JAN'} position={'KITCHEN PORTER'} description={'Indulge in our mouth-watering Signature stacks each layer packed with'}/>
      </div>
    </div>
  )
}

export default ExpertChef