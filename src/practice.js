import { useState, useEffect, useRef } from "react";

export function Appnet() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(5);
  
    useEffect(() => {
      count.current = count.current + 1;
    });
  
    return (
      <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
      </>
    );
  }


  
 export function Appcom() {
    const inputElement = useRef();
  
    const focusInput = () => {
      inputElement.current.focus();
    };
  
    return (
      <>
        <input type="text" ref={inputElement} />
        <button onClick={focusInput}>Focus Input</button>
      </>
    );
  }

  export const Counts = ()=>{
    const [figure, SetFigure] = useState(0)
    const cancel = ""
    const five = ()=>{
      for (let i = 0; i < 5; i++) {
SetFigure(prevFigure => prevFigure + 5)
      }
    }
return(
  <div>
    <button onClick={()=> SetFigure(figure + 2)}>CLICK </button>
    <button onClick={()=> SetFigure(prevFigure => prevFigure * 10)}>Reduce</button>
    <button onClick={()=> SetFigure(figure - figure)}>Reset</button>
    <button onClick={()=> SetFigure(figure + 5)}> by five</button>
    <button onClick={five}>five</button>
    <input type= "text" value = {figure}></input>
  </div>
)
  }


 export const FixName = ()=>{
    const [name, SetName]= useState({FirstName : "", LastName : ""})
    const Changer = (e)=>{
      SetName(name.FirstName = e.target.value)
    }

    return(
    <div>
    
      <input type = "text" value = {name.FirstName} onChange = {e=> SetName({...name, FirstName : e.target.value})}></input>
 {/* in the name object just change the firstname; useState unlike setstate cannot change all the values at once, hence the need for a destructuring */}
 <input type = "text" value = {name.LastName} onChange = {(e)=> SetName({...name , LastName : e.target.value})}></input>
 <div>my name is {name.FirstName}</div>
 <div>my name is {name.LastName}</div>

  </div>
      )
  }

  export const Gender = ()=>{
    const [att, SetAtt] = useState([])
    
    return(
      <div>
      <button onClick={SetAtt({...att , att : "crime"})}>Check</button>
    <ul> { att.map(item => (
       <li>{item}</li>))}
        </ul>
        </div>
    )
  }