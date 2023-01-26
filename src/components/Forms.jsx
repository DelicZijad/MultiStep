import React from "react";
import Extras from "./Extras/Extras";
import Header from "./Header";
import InitialForm from "./Initial/InitialForm";
import Plans from "./Plans/Plans";
import Summary from "./Summary";
import FinalMessage from './FinalMessage'
const Forms = (props) => {
  const {step,setStep,onFormValid,billingHandler,billing,planHandler,plan,addExtra,removeExtra,price,totalPrice,extras,confirmed,resetHandler}=props
  return <section className="forms bg-White">
   {step===1 && <>
   <Header title={'Personal Info'} txt={'Please provide your name, email address, and phone number.'} />
   <InitialForm  onFormValid={onFormValid}/></> } 
   {step===2 && <>
   <Header title={'Select your plan'} txt={' You have the option of monthly or yearly billing.'} />
   <Plans 
   billingHandler={billingHandler}
   billing={billing}
   planHandler={planHandler}
    plan={plan}
   /></> } 
   {step===3 && <>
   <Header title={'Pick add-ons'} txt={' Add-ons help enhance your gaming experience.'} />
   <Extras
      billing={billing}
      addExtra={addExtra}
      removeExtra={removeExtra}
        
   /></> } 
   {step===4 && !confirmed && <>
   <Header title={'Finishing up'} txt={'Double-check everything looks OK before confirming.'} />
   <Summary
      billing={billing}
      plan={plan}
      setStep={setStep}
      price={price}
      totalPrice={totalPrice}
      extras={extras}
      resetHandler={resetHandler}
   /></> } 
{confirmed && <FinalMessage/>}
  </section>;
};

export default Forms;
