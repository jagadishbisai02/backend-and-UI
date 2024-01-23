import { Switch, Route } from "react-router-dom";
import Home from "./components/HomePage/homepage";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
