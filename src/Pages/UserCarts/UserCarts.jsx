import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UserCart from "../../components/UserCart/UserCart";
import useAuth from "../../hooks/useAuth";

const UserCarts = () => {
  const { user } = useAuth();
  const loadedCarts = useLoaderData();
  //   console.log(loadedCarts);
  const filteredCarts = loadedCarts.filter(
    (loadedCart) => loadedCart.user === user.email
  );
  //   console.log(filteredCarts);
  const [carts, setCarts] = useState(filteredCarts);
  if (carts.length) {
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-3 md:px-5 lg:px-0 lg:grid-cols-3 max-w-[1400px] my-20 mx-auto">
        {carts &&
          carts?.map((cart) => (
            <UserCart
              key={cart._id}
              cart={cart}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">No Product added yet!</h1>
    </div>
  );
};

export default UserCarts;
