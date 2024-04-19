import { Switch, Route } from "react-router-dom";
import Home from "./components/HomePage/homepage";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
