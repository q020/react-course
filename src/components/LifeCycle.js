import React, { Component } from 'react'

class Example extends Component {

   constructor(props) {
       super(props);
       this.state = {
           number: 10,
           date: '1999-9-7',
           name: 'Charlie'
       }
       console.log('1.------constructor started------')
         
   }

    componentWillMount () {    
       console.log('2.------ componentWillMount started------');
    }

    componentDidMount () {
       // we can update the view since the component has already been rendered
       console.log('3.------ componentDidMount started------');
       this.setState(preState => ({
            number: preState.number+100,
            date: preState.date+'nimama',
            name: 'Chocolate'
       }))


       setTimeout(() => {
        this.setState({
            name: 'Vanille'

        })
    
    }, 5000);
    }

    componentWillReceiveProps () {
       // the props of parent component will have changed
       console.log('4.------ componentWillReceiveProps started------');
    }

    shouldComponentUpdate (nextProps, nextState) {
        if(this.state.number !== nextState.number && 
            this.props.date_1 !==nextProps.date_1){
            return true;
        }
        if(this.state.name !== nextState.name &&
            this.props.name_1 !==nextProps.name_1){
            return true;
        }
       // here is the point where we can optimize
        console.log('5.------ shouldComponentUpdate started------');

        return true;
    }

    componentWillUpdate () {
        console.log('6.------ componentWillUpdate started------');
    }

    componentDidUpdate () {
        console.log('7.------ componentDidUpdate started------');
    }

    


    render() {

        console.log('the component has been rendered')
        return (
            <div>
                {/* <h3>Let us discover the LifeCycle of React component</h3> */}
                <h1>{this.props.time}</h1>
                <h2>{this.state.number}</h2>
                <h2>{this.state.date}</h2>
                <h2>{this.state.name}</h2>
                {/* <h3>Let us discover the LifeCycle of React component</h3> */}
            </div>
        )
    }
}


export default class LifeCycle extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            number_1: 10,
            date_1: '1999-9-7',
            name_1: 'Charlie'
        }

        setTimeout(() => {
            this.setState({
                date_1: '2019'
            })
        }, 3000);  

    }

    render() {
        const { number_1, date_1, name_1 } = this.state;

        return (
            <Example 
            number_1={number_1}
            date_1={date_1}
            name_1={name_1}
             />
        )
    }
}