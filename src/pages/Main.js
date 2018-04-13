import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Roulette from '../components/Roulette/Roulette';

import axios from 'axios';

class Main extends Component {
  handleOnComplete = value => {
    console.log(value);
  };

  getOptions = () => {
    let options = [];

    axios({
      method: 'get',
      url:
        'https://api.foursquare.com/v2/venues/explore?v=20180405&client_id=IGRWBH0LCKSTPOA5PYAYXZZOAVSHXQFTERXTJAQAOAMZW3ZC&client_secret=ADQJIMWYL4JMZIHUMYPU1UORAJ1S4PNCG2EIB3ZUSJWJRPDU&near=Denver,CO&section=restauarant&price=3&radius=5000&limit=10',
      responseType: 'JSON'
    }).then(res => {
      console.log(res.data.response.groups[0].items);
      let restauarants = res.data.response.groups[0].items;
      let options = restauarants.map((restauarant, restauarants) => {
        return restauarant.venue.name;
      });
    });
  };
  render() {
    return (
      <Roulette
        options={this.getOptions()}
        baseSize={300}
        onComplete={this.handleOnComplete}
      />
    );
  }
}
export default Main;