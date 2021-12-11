import React from 'react';
import css from './content.module.css';
import Toolbar from './Toolbar';

function Content({component}) {
  
  const zoomMenu =[
    { name: 'zoomIn', onClick: () => alert('Zoom in click!') },
    { name: 'zoomOut', onClick: () => alert('Zoom out click!') },
    { name: 'panTool', onClick: () => alert('Pan click!') }
  ];

  return (
    <div className={css.container}>
      {component}
      <Toolbar list={zoomMenu} type='default' location={['horisontal', 'right', 'top']} />
    </div>
  )
}

export default Content
