import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import registerServiceWorker from './registerServiceWorker';
// import Login from './components/Login';
import Register from './pages/SignUp';
import Login from './pages/login'

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);
registerServiceWorker();
export default App;
