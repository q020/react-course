import React from 'react'
import Grandson from './Grandson'

class Son extends React.Component {
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