import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/explore">
            <Explore />
          </Route>

          <Route path="/purchase"></Route>

          <Route path="/dashboard"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
