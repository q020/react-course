<<<<<<< HEAD
import React, {Component } from 'react'
import Xiao1 from './Xiao1'

class Xiao extends Component {//有状态
=======
import React, {PureComponent } from 'react'
import Xiao1 from './Xiao1';
>>>>>>> 967b88f07f0942a2ec84cb026935fca69e499db8

class Xiao extends PureComponent {//有状态,PureComponent optimizes the performane
       
    constructor(props) {
<<<<<<< HEAD
        super(props); 
=======
        super(props); // get the props from parents
>>>>>>> 967b88f07f0942a2ec84cb026935fca69e499db8
    }
    
    render(){
        // console.log(`props in Xiao is: ${this.props.status}`)

        const data = {
            number: 2,
            date: '2018-8',
            name: 'Xiao'
        }

        return(
            <div>
<<<<<<< HEAD
               <Xiao1  xiao1Status= {this.props.xiaoStatus}/>
            </div>
=======
               <Xiao1 xiaoStatus={this.props.appStatus}/>
             </div>
>>>>>>> 967b88f07f0942a2ec84cb026935fca69e499db8
        )
        
    }
}   

export default Xiao;