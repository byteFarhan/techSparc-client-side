import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const { name, brand, type, price, rating, photoURL, description, _id } =
    product;
  return (
    <div>
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-lg bg-clip-border">
        <img
          src={photoURL}
          alt={name}
          className="rounded-t-lg w-full object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {name}
            </h5>
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              ${price}
            </h5>
          </div>
          <div className="flex justify-between">
            <p className="block mb-2 font-sans antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              Brand: {brand}
            </p>
            <p className="block mb-2 font-sans antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              {type}
            </p>
            <p className="block mb-2 font-sans antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              Rating: {rating}
            </p>
          </div>
        </div>
        <div className="p-6 flex justify-between pt-0">
          <Link
            to={`./${_id}`}
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Read More
          </Link>
          <Link
            to={`/update-product/${_id}`}
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Update Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
Product.propTypes = {
  product: PropTypes.object.isRequired,
};
