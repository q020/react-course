import React from 'react';
import Father from './Father'

const Example = props => {
    return (  
      <div>
        {props.data}
        <h3>为什么</h3>
      </div>
    );
}
   
class Grandpa extends React.Component{
    constructor(props) {
        super(props);
    }

    render() { 
       
        return ( 
            <div>
                <Father fatherStatus={this.props.grandpaStatus}/>
                <Example data='hello123'/>
            </div>
         );
    }
}


export default Grandpa; 
// {export default 只引出来出来一个}