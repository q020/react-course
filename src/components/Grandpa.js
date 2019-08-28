import React, { Component } from 'react';
import Father, { Component } from './Father';

class Grandpa extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            wine:{
                region: 'Italy',
                year: '1997',
                alchool: '23%'
            }
         }
    }
    render() { 
        return ( 
            <div>
                <Father fatherStatus={this.state.wine}></Father>
            </div>
         );
    }
}

export default Grandpa;
 
