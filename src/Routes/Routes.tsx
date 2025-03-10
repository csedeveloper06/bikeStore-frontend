import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import AllProducts from "../pages/Home/Products/AllProducts";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import ProductDetail from "../pages/Home/card/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/productdetail/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
    ],
  },
]);
