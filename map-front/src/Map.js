import React from 'react'
import MindMap from 'react-mindmap';

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
    </div>
  )
}

export default Map
