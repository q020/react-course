import React, { Component } from 'react';
import Son, { Component} from './Son'

class Father extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div>
                <Son sonStatus= {this.props.fatherStatus}/>
            </div>
         );
    }
}
 
export default Father;