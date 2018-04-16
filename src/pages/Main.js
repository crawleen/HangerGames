import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Roulette from '../components/Roulette/Roulette';

import axios from 'axios';

class Main extends Component {
  handleOnComplete = value => {
  };  

  componentDidMount() {
    this.getOptions();
  }
 
  constructor(props) {
      super(props);      
      this.state = {
          options: []
      }
      this.getOptions = this.getOptions.bind(this);
      this.handleOnComplete = this.handleOnComplete.bind(this);
  }


  getOptions = () => {
    let spinOptions = [];


    axios({
      method: 'get',
      url:
        'https://api.foursquare.com/v2/venues/explore?v=20180405&client_id=IGRWBH0LCKSTPOA5PYAYXZZOAVSHXQFTERXTJAQAOAMZW3ZC&client_secret=ADQJIMWYL4JMZIHUMYPU1UORAJ1S4PNCG2EIB3ZUSJWJRPDU&near=Denver,CO&section=restauarant&price=1&radius=5000&limit=10',
      responseType: 'JSON'
    }).then(res => {
      console.log(res.data.response.groups[0].items);
      let restauarants = res.data.response.groups[0].items;
      let spinOptions = restauarants.map((restauarant, restauarants) => {
        return {
          "name": restauarant.venue.name, 
          "location": restauarant.venue.location.formattedAddress[0] + " " + restauarant.venue.location.formattedAddress[1],
          "category": (restauarant.venue.categories[0]? restauarant.venue.categories[0].shortName: " "),
          "contact": restauarant.venue.contact.formattedPhone,
          "price": restauarant.venue.price.message,
          "rating": restauarant.venue.rating,
          //"menu": (restauarant.venue.menu? restauarant.venue.menu.url: " "),
        };
      });

      this.setState({options: spinOptions});
    });
  };

  render() {
    return (
      <Roulette
        options={this.state.options}
        baseSize={400}
        onComplete={this.handleOnComplete}
      />
    );
  }
}
export default Main;