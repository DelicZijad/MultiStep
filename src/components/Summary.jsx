import React from "react";


const Summary = (props) => {
  const {billing,plan,setStep,price,totalPrice,extras,resetHandler}=props
  const gettingPrice=value=>{
    return `$${value}/${billing==='monthly' && 'mo' ||'yr'}`
  }
  return <>
  <section className="summary bg-Alabaster">
    <div className="summary--main">
      <div>
      <h2 className="fs-500 fw-semi clr-MarineBlue">{`${plan} (${billing})`}</h2>
      <button onClick={resetHandler} className="fs-400 clr-CoolGray" style={{textDecoration:'underline',cursor:'pointer'}}>Change</button>
      </div>
      <h4 className="fs-600 fw-bold clr-MarineBlue">{gettingPrice(price)}</h4>
    </div>
   
    {extras.map(extra=>{
      return (
        <div key={extra.type} className="summary--extra">
       <h2 className="fs-400 clr-CoolGray">{extra.type}</h2>
       <h3 className="fs-500 clr-MarineBlue">{`+${gettingPrice(extra.price)}`}</h3>
        </div>
      )
    })}
 
  </section >
    <div className="summary--total bg-White">
    <h2 className="fs-400 clr-CoolGray">{`Total (per ${billing==='monthly'&& 'month' || 'year'})`}</h2>
    <h3 className="fs-600 fw-bold clr-PurplishBlue">{gettingPrice(totalPrice)}</h3>
  </div>
  </>;
};

export default Summary;
