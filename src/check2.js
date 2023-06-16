
import Parent from "./check"
import React, { useState } from "react"
function Child(props){
 const scam =  React.createRef()
const clickHandle = (e)=>{
return console.log(scam.current.innerHTML); 
}
    return(
        <>
         <Parent ref = {scam}/>
        <button onClick={clickHandle}>CHECK UP </button>
        </>
       
    )   
}

export default Child;


export const Deleted = ()=>{
const [name, setName] = useState([
    {name:"brown", class:"4", id:1 },
    {name:"anita", class:"5", id:2 },
    {name:"cassy", class:"6", id:3 },
    {name:"bleak", class:"7", id:4 }

])
// console.log(name[0].id);
const [num, setNum] = useState(0)

const delhandle =(id)=>{
    const filters = name.filter(name=> name.id!==id)
    setName(filters)

}
const returnHan = ()=>{
    setNum(eval(num + 1))
    for (let i = 0; i < 5; i++) {
        // console.log(name[i].id);
        //if key is this then display the content of the object that has that particular key
        if(name[i].id == num ){
            console.log("play");
            console.log(num);
        }   
    }
    
    console.log(name);
}

return(
    <>
    <div>
        {name.map((names)=> 
        <div key={names.id}>{`my name is ${names.name}, i am in class ${names.class} `}  <button onClick={()=> delhandle(names.id)}>Delete</button>   </div>)}
    
    <button onClick={returnHan}>Return</button>
    </div>
    
    </>
)
}



const bible = ()=>{

    return 
}
