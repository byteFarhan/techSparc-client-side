import swal from "sweetalert";
import InputForm from "../../Shared/InputForm/InputForm";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photoURL = form.photoURL.value;
    const description = form.description.value;
    const product = {
      name,
      brand,
      type,
      price,
      rating,
      photoURL,
      description,
    };
    console.log(product);
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Product have been added.", {
            button: false,
          });
          //   form.reset();
        }
      });
  };
  return (
    <div>
      <InputForm
        taitle="Add Product"
        submitText="Add Product"
        handleSubmit={handleAddProduct}
      />
    </div>
  );
};

export default AddProduct;
