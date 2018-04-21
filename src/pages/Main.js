import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hero from "../components/Hero/Hero";
import "./Main.css";
import TheVideo from '../components/Navbar/dinner.mp4';
import Navbar from "../components/Navbar/Navbar";
import Arrow from "../components/Navbar/arrow.png";


import Roulette from '../components/Roulette/Roulette';

import axios from 'axios';

const Video = (props) => {
  return (
    <video className="video" autoPlay loop {...props}>
      <source src={props.videoUrl}  type={props.type} />
    </video>
   );
};

class Main extends Component {
  handleOnComplete = value => {
  };  

  componentDidMount() {
    this.getOptions();
  }
 
  constructor(props) {
    super(props);      
    this.state = {
        options: [],
        location:'Denver, CO',
        price: '',
        keyWord: ''
    }
      this.getOptions = this.getOptions.bind(this);
      this.handleOnComplete = this.handleOnComplete.bind(this);
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.getOptions();
    

    // axios.post('/', { fname, lname, email })
    //   .then((result) => {
    //     //access the results here....
    //   });
  }


  getOptions = () => {
    let spinOptions = [];

    axios({
      method: 'get',
      url:
        'https://api.foursquare.com/v2/venues/explore?v=20180405&client_id=IGRWBH0LCKSTPOA5PYAYXZZOAVSHXQFTERXTJAQAOAMZW3ZC&query="'+this.state.keyWord+'"&client_secret=ADQJIMWYL4JMZIHUMYPU1UORAJ1S4PNCG2EIB3ZUSJWJRPDU&near="'+this.state.location+'"&section=restauarant&price='+this.state.price+'&radius=5000&limit=10',
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
          "price": (restauarant.venue.price? restauarant.venue.price.message: " "), 
          "rating": restauarant.venue.rating,
          //"menu": (restauarant.venue.menu? restauarant.venue.menu.url: " "),
        };
      });

      this.setState({options: spinOptions});
    });
  };

    render() {
      const { location, price, keyWord } = this.state;
      return (
      <div>
      <div className="videoContainer" style={{position: "relative", height: "760px"}}>
          <div>
            <Navbar />
            <Video className="video" videoUrl={TheVideo} type="video/mp4" style={{position: "absolute", top: "-20px", left: 0, width: "100%", zIndex: "-1", margin: "0px"}}/>
            {/* <Hero backgroundImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg">*/}
          
              <div className="heroText">Spin the Wheel</div>
              <div className="heroText2">May the odds be ever in your favor.</div>
              <span className="arrowDown">
                <img src={Arrow} />
              </span>
              </div>

      </div>
      <div>
      <div className= "form">
          <form onSubmit={this.onSubmit}>
                <div>
                  <h3>Search in your area.</h3>
                </div>
                <div>
                  <label for="keyWord">Cuisine Style:  </label>
                  <input type="text" name="keyWord" value={keyWord} onChange={this.onChange} />
                </div>
                <div>
                  <label for="location">City, State or Zip Code:  </label>
                  <input type="text" name="location" value={location} onChange={this.onChange} />
                </div>
                <div>
                  <label for="price">Price Point:  </label>
                  <select type="text" name="price" value={price} onChange={this.onChange}>
                    <option value='1'>$</option>
                    <option value='2'>$$</option>
                    <option value='3'>$$$</option>
                    <option value='4'>$$$$</option>
                  </select>
                </div>
                <button type="submit">Search</button>
            </form>
            </div>
            </div>
       
              <Roulette
                options={this.state.options}
                baseSize={400}
                onComplete={this.handleOnComplete}
              />
            
    </div>
      );
  }
}

export default Main;