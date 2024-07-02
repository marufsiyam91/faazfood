import ShopFilter from "./ShopFilter";
import ShopCategory from "./ShopCategory";









const ShopSidebar = () => {
  return (
    <aside>
      <input className="p-4 w-full rounded-md mb-4" type="text" placeholder="search for food" />
      <div className="flex flex-col gap-8 pr-12">
        <ShopCategory />
        <ShopFilter/>
      </div>
    </aside>
  )
}

export default ShopSidebar