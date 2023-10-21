import PropTypes from "prop-types";
import swal from "sweetalert";

const UserCart = ({ cart, carts, setCarts }) => {
  const { name, brand, type, price, rating, photoURL } = cart.product;
  const handleDelete = (id) => {
    // console.log("clicked", id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://tech-sparc-server-side-hi5pyh65r-farhan-71s-projects.vercel.app/user-carts/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              const remainingCarts = carts.filter((cart) => cart._id !== id);
              //   console.log(remainingCarts);
              setCarts(remainingCarts || []);
              // swal("Product have been deleted successfully.", {
              //   buttons: false,
              // });
            }
          });
        swal("Product have been deleted successfully.", {
          icon: "success",
        });
      } else {
        swal("Product deleation has been cancelled!");
      }
    });
    // fetch(
    //   `https://tech-sparc-server-side-hi5pyh65r-farhan-71s-projects.vercel.app/user-carts/${id}`,
    //   {
    //     method: "DELETE",
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     if (data.deletedCount) {
    //       const remainingCarts = carts.filter((cart) => cart._id !== id);
    //       //   console.log(remainingCarts);
    //       setCarts(remainingCarts || []);
    //       swal("Product have been deleted successfully.", {
    //         buttons: false,
    //       });
    //     }
    //   });
  };
  return (
    <div>
      <div className="flex flex-col text-gray-700 rounded-lg shadow-md bg-slate-200 bg-clip-border">
        <img
          src={photoURL}
          alt={name}
          className="rounded-t-lg w-full h-[300px] object-cover"
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
        <div className="flex justify-between p-6 pt-0">
          <button
            onClick={() => handleDelete(cart._id)}
            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCart;

UserCart.propTypes = {
  cart: PropTypes.object.isRequired,
  carts: PropTypes.array.isRequired,
  setCarts: PropTypes.func.isRequired,
};
