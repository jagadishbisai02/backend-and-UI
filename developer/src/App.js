import { Switch, Route } from "react-router-dom";
import Home from "./components/HomePage/homepage";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import Navbar from "./components/Header/header";
import "./App.css";
import Profile from "./components/Profile/profile";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
};

export default App;
