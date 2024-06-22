import NewTestCard from "./NewTestCard"


const NewTest = () => {
  return (
      <div className="max-w-screen-xl  mx-auto py-20 px-4 sm:px-8">
          <div className="flex flex-col gap-4 items-center text-center">
              <p className="text-xl font-bold text-red-600">THE MAGIC OF FLAVOR</p>
              <h2 className="text-7xl text-slate-900 font-bold">EXPLORE THE NEW TASTE</h2>
              <p className="text-lg font-normal max-w-[420px] text-stone-500 mt-2">Fasfood is a unique and independent quick service brand. burgers and shakes are made pretty hot and tasty. The ultimate “melt in your mouth” experience.</p>
      </div>
      <div className="flex md:flex-row flex-col gap-8 lg:gap-14 pxl:gap-24 mt-16 ">
        <NewTestCard img={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h5_banner4.jpg'} category={'Burger'} title={"BURG'R COMBO"} description={'Indulge in our mouth-watering Signature Stacks each layer packed with bold flavors and textures that will leave you craving for more!'}/>
        <NewTestCard img={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h5_banner5.jpg'} category={'Chicken'} title={"CHIK'N COMBO"} description={'Indulge in our mouth-watering Signature Stacks each layer packed with bold flavors and textures that will leave you craving for more!'}/>
        <NewTestCard img={'https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/h5_banner6.jpg'} category={'Burrito'} title={"TACO BELL"} description={'Indulge in our mouth-watering Signature Stacks each layer packed with bold flavors and textures that will leave you craving for more!'}/>
      </div>
    </div>
  )
}

export default NewTest