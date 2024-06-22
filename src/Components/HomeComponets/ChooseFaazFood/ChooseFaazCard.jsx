

const ChooseFaazCard = ({image, title, description}) => {
  return (
    <div className="flex flex-col items-center text-center transition-all duration-400 hover:bg-[#fffefb] p-4 esm:p-8 md:p-4 xl:p-8 rounded-3xl">
        <img className="rounded-full mb-6 max-w-full" src={image} alt="" />
        <h3 className="text-2xl font-bold text-slate-800 mb-4">{title}</h3>
        <p className="text-lg font-normal text-stone-500">{description}</p>
    </div>
  )
}

export default ChooseFaazCard