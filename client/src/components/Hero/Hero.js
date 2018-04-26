import React from "react";

const Hero = (props) => (
    <div className = "hero transparent" style = {{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
    </div>
);

export default Hero;