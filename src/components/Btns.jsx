import React from "react";

const Btns = (props) => {
    const {step,formValid,increaseStep,decreaseStep,setConfirmed}=props
  return <div className="btns bg-White">
   {step>1 && <button onClick={decreaseStep} className="btns--back">Go Back</button>}
   {step<4 && <button onClick={increaseStep} disabled={!formValid} className="btns--next">Next Step</button>}
   {step===4 && <button onClick={()=>setConfirmed(true)} className="btns--confirm">Confirm</button>}
  </div>;
};

export default Btns;
