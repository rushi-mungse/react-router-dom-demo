import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  useNavigation,
} from "react-router-dom";

import { getProducts } from "./api";

import Home from "./components/pages/home";
import SiteHeader from "./components/site-header";
import SignUp from "./components/pages/signup";
import Products from "./components/pages/products";
import SiteFooter from "./components/site-footer";
import Stores from "./components/pages/stores";
import SingleProduct from "./components/pages/single-product";
import NotFound from "./components/pages/not-found";
import TestNow from "./components/pages/test-now";
import Test from "./components/pages/test";

import { BounceLoader } from "react-spinners";

const RootLayout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading")
    return (
      <div className="flex items-center justify-center h-screen">
        <BounceLoader color="#FF7900" />
      </div>
    );

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
      <Route
        path="product/:id"
        element={<SingleProduct />}
        loader={getProducts}
      />
      <Route path="signup" element={<SignUp />} />

      <Route path="/test/:query" element={<Test />} />
      <Route path="/test/now" element={<TestNow />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default Routes;
