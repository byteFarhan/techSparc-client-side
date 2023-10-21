import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Brand = ({ brand }) => {
  const { darkMode } = useAuth();
  return (
    <Link to={`/brands/${brand.brand}`}>
      <div className={`rounded-md shadow ${darkMode && "bg-slate-600"}`}>
        <img
          src={brand.brand_img}
          alt={brand.brand}
          className="object-cover w-full rounded-t-md h-96"
        />

        <h3
          className={`py-4 text-3xl font-semibold text-center ${
            darkMode && "text-slate-300"
          }`}
        >
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
