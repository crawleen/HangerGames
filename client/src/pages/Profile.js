import React, { Component } from 'react';
import HeroProfile from "../components/Hero/HeroProfile";
import "../components/Hero/Hero.css";
import HeroSignUp from "../components/Hero/HeroSignUp";
import axios from 'axios';
import Navbar from "../components/Navbar/Navbar";
import profilePic from "../components/Navbar/profilePic.jpg";

class Profile extends Component {
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
            "rating": restauarant.venue.rating,
            //"menu": (restauarant.venue.menu? restauarant.venue.menu.url: " "),
          };
        });  
        this.setState({options: spinOptions});
 
      });
    };


render() {
    return (           
      <div className = "container">
      <Navbar />

      <div className ="row" id = "wrapper">
      <div className = "col-md-3">
          <span className="img-rounded">
                <img src={profilePic} style={{ height: "200px", width: "260px"}}/>
                 
              </span> 
          </div>
       <div className="col-md-9">
                  <h1 className="userName">Mike Doe</h1>
                  <button className="btn btn-default">Member since 2018</button>
      </div>
      <div className ="row">
          <div className = "profile-body">
              <div>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h4 className="favTitle">Your Favorites: </h4>
                  {this.state.options.length ? (
                    <table className = "table table-hover">
                    <thead>
                      <tr>
                        {/* <th>Id</th> */}
                        <th>Name</th>
                        <th>Location</th>                       
                        <th>Thumbs Up</th>
                        <th>Thumbs Down</th>
                        <th>Comment</th>
                      </tr>
                      </thead>
                      {this.state.options.map(option => {
                        return (
                          <tr>
                           {/* <li key={option._id}> */}
                            {/* <a href={"/books/" + book._id}> */}
                              {/* <td>
                                {option.id}
                              </td> */}
                              <td>
                                {option.name}
                              </td>
                              <td>
                                {option.location}
                              </td>
                              <td>
                               Should show a thumbs up if user liked
                              </td>
                              <td>
                              Should show a thumbs down if user did not like
                              </td>
                              <td>
                                User added comments
                              </td>
                            {/* </a> */}
                            {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                          </tr>
                        );
                      })}
                    </table>                
                  ) : (
                    <h3>No Results to Display</h3>
                  )}      
                  <h4 className="favTitle">Spinned Restaurants List: </h4>
                  {this.state.options.length ? (
                    <table className = "table table-hover">
                    <thead>
                      <tr>
                        {/* <th>Id</th> */}
                        <th>Name</th>
                        <th>Location</th>                       
                        <th>Thumbs Up/Thumbs Down</th>
                        <th>Comment</th>
                      </tr>
                    </thead>
                      {this.state.options.map(option => {
                        return (
                          <tr>
                           {/* <li key={option._id}> */}
                            {/* <a href={"/books/" + book._id}> */}
                              {/* <td>
                                {option.id}
                              </td> */}
                              <td>
                                {option.name}
                              </td>
                              <td>
                                {option.location}
                              </td>
                              <td>
                                <button type = "button" className = "btn btn-default"><span className = "glyphicon glyphicon-thumbs-up"></span></button>
                                <button type = "button" className = "btn btn-default"><span className = "glyphicon glyphicon-thumbs-down"></span></button>
                              </td>
                              <td>
                                User added comments
                              </td>
                            {/* </a> */}
                            {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                          </tr>
                        );
                      })}
                    </table>                
                  ) : (
                    <h3>No Results to Display</h3>
                  )}      
                  
              </div>
          </div>
       </div>
        </div>
      </div>

    );
}
}

export default Profile;

// const Profile = () => (
//     <div className = "container">
//         <h3 className = "profile-head">Your Hanger Games Profile</h3>
//         <div className = "row">
//             <div className = "col-md-12">
//                 <h4>User: </h4>
//                 <br />
//                 <h4>Last Restaurant Visited: </h4>
//                 <br />
//                 <h4>Your Favorites List: </h4>
//                     <ul>
//                         <li></li>
//                         <li></li>
//                         <li></li>
//                         <li></li>
//                     </ul>
//             </div>
//         </div>
//     </div>
// )


