import ChooseFaazCard from "./ChooseFaazCard"


const ChooseFaaz = () => {
  return (
    <div className="max-w-screen-2xl mx-auto py-20">
      <div className="flex flex-col gap-6 justify-center text-center">
        <p className="text-red-700 text-md font-semibold">WHY CHOOSE FASFOOD?</p>
        <h2 className="text-slate-800 text-4xl md:text-5xl 2xl:text-6xl font-bold">BURGERS MADE WITH <br /> LOVE AND CARE</h2>
      </div>

        <div className="flex md:flex-row gap-4 flex-col px-6 lg:px-8 2xl:px-16 pt-16">
          <div>
            <ChooseFaazCard image={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2024/04/h2_img-5.jpeg'} title={'OUR BURGERS'} description={'At Faazfood , we only use quality ingredients and treat them with care! We flame grill our steaks, and by using open kitchens we ensure that guests can always follow the process.'}/>
          </div>
          <div className="mt-16">
            <ChooseFaazCard image={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/11/h2_img-6.jpg'} title={'YOUR OPINION IS IMPORTANT'} description={'We take all constructive feedback seriously, and we would love along with our staff – to spend every single day making Fasfood even better! Send your feedback on your experience with us here.'}/>
          </div>
          <div>
            <ChooseFaazCard image={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/11/h2_img-7.jpg'} title={'CHICKEN BURGERS'} description={'At Faazfood, we want to make sure that everyone can get their hands on a good burger. Go hunting in our versatile burger menu there is something for every taste and for all sizes!'}/>
          </div>
        </div>
    </div>
  )
}

export default ChooseFaaz