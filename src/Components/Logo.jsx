import { IoFastFoodOutline } from 'react-icons/io5'

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
    <span className="text-4xl text-orange-600">
        <IoFastFoodOutline/>
    </span>
    <h2 className="text-4xl font-bold text-slate-700"><span className="text-red-700">FAAZ</span>FOOD</h2>
</div>
  )
}

export default Logo