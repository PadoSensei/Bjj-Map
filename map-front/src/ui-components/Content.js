import React from 'react';
import css from './content.module.css';
import Toolbar from './Toolbar';

function Content() {
  return (
    <div className={css.container}>
      <Toolbar type='alert' location={['vertical', 'right', 'bottom']} />
      <Toolbar type='default' location={['horisontal', 'right', 'top']} />
      <Toolbar type='default' location={['vertical', 'left', 'bottom']} />
    </div>
  )
}

export default Content
