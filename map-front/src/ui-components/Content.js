import React from 'react';
import css from './content.module.css';
import Toolbar from './Toolbar';

function Content({component}) {
  const actionMenu =[
    { name: 'add', onClick: () => alert('Add click!') },
    { name: 'delete', onClick: () => alert('Delete click!') }
  ];

  const zoomMenu =[
    { name: 'zoomIn', onClick: () => alert('Zoom in click!') },
    { name: 'zoomOut', onClick: () => alert('Zoom out click!') },
    { name: 'panTool', onClick: () => alert('Pan click!') }
  ];

  const viewMenu =[
    { name: 'viewList', onClick: () => alert('View click!') },
    { name: 'hive', onClick: () => alert('Hive click!') }
  ];
  return (
    <div className={css.container}>
      {component}
      <Toolbar list={actionMenu} type='alert' location={['vertical', 'right', 'bottom']} />
      <Toolbar list={zoomMenu} type='default' location={['horisontal', 'right', 'top']} />
      <Toolbar list={viewMenu} type='default' location={['vertical', 'left', 'bottom']} />
    </div>
  )
}

export default Content
