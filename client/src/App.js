import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer/Footer";

import registerServiceWorker from './registerServiceWorker';
import Login from './pages/login'

const App = () => (
  <Router>
    <div>
        <Route exact path = "/" component = {Main} />
        <Route exact path = "/profile" component = {Profile} />
        <Route exact path = "/signup" component = {SignUp} />
        <Route exact path ="/login" component ={Login} />
        <Footer />
    </div>
  </Router>
);
registerServiceWorker();
export default App;
