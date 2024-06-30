import { useLoaderData } from "react-router-dom";
import PageTop from "./../Components/PageTop";
import MealDetail from "../Components/SingleMeal/MealDetail";
import Subscribe from "../Components/Subscribe";

const SingleFood = () => {
  const meal = useLoaderData();
  const {
    data: { description, image, category, title, price, rating },
  } = meal;

  return (
    <div className="bg-[#F4F1EA]">
      <PageTop pageName={title} />
      <MealDetail title={title} description={description} image={image} category={category} price={price} rating={rating} />
      
      <Subscribe/>
    </div>
  );
};

export default SingleFood;
