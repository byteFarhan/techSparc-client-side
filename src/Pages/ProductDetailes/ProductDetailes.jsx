import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";

const ProductDetailes = () => {
  //   const params = useParams();
  //   console.log(params);
  const product = useLoaderData();
  //   console.log(product);
  const { user } = useAuth();
  // console.log(user.email);
  const { name, brand, type, price, rating, photoURL, description, _id } =
    product;
  const handleAddCard = () => {
    const data = {
      product,
      user: user.email,
    };
    fetch(
      "https://tech-sparc-server-side-hi5pyh65r-farhan-71s-projects.vercel.app/user-carts",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          swal("Card have been added successfully.", {
            buttons: false,
          });
        }
      });
  };
  return (
    <div className="flex items-center justify-center px-5 my-20 md:my-40">
      <div className="flex flex-col gap-5 rounded-md shadow bg-slate-200 md:flex-row">
        <img
          src={photoURL}
          alt={name}
          className="object-cover w-full md:w-2/5 rounded-t-md md:rounded-l-md"
        />
        <div className="p-5 space-y-2 md:p-10">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <h3 className="font-medium">Brand: {brand}</h3>
          <h3 className="font-medium">Type: {type}</h3>
          <h3 className="font-medium">Price: {price}</h3>
          <h3 className="font-medium">Rating: {rating}</h3>
          <div className="card-actions">
            <button
              onClick={handleAddCard}
              className="font-medium btn border-2 mb-5  hover:bg-[#c9ac86] hover:border-2 hover:border-[#331A15]  border-[#331A15] bg-[#D2B48C]"
            >
              Add Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailes;
