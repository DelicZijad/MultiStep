import React from "react";
import src from '../assets/icon-thank-you.svg'
const FinalMessage = () => {
  return <section className="final">
    <div className="final--image">
        <img src={src} alt="" />
    </div>
    <h2 className="fs-700 clr-MarineBlue fw-semi">Thank You!</h2>
    <p className="final--message clr-CoolGray">Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
  </section>;
};

export default FinalMessage;
