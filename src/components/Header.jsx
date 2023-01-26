import React from "react";

const Header = (props) => {
    const {title,txt}=props
  return <div className="forms--header">
    <h1 className="fs-heading-primary fw-semi clr-MarineBlue">{title}</h1>
    <h2 className="fs-400 clr-CoolGray">{txt}</h2>
  </div>;
};

export default Header;
