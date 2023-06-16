import { useState } from "react"
// import { Template } from "webpack"
//import './calculator.css'


export default function Glass(){
    const [val, setVal] = useState(0)

const onChangeHandler = (event)=>{
    setVal(val = event.target.value )
}
return(
    <div>
        <Buttons/>
        <input className='input-glass' type= 'text' value= {val} onChange={onChangeHandler}></input>
    </div>
)
}


export function Buttons(){
    return(
        <div className="buttons-layout">
       <button className="number">0</button >  
       <button className="number">1</button >  
       <button className="number">2</button >  
       <button className="number">3</button >  
       <button className="number">4</button >  
       <button className="number">5</button>  
       <button className="number">6</button >  
       <button className="number">7</button >
       <button className="number">8</button>  
       <button className="number">9</button>  

        
        
        </div>



    )
}