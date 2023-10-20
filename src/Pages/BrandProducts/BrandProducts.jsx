import { useLoaderData, useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import { useState } from "react";
import { hydrateRoot } from "react-dom/client";

const BrandProducts = () => {
  const loadedProducts = useLoaderData();
  const { brand } = useParams();
  //   console.log(params);
  const filteredProducts = loadedProducts?.filter(
    (loadedProduct) => loadedProduct.brand === brand
  );
  console.log(filteredProducts);
  //   const [products, setProducts] = useState(filteredProducts);

  if (!filteredProducts.length) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-5xl font-bold text-center">
          No product available now ...
        </h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Slider</h1>
      <div>
        {filteredProducts?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
