import React, { Component } from 'react';
import LifeCycle from './components/LifeCycle';
import SetState from './components/SetState';
import Jsx from './components/Jsx';
import ThisDemo from './components/ThisDemo';

import MaterialUI from './components/MaterialUI';

export default class App extends Component {

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
         {/* <h3>-------------------------------------</h3>
        <FunctionalComponent 
          comment='react真他妈牛逼'
          weather='sunnny'
        />
        <h3>-------------------------------------</h3>
        <h1>{welcome} {this.getName()} {this.time()}</h1>
        <h3>-------------------------------------</h3>
        <LifeCycle />
        <h3>-------------------------------------</h3> */}
        <SetState />
        <MaterialUI />
        <ThisDemo />
        {/* <h3>-------------------------------------</h3>
        <Jsx 
          shouldDisplay={true}
          data='hands boy'
        />
        <h3>-------------------------------------</h3> */}
      </div>
    );
  }
}


