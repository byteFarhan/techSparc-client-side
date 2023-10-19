import { useLoaderData } from "react-router-dom";
import Brand from "../Brand/Brand";

const Brands = () => {
  const brands = useLoaderData() || [];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-20 lg:grid-cols-3 gap-5 lg:gap-8 max-w-[1400px] mx-auto px-3 md:px-5 lg:px-0">
      {brands &&
        brands?.map((brand) => <Brand key={brand._id} brand={brand} />)}
    </div>
  );
};

export default Brands;
