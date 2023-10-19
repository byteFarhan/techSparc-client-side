import PropTypes from "prop-types";

// coffeeName,
// chef,
// supplier,
// taste,
// category,
// details,
// photoURL,
const InputForm = ({ taitle, submitText, handleSubmit, product }) => {
  return (
    <div className="my-20">
      <div className="mx-3 md:mx-6 lg:w-[1300px] mx-w-[1320px] lg:mx-auto bg-[#F4F3F0] py-12 px-6 md:p-12 rounded-sm">
        <div className="mb-5 space-y-6 text-center">
          <h1
            style={{ textShadow: "2px 2px 0 rgba(0.5,0,0,0.5) " }}
            className="md:text-5xl text-3xl text-[#374151] text-opacity-75 "
          >
            {taitle}
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 md:px-10">
          {/* row-1 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter product name"
                defaultValue={product?.name}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Brand</span>
              </label>
              <input
                type="text"
                name="brand"
                placeholder="Enter brand name"
                defaultValue={product?.brand}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
              />
            </div>
          </div>
          {/* row-2 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Type</span>
              </label>
              <input
                type="text"
                name="type"
                placeholder="Enter product type"
                defaultValue={product?.type}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Price</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter procuct price"
                defaultValue={product?.price}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
              />
            </div>
          </div>
          {/* row-3 */}
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photoURL"
                placeholder="Enter photoURL"
                required
                defaultValue={product?.photoURL}
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="text-xl font-medium">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="Enter product rating"
                defaultValue={product?.rating}
                required
                className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
              />
            </div>
          </div>
          {/* row-4 */}
          <div className="w-full form-control">
            <label className="label">
              <span className="text-xl font-medium">Description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter short description"
              defaultValue={product?.description}
              required
              className="w-full px-3 py-2 text-lg rounded-sm placeholder:text-base placeholder:font-normal focus:outline-slate-300"
            />
          </div>
          <button className=" text-xl md:text-2xl font-medium w-full btn border-2 mb-5  hover:bg-[#c9ac86] hover:border-2 hover:border-[#331A15]  border-[#331A15] bg-[#D2B48C]">
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
};

InputForm.propTypes = {
  taitle: PropTypes.string.isRequired,
  submitText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  product: PropTypes.object,
};

export default InputForm;
