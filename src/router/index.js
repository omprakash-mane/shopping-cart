import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CircularIndeterminate from "../components/Loader";
import "./styles.css";

const Home = React.lazy(() => import("../pages/Home"));
const OrderConfirmation = React.lazy(() =>
  import("../pages/OrderConfirmation")
);
const Products = React.lazy(() => import("../pages/Products"));
const Checkout = React.lazy(() => import("../pages/Checkout"));

const AppRouter = () => {
  return (
    <Suspense fallback={<CircularIndeterminate />} className="loader">
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/order" component={OrderConfirmation} />
          <Route path="/products" component={Products} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
