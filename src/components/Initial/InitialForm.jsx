import React ,{useState,useEffect} from "react";
import FormControl from "./FormControl";
import useForm from "./useForm";

const InitialForm = (props) => {
 const{value:enteredName,valueInputHandler:nameInputHandler,valueValid:enteredNameValid,valueInit:enteredNameInit} = useForm(value=>value.trim()!=='')

 const{value:enteredEmail,valueInputHandler:emailInputHandler,valueValid:enteredEmailValid,valueInit:enteredEmailInit} = useForm(value=>value.includes('@'))

 const{value:enteredPhone,valueInputHandler:phoneInputHandler,valueValid:enteredPhoneValid,valueInit:enteredPhoneInit} = useForm(value=>value.trim().length>5 &&!/\D/g.test(value.trim()))

useEffect(()=>{
props.onFormValid(enteredEmailValid && enteredNameValid && enteredPhoneValid)
},[enteredEmailValid,enteredNameValid,enteredPhoneValid])

  return <form className="initialForm">
    <FormControl
    id="enteredName"
    func={nameInputHandler}
    placeholder="e.g. Stephen King"
    errorTxt='This field is required'
    label='Name'
    valid={enteredNameValid}
    init={enteredNameInit}
     />
    <FormControl
    id="enteredEmail"
    func={emailInputHandler}
    placeholder="e.g. StephenKing@lorem.com"
    errorTxt='Invalid Email'
    label='Email Address'
    valid={enteredEmailValid}
    init={enteredEmailInit}
     />
    <FormControl
    id="enteredPhone"
    func={phoneInputHandler}
    placeholder="e.g. +1 234 567 890"
    errorTxt='Invalid Phone number'
    label='Phone Number'
    valid={enteredPhoneValid}
    init={enteredPhoneInit}
     />
     
     
  </form>;
};

export default InitialForm;
