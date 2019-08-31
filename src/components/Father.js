import React from 'react';
import Son from './Son'

class Father extends React.Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div>
                <Son sonStatus={this.props.fatherStatus}/>
            </div>
         );
    }
}
 
export default Father;