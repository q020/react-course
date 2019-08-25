import React, {Component } from 'react'
import Xiao1 from './Xiao1'

class Xiao extends Component {//有状态

    constructor(props) {
        super(props); 
    }
    
    render(){
        return(
            <div>
               <Xiao1  xiao1Status= {this.props.xiaoStatus}/>
            </div>
        )
        
    }
}   

export default Xiao;