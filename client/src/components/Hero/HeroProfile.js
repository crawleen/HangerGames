import React from "react";

const HeroProfile = (props) => (
    <div className = "hero-profile transparent" style = {{ backgroundImage: `url(${props.backgroundImage})` }}>
        {props.children}
    </div>
);

export default HeroProfile;