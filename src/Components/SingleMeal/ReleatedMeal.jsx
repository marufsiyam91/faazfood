import { useEffect, useState } from "react"
import { FaCartShopping, FaStar } from "react-icons/fa6"
import { IoIosHeartEmpty } from "react-icons/io"


const ReleatedMeal = ({category}) => {

    const [releatedMeal, setReleatedMeal] = useState([])

    useEffect(() => {
        const fetchReleated = async () => {
            try {
                const response = await fetch('http://localhost:8800/api/v1/foods')

                if (!response.ok) {
                    console.log('something went wrong while fetching data')
                }

                const data = await response.json()
                console.log(data)
                const releatedMeal = data.data.filter(item => item.category === category)
                setReleatedMeal(releatedMeal)
            }

            catch (error) {
                console.log("Error occured can't fetch data")
            }
        }
        fetchReleated()
    }, [])

    return (
        <div className="max-w-screen-2xl mx-auto py-20">
            <h2 className="text-6xl font-bold text-stone-800 text-center mb-12">RELEATED PRODUCTS</h2>

      <div className="w-full border grid esm:grid-cols-2 place-items-center justify-items-center lmd:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 px-4">
          
    {
      releatedMeal.map((meal) => (
          <div className="relative  p-6 rounded-2xl group" key={meal.id}>
          <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
              <img src={meal.image} alt="" />
            </div>
            <div className=" flex flex-col justify-between">
              <div className="flex justify-between">
                <h3 className="text-xl text-slate-800 font-semibold">
                  {meal.title}
                </h3>
                <span className="text-xl fill-red-500">
                  <IoIosHeartEmpty />
                </span>
              </div>

              <div className="flex gap-1 items-center py-3">
                <span className="text-orange-500">
                  <FaStar />
                </span>
                <span className="text-orange-500">
                  <FaStar />
                </span>
                <span className="text-orange-500">
                  <FaStar />
                </span>
                <span className="text-orange-500">
                  <FaStar />
                </span>
                <span className="text-white">
                  <FaStar />
                </span>
                (4.5)
              </div>

              <p className="text-lg font-light">{meal.description}</p>
              <div className="pt-6 flex justify-between items-center">
                <h3 className="text-2xl text-red-600 font-bold">{meal.price}$</h3>
                <span className="p-3 bg-green-600 rounded-xl text-white"><FaCartShopping /></span>
              </div>
            </div>
          </div>

          <div className="absolute w-full h-[70%] group-hover:h-[100%] transition-all duration-500 bottom-0 left-0 bg-white rounded-2xl"></div>
            </div>
      ))}
  </div>
            </div>
  )
}

export default ReleatedMeal