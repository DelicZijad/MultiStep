import React from "react";

const Plan = (props) => {
    const {src,type,billing,planHandler,plan}=props
  return <div className={`${type===plan && 'highlighted bdr2-PurplishBlue bg-Magnolia' || 'bdr2-LightGray'} plan`}>
    <div className={`plan--overlay`} onClick={planHandler}  id={type}></div>
    <div className="plan--image">
        <img src={src} alt="plan logo..." />
    </div>
    <div className="plan--desc">
        <h2 className="fs-500 fw-semi clr-MarineBlue">{type}</h2>
        <h3 className="fs-300 fw-regular clr-LightGray">{
            type==="Arcade" && (billing==="monthly" && '$9/mo' || billing==='yearly' && '$90/yr') ||
            type==="Advanced" && (billing==="monthly" && '$12/mo' || billing==='yearly' && '$120/yr') ||
            type==="Pro" && (billing==="monthly" && '$15/mo' || billing==='yearly' && '$150/yr') 
            
        }</h3>
        {billing==='yearly' && <h4 className="fs-200 fw-regular clr-MarineBlue">2 months free</h4> }
    </div>
  </div>;
};

export default Plan;
