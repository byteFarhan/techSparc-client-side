import { useLoaderData } from "react-router-dom";
import InputForm from "../../Shared/InputForm/InputForm";

const UpdateProduct = () => {
  const product = useLoaderData();
  //   console.log(product);
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photoURL = form.photoURL.value;
    const description = form.description.value;
    const updatedProduct = {
      name,
      brand,
      type,
      price,
      rating,
      photoURL,
      description,
    };
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <InputForm
        taitle="Update Product"
        submitText="Update Product"
        product={product}
        handleSubmit={handleUpdateProduct}
      />
    </div>
  );
};

export default UpdateProduct;
