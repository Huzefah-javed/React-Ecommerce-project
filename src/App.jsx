import  { createContext, useEffect, useState } from 'react'; // Import useState
import Landing from './componenets/Landing/Landing';
import "./App.css";
import Product from './componenets/product/Product.jsx';
import Contact from './componenets/contact/Contact.jsx';
import BlogPage from './componenets/blog/BlogPage.jsx';
import AboutUs from './componenets/about us/AboutUs.jsx';
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { MainComponent } from './maincomponent/MainComonent.jsx';
import singleProductApi from './api/singleProductApi.jsx';
import SingleProduct from './componenets/singleProduct/SingleProduct.jsx';
import { Cart } from './componenets/Cart/Cart.jsx';

export const CartContext = createContext();


const AppRouter = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0
    })
  }, [location])

  return  null;
}

const App = () => {

  
  const [addToCartData, setAddToCartData] = useState([]);
  const [products, setProducts] = useState([]);
  const contextValue = {
    addToCartData,
    setAddToCartData,
    products,
    setProducts,
  };
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:(
      <>
      <AppRouter/>
      <MainComponent />
      </> ),
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/products/:singleProduct",
          element: <SingleProduct />,
          loader: singleProductApi,
        },
        {
          path: "/blogs",
          element: <BlogPage />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/cart",
          element: <Cart />,
        }
      ]
    }
  ]);

  return (
    <CartContext.Provider value={contextValue}>
      <RouterProvider router={router} />
    </CartContext.Provider>
  );
};

export default App;