import { useEffect, useRef, useState } from "react"
import React from "react";
import axios from "axios";


const Parent= React.forwardRef((props, ref)=> {

  
const change = (e)=> {
 return   e.target.value
}
   
    return(
        <>
        {/* <input type="text"  value = "kk" onChange={change} ref= {ref}/> */}
        <button ref = {ref}>fff</button>
        </>
    )
})

export default Parent

 export const Calm = ()=> {
const [posts, setPosts] = useState([])
const ll = "long"
useEffect(
    
    ()=>{
        alert("fe")
        axios.get('https://jsonplaceholder.typicode.com/posts' )
        .then(res=> {
            alert(res)  })
        .catch(err =>{
            console.log(err);
        })
    }, []
)
return(
    <div>
        <ul>
            {
                posts.map(post=> <li key={post.id}>{post.title}</li>)
            }
        </ul>

        {alert(ll)}
    </div>
)

}