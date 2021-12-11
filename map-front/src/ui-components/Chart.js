import React from 'react';
import css from './chart.module.css';
import ChartElement from './ChartElement';
import Connection from './Connection';
import Toolbar from './Toolbar';

function Chart({id, list, onClick, zoom, onZoomIn, onZoomOut, onToggleMoveMode, onMouseDown, onMouseMove, onMouseUp, x, y}) {
  const WIDTH = 400 / zoom;
  const HEIGHT = 200 / zoom;
  const Radius = 90;

  const getChildren = (list, parent, elements, dPhi) => {
    const children = list.filter(item => item.parentId === parent.id);
    for (let i = 0; i < children.length; i++) {
        let item = children[i];
        let phi = i * dPhi / children.length + parent.phi;
        const isLeftSide = (phi > Math.PI / 2) && (phi < 3 * Math.PI / 2);
        const element = {
            id: item.id,
            name: item.name,
            level: item.level,
            x: parent.x + Radius * Math.cos(phi),
            y: parent.y + Radius * Math.sin(phi),
            phi,
            px: parent.x,
            py: parent.y,
            isLeftSide
        };
        elements.push(element);
        getChildren(list, element, elements, dPhi / children.length);
    }
  };
  const setElements = (list) => {
    const elements = [];
    const x0 = WIDTH / 2;
    const y0 = HEIGHT / 2;
    const root = list.find(item => item.level === 0);
    const rootElement = {
        id: root.id,
        name: root.name,
        level: root.level,
        x: x0,
        y: y0,
        phi: 0
    };
    elements.push(rootElement);
    getChildren(list, rootElement, elements, 2 * Math.PI);
    return elements;
  };
  const elements = setElements(list);

  const zoomMenu =[
    { name: 'zoomIn', onClick: onZoomIn },
    { name: 'zoomOut', onClick: onZoomOut },
    { name: 'panTool', onClick: onToggleMoveMode }
  ];
  return (
    <div className={css.container}>
      <Toolbar list={zoomMenu} type="default" location={['horizontal', 'right', 'top']} />
      <svg 
        viewBox={`${x} ${y} ${WIDTH} ${HEIGHT}`}
        onMouseDown={(e) => onMouseDown(e)}
        onMouseMove={(e) => onMouseMove(e)}
        onMouseUp={(e) => onMouseUp(e)}
      >
        <Connection list={elements} />
        {
          elements.map(element => 
            (
              <ChartElement 
                key={element.id}
                phi={element.phi}
                onClick={onClick}
                id={element.id}
                level={element.level}
                isSelected={element.id === id}
                x={element.x} 
                y={element.y}
                px={element.px}
                py={element.py} 
                name={element.name} 
              />
            ))
        }
      </svg>
    </div>
  )
}

export default Chart
