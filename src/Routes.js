import {  BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/register/Register';
import Notfound from './pages/NotFound';
import Hall from './pages/Hall';
import Kitchen from './pages/Kitchen';
import ReadyOrders from './pages/ReadyOrders'
import OrdersDelivered from './pages/OrdersDelivered'


const Routes = () => {

    const PrivateRoute = (props) => {
        const token = localStorage.getItem("token");
        return token ? (
          <Route {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        );
      };

   
    return (
        <BrowserRouter> 
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/hall" component={Hall} />
                <PrivateRoute path="/kitchen" component={Kitchen} />
                <PrivateRoute path="/readyorders" component={ReadyOrders} />
                <PrivateRoute path="/ordersdelivered" component={OrdersDelivered} />
                
                <Route path="*" component={Notfound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
