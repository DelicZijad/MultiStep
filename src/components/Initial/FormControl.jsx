import React from "react";

const FormControl = (props) => {
    const {id,errorTxt,placeholder,func,label,valid,init}=props
  return <div className="initialForm--control">
     <label
      htmlFor={id}
       className="clr-MarineBlue initialForm--label">{label}</label>
     <input 
     onChange={func}     
     onBlur={func}
      type="text" 
      id={id}
       className={`clr-MarineBlue fw-semi fs-400 initialForm--input ${init && 'bdr2-LightGray' || valid && 'bdr2-LightGray' || 'bdr2-StrawberryRed'}`}
       placeholder={placeholder}/>
     <small className={`initialForm--error clr-StrawberryRed fw-semi ${init && 'hide'|| valid &&'hide'}`}>{errorTxt}</small>
     </div>
;
};

export default FormControl;
