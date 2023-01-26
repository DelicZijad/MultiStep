import React,{useMemo} from "react";
import Extra from "./Extra";

const Extras = (props) => {
  const {billing,addExtra,removeExtra}=props
  const data=useMemo(()=>[{
    id:1,
  type:'Online service',
  desc:'Access to multiplayer games',
  price:billing==='monthly'&&  1 ||billing==='yearly' && 10
},
{
  id:2,
  type:'Larger storage',
  desc:'Extra 1TB of cloud save',
  price:billing==='monthly' &&  2 || billing==='yearly'&& 20
},
{
  id:3,
  type:'Customizable Profile',
  desc:'Custom theme on your profile',
  price:billing==='monthly'&&  2 ||billing==='yearly'&& 20
}],[billing])
  return <section className="extras">
    {data.map(item=>(
      <Extra 
      key={item.type}
      id={item.id}
      type={item.type}
      desc={item.desc}
      price={item.price}
      billing={billing}
      addExtra={addExtra}
       removeExtra={removeExtra}
      
      />
    ))}

  </section>;
};

export default Extras;
