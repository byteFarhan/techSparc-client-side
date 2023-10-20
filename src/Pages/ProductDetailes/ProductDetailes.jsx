import { useLoaderData, useParams } from "react-router-dom";

const ProductDetailes = () => {
  //   const params = useParams();
  //   console.log(params);
  const product = useLoaderData();
  //   console.log(product);
  const { name, brand, type, price, rating, photoURL, description, _id } =
    product;
  return (
    <div>
      <div className="flex gap-5 shadow">
        <div>
          <img src={photoURL} alt={name} className="w-full" />
        </div>
        <div className="">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <h3 className="font-medium">Brand: {brand}</h3>
          <h3 className="font-medium">Type: {type}</h3>
          <h3 className="font-medium">Price: {price}</h3>
          <h3 className="font-medium">Rating: {rating}</h3>
          <div className="card-actions">
            <button className="btn btn-primary">Add Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailes;
