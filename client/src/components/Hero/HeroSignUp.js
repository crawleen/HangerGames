import React from "react";

const HeroSignUp = (props) => (
    <div className = "hero-profile transparent" style = {{ backgroundImage: `url(https://images.pexels.com/photos/349608/pexels-photo-349608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)` }}>
        {props.children}
    </div>
);

export default HeroSignUp;