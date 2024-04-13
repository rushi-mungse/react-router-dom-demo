import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";

import Home from "./components/pages/home";
import SiteHeader from "./components/site-header";
import SignUp from "./components/pages/signup";
import Products from "./components/pages/products";
import SiteFooter from "./components/site-footer";
import { getProducts } from "./api";
import Stores from "./components/pages/stores";

const RootLayout = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  );
};

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="stores" element={<Stores />} />
      <Route path="products" element={<Products />} loader={getProducts} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

export default Routes;
