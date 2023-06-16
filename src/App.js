import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './work'
import {Buttons} from './way'
import Glass from './way'
import './calculator.css'
import Header from './componentss/Header';
import Screen from './componentss/Screen';
import ButtonIndex from './componentss/Buttons/layout';
import NumericButton from './componentss/Buttons/NumnericButton';
// import{ NumericButton} from './Screen'
import { Sample } from './sample';
// import { Appnet } from './practice';
// import { Appcom } from './practice';
import { Brain } from './componentss/Screen';
import Test from './testing'
import { Counts, FixName, Gender } from './practice';
import Calm from './check';
import { Deleted } from './check2';

const calm = [1,2,3,4,5]
export const userman = React.createContext()
  
function App({click}) {
    // const [click, setClick] = useState({name:"brown"})
 const play =    <NumericButton onClick= {click}/>

    return (
        
        <div className="wrapper">
        <div className='container'>
              <Header />
              <userman.Provider value = {play.props.onClick}>
              <Screen/>
              
              </userman.Provider>

               
                {/* <Parent/> */}
            </div>


            <Deleted/>

            
<Calm/>

        </div>
    );
}

export default App;
