import React, { PureComponent } from 'react'

const Xiao1=(props) =>{

  return (
    <div>
       <h1>{props.xiao1Status.time}</h1>
       <h1>{props.xiao1Status.weather}</h1>
       <h1>{props.xiao1Status.colour}</h1>
    </div>
   )
    
} 

export default Xiao1;