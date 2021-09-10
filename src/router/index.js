import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import OrderConfirmation from "../pages/OrderConfirmation";
import Products from "../pages/Products";
import Checkout from "../pages/Checkout";
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/order" component={OrderConfirmation} />
        <Route path="/products" component={Products} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
