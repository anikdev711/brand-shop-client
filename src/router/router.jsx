import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BrandDetails from "../pages/BrandDetails/BrandDetails";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/brands.json')
            },
            {
                path: "/addproduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/updateproduct/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allproducts/${params.id}`)
            },
            {
                path: "/mycart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/branddetails/:id",
                element: <BrandDetails></BrandDetails>,
                loader: () => fetch('/brands.json'),
                // loader: ()=>fetch('http://localhost:5000/allproducts')
            },
            {
                path: "/productdetails/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                // loader: () => fetch('/brands.json')
                loader: () => fetch('http://localhost:5000/allproducts')
            }
        ]
    }
]);

export default router;