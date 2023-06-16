import axios from 'axios'
import {useEffect, useRef, useState} from 'react'
import './Calculate.css'
import { Input } from './work'
import { Part } from './part2'
import { Parts } from './part3'
const bake = {
    coursename:"e.g. ANA 301",
    test:"your test score",
    exam:"your exam score",
    agg:"your agg",
    grade:"your grade",
    check:true,
    type: "text",
    courseload: "units for each course",
    valve: "no",
    confirm: false,
    ember:"none"
    
}
 const  play = [] 
function Calculate() {
    const delRef = useRef(null)
   const testRef = useRef(null)
   const examRef = useRef({})
   const aggRef = useRef(null)
   const courseloadRef = useRef(null)
   const gradeRef = useRef(null)
   const alphaRef = useRef(null)
   const courseRef = useRef(null)
const comaRef = useRef(null)
const checkerRef = useRef(null)
const NextRef = useRef(null)



const [run, setrun] = useState([])
    
    const [tab, setTAB] = useState([bake])
    const [CourseLoadGradeProductEach,setCourseLoadGradeProductEach] = useState([])
    const [CourseLoadEach,setCourseLoadEach] = useState([])
    const [trial,setrial]= useState([])
    const [fan,setFan]= useState([])
    const [empty,setEmpty]= useState([])
    const [exp, setExp] = useState([])
    

    useEffect (()=>{
NextRef.current.focus()
alert("press the Enter key to fetch new row, press the enter key after filling each row to validate each value before pressing the sum button")
}
    , [courseloadRef])


const place = ()=>{



    
    if(CourseLoadGradeProductEach && courseloadRef.current.value!=="units for each course" && gradeRef.current.value!== "your grade"){
        setEmpty([...empty, CourseLoadGradeProductEach])
    }
    console.log(empty);
    console.log(CourseLoadGradeProductEach + "check");


    const rowss = {
        check: false,
        type: "number",
        confirm: true,
        ember: 'table-cell'
       }
    setTAB([...tab, rowss])


}



const sum = ()=>{

    async function Choke(){
const inker = new Promise((resolve, reject) => {
    if(courseloadRef.current.value!=="" && testRef.current.value!==""){
alert("PRESS THE ENTER KEY OR BUTTON THEN PRESS THE SUM BUTTON TO SUM UP VALUES")
NextRef.current.focus()
    }
})
await inker
    }
    
        if(courseloadRef.current.value =="" && testRef.current.value ==""){
            const reducer = (accumulator, currentvalue) => parseInt(accumulator) +  parseInt(currentvalue) 
            const  TotalCourseLoadGradeProduct = empty.reduce(reducer)
             const  TotalCourseVal = CourseLoadEach.reduce(reducer)
             const GP = parseFloat(parseFloat(TotalCourseLoadGradeProduct) / parseFloat(TotalCourseVal)).toFixed(2)
             console.log(GP);
             console.log(TotalCourseLoadGradeProduct);
             console.log(TotalCourseVal);

             alert("your g.p. is " + " " +  GP  + " " + "with a total courseload of" + " " + TotalCourseVal + " " + "and a total courseload-grade point product of" + " "+ parseFloat(TotalCourseLoadGradeProduct) )

        }
       
      Choke()  

    }

 

// const Palm=()=>{


//     const buttonRef = useRef(null)

//     useEffect(()=>{
//         const element = testRef.current
//         if(!element) return;

//         const handleB = (e)=>{
// if(e.code == "Backspace"){
// element.value = ""
// console.log(element.value);
// console.log(e.target.value);

// }
// if(e.target.value==""){
//     alert("gertyu")
//     }
//         }

//         element.addEventListener("keydown", handleB)
//         return ()=>{
//             element.removeEventListener("keydown", handleB)
//         }
//     },[ ])



// }

// useEffect(()=>{
    

//     checkerRef.current.addEventListener("focus", function focuss(){
// console.log("done");    })
// checkerRef.current.addEventListener("blur", function blurr(){
//     console.log("it is blur");
// })

// },[])

// useEffect(
//     ()=>{

//         const F = 1
//         async function play(){
// const ball = new Promise((resolve, reject) => {
//     resolve(gradeRef.current.value)
    
// })     
// await ball


// }

//         if(gradeRef.current.value == "F"){

//             console.log("jj");
//             setCourseLoadGradeProductEach([... CourseLoadGradeProductEach, F * courseloadRef.current.value])
//             console.log("zoo");
//         }

//     play()


//     },[courseRef]
// )




    
    const OnInputCourseload=()=>{


//         async function sound(){
// const attend = new Promise((resolve, reject) => {
//     if(courseloadRef.current.value !=="units for each course" && courseloadRef.current.value !=="" ){


        
// setInterval(() => {
//     resolve(courseloadRef.current.value)

// }, 300); }
        

// // setInterval(()=>{
// //     resolve(courseloadRef.current.value)
// // },2500)

    


    

    
//     else if(!courseloadRef.current.value ){
//         alert("fff")
//         resolve("")
//         }})
    
  


     
// await attend
// setCourseLoadEach([...CourseLoadEach, courseloadRef.current.value])
// console.log(CourseLoadEach);
// const reducers = (accumulator, currentvalue) => parseInt(accumulator) +  parseInt(currentvalue) 
// console.log(CourseLoadEach.reduce(reducers));


//          } 
  

// sound()

   }

 
//   const  save = pero{

//     setTimeout(() => {
//         if(testRef.current.value == ""){
//         testRef.current.value = "0"
//         aggRef.current.value = parseFloat(parseFloat(examVal) + parseFloat(testRef.current.value)).toFixed(1)
        
//         }
//         else if(testRef.current.value !==""){
//             aggRef.current.value = parseFloat(parseFloat(examVal) + parseFloat(testRef.current.value)).toFixed(1)
        
//         }
        
         
//            if(courseloadRef.current.value == ""){
//         courseloadRef.current.value = "0"
//         setCourseLoadEach([...CourseLoadEach, courseloadRef.current.value])
        
        
//           }
        
        
        
//         }, 900); 

//    }  


// async function scam (){
        
//     try{
//         if(examRef.current.value){
//         const bb=    testRef.current.value + examRef.current.value
//         aggRef.current.value = bb
//         }

//   console.log(testRef.current.value);
//     // const vv = await  examRef.current.value
//     // const kk = await testRef.current.value
    
//     // console.log(testRef.current.value);
//     // console.log(vv);
//     // aggRef.current.value = vv + kk
    
    
//     }
    
//     catch(error){
//     console.log(error +"is");
//     }
//     }
    
//     scam()

// useEffect(()=>{
function gazel(e) {

    if (examRef.current.value!== "") {
        setTimeout(() => {
            alphaRef.current.focus()
        }, 1000);
    }
    // async function scam (){
        
    //     try{
    //         if(examRef.current.value){
    //         const bb=     examRef.current.value + testRef.current.value
    //         aggRef.current.value = bb
    //         }

            

      
    //     // const vv = await  examRef.current.value
    //     // const kk = await testRef.current.value
        
    //     // console.log(testRef.current.value);
    //     // console.log(vv);
    //     // aggRef.current.value = vv + kk
        
        
    //     }
        
    //     catch(error){
    //     console.log(error +"is");
    //     }

    //     if(e.code == "Backspace"){
    //         alert("delete test value instead")
    //     }
    //     }
        
    //     // scam()

}
    
// },[testRef])




// function gazel(e, index){
//     // const fam = parseInt(testRef.current.value) + parseInt(examRef.current.value)
//     const fam = parseInt(testRef.current.value) + parseInt(examRef.current.value)

// if(  examRef.current.value!==" " && examRef.current.value != " your exam score"  && examRef.current.value.length > -1 && examRef.current.value.length <3 ){
// async function fun(){
//  const breaks = new Promise((resolve, reject) => {

     


//     resolve(fam)


//     console.log("slammm");
//     console.log(fam);
//     console.log(testRef.current.value);

//     testRef.current.addEventListener( "keydown", function ill(e){
//         if(e.code == "Backspace"){
//             reject(testRef.current.value)
//         }
//     }

//     )



//     })
//     const blank = await breaks
//     console.log(blank);

//         aggRef.current.value = blank
    



//     const grader = new Promise((resolve, reject) => {
//         resolve (setTimeout(() => {
//             if(aggRef.current.value > -1 && aggRef.current.value < 45  ){
//                 gradeRef.current.value = "F"
               
                
//                     }
//             else if(aggRef.current.value >44 && aggRef.current.value < 50){
//         gradeRef.current.value = "D"
//             }
//             else if(aggRef.current.value > 49 && aggRef.current.value< 60){
//         gradeRef.current.value = "C"
//             }
//             else if (aggRef.current.value > 59 && aggRef.current.value < 70){
//         gradeRef.current.value = "B"
//             }
//             else if (aggRef.current.value > 69 && aggRef.current.value < 101){
//         gradeRef.current.value = "A"
//             }
    
    
    
//         }, 1000))
//     })
    
    
    
//     await grader
//     setTimeout(() => {
//         const [F,D,C,B,A] = [1,2,3,4,5]
        
//                 if(gradeRef.current.value == "F" && courseloadRef.current.value !== "units for each course" ){
//                     setCourseLoadGradeProductEach([   F * courseloadRef.current.value]);
//     NextRef.current.focus()
    
    
    
    
    
//                 }
       
//         if(gradeRef.current.value == "D"){
//             setCourseLoadGradeProductEach([  D * courseloadRef.current.value]);
//             NextRef.current.focus()
    
//         }
//         if(gradeRef.current.value == "C"){
//             setCourseLoadGradeProductEach([  C * courseloadRef.current.value]);
//             NextRef.current.focus()
    
    
//         }
//         if(gradeRef.current.value == "B"){
//             setCourseLoadGradeProductEach([  B * courseloadRef.current.value]);
//             NextRef.current.focus()
    
    
//         }
//         if(gradeRef.current.value == "A"){
//             setCourseLoadGradeProductEach([  A * courseloadRef.current.value]);
//             NextRef.current.focus()
    
    
//         }
        
    
//     }, 1000);
     
    
//     }
    
    




// fun()

// }
// //     async function Came(){

// //     const promise = new Promise((resolve, reject) => {
// //         if(testRef.current.value !=="" && examRef.current.value != " your exam score" && examRef.current.value !==" " && examRef.current.value.length > -1 && examRef.current.value.length <3 ){
// // setTimeout(() => {
// //     resolve(examRef.current.value )
   
// // console.log("thio");


// // }, 500);
// // ;
 
// //  }
 
// //     } ) 

// //     const examVal = await promise

// // setTimeout(() => {
// // if(testRef.current.value == ""){
// // testRef.current.value = "0"
// // aggRef.current.value = parseFloat(parseFloat(examVal) + parseFloat(testRef.current.value)).toFixed(1)

// // }
// // else if(testRef.current.value !==""){
// //     aggRef.current.value = parseFloat(parseFloat(examVal) + parseFloat(testRef.current.value)).toFixed(1)

// // }

 
// //    if(courseloadRef.current.value == ""){
// // courseloadRef.current.value = "0"
// // setCourseLoadEach([...CourseLoadEach, courseloadRef.current.value])


// //   }



// // }, 900); 

// // if(delRef.current.addEventListener("click", function pop(){
// //     // reject(courseloadRef.current.value)
// //     gradeRef.current.value = " "
// //     testRef.current.value = ""
// //     testRef.current.readOnly= false
// //     testRef.current.addEventListener("change", function play(e){
// // testRef.current.value = ""
// // examRef.current.value = ""

// //     })

// // }) ){
// //     alert("llll")
// // }


// }

const barry =(e)=>{

    if(e.code=== "Backspace"){
        e.target.value =""
        examRef.current.value = ""


    //    const tell =  new Promise((resolve, reject) => {
    //     if(!e.target.value){
    //         resolve(e.target.value)

    //     }

        
    //     else{
    //         alert("ghg")
    //     }


        
    //     })


    }
    
}


const deleter= (index)=>{

if(index){
    tab.forEach(()=>{
        console.log(examRef.current.value);
            })
}

if(index){

   

   

    console.log(index[examRef.current.value]);
    console.log(examRef.current.value);
console.log(tab[index].course);
tab[index].course = ''
if(tab[index]){
alert("k ,this is " + index + examRef.current.value)
examRef.current.value = ""
    testRef.current.value = ""
    courseRef.current.value = "76"
}
    // tab[index].course = ""

// examRef.current.value= ""
// aggRef.current.value = ""
// courseloadRef.current.value = ""
// testRef.current.value = ""

 
    courseRef.current.focus()

}
   
   
}

function pp(){
const play = new Promise((resolve, reject) => {
    if(testRef.current.value!=="your test score" && examRef.current.value!== "your exam score" && testRef.current.value!=="" && examRef.current.value!==""){
        resolve(examRef.current.value)
        setTimeout(() => {
            aggRef.current.value = examRef.current.value + testRef.current.value
        }, 300);

    }

   
   

    
});
play.then(()=>{
 if(testRef.current== " "){
   
    alert("jjo")
 }
})



setTimeout(() => {
    NextRef.current.focus()
}, 100);


}
// async function play(){
// try{
// // if(testRef.current.value =="" && examRef.current.value == "" ){
// // return await testRef.current.value}
// if(examRef.current.value && testRef.current.value || !testRef.current.value){
//  await testRef.current.value
// }
// }
// catch{

// }

// }
// play()

const Yokowa = (e)=>{




    if(e.code === "Backspace" ){
        // alert("delete test value instead")

        // async function mash(){

// const volvo = new Promise((resolve, reject) => {
    
  
    // resolve(e.target.value)
  
//    gradeRef.current.value = ""
//    aggRef.current.value = ""

// })
// const hexagon = await volvo


// if(CourseLoadGradeProductEach!==""){
//     setCourseLoadGradeProductEach([CourseLoadGradeProductEach.splice(0,CourseLoadGradeProductEach.length)])
//     console.log(CourseLoadGradeProductEach+"rex");
// }

e.target.value =""

}}

const low =(readOnly)=>{
//     if(examRef.current.value==""){
// readOnly = false
//     }
//     else{
//         readOnly= true
//     }
}




   return (
<>
        <div className="Calculate">
<button  ref={comaRef}>THE ONLY WAY</button>

            <table>

                <thead>
                    <tr>
                       <th>1ST SEMESTER COURSES</th>
                       <th>COURSE UNIT</th>
                        <th>TEST</th>
                        <th>EXAM</th>
                        <th>AGG</th>
                        <th>GRADE
                        </th>
                    </tr>
                </thead>

                <tbody>

       
 {tab.map((valued, index)=>{


    return(   
        <> 

            
        <tr key={index}>
            <td><input  value= {valued.coursename} ref = {courseRef}    onChange={(e)=> valued.course= e.target.value}  autoFocus ={valued.confirm}  /></td>
            <td><input  value= {valued.courseload}  ref={courseloadRef}  onInput={OnInputCourseload} onChange={(e)=> valued.courseload= e.target.value} /></td>
            <td><input value = {valued.test} ref = {testRef}  onKeyUp={barry} onInput = {(e)=>e.target.value}  /></td>
            <td><input value = {valued.exam} ref = {examRef} type= {valued.type} onInput={(e)=> gazel()} readOnly={(readOnly)=>low()} onKeyDown={Yokowa} /></td>
            <td><input value = {valued.agg}  ref = {aggRef} type= {valued.type} readOnly = {true}   ></input></td>
            <td><input value = {valued.grade} ref = {gradeRef} onChange={(e)=> e.target.value}     /> </td>  
            <td><button ref={delRef} style={{display : valued.ember }} onClick={()=> (deleter(index))}>X</button></td>
            <td><button>CLEAR</button></td>
            <td><button ref = {alphaRef} onClick={pp}>cl</button></td>
        </tr>

        </>
        
       )

 })}

                </tbody>
                
                
                

            


                


 </table>






 <button className='initiate'  onClick={sum}>SUM</button>
 {/* <input type="text" ref={checkerRef}   onKeyUp={Yokowa} onChange={(e)=>e.target.value}/> */}
 {/* <input value = {run} onChange = {(e)=> e = 54}  /> */}

 <button ref={NextRef} onClick={place}>ENTERRRRR</button>
 <div>
 <h5>some more task
    <p>connect with my sql</p>
    <p>styling, github and deploy</p>
 </h5>

 </div>





 
        </div>
        

<Part />

</> )
}

export default Calculate

