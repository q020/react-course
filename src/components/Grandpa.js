import React from 'react';
import Father from './Father'

class Grandpa extends React.Component{
    constructor(props) {
        super(props);
    
    }

    render() { 
       
        return ( 
            <div>
                <Father fatherStatus={this.props.grandpaStatus}/>
            </div>
         );
    }
}

export default Grandpa;
