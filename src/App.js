import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Details from './Pages/Details/Details';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header/Header';
import Help from './Pages/Help/Help';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import Singup from './Pages/Singup/Singup';
import Support from './Pages/Support/Support';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path ="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/support">
            <Support></Support>
          </Route>
          <Route exact path="/help">
            <Help></Help>
          </Route>
          <Route exact path="/home/:homeId">
            <Details></Details>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/singup">
            <Singup></Singup>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      <Footer></Footer>        
      </Router>
    </div>
  );
}

export default App;
