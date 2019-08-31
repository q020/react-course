import React, { Component } from 'react';
import LifeCycle from './components/LifeCycle';
import SetState from './components/SetState';
import Jsx from './components/Jsx';
import ThisDemo from './components/ThisDemo';
import MaterialUI from './components/MaterialUI';
import Xiao from './components/Xiao';
<<<<<<< HEAD
import Xiao1 from './components/Xiao1';
import Grandpa from './components/Grandpa';
import Father from './components/Father';
import Son from './components/Son';
import Grandson from './components/Grandson'
=======
>>>>>>> 967b88f07f0942a2ec84cb026935fca69e499db8

export default class App extends Component { 

  constructor (props){
    super(props);
    this.state = {
      wine:{
        region:'Italy',
        year: '1997',
        alchool: '23%'
      }
    }
  }
 

  constructor(props) {
    super(props);

    this.state = {
      number: 2019,
      name: 'Frannie and Xiao',
      date: '2019-08'
    }
  }

  getName = () => {  // ES6  =>  arrow function
    return <h1>welcome to react </h1>
  }

  // getName();   

  // getName () {   // ES5 node.js   some mudules-> package Require.js
     
  // }

  time = () => {
    return Date().toString();
  }


  render() {

  const welcome = 'welcome to react'

  const FunctionalComponent = props => { // 静态展示型函数组件
    return <h1>无状态组件{props.comment}{props.weather}</h1>
  }   

    return (
      <div>
<<<<<<< HEAD
        <h3>-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-</h3>
          {/* <Xiao xiaoStatus ={this.state}></Xiao> */}
          
          <Grandpa grandpaStatus ={this.state.wine}/>

         <h3>-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-8-</h3>
        {/* <FunctionalComponent 
=======
      
        <Xiao appStatus={this.state}/>
         {/* <h3>-------------------------------------</h3>
        <FunctionalComponent 
>>>>>>> 967b88f07f0942a2ec84cb026935fca69e499db8
          comment='react真他妈牛逼'
          weather='sunnny'
        />
        <h3>-------------------------------------</h3>
        <h1>{welcome} {this.getName()} {this.time()}</h1>
        <h3>-------------------------------------</h3>
        <LifeCycle />
      
        <h3>-------------------------------------</h3> 
        <SetState />
        <MaterialUI />
        <ThisDemo />
         <h3>-------------------------------------</h3>
        <Jsx 
          shouldDisplay={true}
<<<<<<< HEAD
          data='hands boy' */}
        {/* <h3>-------------------------------------</h3> */}
=======
          data='hands boy'
        />
        <h3>-------------------------------------</h3> */}
>>>>>>> 967b88f07f0942a2ec84cb026935fca69e499db8
      </div>
    );
  }
}  