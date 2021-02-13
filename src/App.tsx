import history from "./history";
import { Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          Hi :)
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
