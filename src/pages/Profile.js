import React from "react";
import HeroProfile from "../components/Hero/HeroProfile";
import "../components/Hero/Hero.css";

const Profile = () => (
    <div className = "container">
        <div id = "wrapper">
        <HeroProfile backgroundImage = "https://images.pexels.com/photos/616330/pexels-photo-616330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
            <br />
            <br />
            <h3 className = "profile-head">Your Hanger Games Profile</h3>
            <br />
            <br />
            <div className = "row">
                <div className = "col-md-12">
                    <h4>User: </h4>
                    <br />
                    <br />
                    <h4>Last Restaurant Visited: </h4>
                    <br />
                    <br />
                    <h4>Your Favorites List: </h4>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                     </ul>
                     <br />
                     <br />
                </div>
             </div>
         </HeroProfile>
        </div>
    </div>
)

export default Profile;