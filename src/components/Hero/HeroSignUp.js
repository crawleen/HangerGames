import React from "react";

const HeroSignUp = (props) => (
    <div className = "hero-profile transparent" style = {{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
    </div>
);

export default HeroSignUp;