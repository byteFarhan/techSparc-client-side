import { useLoaderData, useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
// import { useState } from "react";
// import { hydrateRoot } from "react-dom/client";
import Carousel from "../../components/Carousel/Carousel";

const BrandProducts = () => {
  const loadedProducts = useLoaderData();
  const { brand } = useParams();
  //   console.log(params);
  const filteredProducts = loadedProducts?.filter(
    (loadedProduct) => loadedProduct.brand === brand
  );
  // console.log(filteredProducts);
  //   const [products, setProducts] = useState(filteredProducts);

  if (!filteredProducts.length) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-center">
          No product available now ...
        </h1>
      </div>
    );
  }
  return (
    <div>
      <Carousel products={filteredProducts} />
      <div className="grid grid-cols-1 gap-5 my-20 px-5 lg:px-0 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
        {filteredProducts &&
          filteredProducts.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BrandProducts;
