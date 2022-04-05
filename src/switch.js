import "./styles.css";

import { Switch, Route, Link } from "react-router-dom";

import {Home, About, Dashboard} from "./Funciones/Routes";

const App = () => {
    return (
      <Router>
          <Link Link to="/home">Home</Link>
          <Link style={{padding: "30px"}} to="/about">About</Link>
          <Link style={{padding: "30px"}} to="/dashboard">Dashboard</Link>
  
          <br />
  
          <Switch>
              <Route exact path="/home">
                  <Home />
              </Route>
              <Route exact path="/about">
                  <About />
              </Route>
              <Route exact path="/dashboard">
                  <Dashboard />
              </Route>
          </Switch>
  
      </Router>
    );
  };
  export default App;