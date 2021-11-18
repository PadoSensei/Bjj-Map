import React from 'react'
import MindMap from 'react-mindmap';
//import { nodes, connections } from './my-map.json';
// const nodes = require("./nodes.json")
// const connections = require('./connections.json');

const nodes = [
  {
    "text": "python",
    "url": "http://www.wikiwand.com/en/Python_(programming_language)",
    "fx": -13.916222252976013,
    "fy": -659.1641376795345,
    "category": "wiki",
    "note": ""
  }
]

const connections = [
  {
    "source": "python",
    "target": "basics",
    "curve": {
      "x": -43.5535,
      "y": 299.545
    }
  }
]

function Map() {
  console.log(nodes)
  return (
    <div>
      <MindMap
        nodes={ {nodes} }
        connections={ {connections} }
      />
      <p>hello</p>
    </div>
  )
}

export default Map

// import { Component } from 'react';
// import { render } from 'react-dom';
 
// class Example extends Component {
//   render() {
//     return (
      
//     );
//   }
// }
 
// render(
//   <Example nodes={nodes} connections={connections} />,
//   document.getElementById('target')
// );