import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";

const App = () => (
  <Router>
    <div>
      <Navbar />
        <Route exact path = "/" component = {Main} />
        <Route exact path = "/profile" component = {Profile} />
        <Route exact path = "/signup" component = {SignUp} />
    </div>
  </Router>
);

export default App;