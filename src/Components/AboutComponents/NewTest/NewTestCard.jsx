

const NewTestCard = ({img, category, title, description}) => {
  return (
      <div className="group/foodcard">
          <div className="relative mb-8">
              <img className="rounded-[1.8rem] group-hover/foodcard:scale-105 transition duration-300" src={img} alt="" />
              <h2 className="absolute bottom-[-20px] text-yellow-400 left-[50%] translate-x-[-50%] text-6xl font-cursive">{category}</h2>
          </div>

          <div className="text-center">
              <h3 className="text-3xl font-bold text-stone-800">{title}</h3>
              <p className="text-lg font-normal text-stone-500">{description}</p>
          </div>
    </div>
  )
}

export default NewTestCard