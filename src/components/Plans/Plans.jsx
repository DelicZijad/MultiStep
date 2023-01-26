import React from "react";
import Plan from "./Plan";
import arcade from '../../assets/icon-arcade.svg'
import advanced from '../../assets/icon-advanced.svg'
import pro from '../../assets/icon-pro.svg'
const Plans = (props) => {
    const {billingHandler,billing,planHandler,plan}=props
  return <section className="plans">
    <div className="plans--wrapper">
    <Plan 
    src={arcade} 
    type={'Arcade'}
    billing={billing}
    planHandler={planHandler}
      plan={plan}
    />
    <Plan src={advanced}
    type={'Advanced'}
    billing={billing}
    planHandler={planHandler}
      plan={plan}
     />
    <Plan src={pro}
    type={'Pro'}
    billing={billing}
    planHandler={planHandler}
      plan={plan}
     />
    </div>
  <div className="plans--modes bg-Magnolia">
   <h4 className={`fs-300 fw-semi ${billing==='monthly'&& 'clr-MarineBlue fw-bold' ||'clr-CoolGray'}`}>Monthly</h4>
   <button
   onClick={billingHandler}
    className={`plans--toggle bg-MarineBlue ${billing==='yearly' && 'yearly'}` }>
     <div className="bg-White"></div>
   </button>
   <h4 className={`fs-300 fw-semi ${billing==='yearly'&& 'clr-MarineBlue fw-bold' ||'clr-CoolGray'}`}>Yearly</h4>
  </div>
  </section>;
};

export default Plans;
