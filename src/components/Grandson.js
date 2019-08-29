import React from 'react';

const Grandson= (props) => {

    return(
        <div>
          <h1>{props.grandsonStatus.year}</h1>
          <h1>{props.grandsonStatus.region}</h1>
          <h1>{props.grandsonStatus.alchool}</h1>
        </div>
    )
}

export default Grandson;