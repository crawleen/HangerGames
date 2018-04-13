import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Roulette from './Roulette';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


const handleOnComplete = (value) => {
  console.log(value);
};

let options = [];

axios({
  method: "get",
  url:
  "https://api.foursquare.com/v2/venues/explore?v=20180405&client_id=IGRWBH0LCKSTPOA5PYAYXZZOAVSHXQFTERXTJAQAOAMZW3ZC&client_secret=ADQJIMWYL4JMZIHUMYPU1UORAJ1S4PNCG2EIB3ZUSJWJRPDU&near=Denver,CO&section=restauarant&price=3&radius=5000&limit=10",
  responseType: "JSON"
}).then(res => {
  console.log(res.data.response.groups[0].items);
  let restauarants = res.data.response.groups[0].items;
  let options = restauarants.map((restauarant, restauarants) => {
    return restauarant.venue.name;
  })
  ReactDOM.render(<Roulette options={options} baseSize={300} onComplete={handleOnComplete}/>, document.getElementById('root'));
  registerServiceWorker();
});


const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./server/config');

// connect to the database and load models
require('./server/models').connect(config.dbUri);

const app = express();
// tell the app to look for static files in these directories
app.use(express.static('../public/'));
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Set Port, hosting services will look for process.env.PORT
app.set('port', (process.env.PORT || 3000));

// start the server
app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`);
});
