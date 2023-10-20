import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Brand = ({ brand }) => {
  return (
    <Link to={`/brands/${brand.brand}`}>
      <div className=" dark:bg-slate-50 rounded-md shadow">
        <img
          src={brand.brand_img}
          alt={brand.brand}
          className="w-full rounded-t-md object-cover h-96"
        />

        <h3 className="text-center dark:text-black font-semibold text-3xl py-4">
          {brand.brand}
        </h3>
      </div>{" "}
    </Link>
  );
};

export default Brand;
Brand.propTypes = {
  brand: PropTypes.object,
};
