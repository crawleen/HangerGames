import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hero from "../components/Hero/Hero";

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
        'https://api.foursquare.com/v2/venues/explore?v=20180405&client_id=IGRWBH0LCKSTPOA5PYAYXZZOAVSHXQFTERXTJAQAOAMZW3ZC&client_secret=ADQJIMWYL4JMZIHUMYPU1UORAJ1S4PNCG2EIB3ZUSJWJRPDU&near=Denver,CO&section=restauarant&price=3&radius=5000&limit=10',
      responseType: 'JSON'
    }).then(res => {
      //console.log(res.data.response.groups[0].items);
      let restauarants = res.data.response.groups[0].items;
      let spinOptions = restauarants.map((restauarant, restauarants) => {
        return restauarant.venue.name;
      });

      this.setState({options: spinOptions});
    });
  };

  render() {
    return (
      <div>
        <Hero style = "opacity: 0.5" backgroundImage = "https://az616578.vo.msecnd.net/files/2016/12/12/636171217554268315-714313718_foodd.jpg">
      <Roulette
        options={this.state.options}
        baseSize={300}
        onComplete={this.handleOnComplete}
      />
      </Hero>
      </div>
    );
  }
}

export default Main;