import {  BrowserRouter,
  Switch,
  Route,
  } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Notfound from './pages/NotFound';
import Hall from './pages/Hall';
import Kitchen from './pages/Kitchen';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact="true" component={Login}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/hall" component={Hall}></Route>
      <Route path="/kitchen" component={Kitchen}></Route>
      <Route path="*" component={Notfound}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
