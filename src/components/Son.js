import React, { Component } from 'react'
import Grandson, { Component} from './Grandson'

class Son extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (  
            <div>
                <Grandson grandsonStatus= {this.props.sonStatus}/>
            </div>
        );
    }
}
 
export default Son;