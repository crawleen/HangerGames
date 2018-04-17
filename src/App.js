import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer/Footer";


const App = () => (
  <Router>
    <div>
      <Navbar />
        <Route exact path = "/" component = {Main} />
        <Route exact path = "/profile" component = {Profile} />
        <Route exact path = "/signup" component = {SignUp} />
        <Footer />
    </div>
  </Router>
);

export default App;