import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddProduct from "../Pages/AddProduct/AddProduct";
import ProductDetailes from "../Pages/ProductDetailes/ProductDetailes";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import MyCart from "../Pages/MyCart/MyCart";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://tech-sparc-server-side-hdeew7i5u-farhan-71s-projects.vercel.app/brands"
          ),
      },
      {
        path: "/brands/:brand",
        element: <BrandProducts />,
        loader: () =>
          fetch(
            `https://tech-sparc-server-side-hdeew7i5u-farhan-71s-projects.vercel.app/products/`
          ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivetRoute>
            <MyCart />
          </PrivetRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "add-product",
        element: (
          <PrivetRoute>
            <AddProduct />
          </PrivetRoute>
        ),
      },
      {
        path: "/update-product/:id",
        element: (
          <PrivetRoute>
            <UpdateProduct />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tech-sparc-server-side-hdeew7i5u-farhan-71s-projects.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/brands/:brand/:id",
        element: (
          <PrivetRoute>
            <ProductDetailes />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tech-sparc-server-side-hdeew7i5u-farhan-71s-projects.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
