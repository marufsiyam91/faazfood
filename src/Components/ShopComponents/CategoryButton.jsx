

const CategoryButton = ({title, icon}) => {
  return (
    <button className="flex items-center gap-2 text-xl font-medium">
        {icon}
        {title}
    </button>
  )
}

export default CategoryButton