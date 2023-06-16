import React from 'react'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


export default class Button extends React.Component{
    constructor(props){
        super(props)
        this.state = {color : "red"}
    }

    clicked = () =>{
        return this.setState({color: "blue"})
    }

    render(){
        return(<>
        
            <div>
                <h1>Lets do this</h1>
                <h1>I love {this.state.color}</h1>
                <button type = "button"  onClick = {this.clicked}>Click Me</button>
            </div>
        </>
           
        )
    }
}



 export function Cadro(props){
    const fruit =  props.fruits
 const Mylist =    fruit.map(function Mylist(items,index){

      
    return  <li key={index}>{items.type}</li>

    }
 )

    return(

        <div>

<ul>{Mylist} </ul>
    
      </div>
    
 )

 
}
export const fruit = [
  { id: 2, type:'mango'}, 
   { id:1, type: 'rice'}
]





export class Converter extends React.Component {
    constructor(props) {
      super(props)
      this.state = { currency: '€' }
    }
    
    handleChangeCurrency = event => {
      this.setState({ currency: this.state.currency === '€' ? '$' : '€' })
    }
    
    render() {
      return (
        <div>
          <Display currency={this.state.currency} />
          <CurrencySwitcher
            currency={this.state.currency}
            handleChangeCurrency={this.handleChangeCurrency}
          />
        </div>
      )
    }
  }
  
  const CurrencySwitcher = props => {
    return (
      <button onClick={props.handleChangeCurrency}>
        Current currency is {props.currency}. Change it!
      </button>
    )
  }
  
  const Display = props => {
    return <p>Current currency is {props.currency}.</p>
  }




  
  export class BlogPostExcerpt extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
      )
    }
  }
  
  BlogPostExcerpt.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
  }
  
  


 export class Input extends React.Component{
    constructor(props){
        super(props)
       this.handleOninput = this.handleOninput.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)

       this.state = {value : ""}
    }
handleOninput = (event)=>{
    this.setState({value : event.target.value})
    event.target.value.length == 10 ? alert(event.target.value)  :   this.setState({value : event.target.value})
}

     handleSubmit = (event) =>{
        alert(this.state.value)
         event.preventDefault()
           }

        

 

render(){
    return ( 
    <div>
        <SomeComponent/>
    <FileInput/>
        <form onSubmit={this.handleSubmit}>
<input type = "text"  value = {this.state.value} onInput = {this.handleOninput} onChange= {this.handleOnchange}/>

<input type = "submit" />
        </form>
        </div>
    )
}

}


class FileInput extends React.Component {
    constructor(props) {
      super(props)
      this.curriculum = React.createRef()
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(event) {
      alert(this.curriculum.current.files[0].name)
      event.preventDefault()
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="file" ref={this.curriculum} />
          <input type="submit" value="Submit" />
        </form>
      )
    }
  }


  class SomeComponent extends React.Component {

        
 handleClick = (event) =>{
    alert("way")
    
    }
    
    render() {
      return <button ref={el => (this.button = el)} onClick= {this.handleClick}  />
    }
  }

 export class Parent extends React.Component {
    constructor(props) {
      super(props)
      this.state = { name: 'Flavio', age: 35 }
    }
    
    render() {
      return (
        <div>
          <p>Test</p>
          {this.props.someprop1(this.state.name)}
          {this.props.someprop2(this.state.age)}
        </div>
      )
    }
  }
  
  const Children1 = props => {
    return <p>{props.name}</p>
  }
  
  const Children2 = props => {
    return <p>{props.age}</p>
  }
  
 export const Appk = () => (
    <Parent
      someprop1={name => <Children1 name={name} />}
      someprop2={age => <Children2 age={age} />}
    />
  )
  

// export const CounterWithNameAndSideEffect = () => {
//   const [count, setCount] = useState(0)
//   const [name, setName] = useState('Flavio')
  
//   useEffect(() => {
//     console.log(`Hi ${name} you clicked ${count} times`)
//   })
  
//   return (
//     <div>
//       <p>
//         Hi {name} you clicked {count} times
//       </p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       <button onClick={() => setName(name === 'Flavio' ? 'Roger' : 'Flavio')}>
//         Change name
//       </button>
//     </div>
//   )
// }
//   // ReactDOM.render(<App />, document.getElementById('app'))


//  export const Workout = ()=>{
   
//     let  [input, setInput] = useState(" ")

//   let inputHandler = (event)=>{
//     setInput(input = event.target.value)
//    } 

//    let [model, setModel] = useState({
//     brand: input, size:" ", color: ' ', type: " "
//   })

//   const prevCountRef = useRef();


//    let submitHandler = ()=>{
//     setModel(model.brand = input)
//    alert(`the previous  value was ${model.brand}  the new value is ${prevCountRef.Workout}`) 
//    }
    
// return(
// <div>
//   <form onSubmit={submitHandler}>
// Brand : <input type= "text" value= {input}  onInput = {inputHandler}>
// < /input>
// <input type= "submit"/>

// </form>
// </div>

// )}



export const CounterWithNameAndSideEffectss =() => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Flavio')

  useEffect(() => {
    console.log(`Hi ${name} you clicked ${count} times`)
  })

  return (
    <div>
      <p>
        Hi {name} you clicked {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setName(name === 'Flavio' ? 'Roger' : 'Flavio')}>
        Change name
      </button>
    </div>
  )
}

export function Counter() {
  const [count, setCount] = useState(0);
//the useRef Hook allows you to persist data between renders
  const prevCountRef = useRef();
  useEffect(() => {
    //assign the ref's current value to the count Hook
    prevCountRef.current = count;
  }, [count]); //run this code when the value of count changes
  return (
    <h1>
      Now: {count}, before: {prevCountRef.current}
      {/*Increment  */}
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </h1>
  );
}

