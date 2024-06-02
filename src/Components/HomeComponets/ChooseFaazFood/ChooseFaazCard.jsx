

const ChooseFaazCard = ({image, title, description}) => {
  return (
    <div className="flex flex-col items-center text-center transition-all duration-400 hover:bg-[#fffefb] p-4 esm:p-8 md:p-4 xl:p-8 2xl:p-12 rounded-3xl">
        <img className="rounded-full mb-6 max-w-full" src={image} alt="" />
        <h3 className="text-xl font-semibold text-slate-700 mb-4">{title}</h3>
        <p className="text-md font-light">{description}</p>
    </div>
  )
}

export default ChooseFaazCard