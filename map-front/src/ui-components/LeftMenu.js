import React from 'react';
import css from './leftmenu.module.css';
import Toolbar from './Toolbar';

function LeftMenu(props) {
  return (
    <div className={css.container}>
      <Toolbar type="primary" location={['vertical']} />
    </div>
  )
}

export default LeftMenu
