import { useLoaderData, useParams } from "react-router-dom";
import Product from "../../components/Product/Product";

const BrandProducts = () => {
  const loadedProducts = useLoaderData();
  const { brand } = useParams();
  //   console.log(params);
  const showProducts = loadedProducts.filter(
    (loadedProduct) => loadedProduct.brand === brand
  );
  console.log(showProducts);

  return (
    <div>
      {showProducts ? (
        <div>
          {/* <h1>Products: {showProducts.length} </h1> */}
          <h1 className="text-4xl font-bold text-center">Slider</h1>
          <div>
            {showProducts?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex h-screen justify-center items-center">
          <h1 className="text-center font-bold text-5xl">
            No product abaleiable...
          </h1>
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
