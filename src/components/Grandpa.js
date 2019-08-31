import React from 'react';
import Father from './Father'

class Grandpa extends React.Component{
    constructor(props) {
        super(props);
    
    }



    // componentWillMount() {
    //     console.log("Component will mount");    
    // }
    
    // componentDidMount() {
    //     console.log('Component did mount');
    // }
    
    // componentWillReceiveProps(nextProps) {
    //     console.log("Component will receive props");
        
    // }
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log()
    // }

    // componentWillUpdate(nextProps, nextState) {
    //     console.log(“Component will update")
    // }

    // componentDidUpdate(){
    //     console.log(Compenent did update)
    // }


    render() { 
       
        return ( 
            <div>
                <Father fatherStatus={this.props.grandpaStatus}/>
            </div>
         );
    }
}


export default Grandpa;
