import React from "react";
import "./Hero.css";

const HeroProfile = (props) => (
    <div className = "hero-profile transparent" style = {{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
    </div>
);

export default HeroProfile