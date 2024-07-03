import { MdOutlineFilterList } from "react-icons/md";


const FilteerSort = ({handleSidebarShow}) => {
  return (
      <div className="flex justify-start gap-8 lg:justify-between p-4 lg:p-8 mb-8">
          <button onClick={handleSidebarShow} className="flex items-center gap-2 text-xl font-bold text-stone-800 lg:invisible visible">
              <MdOutlineFilterList/>
          <span>FILTER</span>
          </button>

          <select name="sort" className="p-4 rounded-xl font-medium">
              <option value="Default sorting">Default sorting</option>
              <option value="Sort by average rating">Sort by average rating</option>
              <option value="Sort by latest">Sort by latest</option>
              <option value="Sort by price: low to high">Sort by price: low to high</option>
              <option value="Sort by price: high to low">Sort by price: high to low</option>
            </select>
      </div>
  )
}

export default FilteerSort