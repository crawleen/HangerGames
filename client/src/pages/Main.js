import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Hero from "../components/Hero/Hero";
import "./Main.css";
import TheVideo from '../components/Navbar/dinner.mp4';
import Navbar from "../components/Navbar/Navbar";
import Arrow from "../components/Navbar/arrow.png";
//import "./Main.css";
//import "../Images/food";
import Roulette from '../components/Roulette/Roulette';
import axios from 'axios';
import API from "../utils/API";

const Video = (props) => {
  return (
    <video className="video" autoPlay loop {...props}>
      <source src={props.videourl}  type={props.type} />
    </video>
   );
};

class Main extends Component {
  handleOnComplete = value => {
  };  

  componentDidMount() {
    //this.getOptions();
    //this.saveRestaurants();
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
      this.saveRestaurants = this.saveRestaurants.bind(this);
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
  }

  getOptions = () => {
    let spinOptions = [];

    axios({
      method: 'get',
      url:
        'https://api.foursquare.com/v2/venues/explore?v=20180405&client_id=XMYVZU2LHFQEE3CHWEBK24DSEPYJ5LPZWBDKKRTMJZSBYUY2&query="Restaurant + '+this.state.keyWord+'"&client_secret=BPI5K5OCPFTJPVVDUO3UXPPJOENZSC1YFF1GHJ4VBVCRCW1U&near="'+this.state.location+'"&section=restauarant&price='+this.state.price+'&radius=5000&limit=10',
      responseType: 'JSON'
    }).then(res => {
      console.log(res.data.response.groups[0].items);
      let restauarants = res.data.response.groups[0].items;
      let spinOptions = restauarants.map((restauarant, restauarants) => {
        return {
          "id": restauarant.venue.id,
          "name": restauarant.venue.name, 
          "location": restauarant.venue.location.formattedAddress[0] + " " + restauarant.venue.location.formattedAddress[1],
          "category": (restauarant.venue.categories[0]? restauarant.venue.categories[0].shortName: " "),
          "contact": (restauarant.venue.contact? restauarant.venue.contact.formattedPhone: " "),
          "price": (restauarant.venue.price? restauarant.venue.price.message: " "), 
          "rating": restauarant.venue.rating? restauarant.venue.rating:""
          //"menu": (restauarant.venue.menu? restauarant.venue.menu.url: " "),
        };
      });

      this.setState({options: spinOptions});
      this.saveRestaurants();
    });
  };

  saveRestaurants = () => {
    for(var i=0; i < this.state.options.length; i++){
    API.saveRestaurants({
        userId: 1,
        id: this.state.options[i].id,
        name: this.state.options[i].name, 
        location: this.state.options[i].location,
        liked:0,
        disliked: 0,
        comments: ""
    })
    .catch(err => console.log(err));
    }  	
  }

    render() {
      const { location, price, keyWord } = this.state;
      return (
      <div>
        <div  style={{position: "relative"}}>
          <div className="videoContainer">
            <Navbar />
            <div style={{position: "relative", height: "700px"}} >
            <Video videourl={TheVideo} type="video/mp4" style={{position: "absolute", height: "700px", top: "-20px", left: 0, width: "100%", zIndex: "-1", margin: "0px"}}/>
            {/* <Hero backgroundImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg">*/}
            </div>
              <div className="heroText">Spin the Wheel</div>
              <div className="heroText2">May the odds be ever in your flavor.</div>
              <span className="arrowDown">
                <img src={Arrow} />
              </span>

        </div>
      </div>

      <div >
  
      <Hero backgroundImage = "https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" className= "backgroundImg">
      <div>
        <div className= "form">
      
          <form className="form-inline" onSubmit={this.onSubmit}>
              
                <div>
                  <h3 >Search in your area, then spin the wheel.</h3>
                </div>
                <div className="form-group"> 
                  <label htmlFor="keyWord">Cuisine Style:  </label>
                  <input type="text" className="form-control" name="keyWord" value={keyWord} onChange={this.onChange} />
                </div>
                <div className="form-group">

                  <label for="location">City, State or Zip Code:  </label>
                  <input type="text" className="form-control" name="location" value={location} onChange={this.onChange} required="required" oninvalid="this.setCustomValidity('Witinnovation')"
       onvalid="this.setCustomValidity('')"/>

                </div>
                <div className="form-group">
                  <label className= "price" htmlFor="price">Price Point:  </label>
                  <select type="text" name="price" value={price} onChange={this.onChange}>
                    <option value='1'>$</option>
                    <option value='2'>$$</option>
                    <option value='3'>$$$</option>
                    <option value='4'>$$$$</option>
                  </select>
                </div>
                <button className="btn btn-default" type="submit">Search</button>
          </form>
        </div>
       </div>
          <Roulette
            options={this.state.options}
            baseSize={400}
            onComplete={this.handleOnComplete}
            className="roulette"
          />
      </Hero>
    </div>
    </div>

      );
  }
}

export default Main;