import react,{ useState,useEffect } from 'react'
import './App.scss'
import Forms from './components/Forms'
import StepNav from './components/Steps/StepNav'
import Btns from './components/Btns'
function App() {
const [step,setStep]=useState(1)
const [formValid,setFormValid]=useState(false)
const [billing,setBilling]=useState('monthly')
const [plan,setPlan]=useState('Arcade')
const [price,setPrice]=useState(0)
const [extras,setExtras]=useState([])
const [totalPrice,setTotalPrice]=useState(0)
const [confirmed,setConfirmed]=useState(false)
useEffect (()=>{
  setPrice(billing==='monthly' && (plan==="Arcade" && 9 || plan==='Advanced' && 12 || plan==='Pro' && 15) || 
 billing==='yearly' && (plan==="Arcade" && 90 || plan==='Advanced' && 120 || plan==='Pro' && 150))
},[billing,plan])
useEffect(()=>{
  setTotalPrice(price + extras?.reduce((acc,curr)=>acc+curr.price,0))
},[price,extras])

useEffect(()=>{
  if(step===3)setExtras([])
},[step])

 const billingHandler=()=>{
  setBilling(prev=>{
    if(prev==='monthly')return 'yearly'
    else return 'monthly'
  })
 }

const formValidHandler=(condition)=>{
  setFormValid(condition)
}
const planHandler=(e)=>{
  setPlan(e.target.id)
}
const increaseStepHandler=()=>{
  setStep(prev=>prev+1)
}
const decreaseStepHandler=()=>{
  setStep(prev=>prev-1)
}
const addExtra=(value)=>{
  setExtras(prev=>!prev.includes(value) && [...prev,value])
}
const resetHandler=()=>{
  setStep(2)
}
const  removeExtra=(value)=>{
  setExtras(prev=>{
    const index=prev.indexOf(value)
  return prev.filter((item,i)=>i!==index)
   } )
}


  return (
    <div className="App .fs-app bg-Magnolia">
     <main className="content">
    <StepNav step={step}/>
    <div className='content--wrapper'>
      <Forms step={step}
      setStep={setStep}
       onFormValid={formValidHandler}
       billingHandler={billingHandler}
       billing={billing}
       planHandler={planHandler}
       plan={plan}
       addExtra={addExtra}
       removeExtra={removeExtra}
       price={price}
       totalPrice={totalPrice}
       extras={extras}
       confirmed={confirmed}
       resetHandler={resetHandler}
        />
     {!confirmed && <Btns  step={step}
     formValid={formValid}
     increaseStep={increaseStepHandler}
     decreaseStep={decreaseStepHandler}
     setConfirmed={setConfirmed}
     /> } 
    </div>
  </main>
    </div>
  )
}

export default App
