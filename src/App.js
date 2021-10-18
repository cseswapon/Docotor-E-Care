import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header/Header';
import Home from './Pages/Home/Home/Home';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
