import { NavLink } from "react-router-dom";

const PageTop = ({ pageName }) => {
  return (
    <div className="bg-[url('https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/ct-bc.jpg')] w-full bg-cover h-[300px] flex flex-col justify-center items-center">
      <h2 className="text-6xl font-semibold text-white mb-6">{pageName}</h2>
      <div className="flex items-center gap-6">
        <NavLink className={`text-white text-xl`} to={"/"}>
          Home page
        </NavLink>
        <p className="text-white text-md capitalize">></p>
        <p className="text-white text-md capitalize">{pageName}</p>
      </div>
    </div>
  );
};

export default PageTop;
