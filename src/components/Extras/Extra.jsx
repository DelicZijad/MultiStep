import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Extra = (props) => {
    const {id,price,type,desc,billing,addExtra,removeExtra}=props
    const [picked,setPicked]=useState(false);
    const [checked,setChecked]=useState(false);
    const value=useMemo(()=>{
        return{
            type:type,
            price:price
        }},[type,price])
    const checkingHandler=(e)=>{
        setPicked(e.target.checked)
        setChecked(e.target.checked)
    }
    const pickHandler=()=>{
        setPicked(prev=>!prev)
        setChecked(prev=>!prev)
    }
    useEffect(()=>{
        if(picked)addExtra(value)
      else removeExtra(value)
    },[picked])
    
  return <div onClick={pickHandler} className={`extra ${picked && 'bdr2-PurplishBlue bg-Alabaster' ||'bdr2-LightGray'}`}>
    <div className="extra--main">
        <input checked={checked} onChange={checkingHandler}  type="checkbox" name={`pickExtra${id}`} id={`pickExtra${id}`} />
        <div>
            <label onClick={pickHandler} className="fs-300 fw-semi clr-MarineBlue" htmlFor={`pickExtra${id}`}>{type}</label>
            <label onClick={pickHandler} className="fs-200 clr-CoolGray" htmlFor={`pickExtra${id}`}>{desc}</label>
        </div>
    </div>
    <button className="extra--price clr-PurplishBlue">{`+$${price}/${billing==='monthly' && 'mo' || 'yr' }`}</button>
  </div>;
};

export default React.memo(Extra);
