import React from "react";

const Step = (props) => {
    const {number,text,step}=props
  return   <div className="step">
        <div className={`step--number fw-semi fs-400  bdr1-White clr-White ${step===number && 'bg-LightBlue clr-Black bdr1-Black'}`}>{number}</div>
        <div className="step--desc">
            <h3 className="fs-200 fw-regular clr-PastelBlue">STEP {number}</h3>
            <h2 className="fs-300 fw-semi clr-White step--extra">{text}</h2>
        </div>
        </div>
}
;

export default Step;
