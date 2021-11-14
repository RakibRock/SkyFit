import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import Login from "./Pages/Login/Login/Login.js/Login";
import Registration from "./Pages/Login/Registration/Registration";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Purchase from "./Pages/Private/Purchase/Purchase";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Pay from "./Pages/Private/Pay/Pay";
import MyOrders from "./Pages/Private/MyOrders/MyOrders";
import Review from "./Pages/Private/Review/Review";

function App() {
  return (
    <div className="App">
      <AuthProvider>
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

            <PrivateRoute path="/purchase/:id">
              <Purchase />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Registration />
            </Route>

            <Route path="/dashboard">
              <Dashboard />
            </Route>

            <Route path="/pay">
              <Pay />
            </Route>

            <Route path="/myOrders">
              <MyOrders />
            </Route>

            <Route path="/review">
              <Review />
            </Route>

            {/* <PrivateRoute path="/"></PrivateRoute> */}

            <Route path="/"></Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
