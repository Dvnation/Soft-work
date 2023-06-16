import axios from 'axios'
import {useEffect, useRef, useState} from 'react'
import './Part3.css'
import { Input } from './work'

const bake2 = {
    coursename:"e.g. ANA 301",
    test:"your test score",
    exam:"your exam score",
    agg:"your agg",
    grade:"your grade",
    check:true,
    type: "text",
    courseload: "units for each course",
    valve: "no",
    confirm: false
    
}
    
export function Parts() {
   const testRef2 = useRef(null)
   const examRef2 = useRef(null)
   const aggRef2 = useRef(null)
   const courseloadRef2 = useRef(null)
   const gradeRef2 = useRef(null)
   const alphaRef2 = useRef(null)
   const courseRef2 = useRef(null)
   const delRef = useRef(null)
   const checkRef = useRef(null)


const [run, setrun] = useState([])
    
    const [tab2, setTAB2] = useState([bake2])
    const [coursed2,setcoursed2] = useState([])
    const [grades2,setgrades2] = useState([])

    useEffect (()=>{
courseRef2.current.focus()
}
    , [courseloadRef2])

    function handler(e) {
        if (e.code == "Enter") {
            const rowss2 = {
                check: false,
                type: "number",
                confirm: true
             
               }
            setTAB2([...tab2, rowss2])
            
       }

    }
  


const dam = (index)=>{
// aggRef2.current.value = tab2[index].test + tab2[index].course
    // console.log(sessionStorage.getItem(sessionStorage.key(index)));
    if(index && testRef2.current.value!== "your test score" && courseRef2.current.value!== "units for each course" && testRef2.current.value!=="" && examRef2.current.value!=="" && examRef2.current.value!=="your exam score")
    sessionStorage.setItem(index, parseInt(testRef2.current.value)  + parseInt(examRef2.current.value))
    aggRef2.current.value = sessionStorage.getItem(index)
  
        // console.log(sessionStorage.key(index));

console.log(checkRef.current.index);
}



useEffect(()=>{
    sessionStorage.clear()
},[])

const deleter = (index)=>{
    if (index){
        sessionStorage.removeItem(index)
console.log(testRef2.current.value);
    }
   


   


    // console.log(tab2[index].test);
// setTAB2([...tab2, tab2[index].test = ""])


}

const sum = ()=>{
    const reducer = (accumulator, currentvalue) => parseInt(accumulator) +  parseInt(currentvalue) 
  const  AggVal = coursed2.reduce(reducer)
   const  CourseVal = grades2.reduce(reducer)
   const GP = parseFloat(parseFloat(AggVal) / parseFloat(CourseVal)).toFixed(2)
    alert("your g.p. is " + " " +  GP  + " " + "with a total courseload of" + " " + CourseVal + " " + "and an aggregate of" + " "+ parseFloat(AggVal))
setrun(...run , CourseVal)
console.log(CourseVal);

}


// const calms =(e)=>{
//     async function came(){

//     const promise = new Promise((resolve, reject) => {
//         if(examRef2.current.value != " your exam score" && examRef2.current.value.length > -1 && examRef2.current.value.length <3){
// setTimeout(() => {
//     resolve(e.target.value )

// }, 1000);
//      }} ) 
// const examVal = await promise

// setTimeout(() => {
//     aggRef2.current.value = parseFloat(parseFloat(examVal) + parseFloat(testRef2.current.value)).toFixed(1)
   

//   if(courseloadRef2.current !==" " ){
//       setgrades2([...grades2, courseloadRef2.current.value])
//       console.log(grades2);
//   }



// }, 900); 
// const grader = new Promise((resolve, reject) => {
//     resolve (setTimeout(() => {
//         if(aggRef2.current.value > -1 && aggRef2.current.value < 45  ){
//             gradeRef2.current.value = "F"
           
            
//                 }
//         else if(aggRef2.current.value >44 && aggRef2.current.value < 50){
//     gradeRef2.current.value = "D"
//         }
//         else if(aggRef2.current.value > 49 && aggRef2.current.value< 60){
//     gradeRef2.current.value = "C"
//         }
//         else if (aggRef2.current.value > 59 && aggRef2.current.value < 70){
//     gradeRef2.current.value = "B"
//         }
//         else if (aggRef2.current.value > 69 && aggRef2.current.value < 101){
//     gradeRef2.current.value = "A"
//         }
//     }, 1000))
// })

// const Waiter = await grader
// setTimeout(() => {
//     const [F,D,C,B,A] = [1,2,3,4,5]
    
//     if(gradeRef2.current.value == "F"){
//         setcoursed2([  ...coursed2,  F * courseloadRef2.current.value]);

//     }
//     if(gradeRef2.current.value == "D"){
//         setcoursed2([  ...coursed2,  D * courseloadRef2.current.value]);

//     }
//     if(gradeRef2.current.value == "C"){
//         setcoursed2([  ...coursed2,  C * courseloadRef2.current.value]);

//     }
//     if(gradeRef2.current.value == "B"){
//         setcoursed2([  ...coursed2,  B * courseloadRef2.current.value]);

//     }
//     if(gradeRef2.current.value == "A"){
//         setcoursed2([  ...coursed2,  A * courseloadRef2.current.value]);

//     }
// }, 1000);
// }
// came()

// }


 <div>{"div"}</div>
    return (
<>

        <div className="Part2">


            <table>

                <thead>

                    <tr>
                       <th>2nd SEMESTER COURSES</th>
                       <th>COURSE UNIT</th>
                        <th>TEST</th>
                        <th>EXAM</th>
                        <th>AGG</th>
                        <th>GRADE
                        </th>
                    </tr>
                </thead>

                <tbody>

       
 {tab2.map((valued,index)=>{
    return(   
        <> 
        <tr key={index} ref = {checkRef}>
            <td><input  value= {valued.coursename} ref = {courseRef2} onKeyDown={handler}  onChange={(e)=> e.target.value}  autoFocus ={valued.confirm} /></td>
            <td><input  value= {valued.courseload}  ref={courseloadRef2} onKeyDown={handler}  onChange={(e)=> e.target.value} /></td>
            <td><input value = {valued.test} ref = {testRef2} type= {valued.type} onKeyDown={handler} onChange = {(e)=> e.target.value} /></td>
            <td><input value = {valued.exam} ref = {examRef2} type= {valued.type} onInput={()=>dam(index)} onChange={(e)=>  e.target.value}  onKeyDown={handler}/></td>
            <td><input value = {valued.agg}  ref = {aggRef2} type= {valued.type} readOnly = {true}  onKeyDown={handler} ></input></td>
            <td><input value = {valued.grade} ref = {gradeRef2} onChange={(e)=> valued.grade= e.target.value}     onKeyDown={handler}/> </td>  
      <td> <button onClick={deleter} ref ={delRef} >X</button>   </td>
        </tr>

        </>
        
       )

 })}

                </tbody>
                
                
                

            


                


 </table>






 <button className='initiate' onClick={sum}>SUM</button>
 <input value = {run} onChange = {(e)=> e = 54}  />
 <div>
 <h5>some more task
    <p>connect with my sql</p>
    <p>styling, github and deploy</p>
 </h5>

 </div>





 
        </div>
        




</> )
}


