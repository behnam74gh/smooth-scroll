import "./App.css";
import Home from './pages';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./pages/signin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
