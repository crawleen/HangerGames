import React from "react";

const Hero = (props) => (
    <div className = "hero scale-down" style = {{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
    </div>
);

export default Hero;