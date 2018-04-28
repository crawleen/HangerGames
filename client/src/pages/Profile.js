import React, { Component } from 'react';
import HeroProfile from "../components/Hero/HeroProfile";
import "../components/Hero/Hero.css";
import HeroSignUp from "../components/Hero/HeroSignUp";
import axios from 'axios';
import Navbar from "../components/Navbar/Navbar";
import API from "../utils/API";
import profilePic from "../components/Navbar/profilePic.jpg";

class Profile extends Component {
    handleOnComplete = value => {
    };  
  
    componentDidMount() {
      this.getOptions();
      this.getFavs();
    }
   
    constructor(props) {
      super(props);      
      this.state = {     
          options: [],
          favs:[],
          location:'Denver, CO',
          price: '',
          keyWord: ''
      }
        this.getOptions = this.getOptions.bind(this);
        this.getFavs = this.getFavs.bind(this);
        this.handleOnComplete = this.handleOnComplete.bind(this);
    }  

    getOptions = () => {
      API.getBooks()
        .then(res =>
          this.setState({ options: res.data, name: "" })
        )
        .catch(err => console.log(err));
    };

    getFavs = () => {
      API.getRestaurants(true)
        .then(res =>
          this.setState({ favs: res.data })
        )
        .catch(err => console.log(err));
    };

    onLikeClick = (option, e) => {  
      API.updateLike(option.id)
        .then(res =>
          this.setState(option.liked)
        )
        .catch(err => console.log(err));
        this.getOptions();
        this.getFavs();
    }

    onDislikeClick = (option, e) => {  
      API.updateDislike(option.id)
        .then(res =>
          this.setState(option.disliked)
        )
        .catch(err => console.log(err));
        this.getOptions();
        this.getFavs();
    }

    // onCommentClick = (option, e) => {  
    //   API.updateComment(option.id,"")
    //     .then(res =>
    //       this.setState(option.comment)
    //     )
    //     .catch(err => console.log(err));
    //     this.getOptions();
    //     this.getFavs();
    // }

render() {
    return (           
      <div className = "container">
      <Navbar />
      <div className="card">
      <div className ="row" id = "wrapper">
      
        <div className="col-md-3">
          <span>
                <img src={profilePic} className="profPic"/>
              </span>
        </div>
        <div className="col-md-9">
                  <button className="btn btn-primary">Mike Everdeen</button>
                  <h1 className="userName">Member Since 2018</h1>
                  <br/>
                  <h2 className="stats">Last Login:</h2> <h2 className="statResult">April 20th, 2018</h2>
                  <br/>
                  <h2 className="stats">Most Searched Cuisine:</h2><h2 className="statResult">Thai</h2>
                  <br/>
                  <h2 className="stats">Last Restaurant Favorited:</h2><h2 className="statResult">City,O'City</h2>
            </div>
      <hr className="style1" />
        </div>

      <div className ="row">

          <div className = "profile-body">
              <div>
                  <h4 className="favTitle">Your Favorites: </h4>
                  <br />
                  {this.state.favs.length ? (
                    <table className = "table table-hover">
                    <thead>
                      <tr>
                        {/* <th>Id</th> */}
                        <th>Name</th>
                        <th>Location</th>                       
                        <th>Comment</th>
                      </tr>
                      </thead>
                      {this.state.favs.map(fav => {
                        return (
                          <tr>
                           {/* <li key={option._id}> */}
                            {/* <a href={"/books/" + book._id}> */}
                              {/* <td>
                                {option.id}
                              </td> */}
                              <td>
                                {fav.name}
                              </td>
                              <td>
                                {fav.location}
                              </td>
                              <td>
                                {fav.comments}
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
                  <br/>    
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
                         let boundLikeClick = this.onLikeClick.bind(this, option);
                         let boundDislikeClick = this.onDislikeClick.bind(this, option);
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
                                <button style={{backgroundColor: option.liked? "#4daf6a" : "grey"}} id={option.id} type = "button" className = "btn btn-default" onClick={boundLikeClick}><span className = "glyphicon glyphicon-thumbs-up"></span></button>
                                <button style={{backgroundColor: option.disliked? "#4daf6a" : "grey"}} id={option.id} type = "button" className = "btn btn-default" onClick={boundDislikeClick}><span className = "glyphicon glyphicon-thumbs-down"></span></button>
                              </td>
                              <td>
                                <input type = "text" size = "30" />
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