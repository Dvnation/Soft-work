  

import React from 'react';

  
  export default class Man extends React.Component{
    constructor(props){
      super(props)  
    }

    render(){
        return <h6> i love nigeria my {this.props.color}</h6>
    }
}

