import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";

import Home from "./components/pages/home";
import SiteHeader from "./components/site-header";
import About from "./components/pages/about";
import Portfolio from "./components/pages/portfolio";
import Services from "./components/pages/services";
import Career from "./components/pages/career";
import Pricing from "./components/pages/pricing";

const RootLayout = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <SiteHeader />
      <Outlet />
    </div>
  );
};

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="services" element={<Services />} />
      <Route path="career" element={<Career />} />
      <Route path="pricing" element={<Pricing />} />
    </Route>
  )
);

export default Routes;
