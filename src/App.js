import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Team from "./components/Team";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path="/team">
            <Team />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
