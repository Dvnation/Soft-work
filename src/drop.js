// import { useState } from "react";

// import  Screen  from '../Screen'

import {  useEffect, useRef, useState } from "react";
import ButtonIndex from "./Buttons";
function Screen({props , number} ){
  
  let  [num, setNum] = useState("enter a number")
  let [result, setResult] = useState("")



  const Eval = ()=>{
    if (num.includes("+") || num.includes("-") || num.includes("/") || num.includes("*"))
     {

    //  setResult (result = eval(num) )
     localStorage.clear("number")
     setResult(result = eval(num))
     localStorage.setItem("result", result)
   
    console.log(result);
  }
else{     setResult(result = num )
}}


// if(Btnvalue()){
// alert("yes")
// }
// }

  const clear =()=>{
    setNum(num="0")
    localStorage.removeItem("number")
  }

  const ON =()=>{
    setNum(num="enter a number")
  }
 
function Btnvalue(e){  
  
//   const paradox=()=>{
//     alert(BTN.current.innerHTML)
// }
  setNum(num = e.target.innerHTML)
  
 localStorage.getItem("number", "") 
let food = JSON.parse(localStorage.getItem("number") || "[]");
  food.push(num);
  localStorage.setItem("number", JSON.stringify(food))
  console.log(food);

 let plans = food
setNum(num = plans.join(''))
  console.log(num);
  console.log(plans);
  

  
 
  }

  


    return(
    <> <div>
        <input type = "text" className="input-glass" value={num} onChange={(e)=>{setNum(e.target.value)}} readOnly={false}></input>
   <ButtonIndex click = {Btnvalue} clear={clear} ON={ON} Eval= {Eval}/>
   
      </div>


</>
)
    }
     
    export default Screen


 