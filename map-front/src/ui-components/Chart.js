import React from 'react';
import css from './chart.module.css';
import ChartElement from './ChartElement';
import Connection from './Connection';

function Chart({id, list, onClick}) {
  const WIDTH = 400;
  const HEIGHT = 200;
  const Radius = 90;

  const setElements = (list) => {
    const elements = [];
    const x0 = WIDTH / 2;
    const y0 = HEIGHT / 2;
    const root = list.find(item => item.level === 0);
    elements.push({
      id: root.id,
      name: root.name,
      level: root.level,
      x: x0,
      y: y0
    });
    const children = list.filter(item => item.level === 1);
    for (let i = 0; i < children.length; i++) {
      let item = children[i];
      let phi = i * Math.PI * 2 / children.length;
      const isLeftSide = (phi > Math.PI / 2) && (phi < 3 * Math.PI / 2);
      elements.push({
        id: item.id,
        name: item.name, 
        level: item.level, 
        x:x0 + Radius * Math.cos(phi),
        y:y0 + Radius * Math.sin(phi),
        phi, 
        px: x0,
        py: y0,
        isLeftSide
      })
    }
    return elements;
  }
  const elements = setElements(list);
  return (
    <div className={css.container}>
      <svg viewBox="0 0 400 200">
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
